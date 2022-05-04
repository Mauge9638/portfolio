const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        name: "PageHome",
        component: () => import("../pages/PageHome.vue"),
      },
    ],
  },
  {
    path: "/about",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        name: "PageAbout",
        path: "",
        component: () => import("../pages/PageAbout.vue"),
      },
    ],
  },
];

export default routes;
