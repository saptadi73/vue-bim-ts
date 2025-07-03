<template>
  <div>
    <div ref="containerRef" id="container" class="w-[70vw] h-[70vh]"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as OBC from "@thatopen/components";
import * as OBCF from "@thatopen/components-front";
import * as THREE from "three";

const containerRef = ref<HTMLDivElement | null>(null);

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
    OBCF.PostproductionRenderer
  >();

  world.scene = new OBC.SimpleScene(components);
  world.renderer = new OBCF.PostproductionRenderer(components, containerRef.value, {
    preserveDrawingBuffer: true,
  });
  world.camera = new OBC.SimpleCamera(components);

  world.scene.setup();

  const grids = components.get(OBC.Grids);
  grids.create(world);

  // Load IFC model
  const fragmentIfcLoader = components.get(OBC.IfcLoader);
  await fragmentIfcLoader.setup();

  const file = await fetch("sample.ifc");
  const data = await file.arrayBuffer();
  const buffer = new Uint8Array(data);
  const model = await fragmentIfcLoader.load(buffer);
  world.scene.three.add(model);

  for (const child of model.children) {
    if (child instanceof THREE.Mesh) {
      world.meshes.add(child);
    }
  }

  const dimensions = components.get(OBCF.EdgeMeasurement);
  dimensions.world = world;
  dimensions.enabled = true;

  // Approach 1: Using the highlighter's click events
  const highlighter = components.get(OBCF.Highlighter);
  highlighter.setup({ world });
  
  highlighter.events.select.onHighlight.add((selection) => {
    console.log("Selected element", selection);
  });

  // Approach 2: Alternative double-click setup
  const setupDoubleClick = () => {
    const rendererElement = world.renderer?.three.domElement;
    if (!rendererElement) {
      console.warn("Renderer element not found, retrying...");
      setTimeout(setupDoubleClick, 100);
      return;
    }

    console.log("Renderer element found, attaching events...");
    
    // Make sure pointer events are enabled
    rendererElement.style.touchAction = "none";
    rendererElement.style.pointerEvents = "auto";

    // Clear any existing listeners to avoid duplicates
    rendererElement.removeEventListener('dblclick', handleDoubleClick);
    rendererElement.addEventListener('dblclick', handleDoubleClick);
    
    // Also try click event for debugging
    rendererElement.addEventListener('click', (event) => {
      console.log("Click event detected", event);
    });
  };

  const handleDoubleClick = (event: MouseEvent) => {
    console.log("Double click detected", event);
    event.preventDefault();
    event.stopPropagation();
    if (!world || !world.renderer) {
    console.error("World or renderer not initialized");
    return;
  }
    
    // Get mouse position
    const rect = world.renderer.three.domElement.getBoundingClientRect();
    const mouse = {
      x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
      y: -((event.clientY - rect.top) / rect.height) * 2 + 1
    };
    
    console.log("Mouse position", mouse);
    
    try {
      dimensions.create();
      console.log("Measurement created");
    } catch (error) {
      console.error("Error creating measurement:", error);
    }
  };

  // Start trying to setup the double click
  setupDoubleClick();



  // Debug: Check if the container has any event listeners
  setTimeout(() => {
    console.log("Event listeners on container:", 
      getEventListeners(containerRef.value));
    console.log("Event listeners on renderer:", 
      getEventListeners(world.renderer?.three.domElement));
  }, 2000);

let saved: number[][];

  window.addEventListener("keydown", (event) => {
    if (event.code === "KeyO") {
      dimensions.delete();
    } else if (event.code === "KeyS") {
      saved = dimensions.get();
      dimensions.deleteAll();
    } else if (event.code === "KeyL") {
      if (saved) {
        dimensions.set(saved);
      }
    }
  });
});

// Helper function to debug event listeners
function getEventListeners(element: any) {
  if (!element) return [];
  const listeners = (element as any)._eventListeners;
  return listeners ? Object.keys(listeners) : [];
}
</script>

<style scoped>

</style>