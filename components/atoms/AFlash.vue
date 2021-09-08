<template>
  <div class="rounded bg-yellow-100 border border-yellow-300 shadow-lg  mx-auto m-8 p-4 ">
    <div v-if="title" class="font-bold pb-2">{{ title }}</div>
    <div class="text-black tracking-tight">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "AFlash",
  props: {
    title: {
      type: String
    }
  }
}
</script>
