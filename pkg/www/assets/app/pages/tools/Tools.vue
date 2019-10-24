<template>
  <div>
    <div class="col-md-6">
      <h2>Datetime</h2>
      <Datetime/>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Datetime from "./Datetime.vue"

export default Vue.extend({
  components: {
    Datetime
  }
});
</script>
