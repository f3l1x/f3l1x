<template>
  <header class="relative z-20">
    <div class="relative z-40 flex items-stretch justify-between max-w-4xl mx-auto">
      <div class="relative z-40 flex justify-between w-full bg-white md:bg-transparent md:w-auto">
        <nuxt-link to="/" class="flex-grow-0 w-12 py-2 pl-4 sm:pl-8 sm:w-16 md:w-20 md:py-4">
          <img src="/img/f3l1x.png" loading="lazy" alt="Milan Felix Šulc">
        </nuxt-link>
      </div>
      <button aria-label="Menu trigger" class="relative z-50 flex items-center px-4 py-3 text-gray-700 bg-white outline-none sm:px-8 md:hidden focus:outline-none hover:text-blue-500" @click="menu = !menu">
        <img src="https://obr.vercel.app/remixicon/system/menu-line/32/4a5568" alt="" loading="lazy" class="w-6" :class="{ 'hidden': menu }">
        <img src="https://obr.vercel.app/remixicon/system/close-line/32/4a5568" alt="" loading="lazy" class="w-6" :class="{ 'hidden': !menu }">
      </button>
      <div class="absolute bottom-0 left-0 z-30 flex-1 w-full h-0 md:relative md:w-auto md:h-auto md:flex">
        <div class="flex flex-col w-full bg-white shadow md:bg-transparent md:flex-row transform transition transition-all duration-300 md:translate-y-0 md:shadow-none" :class="{ '-translate-y-full': !menu }">
          <ul class="flex flex-col items-center justify-between flex-1 px-4 text-xs uppercase lg:text-sm md:flex-row md:px-24">
            <li>
              <nuxt-link to="/blog/" class="block p-2">Blog</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/oss/" class="block p-2">OSS</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/projects/" class="block p-2">Projects</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/talks/" class="block p-2">Talks</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about/" class="block p-2">About</nuxt-link>
            </li>
          </ul>
          <div class="flex items-center justify-center flex-grow-0 px-4 py-2">
            <a target="_blank" href="https://twitter.com/xf3l1x" class="inline-flex px-4 py-2 opacity-50 hover:opacity-100"><img src="https://obr.vercel.app/remixicon/logos/twitter-fill/24/718096" loading="lazy" class="w-4 md:w-6"></a>
            <a target="_blank" href="/blog/feed.xml" class="inline-flex px-4 py-2 opacity-50 hover:opacity-100"><img src="https://obr.vercel.app/remixicon/device/rss-fill/24/718096" loading="lazy" class="w-4 md:w-6"></a>
            <a target="_blank" href="https://github.com/f3l1x" class="inline-flex px-4 py-2 opacity-50 hover:opacity-100"><img src="https://obr.vercel.app/remixicon/logos/github-fill/24/718096" loading="lazy" class="w-4 md:w-6"></a>
          </div>
        </div>
      </div>
    </div>
    <div aria-label="hidden" class="absolute bottom-0 left-0 z-20 hidden w-full border-b md:block"></div>
    <div aria-label="hidden" class="fixed left-0 hidden w-full h-screen md:hidden z-60" @click="menu = !menu" :class="{ 'hidden': menu }"></div>
  </header>
</template>

<script>
export default {
  name: "OHeader",
  data: () => ({
    menu: false
  })
};
</script>
