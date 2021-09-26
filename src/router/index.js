import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/exterior/Home.vue";
import store from "../store";

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
      import(/* webpackChunkName: "dashboard" */ "../components/dashboard.vue"),
    beforeEnter(to, from, next) {
      if (store.state.idToken) {
        next();
      } else {
        next("/login");
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
