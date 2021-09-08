import Vue from "vue";

export const IsMounted = Vue.mixin({
  data: () => ({
    isMounted: false,
  }),
  mounted() {
    // @ts-ignore
    this.isMounted = true;
  }
})
