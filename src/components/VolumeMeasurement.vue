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

  const dimensions = components.get(OBCF.VolumeMeasurement);
  dimensions.world = world;
  dimensions.enabled = true;

  // Approach 1: Using the highlighter's click events
  const highlighter = components.get(OBCF.Highlighter);
  highlighter.setup({ world });
  
  highlighter.events.select.onHighlight.add((selection) => {
    const volume = dimensions.getVolumeFromFragments(selection);
    console.log("Selected element", selection);
  });

  highlighter.events.select.onClear.add(() => {
  dimensions.clear();
});

});
</script>

<style scoped>

</style>