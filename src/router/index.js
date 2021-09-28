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
    path: "/history",
    name: "PublicHistory",
    component: () => import(/*webpackChunkName: "about" */ "../views/exterior/History.vue")
  },
  {
    path: "/world_status",
    name: "PublicStatus",
    component: () => import(/*webpackChunkName: "contact" */ "../views/exterior/Status.vue")  
  },
  {
    path: "/dossiers",
    name: "PublicDossiers",
    component: () => import(/*webpackChunkName: "contact" */ "../views/exterior/Dossiers.vue")  
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/exterior/Login.vue"),
    beforeEnter: (to, from, next) => {
      if(store.getters.authenticated){
        next({ name: 'AmbassadorDashboard' })
      } else {
        next()
      }

    }
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
      },
      {
        path: "control_panel",
        name: "AdminControlPanel",
        component: () => import(/* webpackChunkName: "ambassador" */ "../views/admin/ControlPanel.vue")
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
  console.log(to.path)
  const publicRoutePaths = ["/", "/dossiers", "/history", "/world_status", "/login"]

  if (!store.getters.authenticated && !publicRoutePaths.includes(to.path)) {
    next( { name: "Login" })
  } else { 
    next() 
  }
})

export default router;
