<template>
    <div>
      <div
        class="ml-10 p-2 font-Montserrat font-bold text-2xl text-slate-500 text-center"
      >
        <h2>Project JHS Modern 56</h2>
      </div>
  
      <div
        class="grid p-2 md:grid-cols-2 md:gap-4 bg-white border shadow-sm rounded-xl"
      >
        <!-- start Card  -->
        <div id="card1" class="">
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800">3D View</h3>
            <div
              class="bg-slate-400 w-[41.5vw] h-[41.5vh] rounded-md"
              ref="containerRef"
              id="container"
            ></div>
            <a
              class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              Project List
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
            class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5"
          >
            <p class="mt-1 text-sm text-gray-500">
              Tampilan 3D Design sangat bergantung pada kinerja dan sumber daya
              komputer klien di sisi browser
            </p>
          </div>
        </div>
        <!-- start Card2  -->
        <div id="card2" class="">
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800">
              Building Information Modelling
            </h3>
            <div class="bg-slate-100 w-[35vw] h-auto rounded-md p-5">
              <div class="grid md:grid-cols-2 p-2 grid-cols-1 md:ml-16">
                <div class="grid grid-cols-1 font-Roboto w-48 shadow-md p-1">
                  <div class="font-semibold bg-slate-900 text-center text-white">
                    BIM File
                  </div>
                  <div class="text-slate-600 font-bold bg-gray-200 text-end">
                    {{ bimfile }}
                  </div>
                </div>
                <div class="grid grid-cols-1 font-Roboto w-48 shadow-md p-1">
                  <div class="font-semibold bg-slate-900 text-center text-white">
                    Name
                  </div>
                  <div class="text-slate-600 font-bold bg-gray-200 text-end">
                    {{ namaID }}
                  </div>
                </div>
                <div class="grid grid-cols-1 font-Roboto w-48 shadow-md p-1">
                  <div class="font-semibold bg-slate-900 text-center text-white">
                    Global ID
                  </div>
                  <div class="text-slate-600 text-sm bg-gray-200 text-end">
                    {{ globalId }}
                  </div>
                </div>
                <div class="grid grid-cols-1 font-Roboto w-48 shadow-md p-1">
                  <div class="font-semibold bg-slate-900 text-center text-white">
                    Length
                  </div>
                  <div class="font-bold text-slate-600 bg-gray-200 text-end">
                    {{ length }} m
                  </div>
                </div>
                <div class="grid grid-cols-1 font-Roboto w-48 shadow-md p-1">
                  <div class="font-semibold bg-slate-900 text-center text-white">
                    Width
                  </div>
                  <div class="font-bold text-slate-600 bg-gray-200 text-end">
                    {{ width }} m
                  </div>
                </div>
                <div class="grid grid-cols-1 font-Roboto w-48 shadow-md p-1">
                  <div class="font-semibold bg-slate-900 text-center text-white">
                    Height
                  </div>
                  <div class="font-bold text-slate-600 bg-gray-200 text-end">
                    {{ height }} m
                  </div>
                </div>
                <div class="grid grid-cols-1 font-Roboto w-48 shadow-md p-1">
                  <div class="font-semibold bg-slate-900 text-center text-white">
                    Area
                  </div>
                  <div class="font-bold text-slate-600 bg-gray-200 text-end">
                    {{ area }} m<sup>2</sup>
                  </div>
                </div>
                <div class="grid grid-cols-1 font-Roboto w-48 shadow-md p-1">
                  <div class="font-semibold bg-slate-900 text-center text-white">
                    Volume
                  </div>
                  <div class="font-bold text-slate-600 bg-gray-200 text-end">
                    {{ volume }} m<sup>3</sup>
                  </div>
                </div>
                <div class="grid grid-cols-1 font-Roboto w-48 shadow-md p-1">
                  <div class="font-semibold bg-slate-900 text-center text-white">
                    Footprint Area
                  </div>
                  <div class="font-bold text-slate-600 bg-gray-200 text-end">
                    {{ footPrintArea }} m<sup>2</sup>
                  </div>
                </div>
                <div class="grid grid-cols-1 font-Roboto w-48 shadow-md p-1">
                  <div class="font-semibold bg-slate-900 text-center text-white">
                    Footprint Perimeter
                  </div>
                  <div class="font-bold text-slate-600 bg-gray-200 text-end">
                    {{ footPrintPerimeter }} m<sup>3</sup>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              More detail
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
            class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5"
          ></div>
        </div>
      </div>
  
      <!-- Row #2 -->
      <div class="bg-white border shadow-sm rounded-xl mt-2">
        <!-- start Card  -->
        <div id="card1" class="">
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800">Task List</h3>
            <div class="bg-slate-100 w-[80vw] h-auto rounded-md">
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
                              <th class="py-3 px-4 text-xs font-Roboto">No</th>
                              <th class="py-3 px-4 text-xs font-Roboto">Name</th>
                              <th class="py-3 px-4 text-xs font-Roboto">Desc</th>
                              <th class="py-3 px-4 text-xs font-Roboto">Photo</th>
                              <th class="py-3 px-4 text-xs font-Roboto">Start</th>
                              <th class="py-3 px-4 text-xs font-Roboto">End</th>
                              <th class="py-3 px-4 text-xs font-Roboto">
                                Issued
                              </th>
                              <th class="py-3 px-4 text-xs font-Roboto">
                                Assigned
                              </th>
                              <th class="py-3 px-4 text-xs font-Roboto">
                                Status
                              </th>
                              <th class="py-3 px-4 text-xs font-Roboto">
                                Activities
                              </th>
                            </tr>
                          </thead>
                          <tbody class="divide-y divide-gray-200">
                            <tr
                              v-for="(user, index) in filteredUsers"
                              :key="user.id"
                              class="border=2 border-b-gray-500 odd:bg-slate-200"
                            >
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
                              <td
                              class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500"
                            >
                              <button @click="goToURL(`/project/issue/list${user.location}/${user.project_id}`)">{{user.name}}</button>
                            </td>
                              <td class="p-4 text-xs font-medium text-gray-800">
                                {{ user.description }}
                              </td>
                              <td class="text-start p-2 font-Roboto">
                                <div>
                                  <div v-if="user.photo" class="mt-2">
                                    <img
                                      :src="`${BASE_URL2}image/${user.photo}`"
                                      class="w-56 h-auto rounded-md"
                                    /><button
                                      v-on:click="displayFoto(`${user.photo}`)"
                                    >
                                    <span class="material-icons">
                                      fit_screen
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </td>
                              <td class="p-4 text-xs font-medium text-gray-800">
                                {{ formatDateTime(user.date_issued) }}
                              </td>
                              <td class="p-4 text-xs font-medium text-gray-800">
                                {{ formatDateTime(user.closed_date) }}
                              </td>
                              <td class="p-4 text-xs font-medium text-gray-800">
                                {{ user.user_assign_to }}
                              </td>
                              <td class="p-4 text-xs font-medium text-gray-800">
                                {{ user.user_issued_by }}
                              </td>
                              <td class="p-4 text-xs font-medium text-gray-800">
                                {{ user.status }}
                              </td>
                              <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500"
                          >
                            <RouterLink :to="`/project/issue/view${user.location}/${user.project_id}`">Actvities</RouterLink>
                          </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
  
                  <div class="flex items-center mt-4">
                    <div class="text-blue-600">
                      Showing <span>{{ filteredUsers.length }}</span> Issues
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              Back to project view
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
            class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5"
          >
            <p class="mt-1 text-sm text-gray-500">
              All List 
            </p>
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
  import { ref, onMounted, computed } from "vue";
  import * as OBC from "@thatopen/components";
  import * as OBCF from "@thatopen/components-front";
  import * as THREE from "three";
  import { watch } from "vue";
  import axios from "axios";
  import router from "../router";
  import { useRoute } from "vue-router";
  import { BASE_URL } from "@/base.url.utils";
  import { BASE_URL2 } from "@/base.url2.utils";
  
  // Reference for container
  const containerRef = ref<HTMLDivElement | null>(null);
  const selectedExpressID = ref<number | null>(null);
  const length = ref<number | null>(null);
  const area = ref<number | null>(null);
  const volume = ref<number | null>(null);
  const height = ref<number | null>(null);
  const width = ref<number | null>(null);
  const footPrintArea = ref<number | null>(null);
  const footPrintPerimeter = ref<number | null>(null);
  const globalId = ref<string | null>(null);
  const namaID = ref<string | null>(null);
  const bimfile = ref<string | null>(null);
  const route = useRoute();
  const searchQuery = ref<string>("");
  const issues = ref<IssuesListAll[]>([]);
  const fotoDisplay = ref(false);
  const sourceFotoDisplay = ref<string | null>(null);
  
  interface IssuesListAll {
    project_id: string,
    id: number;
    date_issued: string;
    closed_date: string;
    expressid: string;
    name: string;
    globalid: string;
    user_issued_by: string;
    user_assign_to: string;
    status: string;
    location: string;
    description: string;
    photo: string;
  }
  
  interface RouteParams {
    id: string;
    valueX: string;
    valueY: string;
    valueZ: string;
  }
  
  const hasilIssuesList = ref<IssuesListAll[]>([]);
  const filteredUsers = computed<IssuesListAll[]>(() => {
    if (!searchQuery.value) {
      return hasilIssuesList.value;
    }
    return hasilIssuesList.value.filter(
      (user) =>
        user.status.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        formatDateTime(user.date_issued)
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase()) ||
        formatDateTime(user.closed_date)
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase()) ||
        user.user_issued_by.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        user.user_assign_to.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        user.description
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase())
    );
  });
  
  const handleSearch = () => {
    // You can add debounce or other search logic here if needed
  };
  
  onMounted(async () => {
    if (!containerRef.value) {
      console.error("Container not found");
      return;
    }
  
    // Initialize components
    const components = new OBC.Components();
    components.init(); // Ensure initialization happens first
  
    const worlds = components.get(OBC.Worlds);
    const world = worlds.create<
      OBC.SimpleScene,
      OBC.SimpleCamera,
      OBC.SimpleRenderer
    >();
  
    world.scene = new OBC.SimpleScene(components);
    world.renderer = new OBC.SimpleRenderer(components, containerRef.value);
    world.camera = new OBC.SimpleCamera(components);
  
    world.scene.setup();
  
    const grids = components.get(OBC.Grids);
    grids.create(world);
  
    // Load IFC model
    const fragmentIfcLoader = components.get(OBC.IfcLoader);
    await fragmentIfcLoader.setup();
  
    const file = await fetch("/sample.ifc");
    const data = await file.arrayBuffer();
    const buffer = new Uint8Array(data);
    const model = await fragmentIfcLoader.load(buffer);
    world.scene.three.add(model);
  
    const highlighter = components.get(OBCF.Highlighter);
    highlighter.setup({ world });
  
    async function getDataBim(expresid: number | null) {
      const url = `${BASE_URL}id/` + expresid;
      const dataBim = await axios.get(url);
      console.log("data Bim: ", dataBim.data);
      length.value = dataBim.data.length;
      width.value = dataBim.data.width;
      height.value = dataBim.data.height;
      area.value = dataBim.data.area;
      volume.value = dataBim.data.volume;
      namaID.value = dataBim.data.name;
      bimfile.value = dataBim.data.bimfile;
  
      footPrintArea.value = dataBim.data.footprintarea;
      footPrintPerimeter.value = dataBim.data.footprintperimeter;
    }
  
    // Highlight function
    function highlightByExpressID(
      expressID: number,
      x: number,
      y: number,
      z: number,
      targetx: number,
      targety: number,
      targetz: number
    ) {
      world.camera.controls.setLookAt(x, y, z, targetx, targety, targetz);
      console.log("Camera Position: ", world.camera.three.position);
      const fragmap = model.getFragmentMap([expressID]);
      highlighter.highlightByID("select", fragmap);
    }
  
    highlighter.events.select.onHighlight.add(async (fragmentIdMap) => {
      console.log("Fragment:", fragmentIdMap);
      const expressID = [...Object.values(fragmentIdMap)[0]][0];
      const prop = await model.getProperties(expressID);
      console.log("Properties:", prop);
  
      selectedExpressID.value = expressID;
      console.log("jajal di sini", selectedExpressID.value);
  
      // Extract GlobalId from the properties
      if (prop && prop.GlobalId) {
        globalId.value = prop.GlobalId.value;
        console.log("GlobalId:", globalId.value);
      } else {
        globalId.value = null;
        console.log("No GlobalId found for this entity.");
      }
  
      console.log("Camera Position:", world.camera.three.position);
  
      const target = new THREE.Vector3();
      console.log("Target Position:", world.camera.controls.getTarget(target));
    });
  
    // Call highlight function
    //   highlightByExpressID(1225, 50, 50, 50, 0, 0, 0);
    function getLocation() {
      const expressid = parseInt(route.params.id as string);
      const valueX = parseInt(route.params.x as string);
      const valueY = parseInt(route.params.y as string);
      const valueZ = parseInt(route.params.z as string);
  
      highlightByExpressID(expressid, valueX, valueY, valueZ, 0, 0, 0);
    }
  
    async function getDataIssueList() {
      const expressid = route.params.uuid;
      const url = `${BASE_URL}issues/all/${expressid}`;
      const getIssueAll = await axios.get(url);
      console.log("Data Issue All: ", getIssueAll.data);
      hasilIssuesList.value=getIssueAll.data.result;
    }
  
    watch(selectedExpressID, (newValue) => {
      console.log("Updated selectedExpressID:", newValue);
      getDataBim(newValue);
    });

    getDataIssueList();
    getLocation();
    
  });
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
  </script>
  
  <style lang="scss" scoped></style>
  