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
  },
  actions: {
    signUp({ commit, dispatch }, authData) {
      axiosAuth
        .post(`accounts:signUp?key=${this.state.key}`, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        })
        .then((resp) => {
          console.log(resp);
          commit("authUser", {
            token: resp.data.idToken,
            userId: resp.data.localId,
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
          commit("storeUser", users[0]);
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
          console.log(resp.data);
          commit("authUser", {
            token: resp.data.idToken,
            userId: resp.data.localId,
          });
          router.push("/dashboard");
        });
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  modules: {},
});
