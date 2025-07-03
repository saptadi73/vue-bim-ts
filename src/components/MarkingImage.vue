<template>
  <div class="space-y-4">
    <!-- Upload Image -->
    <input type="file" accept="image/*" @change="loadImage" />

    <!-- Canvas Element -->
    <canvas
      ref="canvasRef"
      class="border border-gray-400"
      @mousedown="startDrawing"
      @mousemove="draw"
      @mouseup="stopDrawing"
      @mouseleave="stopDrawing"
    ></canvas>

    <!-- Controls -->
    <div class="space-x-2">
      <button @click="clearCanvas" class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
        Clear
      </button>
      <button @click="saveImage" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Save as PNG
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;
let isDrawing = false;

// Start Drawing
const startDrawing = (event: MouseEvent) => {
  if (!ctx) return;
  isDrawing = true;
  const { x, y } = getCursorPosition(event);
  ctx.beginPath();
  ctx.moveTo(x, y);
};

// Drawing
const draw = (event: MouseEvent) => {
  if (!ctx || !isDrawing) return;
  const { x, y } = getCursorPosition(event);
  ctx.lineTo(x, y);
  ctx.stroke();
};

// Stop Drawing
const stopDrawing = () => {
  if (!ctx) return;
  isDrawing = false;
  ctx.closePath();
};

// Get cursor position relative to canvas
const getCursorPosition = (event: MouseEvent) => {
  const canvas = canvasRef.value!;
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
};

// Load image into canvas
const loadImage = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.value!;
      ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      ctx!.strokeStyle = 'red';
      ctx!.lineWidth = 2;
    };
    img.src = reader.result as string;
  };
  reader.readAsDataURL(file);
};

// Clear canvas
const clearCanvas = () => {
  const canvas = canvasRef.value!;
  ctx?.clearRect(0, 0, canvas.width, canvas.height);
};

// Save canvas as image
const saveImage = () => {
  const canvas = canvasRef.value!;
  const imageURL = canvas.toDataURL('image/png');

  const link = document.createElement('a');
  link.href = imageURL;
  link.download = 'marked-image.png';
  link.click();
};
</script>
