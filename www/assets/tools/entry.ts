import Vue from "vue";
import Tools from './components/Tools.vue';

Vue.config.productionTip = false;

new Vue({
    el: '#app-tools',
    render: h => h(Tools)
});
