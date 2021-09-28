import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/exterior/Home.vue";
import store from "../store/index"

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
    path: "/ambassador",
    name: "AmbassadorDashboard",
    component: () =>
      import(/* webpackChunkName: "ambassador" */ "../views/ambassador/Dashboard.vue"),
    children: [
      {
        path: "dossiers",
        name: "AmbassadorDossiers",
        component: () => 
          import(/* webpackChunkName: "ambassador" */ "../views/ambassador/dossiers/Index.vue")
      },
      {
        path: "feedback",
        name: "AmbassadorFeedback",
        component: () => 
          import(/* webpackChunkName: "ambassador" */ "../views/ambassador/feedback/Index.vue")
      },
      {
        path: "reports",
        name: "AmbassadorReports",
        component: () => 
          import(/* webpackChunkName: "ambassador" */ "../views/ambassador/Reports.vue")
      }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to.path);
  console.log(store.getters.authenticated);
  const publicRoutePaths = ["/", "/about", "/contact", "/login"]

  if (!store.getters.authenticated && !publicRoutePaths.includes(to.path)){
    next( { name: "Login" })
  }else { 
    next() 
  }
})

export default router;
