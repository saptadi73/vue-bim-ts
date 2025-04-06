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

<script setup lang="ts">
import { ref, onMounted, watchEffect } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { BASE_URL } from "@/base.url.utils";
import type { ApexOptions } from "apexcharts";
import ApexCharts from "vue3-apexcharts";

// Register the component locally (or globally if preferred)
const apexchart = ApexCharts;
interface Task {
  name: string;
  startDate: Date;
  endDate: Date;
}

const tasksData: Task[] = [
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
const series = ref(
  JSON.parse(
    JSON.stringify([
      {
        name: "Tasks",
        data: tasksData.map((task) => ({
          x: task.name,
          y: [task.startDate.getTime(), task.endDate.getTime()],
        })),
      },
    ])
  )
);

const baseOptions: ApexOptions = {
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
const chartOptions = ref(JSON.parse(JSON.stringify(baseOptions)));

// If you need reactive updates, use watchEffect carefully
watchEffect(() => {
  // Any reactive updates here
  // Make sure to not modify series or options directly
  // Instead create new objects:
  const newOptions = { ...baseOptions };
  // Apply any dynamic changes
  chartOptions.value = newOptions;
});
</script>

<style lang="scss" scoped></style>
