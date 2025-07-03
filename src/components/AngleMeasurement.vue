<template>
  <div class="full-screen" ref="containerRef"></div>
   <bim-toolbar class="toolbar">
      <bim-button icon="square-foot" label="Area" />
    </bim-toolbar>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as OBC from '@thatopen/components'
import * as OBCF from '@thatopen/components-front'
import * as BUI from '@thatopen/ui'

// refs
const containerRef = ref<HTMLDivElement | null>(null)
const components = new OBC.Components()

onMounted(async () => {
  if (!containerRef.value) return

  components.init()

  const worlds = components.get(OBC.Worlds)
  const world = worlds.create<
    OBC.SimpleScene,
    OBC.SimpleCamera,
    OBCF.PostproductionRenderer
  >()

  world.scene = new OBC.SimpleScene(components)
  world.renderer = new OBCF.PostproductionRenderer(components, containerRef.value)
  world.camera = new OBC.SimpleCamera(components)
  world.scene.setup()
  world.camera.controls.setLookAt(10, 10, 10, 0, 0, 0)

  const ifcLoader = components.get(OBC.IfcLoader)
  await ifcLoader.setup()

  // Load sample IFC
  const file = await fetch("/sample.ifc")
  const data = await file.arrayBuffer()
  const model = await ifcLoader.load(new Uint8Array(data))
  world.scene.three.add(model)

  // Measurement setup
  const area = components.get(OBCF.AreaMeasurement)
  area.world = world
  area.enabled = true

  const toolbar = document.createElement('div')
  toolbar.innerHTML = `<bim-toolbar><bim-button icon="square-foot" label="Area" /></bim-toolbar>`
  document.body.append(toolbar)

  BUI.Manager.init()
})

onBeforeUnmount(() => {
  components.dispose()
})
</script>

<style scoped>
.full-screen {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
.toolbar {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 100;
}
</style>
