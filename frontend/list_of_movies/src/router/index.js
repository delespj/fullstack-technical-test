import Vue from "vue";
import VueRouter from "vue-router";
import ListOfMoviesView from "@/views/ListOfMovies.vue";
import TodoItemsView from "@/views/TodoItems.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ListOfMovies",
    component: ListOfMoviesView
  },
  {
    path: "/todo-items",
    name: "TodoItems",
    component: TodoItemsView
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
