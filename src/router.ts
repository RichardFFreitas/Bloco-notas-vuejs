import { createRouter, createWebHistory } from "vue-router";
import Home from "./Views/Home.vue";
import Form from "./Views/Form.vue";
import Notes from "./Views/Notes.vue";


const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/form", name: "Form", component: Form },
  { path: "/notes", name: "Notes", component: Notes }
];



const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;
