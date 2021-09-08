<template>
  <span>{{ count }}</span>
</template>

<script>
import projects from "@/lib/data/projects";

export default {
  name: "AProjectsCount",
  computed: {
    count() {
      return projects.length;
    }
  }
};
</script>
