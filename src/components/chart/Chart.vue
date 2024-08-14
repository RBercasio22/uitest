<script setup>
import { ref, computed } from 'vue';
import Utils from './path-to-utils'; // Adjust the path as necessary

// Define reactive references
const DATA_COUNT = ref(7);
const NUMBER_CFG = ref({ count: DATA_COUNT.value, min: -100, max: 100 });

// Define labels and data for the chart
const labels = computed(() => Utils.months({ count: DATA_COUNT.value }));
const data = computed(() => ({
  labels: labels.value,
  datasets: [
    {
      label: 'Unfilled',
      fill: false,
      backgroundColor: Utils.CHART_COLORS.blue,
      borderColor: Utils.CHART_COLORS.blue,
      data: Utils.numbers(NUMBER_CFG.value),
    },
    {
      label: 'Dashed',
      fill: false,
      backgroundColor: Utils.CHART_COLORS.green,
      borderColor: Utils.CHART_COLORS.green,
      borderDash: [5, 5],
      data: Utils.numbers(NUMBER_CFG.value),
    },
    {
      label: 'Filled',
      backgroundColor: Utils.CHART_COLORS.red,
      borderColor: Utils.CHART_COLORS.red,
      data: Utils.numbers(NUMBER_CFG.value),
      fill: true,
    }
  ]
}));
</script>
