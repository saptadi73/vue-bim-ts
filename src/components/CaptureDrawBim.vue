<template>
  <div>
    <h3 class="font-bold text-red-700">Test</h3>
    <div class="space-x-2 mb-4">
      <button
        @click="captureScreenshot"
        class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Capture Screenshot
      </button>
    </div>
    <div ref="containerRef" id="container" class="w-[70vw] h-[70vh]"></div>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-4 rounded shadow relative">
        <h4 class="font-bold mb-2">Marking Screenshot</h4>
        <canvas
          ref="modalCanvas"
          :width="screenshotWidth"
          :height="screenshotHeight"
          @mousedown="startDraw"
          @mousemove="draw"
          @mouseup="stopDraw"
          @mouseleave="stopDraw"
          style="border:1px solid #ccc; cursor:crosshair;"
        ></canvas>
        <div class="mt-2">
          <button @click="saveMarked" class="bg-green-600 text-white px-3 py-1 rounded">Save</button>
          <button @click="closeModal" class="bg-gray-400 text-black px-3 py-1 rounded ml-2">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import * as OBC from "@thatopen/components";
import * as OBCF from "@thatopen/components-front";
import * as THREE from "three";

const containerRef = ref<HTMLDivElement | null>(null);
const modalCanvas = ref<HTMLCanvasElement | null>(null);

const showModal = ref(false);
const screenshotData = ref<string | null>(null);
const screenshotWidth = 800;
const screenshotHeight = 600;

let ctxModal: CanvasRenderingContext2D | null = null;
let drawing = false;

onMounted(async () => {
  if (!containerRef.value) {
    console.error("Container not found");
    return;
  }

  const components = new OBC.Components();
  components.init();

  const worlds = components.get(OBC.Worlds);
  const world = worlds.create<
    OBC.SimpleScene,
    OBC.SimpleCamera,
    OBC.SimpleRenderer
  >();

  world.scene = new OBC.SimpleScene(components);
  world.renderer = new OBC.SimpleRenderer(components, containerRef.value, {
    preserveDrawingBuffer: true,
  });
  world.camera = new OBC.SimpleCamera(components);

  world.scene.setup();

  const grids = components.get(OBC.Grids);
  grids.create(world);

  const fragmentIfcLoader = components.get(OBC.IfcLoader);
  await fragmentIfcLoader.setup();

  const file = await fetch("/sample.ifc");
  const data = await file.arrayBuffer();
  const buffer = new Uint8Array(data);
  const model = await fragmentIfcLoader.load(buffer);
  world.scene.three.add(model);

  const highlighter = components.get(OBCF.Highlighter);
  highlighter.setup({ world });

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
    const fragmap = model.getFragmentMap([expressID]);
    highlighter.highlightByID("select", fragmap);
  }

  highlighter.events.select.onHighlight.add(async (fragmentIdMap) => {
    const expressID = [...Object.values(fragmentIdMap)[0]][0];
    const prop = await model.getProperties(expressID);
    console.log("Properties:", prop);
  });

  highlightByExpressID(1225, 50, 50, 50, 0, 0, 0);
});

const captureScreenshot = () => {
  if (!containerRef.value) return;

  const canvas = containerRef.value.querySelector("canvas") as HTMLCanvasElement;
  if (!canvas) {
    console.error("Canvas not found.");
    return;
  }

  requestAnimationFrame(async () => {
    screenshotData.value = canvas.toDataURL("image/png");
    showModal.value = true;

    await nextTick();
    initModalCanvas();
  });
};

function initModalCanvas() {
  if (!modalCanvas.value || !screenshotData.value) return;

  ctxModal = modalCanvas.value.getContext("2d");
  const img = new Image();
  img.src = screenshotData.value;
  img.onload = () => {
    ctxModal?.drawImage(img, 0, 0, screenshotWidth, screenshotHeight);
  };
}

function startDraw(e: MouseEvent): void {
  if (!ctxModal) return;
  drawing = true;
  ctxModal.beginPath();
  ctxModal.moveTo(e.offsetX, e.offsetY);
}

function draw(e: MouseEvent): void {
  if (!drawing || !ctxModal) return;
  ctxModal.lineTo(e.offsetX, e.offsetY);
  ctxModal.strokeStyle = "red";
  ctxModal.lineWidth = 2;
  ctxModal.stroke();
}

function stopDraw(): void {
  if (!ctxModal) return;
  drawing = false;
  ctxModal.closePath();
}

function saveMarked(): void {
  if (!modalCanvas.value) return;

  const dataURL = modalCanvas.value.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = dataURL;
  a.download = "marked-screenshot.png";
  a.click();
  closeModal();
}

function closeModal(): void {
  showModal.value = false;
}
</script>

<style scoped>
/* Optional: prevent scrolling when modal open */
body.modal-open {
  overflow: hidden;
}
</style>
