<template>
  <div class="flex flex-col">
    <a-header/>
    <Nuxt/>
    <a-working/>
    <a-footer/>
  </div>
</template>

<script>
import AFooter from "~/components/atoms/AFooter";
import AHeader from "~/components/atoms/AHeader";
import AWorking from "~/components/atoms/AWorking";

export default {
  name: "DefaultLayout",
  components: { AHeader, AFooter, AWorking }
};
</script>
