import Vue from "vue";
import IPApi from "./components/IPApi.vue";

Vue.config.productionTip = false;

new Vue({
  el: "#app-blogpost",
  render: (h: any) => h(IPApi)
});
