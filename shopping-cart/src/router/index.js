import Vue from "vue";
import VueRouter from "vue-router";
import ShoppingCartVue from "../components/ShoppingCart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "Cart"
    }
  },
  {
    path: "/cart",
    name: "Cart",
    component: ShoppingCartVue
  },
  {
    path: "/todo",
    name: "Todo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Todos.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
