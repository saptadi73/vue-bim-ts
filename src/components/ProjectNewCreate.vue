<template>
  <div>
    <div
      class="grid w-[80vw] p-5 md:grid-cols-2 md:gap-4 bg-white border shadow-sm rounded-xl"
    >
      <!-- start Card  -->
      <div id="card1" class="">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800">Create New Project</h3>
          <div class="sm:flex rounded-lg shadow-sm mt-10">
            <span
              class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-100 text-sm font-Roboto text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg"
              >Project Name</span
            >
            <input
              id="nama"
              type="text"
              class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>
          <div class="sm:flex rounded-lg shadow-sm mt-5">
            <span
              class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-100 text-sm font-Roboto text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg"
              >Description</span
            >
            <input
              id="description"
              type="text"
              class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>
          <div class="sm:flex rounded-lg shadow-sm mt-5">
            <span
              class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-100 text-sm font-Roboto text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg"
              >Total Value</span
            >
            <input
              id="value"
              type="number"
              class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>
          <div class="sm:flex rounded-lg shadow-sm mt-5">
            <span
              class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-100 text-sm font-Roboto text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg"
              >BIM File</span
            >
            <input
              id="file"
              type="file"
              class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>
          <button class="text-white font-Roboto bg-slate-700 font-bold rounded-md mt-5 p-2 w-full shadow-lg">Simpan</button>
        </div>
        <div
          class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5"
        >
          <p class="mt-1 text-sm text-gray-500">Last updated 5 mins ago</p>
        </div>
      </div>

      <!-- start Card2  -->
      <div id="card2" class="">
        <div class="p-4 md:p-5">
          <h2 class="text-xl font-bold mb-2">Polygon GPS Data List</h2>
          <div class="flex items-center justify-between mb-4"><button
            @click="addInput"
            class="mt-4 bg-slate-500 text-white px-2 py-1 text-sm rounded"
          >
            +
          </button>
          <button
            @click="removeInput(index)"
            class="bg-red-500 text-white px-2 py-1 text-sm rounded"
          >
            x
          </button></div>
          
          <div v-for="(input, index) in inputs" :key="index" class="mb-2">
            <div class="sm:flex rounded-lg shadow-sm mt-2">
              <span
                class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-100 text-xs font-Roboto text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg"
                >GPS {{ index + 1 }}</span
              >
              <input
                :id="`gps-${index}`"
                type="text"
                v-model="inputs[index]"
                class="py-2 px-2 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>
          </div>
          <button class="text-white font-Roboto bg-slate-700 font-bold rounded-md mt-3 p-2 w-full shadow-lg">Simpan</button>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const inputs = ref<string[]>([""]); // Explicitly define as string array // Start with one input field
const index = ref<number|any>();

const addInput = () => {
  inputs.value.push(""); // Add a new empty input
};

function removeInput(index: number) {
  if (inputs.value.length > 1) {
    inputs.value.splice(index, 1);
  }
}
</script>

<style lang="scss" scoped></style>
