<template>
  <div>
    <div class="flex p-5 flex-col bg-white border shadow-sm rounded-xl">
      <div class="p-4 md:p-5">
        <h3 class="text-2xl font-bold text-gray-600 font-Poppins">3D View</h3>
        <div
          class="bg-slate-400 w-[80vw] h-[80vh] rounded-md"
          ref="containerRef"
          id="container"
        ></div>
        <a
          class="mt-3 inline-flex items-center gap-x-1 rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          <button
            class="bg-slate-600 text-white font-bold p-2 rounded-lg w-28 shadow-md text-lg"
            @click="saveLocation"
          >
            LOCATE
          </button>
        </a>
      </div>
      <div class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5">
        <p class="mt-1 text-base font-Poppins text-slate-500">
          Gambar 3D akan lebih nyaman dibuka dalam layar yang lebih lebar di
          PC/Laptop/Tablet
        </p>
        <p class="mt-1 text-sm text-gray-500 font-semibold">
          The 3D view will be more comfortable to open on a wider screen.
        </p>
      </div>
    </div>

    <!-- Start Row #2 -->
    <div
      class="grid p-5 md:grid-cols-2 md:gap-4 bg-white border shadow-sm rounded-xl"
    >
      <!-- start Card  -->
      <div id="card2" class="">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800">
            Building Information Modelling
          </h3>
          <div class="bg-slate-100 w-[35vw] h-auto rounded-md p-5 mt-9">
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
            Move the camera and adjust the zoom precisely to get the
              specified location and unit. To easily find the location of a
              task. Click/Tap the locate button to save.
          </p>
    
        </div>
      </div>

      <!-- start Card2  -->
      <div id="card2" class="">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800">Create New Task</h3>
          
          <div class="w-[41.5vw] h-auto p-2 bg-slate-300 rounded-md shadow-md">
            <div class="sm:flex rounded-lg shadow-sm">
              <span
                class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-100 text-sm font-Roboto text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg"
                >Description</span
              >
              <input
                id="nama"
                type="text"
                class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>
            <div class="mt-2">
              <div class="relative">
                <select
                  id="user_assign"
                  ref="user_assign"
                  class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                >
                  <option selected>User List</option>
                  <option value="1">agus pambudi</option>
                  <option value="2">saptadi</option>
                </select>
                <label
                  for="user_assign"
                  class="absolute font-Roboto top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500"
                  >Assign to</label
                >
              </div>
              <div class="sm:flex rounded-lg shadow-sm mt-2">
                <span
                  class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-100 text-sm font-Roboto text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg"
                  >Location</span
                >
                <input
                  v-model="myLocation"
                  id="myLocationRef"
                  ref="myLocationRef"
                  type="text"
                  class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>
              <div class="sm:flex rounded-lg shadow-sm mt-2">
                <span
                  class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-100 text-sm font-Roboto text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg"
                  >Value</span
                >
                <input
                  v-model="myValue"
                  id="myValueRef"
                  ref="myValueRef"
                  type="number"
                  class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>
              <div class="sm:flex rounded-lg shadow-sm mt-2">
                <span
                  class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-100 text-sm font-Roboto text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg"
                  >Start Date</span
                >
                <input
                  v-model="myStartDate"
                  id="myStartDateRef"
                  ref="myStartDateRef"
                  type="date"
                  class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>
              <div class="sm:flex rounded-lg shadow-sm mt-2">
                <span
                  class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-100 text-sm font-Roboto text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg"
                  >End Date</span
                >
                <input
                  v-model="myEndDate"
                  id="myEndDateRef"
                  ref="myEndDateRef"
                  type="date"
                  class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>

              <button
                class="bg-slate-500 font-bold font-Poppins rounded-md p-2 text-white mt-2"
              >
                Create Task
              </button>
            </div>
          </div>
          <a
            class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            Card link
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
          <p class="mt-1 text-sm text-gray-500">Anda dimohon untuk mengisi semua input box tersedia di atas</p>
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

// Reference for container
const containerRef = ref<HTMLDivElement | null>(null);
const myLocationRef = ref<HTMLDivElement | null | string>(null);
const myValueRef = ref<HTMLDivElement | null | string>(null);
const myStartDateRef = ref<HTMLDivElement | null | string>(null);
const myEndDateRef = ref<HTMLDivElement | null | string>(null);
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
const locateX = ref<number | null>(null);
const locateY = ref<number | null>(null);
const locateZ = ref<number | null>(null);
const myLocation = ref<string | null | number>(null);
const myValue = ref<string | null | number>(null);
const myStartDate = ref<string | null | number>(null);
const myEndDate = ref<string | null | number>(null);

