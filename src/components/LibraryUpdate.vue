<template>
  <div>
    <div class="w-[80vw] bg-white border shadow-sm rounded-xl">
      <div class="p-4 md:p-5">
        <h3
          class="text-lg font-bold text-gray-800 mt-7 bg-slate-200 rounded-md shadow-md p-2"
        >
          UpLoad Library
        </h3>
        <div class="sm:flex rounded-lg shadow-sm mt-10">
          <span
            class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-100 text-sm font-Roboto text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg"
            >Name</span
          >
          <input
            id="nama"
            type="text"
            class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          />
        </div>
        <div class="sm:flex rounded-lg shadow-sm mt-10">
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
            >Upload File</span
          >
          <input
            id="file"
            type="file"
            class="pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          />
        </div>
        <button
          class="mt-8 p-3 rounded-lg w-full bg-slate-700 text-white font-bold"
        >
          Upload File
        </button>
        <div
          class="bg-gray-100 border-t mt-5 rounded-b-xl py-3 px-4 md:py-4 md:px-5"
        >
          <p class="text-sm text-gray-500">Library Document Profile</p>
        </div>
      </div>
    </div>
    <div class="w-[80vw] bg-white border shadow-sm rounded-xl">
      <div class="p-4 md:p-5">
        <h3 class="text-lg font-bold text-gray-800">Document Update History</h3>
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
                      class="size-4 text-gray-400"
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
                    <thead class="border-y border-gray-200">
                      <tr>
                        <th class="py-1 ps-3">
                          <div class="flex items-center h-5">
                            <input
                              id="hs-datatable-select-all-rows"
                              type="checkbox"
                              class="border-gray-300 rounded text-blue-600 focus:ring-blue-500"
                            />
                            <label class="sr-only">Checkbox</label>
                          </div>
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">No</th>
                        <th class="py-3 px-4 text-xs font-normal">
                          Last Modified
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">Name</th>
                        <th class="py-3 px-4 text-xs font-normal">
                          Description
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">Download</th>
                        <th class="py-3 px-4 text-xs font-normal">User</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                      <tr v-for="(user, index) in filteredUsers" :key="user.id" class="even: bg-slate-100 odd:bg-slate-50">
                        <td class="py-4 ps-4">
                          <div class="flex items-center h-5">
                            <input
                              :id="'hs-table-filter-checkbox-' + user.id"
                              type="checkbox"
                              class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500"
                            />
                            <label
                              :for="'hs-table-filter-checkbox-' + user.id"
                              class="sr-only"
                              >Checkbox</label
                            >
                          </div>
                        </td>
                        <td class="p-4 text-xs font-medium text-gray-800">
                          {{ index + 1 }}
                        </td>
                        <td class="p-4 text-xs font-medium text-gray-800">
                          {{ formatDateTime(user.date_library) }}
                        </td>
                        <td class="p-4 text-xs font-medium text-gray-800">
                          {{ user.name }}
                        </td>
                        <td class="p-4 text-xs font-medium text-gray-800">
                          {{ user.description }}
                        </td>
                        <td class="p-4 text-xs font-medium text-gray-800">
                          <a :href="`${BASE_URL2}image/${user.url}`">{{
                            user.url
                          }}</a>
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
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="flex items-center mt-4">
              <div class="text-xs text-gray-500 ms-auto">
                Showing <span>{{ filteredUsers.length }}</span> update histories
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5"
        >
          <p class="mt-1 text-sm text-gray-500">Update Project document</p>
        </div>
      </div>
    </div>
    <div>
      <div
        v-if="fotoDisplay"
        class="fixed inset-0 bg-black bg-opacity-75 z-40 flex items-center justify-center p-4"
      >
        <button
          @click="closeFoto"
          class="absolute top-4 right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 z-50"
        >
          ×
        </button>
        <img
          :src="`${sourceFotoDisplay}`"
          alt="image activities"
          class="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import router from "../router";
import { useRoute } from "vue-router";
import { BASE_URL } from "@/base.url.utils";
import { BASE_URL2 } from "@/base.url2.utils";
import axios from "axios";

const fotoDisplay = ref(false);
const sourceFotoDisplay = ref<string | null>(null);
const hasilDataLibrary = ref<DataLibrary[]>([]);

interface DataLibrary {
  id: string;
  name: string;
  user: string;
  date_library: string;
  url: string;
  description: string;
  photo: string;
}

const route = useRoute();

const searchQuery = ref<string>("");

const filteredUsers = computed<DataLibrary[]>(() => {
  if (!searchQuery.value) {
    return hasilDataLibrary.value;
  }
  const query = searchQuery.value.toLowerCase();
  return hasilDataLibrary.value.filter((user) =>
    Object.values(user).some(
      (value) =>
        typeof value === "string" && value.toLowerCase().includes(query)
    )
  );
});
function formatDateTime(dateString: string) {
  const date = new Date(dateString);

  const formatted = date.toLocaleDateString("id-ID"); // "DD/MM/YYYY, HH:MM:SS"
  return formatted;
}

const handleSearch = () => {
  // You can add debounce or other search logic here if needed
};

function displayFoto(source: string) {
  fotoDisplay.value = true;
  sourceFotoDisplay.value = BASE_URL2 + "image/" + source;
  console.log("test Display: ", source);
}

function closeFoto() {
  fotoDisplay.value = false;
  sourceFotoDisplay.value = null;
}

function goToURL(url: string) {
  router.push(url);
}

async function getDocument() {
  const expressid = route.params.uuid;
  const url = `${BASE_URL}library`;
  const getTaskAll = await axios.get(url);
  console.log("Data Document: ", getTaskAll.data);
  hasilDataLibrary.value = getTaskAll.data.result;
}

getDocument();
</script>

<style lang="css">
.dt-layout-row:has(.dt-search),
.dt-layout-row:has(.dt-length),
.dt-layout-row:has(.dt-paging) {
  display: none !important;
}
</style>
