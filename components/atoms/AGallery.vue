<template>
  <div class="w-full flex flex-wrap items-stretch justify-center">
    <template v-for="image in images">
      <a :href="image.img" target="_blank" class="md:w-64 md:h-64 border-2 rounded-lg flex items-center justify-center mx-2 my-4 p-2">
        <img loading="lazy" :title="image.title" :src="image.img" class="max-h-full max-w-full rounded">
      </a>
    </template>
  </div>
</template>

<script>
import gallery from "@/lib/data/galleries";

export default {
  name: "AGallery",
  props: {
    id: {
      type: String,
      required: true
    },
    size: {
      type: [String, Number],
      default: 64
    }
  },
  computed: {
    images() {
      return gallery[this.id];
    }
  }
}
</script>
