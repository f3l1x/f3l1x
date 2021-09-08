<template>
  <div class="max-w-4xl px-4 py-8 mx-auto md:py-16 sm:px-8 md:flex-row">
    <h1 class="mb-2 text-lg font-light text-left uppercase md:text-2xl">Funding</h1>
    <div class="mb-4 lg:mb-6">
      Opensource enthusiast and loving father. My daily job is to build
      <nuxt-link to="/about" class="text-blue-500 hover:underline">web/desktop applications</nuxt-link>
      where one needs a lot of
      <nuxt-link to="/oss" class="text-blue-500 hover:underline">tools and packages</nuxt-link>
      these days.
      I do it <strong>constantly</strong> since 2010.
    </div>
    <div class="mb-4 lg:mb-6">
      I find myself very happy to create &amp; shared libraries. They're helping me, so maybe you find them the same way.
      If that so, I'd really appreciate your feedback and little <a class="font-bold underline" href="https://github.com/sponsors/f3l1x">$$$</a> (via Github sponsoring).
      I am currently handling about
      <a-projects-count class="font-bold"/>
      libraries across various organizations.
    </div>
    <div class="mb-4 lg:mb-6">
      Thank you very much.
    </div>
    <div class="mb-4 lg:mb-6">
      <a class="font-bold underline" href="https://github.com/sponsors/f3l1x">github.com/sponsors/f3l1x</a>
    </div>
  </div>
</template>

<script>
import AProjectsCount from "@/components/atoms/AProjectsCount.vue";

export default {
  name: "FundingPage",
  components: { AProjectsCount },
  head() {
    return {
      title: "Felix's OSS",
      meta: [
        { hid: "description", name: "description", content: "Examples of my OSS repositories" },
        { hid: "og:image", name: "og:image", content: `https://oggo.vercel.app/felix/?t=Felix's%20Funding` },
        { hid: "og:image:width", name: "og:image:width", content: "2400" },
        { hid: "og:image:height", name: "og:image:height", content: "1254" }
      ]
    }
  }
}
</script>
