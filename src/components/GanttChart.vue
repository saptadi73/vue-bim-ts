<template>
  <div>
    <apexchart
      type="rangeBar"
      height="450"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  setup() {
    // Task data
    const tasksData = [
      {
        name: "Task 1",
        startDate: new Date("2025-01-01"),
        endDate: new Date("2025-02-05"),
      },
      {
        name: "Task 2",
        startDate: new Date("2025-02-04"),
        endDate: new Date("2025-04-20"),
      },
      {
        name: "Task 3",
        startDate: new Date("2025-04-16"),
        endDate: new Date("2025-07-05"),
      },
      {
        name: "Task 4",
        startDate: new Date("2025-06-01"),
        endDate: new Date("2025-09-11"),
      },
      {
        name: "Task 5",
        startDate: new Date("2025-07-22"),
        endDate: new Date("2025-10-05"),
      },
    ];

    // Define the series (each task with a start and end date)
    const series = ref([
      {
        name: "Tasks",
        data: tasksData.map((task) => ({
          x: task.name,
          y: [task.startDate.getTime(), task.endDate.getTime()],
        })),
      },
    ]);

    const baseOptions = {
      chart: {
        type: "rangeBar",
        height: 450,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "50%",
        },
      },
      xaxis: {
        type: "datetime",
      },
      title: {
        text: "Project Gantt Chart",
        align: "center",
      },
    };

    // Chart configuration
    const chartOptions = ref({...baseOptions});

    // If you need reactive updates
    watchEffect(() => {
      // Any reactive updates here
      const newOptions = { ...baseOptions };
      // Apply any dynamic changes
      chartOptions.value = newOptions;
    });

    return {
      series,
      chartOptions,
    };
  },
};
</script>

<style scoped>
</style>