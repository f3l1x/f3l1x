<template>
  <div>
    <table>
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
    <table>
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
    <table>
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
import dayjs from "dayjs";

export default {
  data: () => ({
    now: dayjs()
  })
};
</script>
