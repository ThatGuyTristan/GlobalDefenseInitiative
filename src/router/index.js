import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/exterior/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/*webpackChunkName: "about" */ "../views/exterior/About.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import(/*webpackChunkName: "contact" */ "../views/exterior/Contact.vue")  
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/exterior/Login.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../components/dashboard.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   const store = require('../store/index')
//   console.log("pspspsp", store.getters.auth);
//   if (!Vue.$store.getters.auth){
//     next( { name: "Login" })
//   }else { 
//     next() 
//   }
// })

export default router;
