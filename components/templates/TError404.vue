<template>
  <div class="max-w-4xl px-4 py-8 text-center sm:px-8 md:py-24 sm:py-12">
    <h1 class="text-xl font-mono font-black md:text-2xl xl:text-3xl">Page Not Found</h1>
    <nuxt-link to="/" class="text-blue-500 font-medium underline inline-block text-sm md:text-base">Go Home</nuxt-link>
    <div class="w-full mt-16">
      <img src="~/assets/img/404.svg" loading="lazy"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "TError404",
  props: {
    error: {
      required: true,
      type: Object
    }
  },
  computed: {
    statusCode() {
      return 404;
    }
  }
};
</script>
