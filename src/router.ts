import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: () => import("./Views/Home.vue") },
  { path: "/form", name: "Form", component: () => import("./Views/Form.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;