import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./vuex/store";
import ECharts from "vue-echarts";
import echarts from "echarts";
import { Loading } from "element-ui";
Vue.use(Loading);
// import them from "echarts/theme/dark.js";
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
// ECharts.registerTheme("dark", them);
Vue.component("v-chart", ECharts);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
