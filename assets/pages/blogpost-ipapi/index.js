import Vue from "vue";
import IPApi from "./IPApi.vue";

Vue.config.productionTip = false;

new Vue({
  el: "#app-blogpost",
  render: h => h(IPApi)
});
