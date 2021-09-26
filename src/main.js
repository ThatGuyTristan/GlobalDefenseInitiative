import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import axios from "axios";

axios.defaults.baseURL =
  "https://globaldefenseinitiative-154c8-default-rtdb.firebaseio.com/";

Vue.config.productionTip = false;

Vue.prototype.$loggedIn = store.state.idToken

Vue.directive('loggedin', {
  inserted(el, binding, vnode){
    if(!this.$loggedIn){
      vnode.elm.parentElement.removeChild(vnode.elm)
    }
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
