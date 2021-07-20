import { createWebHistory, createRouter } from "vue-router";
//Public Pages
import Home from "./components/Home.vue";
import Results from "./components/Results.vue";
import Standings from "./components/Standings.vue";
import Stats from "./components/Stats.vue";
import Clubs from "./components/Clubs.vue";

// Authentication Pages
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
// lazy-loaded
const Profile = () => import("./components/Profile.vue");
const BoardAdmin = () => import("./components/BoardAdmin.vue");
const BoardUser = () => import("./components/BoardUser.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/results",
    component: Results,
  },
  {
    path: "/standings",
    component: Standings,
  },
  {
    path: "/stats",
    component: Stats,
  },
  {
    path: "/clubs",
    component: Clubs,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  },
  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: BoardUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = [
    "/",
    "/login",
    "/register",
    "/home",
    "/results",
    "/standings",
    "/stats",
    "/clubs",
    "/admin",
  ];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;
