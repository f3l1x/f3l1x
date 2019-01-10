<template>
  <div class="mx-auto ipapi">
    <p>Toto je jednoduchá komponenta napsaná ve Vue.js.</p>
    <div class="input-group mb-3">
      <input type="text" class="form-control" v-model="ip" placeholder="1.1.1.1">
      <div class="input-group-append">
        <button class="btn btn-outline-success" @click="onMyIP">My IP</button>
        <button class="btn btn-info" @click="onSearch">Search</button>
      </div>
    </div>
    <div v-if="fetching" class="text-center">
      <div class="spinner-grow"></div>
    </div>
    <template v-if="result">
      <hr>
      <ul>
        <li>
          IP Address
          <strong>{{result.ip}}</strong>
        </li>
        <li>
          City
          <strong>{{result.city}}</strong>
        </li>
        <li>
          Region
          <strong>{{result.region}}</strong>
        </li>
        <li>
          Country
          <strong>{{result.country}}</strong>
        </li>
        <li>
          Postal Code
          <strong>{{result.postal}}</strong>
        </li>
        <li>
          Latitude / Longitude
          <strong>{{result.latitude}} / {{result.longitude}}</strong>
        </li>
        <li>
          Time Zone
          <strong>{{result.timezone}}</strong>
        </li>
        <li>
          Calling Code
          <strong>{{result.country_calling_code}}</strong>
        </li>
        <li>
          Currency
          <strong>{{result.currency}}</strong>
        </li>
        <li>
          Languages
          <strong>{{result.languages}}</strong>
        </li>
        <li>
          ASN
          <strong>{{result.asn}}</strong>
        </li>
        <li>
          Org
          <strong>{{result.org}}</strong>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  data: () => ({
    ip: "8.8.8.8",
    result: null,
    fetching: null
  }),
  methods: {
    onSearch() {
      this.process(this.ip);
    },
    async onMyIP() {
      await this.process();
      this.ip = this.result.ip;
    },
    async process(ip) {
      this.fetching = true;
      if (ip) {
        const response = await fetch(`https://ipapi.co/${this.ip}/json/`);
        this.result = await response.json();
      } else {
        const response = await fetch(`https://ipapi.co/json/`);
        this.result = await response.json();
      }
      this.fetching = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.ipapi {
  padding: 20px;
  margin: 20px;
  border: 1px dotted #cdcdcd;
}
@media only screen and (min-width: 768px) {
  .ipapi {
    width: 60%;
  }
}
</style>
