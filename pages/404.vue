<template>
  <t-error404 :error="{}"/>
</template>

<script>
import TError404 from "@/components/templates/TError404";

export default {
  name: "Error404Page",
  components: { TError404 },
  nuxtI18n: false,
  head() {
    return {
      title: "Error 404"
    }
  }
}
</script>
