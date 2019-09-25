import Vue from "vue";
import Router from "vue-router";
import Program from "./views/Program.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "program",
      component: Program
    },
    {
      path: "/comment",
      name: "comment",
      component: () => import("./views/Comment.vue")
    },
    {
      path: "/details",
      name: "details",
      component: () => import("./views/Details.vue")
    }
  ],
  linkExactActiveClass:"active-class"
});
