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
              >Start Date</span
            >
            <input
              id="start_date"
              type="date"
              class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>
          <div class="sm:flex rounded-lg shadow-sm mt-5">
            <span
              class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-100 text-sm font-Roboto text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg"
              >End Date</span
            >
            <input
              id="end_date"
              type="date"
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
          <button
            class="text-white font-Roboto bg-slate-700 font-bold rounded-md mt-5 p-2 w-full shadow-lg"
          >
            Simpan
          </button>
        </div>
        <div
          class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5"
        >
          <p class="mt-1 text-sm text-gray-500">Project Detail</p>
        </div>
      </div>

      <!-- start Card2  -->
      <div id="card2" class="">
        <div class="p-4 md:p-5">
          <h2 class="text-xl font-bold mb-2">Polygon GPS Data List</h2>
          <div class="flex items-center justify-between mb-4">
            <button
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
            </button>
          </div>

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
          <button
            class="text-white font-Roboto bg-slate-700 font-bold rounded-md mt-3 p-2 w-full shadow-lg"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
    <div class="flex p-5 flex-col bg-white border shadow-sm rounded-xl">
      <div class="p-4 md:p-5">
        <h3 class="text-lg font-bold text-gray-800">Project List Update</h3>
        <div>
          <div id="hs-datatable-filter" class="flex flex-col">
            <div class="flex items-center space-x-2 mb-4">
              <div class="flex-0">
                <div class="relative max-w-xs">
                  <label for="hs-table-filter-search" class="sr-only"
                    >Search</label
                  >
                  <input
                    type="search"
                    v-model="searchQuery"
                    @input="handleSearch"
                    id="hs-table-filter-search"
                    class="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Search for items"
                  />
                  <div
                    class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3"
                  >
                    <svg
                      class="size-4 text-gray-400 "
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
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div class="flex-1 flex items-center justify-end space-x-2">
                <select class="hidden">
                  <option value="10" selected>10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>

            <div class="overflow-x-auto min-h-[521px]">
              <div class="min-w-full inline-block align-middle">
                <div class="overflow-hidden">
                  <table class="min-w-full">
                    <thead
                      class="border-y border-gray-200 "
                    >
                      <tr>
                        <th class="py-1 ps-3">
                          <div class="flex items-center h-5">
                            <input
                              id="hs-datatable-select-all-rows"
                              type="checkbox"
                              class="border-gray-300 rounded text-blue-600 focus:ring-blue-500 "
                            />
                            <label class="sr-only">Checkbox</label>
                          </div>
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">No</th>
                        <th class="py-3 px-4 text-xs font-normal">
                          Project Name
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">
                          Jenis
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">
                          Start Date
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">End Date</th>
                        <th class="py-3 px-4 text-xs font-normal">BIM File</th>
                        <th class="py-3 px-4 text-xs font-normal">Value</th>
                        <th class="py-3 px-4 text-xs font-normal">User</th>
                        <th class="py-3 px-4 text-xs font-normal">View</th>
                      </tr>
                    </thead>
                    <tbody
                      class="divide-y divide-gray-200 "
                    >
                      <tr v-for="(user, index) in filteredUsers" :key="user.id" class="odd:bg-slate-50 even:bg-slate-200">
                        <td class="py-4 ps-4">
                          <div class="flex items-center h-5">
                            <input
                              :id="'hs-table-filter-checkbox-' + user.id"
                              type="checkbox"
                              class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 "
                            />
                            <label
                              :for="'hs-table-filter-checkbox-' + user.id"
                              class="sr-only"
                              >Checkbox</label
                            >
                          </div>
                        </td>
                        <td
                          class="p-4 text-xs font-medium text-gray-800 "
                        >
                          {{ index + 1 }}
                        </td>
                        <td
                          class="p-4 text-xs font-medium text-gray-800 "
                        >
                          {{ user.name }}
                        </td>
                        <td
                          class="p-4 text-xs font-medium text-gray-800 "
                        >
                          {{ user.description }}
                        </td>
                        <td
                          class="p-4 text-xs font-medium text-gray-800 "
                        >
                          {{ formatDateTime(user.start_date) }}
                        </td>
                        <td
                          class="p-4 text-xs font-medium text-gray-800 "
                        >
                          {{ formatDateTime(user.start_date) }}
                        </td>
                        <td
                          class="p-4 text-xs font-medium text-gray-800 "
                        >
                          {{ user.url }}
                        </td>
                        <td
                          class="py-4 text-xs text-gray-800 "
                        >
                          {{ formatRupiah(user.value) }}
                        </td>
                        <td class="font-medium text-gray-800 font-Roboto">
                          <div class="flex items-center p-2">
                            <div>
                              <img
                                :src="`${BASE_URL2}image/cowok/${user.photo}`"
                                class="rounded-full h-10 w-10"
                              />
                            </div>
                            <div class="text-xs ml-2">{{ user.user }}</div>
                          </div>
                        </td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500"
                        >
                          <u
                            ><RouterLink :to="`/project/view/${user.id}`"
                              >View</RouterLink
                            ></u
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="flex items-center mt-4">
              <div class="text-xs text-gray-500 ms-auto ">
                Showing <span>{{ filteredUsers.length }}</span> Projects
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5">
        <p class="mt-1 text-sm text-gray-500">All Project List</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import router from "../router";
import { useRoute } from "vue-router";
import { BASE_URL } from "@/base.url.utils";
import { BASE_URL2 } from "@/base.url2.utils";

const inputs = ref<string[]>([""]); // Explicitly define as string array // Start with one input field
const index = ref<number | any>();
const route = useRoute();
const searchQuery = ref<string>("");

interface ProjectList {
  id: number;
  start_date: string;
  end_date: string;
  url: string;
  name: string;
  user: string;
  description: string;
  photo: string;
  value: number;
}

const hasilProjectList = ref<ProjectList[]>([]);
const filteredUsers = computed<ProjectList[]>(() => {
  if (!searchQuery.value) {
    return hasilProjectList.value;
  }
  return hasilProjectList.value.filter(
    (user) =>
      user.user.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      formatDateTime(user.start_date)
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      formatDateTime(user.end_date)
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      user.description
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      formatRupiah(user.value)
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase())
  );
});

const handleSearch = () => {
  // You can add debounce or other search logic here if needed
};

const addInput = () => {
  inputs.value.push(""); // Add a new empty input
};

function removeInput(index: number) {
  if (inputs.value.length > 1) {
    inputs.value.splice(index, 1);
  }
}

function formatDateTime(dateString: string) {
  const date = new Date(dateString);

  const formatted = date.toLocaleDateString("id-ID"); // "DD/MM/YYYY, HH:MM:SS"
  return formatted;
}

function formatRupiah(angka: number) {
  const amount = angka;

  // Format as Indonesian Rupiah (IDR)
  const formattedIDR = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // Rupiah usually doesn't show decimals
    maximumFractionDigits: 0,
  }).format(amount);

  return formattedIDR;
}

function goToURL(url: string) {
  router.push(url);
}

async function getProjectList() {
  const url = `${BASE_URL}project/list`;
  const getProjectAll = await axios.get(url);
  console.log("Data Project: ", getProjectAll.data);
  hasilProjectList.value = getProjectAll.data.result;
}

getProjectList();
</script>

<style lang="scss" scoped></style>
