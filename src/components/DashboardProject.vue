<template>
    <div>
      <div
        class=" bg-white border shadow-sm rounded-xl ">
        <!-- start Card  -->
        <div id="card1" class="">
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800 ">
              Gantt Chart
            </h3>
            <GanttChart/>
            <a
              class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none "
              href="#"
            >
              Gantt Chart
              <svg
                class="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </a>
          </div>
          <div
            class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 "
          >
            <p class="mt-1 text-sm text-gray-500 ">
              Last updated 5 mins ago
            </p>
          </div>
        </div>
  
        
  
      </div>
      <div
        class=" bg-white border shadow-sm rounded-xl ">
        <ProgressChart/>
    </div>
    </div>
  </template>
  
  <script setup>
import GanttChart from './GanttChart.vue';
import ProgressChart from './ProgressChart.vue';

</script>
  
  <style lang="scss" scoped></style>
  