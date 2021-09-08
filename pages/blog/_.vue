<template>
  <section>
    <div class="max-w-4xl px-4 py-8 mx-auto text-center sm:px-8 md:py-16 sm:py-8">
      <h1 class="text-xl font-bold md:text-3xl xl:text-4xl">{{ article.title }}</h1>
    </div>
    <div class="max-w-4xl px-4 mx-auto text-center sm:px-8">
      <div class="flex w-full">
        <div aria-label="hidden" class="flex items-center flex-1 pr-2">
          <div class="w-full h-0 border-t border-gray-300"></div>
        </div>
        <div class="flex flex-wrap justify-center items-center flex-grow-0">
          <div class="inline-flex items-center py-1 px-3 text-xs md:text-base">
            <img src="https://obr.vercel.app/remixicon/business/calendar-2-fill/24/4299e1" class="mr-2 flex-grow-0">
            {{ article.date|date }}
          </div>
          <div class="inline-flex items-center py-1 px-3 text-xs md:text-base">
            <img src="https://obr.vercel.app/remixicon/system/time-line/24/4299e1" class="mr-2 flex-grow-0">
            {{ article.stats.text }}
          </div>
          <div class="inline-flex items-center py-1 px-3 text-xs md:text-base">
            <img src="https://obr.vercel.app/remixicon/communication/message-2-line/24/4299e1" class="mr-2 flex-grow-0">
            {{ article.stats.words }} words
          </div>
        </div>
        <div aria-label="hidden" class="flex items-center flex-1 pl-2">
          <div class="w-full h-0 border-t border-gray-300"></div>
        </div>
      </div>
    </div>

    <div class="max-w-4xl px-4 pt-8 mx-auto md:pt-16 sm:px-8">
      <nuxt-content :document="article"/>
    </div>

    <div class="max-w-4xl px-4 pb-8 mx-auto sm:px-8">
      <div class="mt-8">
        <client-only>
          <div id="disqus_thread"></div>
        </client-only>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogDetailPage",
  components: {
    "x-flash": () => import("@/components/atoms/AFlash"),
    "x-figure": () => import("@/components/atoms/AFigure"),
    "x-gallery": () => import("@/components/atoms/AGallery"),
    "x-tweet": () => import("@/components/atoms/ATweet"),
    "demo-ip-api": () => import("@/components/demo/IpApi"),
  },
  data: () => ({
    article: null
  }),
  async asyncData({ $content, params, error }) {
    const match = params.pathMatch.match(/(?<year>\d{4})\/(?<month>\d{2})\/(?<day>\d{2})\/(?<slug>.+)/);

    if (!match) {
      error({ statusCode: 404, message: "Article not found" });
      return;
    }

    const articles = await $content(`/articles/${match.groups.year}`)
      .where({ slug: match.groups.slug })
      .fetch();

    return { article: articles[0] };
  },
  head() {
    const head = {
      title: this.article.title,
      meta: [
        { hid: "description", name: "description", content: this.article.description },
        { hid: "og:image", name: "og:image", content: `https://oggo.vercel.app/felix/?t=${this.article.title}` },
        { hid: "og:image:width", name: "og:image:width", content: "2400" },
        { hid: "og:image:height", name: "og:image:height", content: "1254" }
      ]
    }

    // Disqus is enabled only on production
    if (!this.$nuxt.context.isDev) {
      head.script = [
        { hid: "disqus", type: "text/javascript", src: "//felixdevblog.disqus.com/embed.js", async: true, defer: true }
      ]
    }

    return head;
  }
};
</script>
