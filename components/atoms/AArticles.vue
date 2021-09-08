<template>
  <div class="flex flex-col">
    <div class="flex flex-wrap items-stretch -mx-6 -mt-2">
      <template v-for="article in articles">
        <div class="w-full sm:w-1/2 lg:w-1/3 px-2 my-2 flex">
          <div class="bg-white shadow-md px-4 py-3 w-full">
            <h3 class="mb-1">
              <nuxt-link :to="article|linker('article')" class="text-blue-500 font-medium hover:underline inline-block text-sm md:text-base"> {{ article.title }}</nuxt-link>
            </h3>
            <span class="text-2xs md:text-xs text-gray-500 mb-1 block">[ {{ article.date|date }} ]</span>
            <div class="text-xs md:text-sm">
              <nuxt-content :document="{ body: article.excerpt }"/>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="block mt-8 text-center">
      <nuxt-link to="/blog/" class="rounded-full bg-gray-100 py-3 px-6 text-xs md:text-sm uppercase font-medium">
        Show me <span class="text-blue-500">all posts</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AArticles",
  props: {
    count: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    articles: []
  }),
  async fetch() {
    this.articles = await this.$content("/articles", { deep: true })
      .only(["title", "date", "excerpt", "slug"])
      .sortBy("datetime", "desc")
      .limit(this.count)
      .fetch();
  }
};
</script>
