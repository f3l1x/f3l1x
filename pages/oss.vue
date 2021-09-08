<template>
  <div>
    <div class="flex flex-col items-center max-w-4xl pt-16 mx-auto sm:px-8">
      <div class="text-black w-full border-blue-500 border-l-4 bg-blue-50 px-6 py-4 text-blue-800 text-lg font-light">
        I find myself very happy to create &amp; shared libraries. They're helping me, so maybe you find them the same way.
        If that so, I'd really appreciate your feedback and little
        <a class="font-bold underline" href="https://github.com/sponsors/f3l1x">$$$</a> (via Github sponsoring).
        I am currently handling about
        <a-projects-count class="font-bold"/>
        libraries across various organizations.
      </div>
    </div>

    <div class="flex flex-col items-center max-w-4xl px-4 py-16 mx-auto sm:px-8 overflow-x-auto">
      <a-projects/>
    </div>
  </div>
</template>

<script>
import AProjectsCount from "@/components/atoms/AProjectsCount";
import AProjects from "@/components/atoms/AProjects";

export default {
  name: "OssPage",
  components: { AProjects, AProjectsCount },
  head() {
    return {
      title: "Felix's OSS",
      meta: [
        { hid: "description", name: "description", content: "Examples of my OSS repositories" },
        { hid: "og:image", name: "og:image", content: `https://oggo.vercel.app/felix/?t=Felix's%20OSS` },
        { hid: "og:image:width", name: "og:image:width", content: "2400" },
        { hid: "og:image:height", name: "og:image:height", content: "1254" }
      ]
    }
  }
}
</script>
