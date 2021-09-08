<template>
  <div class="grid grid-cols-projects gap-4">
    <template v-for="project in projects">
      <div class="w-56 truncate">
        <a class="underline hover:no-underline" :href="`https://github.com/${project.org}/${project.name}`">{{ project.org }}/{{ project.name }}</a>
      </div>
      <div class="truncate px-4">
        {{ project.description | emojify }}
      </div>
      <div class="w-12 flex items-center self-start justify-end">
        {{ project.stars }}
        <img class="inline ml-1 w-4" src="https://obr.vercel.app/remixicon/system/star-fill/24/000000">
      </div>
    </template>
  </div>
</template>

<script>
import { orderBy } from "lodash";
import projects from "@/lib/data/projects";

export default {
  name: "AProjects",
  computed: {
    projects() {
      return orderBy(projects, ["stars"], ["desc"]);
    }
  }
};
</script>
