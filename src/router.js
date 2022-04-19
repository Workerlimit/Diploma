import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Main from "./views/Main.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      // {
      //   path: "/library",
      //   name: "Library",
      //   meta: { 
      //     requiresAuth: true,
      //   },
      //   component: () =>
      //     import("@/views/Library.vue"),
      // },
      {
        path: "/profile",
        name: "Profile",
        meta: { 
          requiresAuth: true,
        },
        component: () =>
          import("@/components/Profile.vue"),
      },
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("@/components/auth/Login.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () =>
      import("@/components/auth/Signup.vue"),
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/signup', '/'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
    console.log(loggedIn)
    if (authRequired && !loggedIn) {
      next('/login');
    } else {
      next();
    }
  });
export default router;