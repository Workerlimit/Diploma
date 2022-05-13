import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
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
      {
        path: "/playlist/:id/details",
        name: "PLaylistDetail",
        meta: {
          requiresAuth: true,
        },
        props: true,
        component: () =>
          import("@/components/playlists/PlaylistDetail.vue"),
      },
      {
        path: "/albums/:id/details",
        name: "AlbumDetail",
        props: true,
        component: () =>
          import("@/components/albums/AlbumDetail.vue"),
      },
      {
        path: "/library",
        name: "Library",
        meta: {
          requiresAuth: true,
        },
        component: () =>
          import("@/views/Library.vue"),
      },
      {
        path: "/liked",
        name: "Liked",
        meta: {
          requiresAuth: true,
        },
        component: () =>
          import("@/components/liked/Liked.vue"),
      },
      {
        path: "/profile",
        name: "Profile",
        meta: {
          requiresAuth: true,
        },
        component: () =>
          import("@/views/Profile.vue"),
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
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: () =>
      import("@/views/ResetPassword.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/signup', '/', '/reset-password'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  if (authRequired && loggedIn == null) {
    return next({
      path: "/login",
    });
  } else {
    next();
  }
});
export default router;