<template>
  <div class="border-2 border-gray-600 border-dotted p-4">
    <div class="flex">
      <input type="text" class="bg-white focus:outline-none focus:outline-none border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mr-2" v-model="ip" placeholder="1.1.1.1">
      <button class="bg-green-500 hover:bg-green-700 hover:online-none focus:outline-none text-white font-bold py-2 px-4 rounded mr-2 whitespace-nowrap" @click="onMyIP">My IP</button>
      <button class="bg-blue-500 hover:bg-blue-700 hover:online-none focus:outline-none text-white font-bold py-2 px-4 rounded" @click="onSearch">Search</button>
    </div>
    <div v-if="fetching" class="text-center">
      <div class="spinner-grow"></div>
    </div>
    <template v-if="result">
      <hr>
      <ul>
        <li>
          IP Address
          <strong>{{ result.ip }}</strong>
        </li>
        <li>
          City
          <strong>{{ result.city }}</strong>
        </li>
        <li>
          Region
          <strong>{{ result.region }}</strong>
        </li>
        <li>
          Country
          <strong>{{ result.country }}</strong>
        </li>
        <li>
          Postal Code
          <strong>{{ result.postal }}</strong>
        </li>
        <li>
          Latitude / Longitude
          <strong>{{ result.latitude }} / {{ result.longitude }}</strong>
        </li>
        <li>
          Time Zone
          <strong>{{ result.timezone }}</strong>
        </li>
        <li>
          Calling Code
          <strong>{{ result.country_calling_code }}</strong>
        </li>
        <li>
          Currency
          <strong>{{ result.currency }}</strong>
        </li>
        <li>
          Languages
          <strong>{{ result.languages }}</strong>
        </li>
        <li>
          ASN
          <strong>{{ result.asn }}</strong>
        </li>
        <li>
          Org
          <strong>{{ result.org }}</strong>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  name: "IpApi",
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
