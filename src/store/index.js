import Vue from "vue";
import Vuex from "vuex";
import axiosAuth from "@/axios-auth";
import axios from "axios";
import router from "../router/";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    email: null,
    user: null,
    key: process.env.VUE_APP_FIREBASE_API_KEY,
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUser(state, user) {
      state.user = user;
    },
    deleteToken(state){
      state.idToken = null
      state.user = null
    }
  },
  actions: {
    signUp({ commit, dispatch }, authData) {
      axiosAuth
        .post(`accounts:signUp?key=${this.state.key}`, {
          email: authData.email,
          password: authData.password,
          ambassador: 1,
          returnSecureToken: true,
        })
        .then((resp) => {
          console.log(resp);
          commit("authUser", {
            token: resp.data.idToken,
            userId: resp.data.localId,
            email: authData.email
          });
          dispatch("storeUser", { authData });
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
        .then((resp) => console.log(resp))
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

          console.log(users);

          const user = users.filter(obj => {
            if(!obj.authData){ return }
            return obj.authData.email === state.email 
          })

          console.log(user);
          commit("storeUser", user);
        })
        .catch((err) => console.log(err));
    },
    login({ commit }, authData) {
      axiosAuth
        .post(`accounts:signInWithPassword?key=${this.state.key}`, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        })
        .then((resp) => {
          console.log("USER", resp.data);
          commit("authUser", {
            token: resp.data.idToken,
            userId: resp.data.localId,
            email: authData.email,
          });
          router.push({ name: "Dashboard" });
        });
    },
    logOut({ commit }) {
      console.log("Log out");
      commit("deleteToken")
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  modules: {},
});
