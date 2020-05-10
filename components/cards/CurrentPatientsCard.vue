<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('現在患者数')"
      :title-id="'current-patients'"
      :chart-id="'time-bar-chart-current-patients'"
      :chart-data="currentPatientsGraph"
      :date="currentPatients.last_update"
      :unit="$t('人')"
      :url="'http://open-data.pref.hyogo.lg.jp/?page_id=141'"
    />
  </v-col>
</template>

<script>
import currentPatients from '@/data/current_patients.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    // 現在患者数グラフ
    const currentPatientsGraph = formatGraph(currentPatients.data)

    const data = {
      currentPatients,
      currentPatientsGraph
    }
    return data
  }
}
</script>
