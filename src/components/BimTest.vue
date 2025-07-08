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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as OBC from "@thatopen/components";
import * as OBCF from "@thatopen/components-front";
import * as THREE from "three";

// Reference for container
const containerRef = ref<HTMLDivElement | null>(null);

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
  world.renderer = new OBC.SimpleRenderer(components, containerRef.value, {
    preserveDrawingBuffer: true,
  });
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
    console.log("Cameraku Position:", world.camera.three.position);
    console.log("Camera UpVector: ", world.camera.three.up);

    const target = new THREE.Vector3();
    console.log("Target Position:", world.camera.controls.getTarget(target));
  });

  // Call highlight function
  highlightByExpressID(1225, 50, 50, 50, 0, 0, 0);
});

const captureScreenshot = () => {
  if (!containerRef.value) return;

  // Get canvas from the WebGL renderer
  const canvas = containerRef.value.querySelector(
    "canvas"
  ) as HTMLCanvasElement;
  if (!canvas) {
    console.error("Canvas not found.");
    return;
  }

  // Wait a frame to ensure canvas is fully drawn (optional, helps in edge cases)
  requestAnimationFrame(() => {
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "bim-screenshot.png";
    link.click();
  });
};
</script>

<style scoped></style>
