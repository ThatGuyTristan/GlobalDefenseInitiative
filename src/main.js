import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import EventHub from "vue-event-hub";
import { rtdbPlugin} from "vuefire"

// const firebaseConfig = {
//   apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
//   authDomain: "globaldefenseinitiative-154c8.firebaseapp.com",
//   databaseURL: "https://globaldefenseinitiative-154c8-default-rtdb.firebaseio.com",
//   projectId: "globaldefenseinitiative-154c8",
//   storageBucket: "globaldefenseinitiative-154c8.appspot.com",
//   messagingSenderId: "472326301037",
//   appId: "1:472326301037:web:6be0bc81ee4b080a312664"
// };

// firebase.initializeApp(firebaseConfig)

axios.defaults.baseURL =
  "https://globaldefenseinitiative-154c8-default-rtdb.firebaseio.com/";

Vue.config.productionTip = false;

Vue.use(EventHub);
Vue.use(rtdbPlugin)

Vue.directive('loggedin', {
  inserted(el, binding, vnode){
    if(!this.$loggedIn){
      vnode.elm.parentElement.removeChild(vnode.elm)
    }
  }
})

Vue.mixin({
  methods:{
    reset() { 
      Object.assign(this.$data, this.$options.data.call(this));
    },
    getFutureDate(){
      let timestamp = new Date(new Date().setFullYear(new Date().getFullYear() + 50))
      let arr = timestamp.toString().split(" ")
      arr = arr.slice(1, 4)
      arr = arr.join(" ")
      return arr
    }
  }
})

Vue.filter('capitalize', function (val) {
  if(!val) return ''
  val = val.toString()
  return val.charAt(0).toUpperCase() + val.slice(1)
})

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
