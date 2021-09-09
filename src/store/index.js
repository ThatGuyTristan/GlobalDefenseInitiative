import Vue from "vue";
import Vuex from "vuex";
import axios from "@/axios-auth";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    key: process.env.VUE_APP_FIREBASE_API_KEY
  },
  mutations: {
    authUser(state, userData){
      state.idToken = userData.token
      state.userId = userData.userId
    }
  },
  actions: {
    signUp({commit}, authData){
      axios.post(`accounts:signUp?key=${this.state.key}`,{ 
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then((resp) => {
          console.log(resp)
          commit('authUser', { 
            token: resp.data.idToken,
            userId: resp.data.localId
          })
      })
      .catch((err) => {
          console.log(err)
      })
    },
    login({commit}, authData){
      axios.post(`accounts:signInWithPassword?key=${this.state.key}`, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then((resp) => {
          console.log(resp.data)
          commit('authUser', { 
            token: resp.data.idToken,
            userId: resp.data.localId
          })
        })

    }
  },
  modules: {},
});
