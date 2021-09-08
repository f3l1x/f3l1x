<template>
  <section>
    <template v-for="year in Object.keys(articles).reverse()">
      <div class="flex flex-col items-stretch max-w-4xl px-4 py-12 mx-auto md:py-16 sm:px-8 overflow-hidden">
        <h2 class="mb-2 text-lg font-light uppercase md:text-2xl w-full">{{ year }}</h2>
        <div class="flex flex-wrap items-stretch -mx-6 -mt-2">
          <template v-for="article in articles[year]">
            <div class="w-full sm:w-1/2 lg:w-1/3 px-2 my-2 flex">
              <div class="bg-white shadow-md px-4 py-3 w-full">
                <h3 class="mb-1">
                  <nuxt-link :to="article|linker('article')" class="text-blue-500 font-medium hover:underline inline-block text-sm md:text-base">{{ article.title }}</nuxt-link>
                </h3>
                <span class="text-2xs md:text-xs text-gray-500 mb-1 block">[ {{ article.date|date }} ]</span>
                <div class="text-xs md:text-sm">
                  <nuxt-content :document="{ body: article.excerpt }"/>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </template>
  </section>
</template>

<script>
import { groupBy, orderBy } from "lodash";

export default {
  name: "BlogPage",
  data: () => ({
    articles: []
  }),
  async asyncData({ $content }) {
    const data = await $content("/articles", { deep: true }).fetch();

    const articles = groupBy(
      orderBy(data, ["datetime"], ["desc"]),
      "group"
    );

    return { articles };
  },
  head() {
    return {
      title: "Felix's DevBlog",
      meta: [
        { hid: "description", name: "description", content: "Latest snippets of my devblog" },
        { hid: "og:image", name: "og:image", content: `https://oggo.vercel.app/felix/?t=Felix%20DevBlog` },
        { hid: "og:image:width", name: "og:image:width", content: "2400" },
        { hid: "og:image:height", name: "og:image:height", content: "1254" }
      ]
    }
  }
};
</script>
