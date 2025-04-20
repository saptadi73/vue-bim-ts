<template>
  <div>
    <div class="p-2 font-Montserrat font-bold text-center">
      <h2 class="text-2xl text-slate-500">Project JHS Modern 56</h2>
      <h4 class="text-slate-400">Total Value : Rp 3.000.000.000</h4>
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
        >
          <p class="mt-1 text-sm text-gray-500">
            Informasi yang didapat dari BIM Model bergantung pada informasi yang
            tersedia dalam file IFC yang diupload
          </p>
        </div>
      </div>
    </div>

    <!-- STart New Rows -->
    <div
      class="grid mt-2 p-5 md:grid-cols-2 md:gap-4 bg-white border shadow-sm rounded-xl"
    >
      <!-- start Card2  -->
      <div id="card2" class="">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800">Polygon Site Map</h3>
          <div class="w-[42vw] h-[42vh] rounded-md shadow-md">
            <GetMapLocationPolygon
              uuid="965cf977-9fd6-413b-9bf3-df6759621f2b"
              :initial-view="[-6.175264394846537, 106.82714206651761]"
              :initial-zoom="13"
              polygon-color="blue"
            />
          </div>
          <a
            class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            href="https://www.openstreetmap.org/"
          >
            Go to OpenStreet Map
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
          <p class="mt-1 text-sm text-gray-500">Data Polygon Map dapat diisi dengan melalui pengamatan melalui map atau melalui pengisian data secara aktual di lapangan dengan mendapatkan koordinat map secara langsung</p>
        </div>
      </div>

      <!-- start Card  -->
      <div id="card1" class="">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800">
            Task Progres Achievement
          </h3>
          <div class="w-[42vw] h-[42vh] rounded-md shadow-md flex p-5">
            <div id="chart" class="h-[20vh] w-[20vw] font-bold text-slate-500">
              Task
            </div>
            <div id="chart2" class="h-[20vh] w-[20vw] font-bold text-slate-600">
              Issue
            </div>
          </div>
          <a
            class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            Go To Task Status
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
          <p class="mt-1 text-sm text-gray-500">Data progress berdasarkan status task dan issue yang telah diisi oleh user</p>
        </div>
      </div>

      
    </div>
    <!-- end Rows -->

    <!-- Row #2 -->
    <div
      class="grid md:grid-cols-2 md:gap-4 bg-white border shadow-sm rounded-xl mt-2"
    >
      <!-- start Card  -->
      <div id="card1" class="">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800">Task List</h3>
          <div class="bg-slate-50 w-[42vw] h-[35vh] rounded-md">
            <div class="flex flex-col">
              <div class="-m-1.5 overflow-x-auto">
                <div class="p-1.5 min-w-full inline-block align-middle">
                  <div class="overflow-hidden">
                    <table class="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >
                            Unit
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >
                            Value
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >
                            Start
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                          >
                            End
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                          >
                            issued by
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                          >
                            assign to
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          class="odd:bg-slate-100 even:bg-slate-50"
                          v-if="hasilTaskDone"
                          v-for="resultku in hasilTaskDone"
                          :key="resultku.id"
                        >
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500"
                          >
                            <u
                              ><RouterLink :to="`/project/task/view${resultku.location}/${resultku.project_id}`">{{
                                resultku.name
                              }}</RouterLink></u
                            >
                          </td>

                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-end"
                          >
                            {{ formatRupiah(resultku.value) }}
                          </td>
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                          >
                            {{ resultku.start_date }}
                          </td>
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                          >
                            {{ resultku.end_date }}
                          </td>
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                          >
                            {{ resultku.assign_to }}
                          </td>
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                          >
                            {{ resultku.issued_by }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            All Task List
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
            Task List di atas hanya untuk task yang belum berstatus selesai
          </p>
        </div>
      </div>
      <!-- start Card2  -->
      <div id="card2" class="">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800">Issue List</h3>
          <div class="bg-slate-100 w-[40vw] h-[35vh] rounded-md">
            <div class="flex flex-col">
              <div class="-m-1.5 overflow-x-auto">
                <div class="p-1.5 min-w-full inline-block align-middle">
                  <div class="overflow-hidden">
                    <table class="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >
                            Unit
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >
                            Desc
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >
                            Start
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                          >
                            End
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                          >
                            issued by
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                          >
                            assign to
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          class="odd:bg-slate-100 even:bg-slate-50"
                          v-if="hasilIssueDone"
                          v-for="resultku in hasilIssueDone"
                          :key="resultku.id"
                        >
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500"
                          >
                            <u
                              ><RouterLink :to="`/project/issue/view${resultku.location}/${resultku.project_id}`">{{
                                resultku.name
                              }}</RouterLink></u
                            >
                          </td>

                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-end"
                          >
                            {{ resultku.description }}
                          </td>
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                          >
                            {{ resultku.date_issued }}
                          </td>
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                          >
                            {{ resultku.closed_date }}
                          </td>
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                          >
                            {{ resultku.user_assign_to }}
                          </td>
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                          >
                            {{ resultku.user_issued_by }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            All Issue List
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
            Issue yang muncul dalam daftar adalah untuk yang belum selesai.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as OBC from "@thatopen/components";
import * as OBCF from "@thatopen/components-front";
import * as THREE from "three";
import { watch } from "vue";
import axios from "axios";
import { BASE_URL } from "@/base.url.utils";
import ApexCharts from "apexcharts";
import GetMapLocationPolygon from "./GetMapLocationPolygon.vue";

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

interface TaskResult {
  project_id: string;
  name: string;
  id: string;
  globalid: string;
  expressid: string;
  value: number;
  start_date: string;
  end_date: string;
  assign_to: string;
  issued_by: string;
  location: string;
  // Add other properties as needed
}

const hasilTaskDone = ref<TaskResult[]>([]);

interface IssueResult {
  project_id: string;
  name: string;
  id: string;
  globalid: string;
  expressid: string;
  description: string;
  photo: string;
  date_issued: string;
  closed_date: string;
  user_assign_to: string;
  user_issued_by: string;
  location: string;
  // Add other properties as needed
}

const hasilIssueDone = ref<IssueResult[]>([]);

interface ChartOptions {
  chart: {
    type: "pie" | "donut";
    height?: number | string;
    width?: number | string;
  };
  series: number[];
  labels: string[];
  colors: string[];
  dataLabels: {};
  legend?: {
    position?: "top" | "right" | "bottom" | "left";
    show?: boolean;
  };
  responsive?: {
    breakpoint: number;
    options: {
      chart: {
        width: number;
      };
      legend: {
        position: string;
      };
    };
  }[];
}

const options: ChartOptions = {
  chart: {
    type: "pie",
    height: "100%", // This will make it responsive to container
  },
  series: [85, 15],
  labels: ["Done", "Progress"], // Category names
  colors: ["#c39bd3", "#ebdef0"],
  dataLabels: {
    enabled: true, // This enables labels on slices
    formatter: function (val: number, opts: any) {
      return (
        opts.w.globals.labels[opts.seriesIndex] + ": " + val.toFixed(1) + "%"
      );
    },
    style: {
      fontSize: "10px",
      colors: ["#000000"], // White text for better visibility
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 1,
      opacity: 0.45,
    },
  },
  legend: {
    position: "bottom",
    show: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

const options2: ChartOptions = {
  chart: {
    type: "donut",
    height: "100%", // This will make it responsive to container
  },
  series: [75, 25],
  labels: ["Done", "Progress"], // Category names
  colors: ["#27ae60", "#f4d03f"],
  dataLabels: {
    enabled: true, // This enables labels on slices
    formatter: function (val: number, opts: any) {
      return (
        opts.w.globals.labels[opts.seriesIndex] + ": " + val.toFixed(1) + "%"
      );
    },
    style: {
      fontSize: "8px",
      colors: ["#00000"], // White text for better visibility
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 1,
      opacity: 0.45,
    },
  },
  legend: {
    position: "bottom",
    show: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

onMounted(async () => {
  if (!containerRef.value) {
    console.error("Container not found");
    return;
  }

  // Get chart element with null check
  const chartElement = document.querySelector("#chart");
  if (chartElement) {
    const chart = new ApexCharts(chartElement, options);
    chart.render();
  } else {
    console.error("Chart element not found");
  }

  const chartElement2 = document.querySelector("#chart2");
  if (chartElement) {
    const chart = new ApexCharts(chartElement2, options2);
    chart.render();
  } else {
    console.error("Chart element not found");
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
    const url = `${BASE_URL}id/`+ expresid
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
  highlightByExpressID(1225, 50, 50, 50, 0, 0, 0);

  watch(selectedExpressID, (newValue) => {
    console.log("Updated selectedExpressID:", newValue);
    getDataBim(newValue);
  });

  async function getDataTask(id: string) {
    const url = `${BASE_URL}tasks/done/` + id;

    try {
      const dataTask = await axios.get(url);
      hasilTaskDone.value = dataTask.data.result;
      console.log("Hasil task Done: ", hasilTaskDone.value);
    } catch (error) {
      console.log("Hasil Task Done: ", error);
    }
  }
  getDataTask("965cf977-9fd6-413b-9bf3-df6759621f2b").catch((error) => {
    console.error("Error in getDataTask: ", error);
  });

  async function getDataIssue(id: string) {
    const url = `${BASE_URL}issues/done/` + id;

    try {
      const dataIssue = await axios.get(url);
      hasilIssueDone.value = dataIssue.data.result;
      console.log("Hasil issue Done: ", hasilIssueDone.value);
    } catch (error) {
      console.log("Hasil issue Done: ", error);
    }
  }
  getDataIssue("965cf977-9fd6-413b-9bf3-df6759621f2b").catch((error) => {
    console.error("Error in getIssueTask: ", error);
  });
});
function formatTanggal(dateString: string) {
  const tanggal = new Date(dateString);
  const localeDate = tanggal.toLocaleDateString("en-GB");

  return localeDate;
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
