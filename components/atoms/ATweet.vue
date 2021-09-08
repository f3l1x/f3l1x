<template>
  <a class="my-4 block" v-bind="linkAttrs">
    <img class="mx-auto" v-bind="imgAttrs">
  </a>
</template>

<script>
export default {
  name: "ATweet",
  props: {
    id: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: true
    },
    width: {
      type: [String, Number]
    },
    height: {
      type: [String, Number]
    }
  },
  computed: {
    imgAttrs() {
      const url = new URL(`https://socky.vercel.app/twitter/tweet/${this.id}`);

      if (this.width) {
        url.searchParams.append("width", this.width);
      }

      if (this.height) {
        url.searchParams.append("height", this.height);
      }

      return {
        src: url.toString(),
        alt: this.user,
        title: this.user,
        lazy: "loading"
      }
    },
    linkAttrs() {
      return {
        target: "_blank",
        img: `https://twitter.com/${this.user}/status/${this.id}`
      }
    }
  }
}
</script>
