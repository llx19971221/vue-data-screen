import Vue from "vue";
import Router from "vue-router";

const DataScreen = () =>
  import(/* webpackChunkName: "dataScreen" */ "@p/dataScreen/DataScreen.vue");
const Test = () =>
  import(/* webpackChunkName: "dataScreen" */ "@p/dataScreen/Test.vue");
Vue.use(Router);
export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dataScreen",
      component: DataScreen
    },
    {
      path: "/testPath",
      component: Test
    }
  ]
  // routes: [
  //   {
  //     path: "/",
  //     name: "",
  //     component:
  //   },
  //   {
  //     path: "/",
  //     name: "",
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () =>
  //       import(/* webpackChunkName: "about" */ "./views/About.vue")
  //   }
  // ]
});
