<template>
  <section class="bg-gray-800 text-gray-400">
    <div class="flex flex-col items-stretch max-w-4xl px-4 py-12 mx-auto md:py-16 sm:px-8 overflow-hidden text-xs md:text-sm">
      <div class="flex mb-2">
        <h3 class="text-lg font-light uppercase md:text-2xl text-blue-300 flex-grow-0">Currently working</h3>
        <div aria-label="hidden" class="flex flex-1 items-center pl-4">
          <div class="border-t border-gray-600 w-full h-0"></div>
        </div>
      </div>
      <div>
        I am currently digging deeper to serverless stuf. Also trying to do my best around
        <a target="_blank" href="https://nette.org" class="text-gray-200 hover:underline">Nette</a>
        [<a target="_blank" href="https://contributte.org" class="text-gray-200 hover:underline">contributte.org</a> & <a target="_blank" href="https://componette.org" class="text-gray-300 hover:underline">componette.org</a>].
        Taking care of
        <a-projects-count class="font-bold text-gray-200"/>
        libraries across various Github organizations.
      </div>
    </div>
  </section>
</template>

<script>
import AProjectsCount from "./AProjectsCount";

export default {
  name: "AWorking",
  components: { AProjectsCount }
};
</script>
