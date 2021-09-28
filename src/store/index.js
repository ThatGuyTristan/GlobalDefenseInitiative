import Vue from "vue";
import Vuex from "vuex";
import axiosAuth from "@/axios-auth";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    email: null,
    displayName: null,
    user: null,
    admin: false,
    key: process.env.VUE_APP_FIREBASE_API_KEY,
  },
  mutations: {
    authUser(state, userData) {
      console.log("US", userData)
      state.idToken = userData.token;
      state.userId = userData.userId;
      state.displayName = userData.displayName
    },
    storeUser(state, user) {
      state.user = user;
    },
    deleteToken(state){
      state.idToken = null
      state.user = null
    },
    setAdmin(state){
      state.admin = true
    }
  },
  actions: {
    setLogoutTimer({ commit }, expirationTime) {
      setTimeout(() => {
        commit('deleteToken')
      }, expirationTime * 1000)
    },
    signUp({ commit, dispatch }, authData) {
      axiosAuth
        .post(`accounts:signUp?key=${this.state.key}`, {
          email: authData.email,
          password: authData.password,
          displayName: authData.displayName,
          returnSecureToken: true,
        })
        .then((resp) => {
          console.log("SignUp data", resp.data);
          commit("authUser", {
            token: resp.data.idToken,
            userId: resp.data.localId,
            email: authData.email
          });

          const now = new Date()
          const expirationDate = new Date(now.getTime() + (resp.data.expiresIn * 1000))

          localStorage.setItem('token', resp.data.idToken)
          localStorage.setItem('expirationDate', expirationDate)
          localStorage.setItem('userId', resp.data.localId)
          dispatch("storeUser", { authData });
          dispatch('setLogoutTimer', resp.data.expiresIn)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    storeUser({ commit, state }, userData) {
      if (!state.idToken) {
        return;
      }
      axios
        .post(`/users.json?auth=${state.idToken}`, userData)
        .then((resp) => console.log("Insert into Users table:", resp))
        .catch((err) => console.log(err));
    },

    findUser({ commit, state }) {
      if (!state.idToken) {
        return;
      }
      axios
        .get(`/users.json?auth=${state.idToken}`)
        .then((resp) => {
          console.log("res", resp);
          const data = resp.data;
          const users = [];

          for (let key in data) {
            const user = data[key];
            users.push(user);
          }

          const user = users[users.length - 1]

          console.log("User here:", user);
          commit("storeUser", user);
          return user
        })
        .catch((err) => console.log(err));
    },

    login({ commit, dispatch }, authData) {
      axiosAuth
        .post(`accounts:signInWithPassword?key=${this.state.key}`, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        })
        .then((resp) => {
          console.log("LOGIN USER", resp);
          commit("authUser", {
            token: resp.data.idToken,
            userId: resp.data.localId,
            email: resp.data.email,
            name: resp.data.displayName
          });

          const now = new Date()
          const expirationDate = new Date(now.getTime() + (resp.data.expiresIn * 1000))

          localStorage.setItem('token', resp.data.idToken)
          localStorage.setItem('userId', resp.data.localId)
          localStorage.setItem('expirationDate', expirationDate)

          dispatch('setLogoutTimer', resp.data.expiresIn)
        })
        .catch(error => console.log(error));
    },

    tryAutoLogin({ commit }) {
      const token = localStorage.getItem('token')
      if(!token){
        return;
      }
      const expirationDate = localStorage.getItem('expirationDate')
      const now = new Date() 

      if(now >= expirationDate) {
        return;
      }

      const userId = localStorage.getItem('userId')
      commit('authUser', {
        token: token,
        userId: userId
      })
    },

    logOut({ commit }) {
      commit("deleteToken")
      localStorage.clear;
    },

    setAdmin({ commit }) {
      commit("setAdmin")
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    ambassador(state){
      return state.ambassador
    },
    authenticated(state){
      return state.idToken != null
    },
    adminL(state) {
      return state.admin
    }
  },
  modules: {},
});
