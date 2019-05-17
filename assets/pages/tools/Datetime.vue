<template>
  <div>
    <table class="table table-striped table-sm table-bordered">
        <tbody>
            <tr>
                <th>Date</th>
                <td>{{ now.format('DD.M.YYYY') }}</td>
            </tr>
            <tr>
                <th>Day</th>
                <td>{{ now.format('DD') }}</td>
            </tr>
            <tr>
                <th>Month</th>
                <td>{{ now.format('MM') }}</td>
            </tr>
            <tr>
                <th>Year</th>
                <td>{{ now.format('YYYY') }}</td>
            </tr>
            </tbody>
        </table>
        <table class="table table-striped table-sm table-bordered">
            <tbody>
            <tr>
                <th>Time</th>
                <td>{{ now.format('HH:mm:ss') }}</td>
            </tr>
            <tr>
                <th>Hours</th>
                <td>{{ now.format('HH') }}</td>
            </tr>
            <tr>
                <th>Minutes</th>
                <td>{{ now.format('mm') }}</td>
            </tr>
            <tr>
                <th>Seconds</th>
                <td>{{ now.format('ss') }}</td>
            </tr>
            </tbody>
        </table>
        <table class="table table-striped table-sm table-bordered">
            <tbody>
            <tr>
                <th>Unix</th>
                <td>{{ now.unix() }}</td>
            </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
import Vue from "vue";
import * as dayjs from "dayjs";

export default Vue.extend({
  data: () => ({
    now: dayjs()
  })
});
</script>
