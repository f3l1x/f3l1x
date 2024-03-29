<template>
  <div>
    <div class="flex flex-col items-center max-w-4xl px-4 py-8 mx-auto md:py-16 sm:px-8 md:flex-row">
      <div class="text-xs md:text-sm md:pr-8 md:w-3/4">
        <h1 class="mb-2 text-lg font-light text-left uppercase md:text-2xl">Who am I</h1>
        <div class="mb-4 lg:mb-6">
          Opensource enthusiast and loving father. My daily job is to build <a class="text-blue-500 hover:underline" href="#work">web/desktop applications</a>
          where one needs a lot of <a class="text-blue-500 hover:underline" href="/oss/">tools and packages</a> these days.
          I do it <strong>constantly</strong> since 2010.
        </div>
        <div class="mb-4 lg:mb-6">
          It makes me so happy to see that my pet projects interest someone else and together we are building something special.
        </div>
        <div class="mb-4 lg:mb-6">
          I am currently quite busy doing my best around <a target="_blank" href="https://nette.org" class="text-blue-500 hover:underline">Nette Framework</a>
          [<a target="_blank" href="https://contributte.org" class="text-blue-500 hover:underline">contributte.org</a> & <a target="_blank" href="https://componette.org" class="text-blue-500 hover:underline">componette.org</a>].
          Taking care of
          <a-projects-count class="font-bold"/>
          libraries across various Github organizations.
        </div>
        <div class="mb-4 lg:mb-6">
          I am co-founder of <a target="_blank" href="https://akademie42.cz" class="text-blue-500 hover:underline">Akademie 42</a>,
          courses about Nette, Vue.js, TypeScript, API, Docker, Doctrine.
          Looking for <a target="_blank" href="https://www.akademie42.cz/verejna-skoleni" class="text-blue-500 hover:underline">public trainings</a>
          or <a target="_blank" href="https://www.akademie42.cz/firemni-skoleni" class="text-blue-500 hover:underline">in-house tranings?</a>
        </div>
        <div class="mb-4 lg:mb-6">
          Unfortunately, I can't only work on opensource. I am or was involved with folks from
          <a target="_blank" href="https://sledovanitv.cz" class="text-blue-500 font-bold underline">SledovaniTV</a>,
          <a target="_blank" href="https://tlapnet.cz" class="text-blue-500">Tlapnet</a>,
          <a target="_blank" href="https://ispalliance.cz" class="text-blue-500 hover:underline">ISPA</a>,
          <a target="_blank" href="https://ders.cz" class="text-blue-500 hover:underline">DERS</a>,
          <a target="_blank" href="https://digital.cz" class="text-blue-500 hover:underline">Digital Solutions</a>,
          <a target="_blank" href="https://comgate.cz" class="text-blue-500 hover:underline">Comgate</a>,
          <a target="_blank" href="https://aitom.cz" class="text-blue-500 hover:underline">AITOM</a>,
          <a target="_blank" href="https://beetfit.com" class="text-blue-500 hover:underline">BeetFit</a>,
          <a target="_blank" href="https://econea.cz" class="text-blue-500 hover:underline">Econea</a>,
          <a target="_blank" href="https://webtoad.cz" class="text-blue-500 hover:underline">WebToad</a>,
          <a target="_blank" href="https://designbeat.cz/" class="text-blue-500 hover:underline">DesignBeat</a>,
          <a target="_blank" href="https://balikonos.cz/" class="text-blue-500 hover:underline">Balikonos</a>,
          <a target="_blank" href="https://aira.cz/" class="text-blue-500 hover:underline">Aira</a>,
          Digital Bandits and a few other folks.
        </div>
        <div class="mb-4 lg:mb-6">
          At the end I work day and night for my own <span class="underline">nifty</span> geek company <a target="_blank" href="https://nx1.dev" class="text-blue-500 font-bold underline">NX1</a>.
        </div>
        <div class="mb-4 lg:mb-6 border border-dotted p-4 bg-gray-100 hover:bg-yellow-200 cursor-wait">
          You can reach me anytime <a href="mailto:milan@sulc.dev" class="text-blue-500 hover:underline">milan@sulc.dev</a> or <a class="text-blue-500 hover:underline" target="_blank" href="https://twitter.com/xf3l1x">@xf3l1x</a>.
        </div>
        <a class="mb-4 lg:mb-6 block border border-dotted p-4 bg-gray-100 hover:bg-green-200 cursor-pointer" href="mailto:milan@sulc.dev?subject=Hey!">
          Do you want to <strong>hire me</strong>? Splendid! I am always open for new <strong>challanges</strong>.
        </a>
      </div>
      <div class="flex items-center md:w-1/4 md:flex-col md:flex-wrap">
        <img src="https://cdn.f3l1x.io/felix.jpg?tr=w-256" loading="lazy" class="w-64 rounded-full border-4 border-gray-400">
      </div>
    </div>
    <div class="max-w-4xl px-4 py-8 mx-auto md:py-16 sm:px-8 md:flex-row">
      <h2 class="mb-2 text-lg font-light text-left uppercase md:text-2xl" id="work">INVOLVED IN</h2>
      <a-organizations/>
    </div>
  </div>
</template>

<script>
import AProjectsCount from "@/components/atoms/AProjectsCount.vue";
import AOrganizations from "@/components/atoms/AOrganizations.vue";

export default {
  name: "AboutPage",
  components: { AOrganizations, AProjectsCount },
  head() {
    return {
      title: "About Felix",
      meta: [
        { hid: "description", name: "description", content: "Opensource enthusiast and loving father. My daily job is to build web/desktop applications where one needs a lot of tools and packages these days. I do it since 2010." },
        { hid: "og:image", name: "og:image", content: `https://oggo.vercel.app/felix/?t=About%20Felix` },
        { hid: "og:image:width", name: "og:image:width", content: "2400" },
        { hid: "og:image:height", name: "og:image:height", content: "1254" }
      ]
    }
  }
}
</script>
