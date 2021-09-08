<template>
  <div class="flex flex-col">
    <div class="max-w-4xl px-4 mx-auto sm:px-8 text-center md:py-32 xl:py-40 py-8 sm:py-16">
      <h1 class="text-xl md:text-2xl xl:text-3xl font-light font-mono tracking-tighter">
        Hey! I am <span class="text-blue-500">Milan Šulc</span>
        <span class="block lg:inline">better known as Felix</span>
        <span class="block font-bold">Engineering <img src="https://obr.vercel.app/remixicon/development/terminal-box-line/44/000000" loading="lazy" class="inline"> for living.</span>
      </h1>
    </div>
    <div class="bg-gray-200">
      <div class="flex flex-col items-stretch max-w-4xl px-4 py-12 mx-auto md:py-16 sm:px-8 overflow-hidden">
        <h2 class="mb-2 text-lg font-light uppercase md:text-2xl w-full">BLOG</h2>
        <a-articles :count="9"/>
      </div>
    </div>
  </div>
</template>

<script>
import AArticles from "@/components/atoms/AArticles.vue";

export default {
  name: "IndexPage",
  components: { AArticles },
  head() {
    return {
      meta: [
        { hid: "og:image", name: "og:image", content: `https://oggo.vercel.app/felix/?t=Milan%20Felix%20Šulc` },
        { hid: "og:image:width", name: "og:image:width", content: "2400" },
        { hid: "og:image:height", name: "og:image:height", content: "1254" }
      ]
    }
  }
};
</script>
