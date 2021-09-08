<template>
  <div class="flex flex-wrap">
    <template v-for="organization in organizations">
      <div class="m-4">
        <a :href="`https://github.com/${organization.webalize}`" target="_blank">
          <img loading="lazy" :src="`https://avatars.githubusercontent.com/${organization.webalize}`" class="w-20 md:w-24">
        </a>
      </div>
    </template>
  </div>
</template>

<script>
import organizations from "@/lib/data/organizations";

export default {
  name: "AOrganizations",
  computed: {
    organizations() {
      return organizations;
    }
  }
};
</script>
