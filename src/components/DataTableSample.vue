<template>
  <div>
    <div
      class="flex p-5 flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
    >
      <div class="p-4 md:p-5">
        <h3 class="text-lg font-bold text-gray-800 dark:text-white">
          Card title
        </h3>
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
                    class="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                    placeholder="Search for items"
                  />
                  <div
                    class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3"
                  >
                    <svg
                      class="size-4 text-gray-400 dark:text-neutral-500"
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
                      class="border-y border-gray-200 dark:border-neutral-700"
                    >
                      <tr>
                        <th class="py-1 ps-3">
                          <div class="flex items-center h-5">
                            <input
                              id="hs-datatable-select-all-rows"
                              type="checkbox"
                              class="border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500"
                            />
                            <label class="sr-only">Checkbox</label>
                          </div>
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">Blok/No</th>
                        <th class="py-3 px-4 text-xs font-normal">
                          Nomor Rumah
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">
                          No. Kartu Keluarga
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">
                          Nama Kepala Keluarga
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">NIK</th>
                        <th class="py-3 px-4 text-xs font-normal">
                          Jenis Kelamin
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">
                          Tempat Lahir
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">
                          Tanggal Lahir
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">Pekerjaan</th>
                        <th class="py-3 px-4 text-xs font-normal">No HP/WA</th>
                        <th class="py-3 px-4 text-end text-xs font-normal">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      class="divide-y divide-gray-200 dark:divide-neutral-700 text-center"
                    >
                      <tr v-for="user in filteredUsers" :key="user.id">
                        <td class="py-4 ps-4">
                          <div class="flex items-center h-5">
                            <input
                              :id="'hs-table-filter-checkbox-' + user.id"
                              type="checkbox"
                              class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500"
                            />
                            <label
                              :for="'hs-table-filter-checkbox-' + user.id"
                              class="sr-only"
                              >Checkbox</label
                            >
                          </div>
                        </td>
                        <td
                          class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200"
                        >
                          {{ user.blok }}
                        </td>
                        <td
                          class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200"
                        >
                          {{ user.numberhome }}
                        </td>
                        <td
                          class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200"
                        >
                          {{ user.nokk }}
                        </td>
                        <td
                          class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200"
                        >
                          {{ user.nama }}
                        </td>
                        <td
                          class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200"
                        >
                          {{ user.nik }}
                        </td>
                        <td
                          class="py-4 text-xs text-gray-800 dark:text-neutral-200"
                        >
                          {{ user.gender }}
                        </td>
                        <td
                          class="p-4 text-xs text-gray-800 dark:text-neutral-200"
                        >
                          {{ user.tempatlahir }}
                        </td>
                        <td
                          class="p-4 text-xs text-gray-800 dark:text-neutral-200"
                        >
                          {{ user.tgl_lahir }}
                        </td>
                        <td
                          class="p-4 text-xs text-gray-800 dark:text-neutral-200"
                        >
                          {{ user.pekerjaan }}
                        </td>
                        <td
                          class="p-4 text-xs text-gray-800 dark:text-neutral-200"
                        >
                          {{ user.no_hp }}
                        </td>
                        <td class="p-4 text-end text-sm font-medium">
                          <button
                            type="button"
                            class="text-blue-600 hover:text-blue-800"
                          >
                            <i class="fas fa-edit"></i> Edit
                          </button>
                          <button
                            type="button"
                            class="text-red-600 hover:text-red-800 ml-2"
                          >
                            <i class="fas fa-trash-alt"></i> Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="flex items-center mt-4">
              <div class="text-xs text-gray-500 ms-auto dark:text-neutral-400">
                Showing <span>{{ filteredUsers.length }}</span> users
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700"
        >
          <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
            Last updated 5 mins ago
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface User {
  id: number;
  blok: string;
  numberhome: string;
  nokk: string;
  nama: string;
  nik: string;
  gender: string;
  tempatlahir: string;
  tgl_lahir: string;
  pekerjaan: string;
  no_hp: string;
}

const searchQuery = ref<string>("");
const users = ref<User[]>([
  {
    id: 1,
    blok: "A",
    numberhome: "12",
    nokk: "321021090109192",
    gender: "Laki-Laki",
    tempatlahir: "Jakarta",
    nama: "Christina Bersh",
    nik: "3213123243455",
    tgl_lahir: "09/06/2022",
    pekerjaan: "Wiraswasta",
    no_hp: "08932166090",
  },
  {
    id: 2,
    blok: "B",
    numberhome: "50",
    nokk: "321021090109192",
    gender: "Laki-Laki",
    tempatlahir: "Bekasi",
    nama: "David Harrison",
    nik: "3213123243455",
    tgl_lahir: "09/06/2022",
    pekerjaan: "Wiraswasta",
    no_hp: "08932166090",
  },
  {
    id: 3,
    blok: "C",
    numberhome: "22",
    nokk: "321021090109192",
    gender: "Laki-Laki",
    tempatlahir: "Subang",
    nama: "Anne Richard",
    nik: "3213123243455",
    tgl_lahir: "09/06/2022",
    pekerjaan: "Wiraswasta",
    no_hp: "08932166090",
  },
  {
    id: 4,
    blok: "D",
    numberhome: "3",
    nokk: "321021090109192",
    gender: "Laki-Laki",
    tempatlahir: "Sungai Kendal",
    nama: "Joko",
    nik: "3213123243455",
    tgl_lahir: "09/06/2022",
    pekerjaan: "Wiraswasta",
    no_hp: "08932166090",
  },
]);

const filteredUsers = computed<User[]>(() => {
  if (!searchQuery.value) {
    return users.value;
  }
  const query = searchQuery.value.toLowerCase();
  return users.value.filter((user) =>
    Object.values(user).some(
      (value) =>
        typeof value === "string" && value.toLowerCase().includes(query)
    )
  );
});

const handleSearch = () => {
  // You can add debounce or other search logic here if needed
};
</script>

<style lang="css">
.dt-layout-row:has(.dt-search),
.dt-layout-row:has(.dt-length),
.dt-layout-row:has(.dt-paging) {
  display: none !important;
}
</style>
