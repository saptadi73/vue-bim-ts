<template>
    <div>
      <header class="z-100 shadow-md relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 ">
        <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <div class="flex items-center justify-between w-full sm:w-auto">
            <a class="flex-none text-xl font-semibold  focus:outline-none focus:opacity-80" href="#" aria-label="Brand">
              <img src="../assets/cowok/cowok1.jpg" class="h-10 w-10 outline-1 ml-8 outline-black rounded-full" />
            </a>
  
            <button @click="isOpen = !isOpen" type="button" class="sm:hidden relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 ">
              <svg v-if="!isOpen" class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg v-else class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span class="sr-only">Toggle navigation</span>
            </button>
          </div>
  
          <div :class="{'block': isOpen, 'hidden': !isOpen}" class="sm:flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <div><a class="font-medium text-blue-500 focus:outline-none" href="#" aria-current="page">Home</a></div>
            <div><a class="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400"  href="#">Logout</a></div>
            <div><a class="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400" href="#">Dashboard</a></div>
            <div><a class="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400" href="#">Report</a></div>
          </div>
        </nav>
      </header>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  const isOpen = ref(false);
  </script>
  
  <style lang="scss" scoped></style>
  