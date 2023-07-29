import {
  Router,
  RouteRecordRaw,
  createRouter,
  createWebHistory,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () => import("@/pages/Detail.vue"),
  },
  {
    path: "/sell",
    name: "sell",
    component: () => import("@/pages/Sell.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/pages/NotFound.vue"),
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
