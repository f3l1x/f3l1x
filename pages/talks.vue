<template>
  <div>
    <div class="max-w-4xl px-4 py-8 mx-auto text-center sm:px-8 md:py-24 sm:py-12">
      <h1 class="text-xl uppercase font-black md:text-2xl xl:text-3xl">
        Talks
      </h1>
    </div>
    <div class="bg-gray-50">
      <div class="flex flex-col items-center max-w-4xl px-4 py-8 mx-auto md:pb-16 mb:pt-12 sm:px-8  md:flex-row">
        <div class="relative sm:px-12">
          <template v-for="group in talks">
            <div class="flex justify-center relative">
              <h2 class="relative z-10 font-light text-3xl md:text-3xl transform -translate-y-3 md:-translate-y-4 py-4">{{ group.group }}</h2>
            </div>
            <template v-for="talk in group.talks">
              <ul class="list-none m-0 mb-8 p-0 relative z-10">
                <li class="mb-8 bg-white shadow-md px-4 py-3 sm:flex sm:space-x-2">
                  <div class="flex-grow space-y-4">
                    <h3 class="text-xl font-bold">{{ talk.title }}</h3>
                    <div class="flex space-x-4">
                      <template v-for="link in talk.links">
                        <a :href="link.url" class="text-blue-500 font-medium underline hover:no-underline inline-block text-sm md:text-base flex space-x-1" target="_blank">
                          <img v-if="link.type === 'slides'" src="https://obr.vercel.app/remix/business/slideshow-2-fill/16" loading="lazy">
                          <span v-if="link.type === 'slides'">slides</span>
                          <img v-if="link.type === 'code'" src="https://obr.vercel.app/remix/development/code-box-line/16" loading="lazy">
                          <span v-if="link.type === 'code'">code</span>
                          <img v-if="link.type === 'event'" src="https://obr.vercel.app/remix/business/calendar-event-line/16" loading="lazy">
                          <span v-if="link.type === 'event'">event</span>
                          <img v-if="link.type === 'video'" src="https://obr.vercel.app/remix/media/video-line/16" loading="lazy">
                          <span v-if="link.type === 'video'">video</span>
                        </a>
                      </template>
                    </div>
                    <div class="flex space-x-2 text-gray-600">
                      <img src="https://obr.vercel.app/remix/business/calendar-2-fill/16" loading="lazy">
                      <span>{{ talk.date }}</span>
                      <template v-if="talk.action">
                        <span aria-hidden="true">·</span>
                        <a class="underline hover:no-underline" :href="talk.action.url" target="_blank">{{ talk.action.title }}</a>
                      </template>
                      <template v-if="talk.label">
                        <span aria-hidden="true">·</span>
                        <span class="font-bold">{{ talk.label }}</span>
                      </template>
                    </div>
                  </div>
                  <div class="mt-4 sm:mt-0 flex justify-center items-center">
                    <a target="_blank" :href="talk.cta">
                      <img class="w-full sm:w-auto object-contain sm:h-24" :src="talk.cover" loading="lazy">
                    </a>
                  </div>
                </li>
              </ul>
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import talks from "@/lib/data/talks";

export default {
  name: "TalksPage",
  computed: {
    talks() {
      return talks;
    }
  },
  head() {
    return {
      title: "Felix's Talks",
      meta: [
        { hid: "description", name: "description", content: "List of all my given talks" },
        { hid: "og:image", name: "og:image", content: `https://oggo.vercel.app/felix/?t=Felix's%20Talks` },
        { hid: "og:image:width", name: "og:image:width", content: "2400" },
        { hid: "og:image:height", name: "og:image:height", content: "1254" }
      ]
    }
  }
};
</script>