function saveLocation() {
  if (selectedExpressID.value !== null) {
    const location = {
      expressID: selectedExpressID.value,
      x: locateX.value,
      y: locateY.value,
      z: locateZ.value,
      globalId: globalId.value,
    };

    console.log("Saving location data:", location);

    myLocation.value = `/${selectedExpressID.value}/${locateX.value}/${locateY.value}/${locateZ.value}`;

    // Set value ke input field
  } else {
    console.warn("No object selected. Please select an object before saving.");
  }
}

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

  const measurements = components.get(OBC.MeasurementUtils);
  const highlighter = components.get(OBCF.Highlighter);
  const marker = components.get(OBCF.Marker);
  // Explicitly set the world
  marker.threshold = 5;
  highlighter.setup({ world });

  async function getDataBim(expresid: number | null) {
    const url = `${BASE_URL}id/`+ expresid;
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
    console.log("Camera Positionku: ", world.camera.three.position);
    const fragmap = model.getFragmentMap([expressID]);
    highlighter.highlightByID("select", fragmap);
  }

  highlighter.events.select.onHighlight.add(async (fragmentIdMap) => {
    console.log("Fragment:", fragmentIdMap);
    const expressID = [...Object.values(fragmentIdMap)[0]][0];
    const prop = await model.getProperties(expressID);
    console.log("Properties:", prop);
    const volumenya = measurements.getVolumeFromFragments(fragmentIdMap);

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
    const CamPos = world.camera.three.position;

    console.log("Camera Position:", CamPos);

    locateX.value = CamPos.x;
    locateY.value = CamPos.y;
    locateZ.value = CamPos.z;

    const target = new THREE.Vector3();
    console.log("Target Position:", world.camera.controls.getTarget(target));
  });

  // Improved camera lock function
  // function setupCameraLock(world, lockKey = "l") {
  //   const camera = world.camera; // Mengakses kamera dari world
  //   let isLocked = false; // Status awal kamera
  //   let raycaster = new THREE.Raycaster();
  //   let mouse = new THREE.Vector2();

  //   // ====== Fungsi Event Listener ======
  //   function onMouseClick(event: MouseEvent) {
  //     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  //     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  //     raycaster.setFromCamera(mouse, world.camera.three);
  //     const intersects = raycaster.intersectObjects(
  //       world.scene.three.children,
  //       true
  //     );

  //     if (intersects.length > 0) {
  //       const clickedPoint = intersects[0].point.clone();
  //       console.log("ClickPoint : ", clickedPoint);
  //       const x = clickedPoint.x;
  //       const y = clickedPoint.y;
  //       const z = clickedPoint.z;
  //       marker.create(world, "❌", new THREE.Vector3(x, y, z));
  //       console.log("World scene children: ", world.scene.three.children);
  //     }
  //   }

  //   document.addEventListener("keydown", function (event) {
  //     if (event.key.toLowerCase() === lockKey.toLowerCase()) {
  //       isLocked = !isLocked; // Toggle lock/unlock
  //       camera.controls.enabled = !isLocked; // Lock/unlock kamera
  //       console.log(`Camera ${isLocked ? "locked" : "unlocked"}`);

  //       if (isLocked) {
  //         highlighter.enabled = false;
  //         highlighter.clear();
  //         // console.log("Camera locked");

  //         // Aktifkan event listener untuk mouse click
  //         window.addEventListener("click", onMouseClick);
  //       } else {
  //         highlighter.enabled = true;
  //         // console.log("Camera unlocked");

  //         // Hapus event listener agar tidak aktif saat kamera tidak dikunci
  //         window.removeEventListener("click", onMouseClick);
  //       }
  //     }
  //   });
  // }

  // function putMarker() {
  //   marker.create(world, "❌", new THREE.Vector3(2.3, -6.11, 13));
  // }

  // Call highlight function
  highlightByExpressID(1225, 50, 50, 50, 0, 0, 0);
  // putMarker();
  // setupCameraLock(world);

  if (!myLocationRef.value) {
    console.error("myLocationRef not found");
    myLocation.value = `/${selectedExpressID.value}/${locateX.value}/${locateY.value}/${locateZ.value}`;
    myLocationRef.value = myLocation.value;
    return;
  }

  watch(selectedExpressID, (newValue) => {
    console.log("Updated selectedExpressID:", newValue);
    getDataBim(newValue);
  });
});
</script>

<style lang="scss" scoped></style>
