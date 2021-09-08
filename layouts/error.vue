<template>
  <component :is="component" :error="error"/>
</template>

<script>
import TError404 from "@/components/templates/TError404";
import TError4xx from "@/components/templates/TError4xx";

export default {
  name: "ErrorLayout",
  layout: "default",
  components: {
    TError404,
    TError4xx
  },
  props: {
    error: {
      type: Object
    }
  },
  computed: {
    component() {
      return this.error && String(this.error.statusCode) === "404" ? "t-error404" : "t-error4xx";
    }
  },
  head() {
    return {
      title: `Error ${this.error.statusCode}`
    }
  }
}
</script>
