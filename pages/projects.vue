<template>
  <div>
    <div class="max-w-4xl px-4 py-8 mx-auto text-center sm:px-8 md:py-24 sm:py-12">
      <h1 class="text-xl uppercase font-black md:text-2xl xl:text-3xl">
        Projects
      </h1>
    </div>
    <div class="bg-gray-100">
      <div class="flex flex-col max-w-4xl px-4 py-8 mx-auto md:py-16 sm:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <div class="bg-white shadow-md m-4 hover:shadow-xl">
            <div class="flex flex-col min-h-full">
              <div class="flex items-center flex-grow px-6 pt-6">
                <div class="text-gray-700 text-3xl flex-grow">Juicy(fx)</div>
                <a target="_blank" href="https://github.com/juicyfx">
                  <img src="https://avatars.githubusercontent.com/juicyfx" alt="" loading="lazy" class="w-12">
                </a>
              </div>
              <div class="px-6 flex-grow text-center py-6">
                <p class="text-gray-600 text-sm">
                  Simple, isolated and still useful serverless lambdas for day-to-day usage. Generate images (badges, github), PDFs, Gravatar, OG tags or QR codes.
                </p>
              </div>
              <div class="px-5 py-3 border-t bg-gray-100 flex justify-center">
                <a class="rounded-full bg-gray-600 text-white shadow-sm px-4 py-1 leading-3 inline-flex mr-2 text-xs" href="https://github.com/juicyfx/juicy">juicy</a>
                <a class="rounded-full bg-gray-600 text-white shadow-sm px-4 py-1 leading-3 inline-flex mr-2 text-xs" href="https://github.com/juicyfx/vercel-php">vercel-php</a>
                <a class="rounded-full bg-gray-600 text-white shadow-sm px-4 py-1 leading-3 inline-flex mr-2 text-xs" href="https://github.com/juicyfx/vercel-examples">vercel-examples</a>
              </div>
            </div>
          </div>
          <div class="bg-white shadow-md m-4 hover:shadow-xl">
            <div class="flex flex-col min-h-full">
              <div class="flex items-center flex-grow px-6 pt-6">
                <div class="text-gray-700 text-3xl flex-grow">Dockette</div>
                <a target="_blank" href="https://github.com/dockette"><img src="https://avatars.githubusercontent.com/dockette" alt="" loading="lazy" class="w-12"></a>
              </div>
              <div class="px-6 flex-grow text-center py-6">
                <p class="text-gray-600 text-sm">
                  Production ready Docker images for web development. Heavilly used in continuous integrations. Support PHP 5.5-7.4 & Node.js 8-13.
                </p>
              </div>
              <div class="px-5 py-3 border-t bg-gray-100 flex justify-center">
                <a class="rounded-full bg-gray-600 text-white shadow-sm px-4 py-1 leading-3 inline-flex mr-2 text-xs" href="https://github.com/dockette/php">dockette/php</a>
                <a class="rounded-full bg-gray-600 text-white shadow-sm px-4 py-1 leading-3 inline-flex mr-2 text-xs" href="https://github.com/dockette/ci">dockette/ci</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsPage",
  head() {
    return {
      title: "Felix's Projects",
      meta: [
        { hid: "description", name: "description", content: "Examples of my highlighted projects" },
        { hid: "og:image", name: "og:image", content: `https://oggo.vercel.app/felix/?t=Felix's%20Projects` },
        { hid: "og:image:width", name: "og:image:width", content: "2400" },
        { hid: "og:image:height", name: "og:image:height", content: "1254" }
      ]
    }
  }
}
</script>
