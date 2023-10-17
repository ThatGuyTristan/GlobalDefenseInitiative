import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import EventHub from "vue-event-hub";
import { rtdbPlugin} from "vuefire"

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
