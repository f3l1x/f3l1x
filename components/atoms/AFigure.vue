<template>
  <figure class="my-4">
    <a v-bind="{href: link}">
      <img v-bind="attrs">
    </a>
    <figcaption v-if="title">
      <div class="text-gray-600">{{ title }}</div>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: "AFigure",
  props: {
    url: {
      type: String,
      required: true
    },
    title: {
      type: String
    },
    link: {
      type: String
    },
    width: {
      type: [String, Number]
    },
    height: {
      type: [String, Number]
    }
  },
  computed: {
    attrs() {
      const attrs = {
        src: this.url,
        lazy: "loading"
      };

      if (this.title) {
        attrs["title"] = this.title;
        attrs["alt"] = this.title;
      }

      if (this.width) {
        attrs["width"] = this.width;
      }

      if (this.height) {
        attrs["height"] = this.height;
      }

      return attrs;
    }
  }
}
</script>
