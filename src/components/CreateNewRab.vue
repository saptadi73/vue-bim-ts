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
                <button
                  v-if="mp"
                  class="rounded-md bg-slate-600 text-white"
                  v-on:click="saveQuantity(parseFloat(`${length}`))"
                >
                  To Quantity
                </button>
              </div>
              <div class="grid grid-cols-1 font-Roboto w-48 shadow-md p-1">
                <div class="font-semibold bg-slate-900 text-center text-white">
                  Width
                </div>
                <div class="font-bold text-slate-600 bg-gray-200 text-end">
                  {{ width }} m
                </div>
                <button
                  v-if="mp"
                  class="rounded-md bg-slate-600 text-white"
                  v-on:click="saveQuantity(parseFloat(`${width}`))"
                >
                  To Quantity
                </button>
              </div>
              <div class="grid grid-cols-1 font-Roboto w-48 shadow-md p-1">
                <div class="font-semibold bg-slate-900 text-center text-white">
                  Height
                </div>
                <div class="font-bold text-slate-600 bg-gray-200 text-end">
                  {{ height }} m
                </div>
                <button
                  v-if="mp"
                  class="rounded-md bg-slate-600 text-white"
                  v-on:click="saveQuantity(parseFloat(`${height}`))"
                >
                  To Quantity
                </button>
              </div>
              <div class="grid grid-cols-1 font-Roboto w-48 shadow-md p-1">
                <div class="font-semibold bg-slate-900 text-center text-white">
                  Area
                </div>
                <div class="font-bold text-slate-600 bg-gray-200 text-end">
                  {{ area }} m<sup>2</sup>
                </div>
                <button
                  v-if="m2a"
                  class="rounded-md bg-slate-600 text-white"
                  v-on:click="saveQuantity(parseFloat(`${area}`))"
                >
                  To Quantity
                </button>
              </div>
              <div class="grid grid-cols-1 font-Roboto w-48 shadow-md p-1">
                <div class="font-semibold bg-slate-900 text-center text-white">
                  Volume
                </div>
                <div class="font-bold text-slate-600 bg-gray-200 text-end">
                  {{ volume }} m<sup>3</sup>
                </div>
                <button
                  v-if="m3v"
                  class="rounded-md bg-slate-600 text-white"
                  v-on:click="saveQuantity(parseFloat(`${volume}`))"
                >
                  To Quantity
                </button>
              </div>
              <div class="grid grid-cols-1 font-Roboto w-48 shadow-md p-1">
                <div class="font-semibold bg-slate-900 text-center text-white">
                  Footprint Area
                </div>
                <div class="font-bold text-slate-600 bg-gray-200 text-end">
                  {{ footPrintArea }} m<sup>2</sup>
                </div>
                <button
                  v-if="m2a"
                  class="rounded-md bg-slate-600 text-white"
                  v-on:click="saveQuantity(parseFloat(`${footPrintArea}`))"
                >
                  To Quantity
                </button>
              </div>
              <div class="grid grid-cols-1 font-Roboto w-48 shadow-md p-1">
                <div class="font-semibold bg-slate-900 text-center text-white">
                  Footprint Perimeter
                </div>
                <div class="font-bold text-slate-600 bg-gray-200 text-end">
                  {{ footPrintPerimeter }} m<sup>3</sup>
                </div>
                <button
                  v-if="m3v"
                  class="rounded-md bg-slate-600 text-white"
                  v-on:click="saveQuantity(parseFloat(`${footPrintPerimeter}`))"
                >
                  To Quantity
                </button>
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
            The 3D view will be more comfortable to open on a wider screen.
          </p>
        </div>
      </div>

      <!-- start Card2  -->
      <div id="card2" class="">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800">Membuat RAB Baru</h3>
          <h4 class="text-md-center">Create New RAB</h4>
          <p class="text-slate-600 font-Montserrat w-[40vw]">
            Gerakkan kamera dan atur zoom dengan tepat untuk mendapatkan lokasi
            dan unit yang ditentukan. Untuk secara mudah lokasi kerusakan atau
            cacat ditemukan. Klik/Tap tombol locate untuk menyimpan.<br />
            <span class="text-slate-400 text-sm"
              >Move the camera and adjust the zoom precisely to get the
              specified location and unit. To easily find the location of issue.
              Click/Tap the locate button to save.</span
            >
          </p>
          <div class="w-[41.5vw] h-auto p-2 bg-slate-300 rounded-md shadow-md">
            <div class="mt-2">
              <div class="sm:flex rounded-lg shadow-sm">
                <span
                  class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-100 text-sm font-Roboto text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg"
                  >Unit Name</span
                >
                <input
                  id="namaid"
                  v-model="namaID"
                  type="text"
                  readonly
                  class="uppercase py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>

              <div class="sm:flex rounded-lg shadow-sm">
                <span
                  class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-100 text-sm font-Roboto text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg"
                  >Express ID</span
                >
                <input
                  id="expressid"
                  v-model="selectedExpressID"
                  type="text"
                  readonly
                  class="uppercase py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>

              <div class="relative">
                <select
                  id="product"
                  ref="product"
                  v-model="selectedProductId"
                  @change="getOneDataProduct(selectedProductId)"
                  class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                >
                  <option
                    v-for="product in hasilProductDone"
                    :key="product.id"
                    :value="product.id"
                  >
                    {{ product.product_name }}
                  </option>
                </select>
                <label
                  for="user_assign"
                  class="absolute font-Roboto top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500  peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500"
                  >Choose Product Name</label
                >
              </div>
              <div class="sm:flex rounded-lg shadow-sm">
                <span
                  class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-100 text-sm font-Roboto text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg"
                  >Category</span
                >
                <input
                  id="category"
                  v-model="category"
                  type="text"
                  readonly
                  class="uppercase py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>
              <div class="sm:flex rounded-lg shadow-sm">
                <span
                  class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-100 text-sm font-Roboto text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg"
                  >Type</span
                >
                <input
                  v-model="product_type"
                  id="type"
                  type="text"
                  readonly
                  class="uppercase py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>
              <div class="sm:flex rounded-lg shadow-sm mt-2">
                <span
                  class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-100 text-sm font-Roboto text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg"
                  >Quantity</span
                >
                <input
                  v-model="myQuantity"
                  id="myLocationRef"
                  ref="myLocationRef"
                  type="text"
                  class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>
              <div class="sm:flex rounded-lg shadow-sm">
                <span
                  class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-100 text-sm font-Roboto text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg"
                  >UoM</span
                >
                <input
                  v-model="uom"
                  id="uom"
                  type="text"
                  readonly
                  class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>
              <div class="sm:flex rounded-lg shadow-sm">
                <span
                  class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-100 text-sm font-Roboto text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg"
                  >Tariff</span
                >
                <input
                  id="tariff"
                  v-model="tariff"
                  type="text"
                  class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>
              

              <button
                class="bg-slate-500 font-bold font-Poppins rounded-md p-2 text-white mt-2"
                @click="tambahRAB"
              >
                Tambah Item di RAB
              </button>
            </div>
          </div>
          
        </div>
        <div
          class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5"
        >
          <p class="mt-1 text-sm text-gray-500">Last updated 5 mins ago</p>
        </div>
      </div>
    </div>
    <div
      class="flex p-5 flex-col bg-white border shadow-sm rounded-xl "
    >
      <div class="p-4 md:p-5">
        <h3 class="text-lg font-bold text-gray-800 ">
          Rencana Anggaran Belanja (RAB)
        </h3>
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
                    class="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 "
                    placeholder="Search for items"
                  />
                  <div
                    class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3"
                  >
                    <svg
                      class="size-4 text-gray-400 "
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
                    <thead
                      class="border-y border-gray-200 "
                    >
                      <tr>
                        <th class="py-1 ps-3">
                          <div class="flex items-center h-5">
                            <input
                              id="hs-datatable-select-all-rows"
                              type="checkbox"
                              class="border-gray-300 rounded text-blue-600 focus:ring-blue-500 "
                            />
                            <label class="sr-only">Checkbox</label>
                          </div>
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">No</th>
                        <th class="py-3 px-4 text-xs font-normal">
                          Barang/Jasa/Pekerjaan
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">
                          Unit
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">
                          Unit ID (ExpressID)
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">
                          Type
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">
                          Kategori
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">
                          Qty
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">
                          UoM
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">
                          Tariff
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">
                          Sub Total
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      class="divide-y divide-gray-200  text-center"
                    >
                      <tr v-for="(user,index) in filteredUsers" :key="user.product_id">
                        <td class="py-4 ps-4">
                          <div class="flex items-center h-5">
                            <input
                              :id="'hs-table-filter-checkbox-' + user.product_id"
                              type="checkbox"
                              class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 "
                            />
                            <label
                              :for="'hs-table-filter-checkbox-' + user.product_id"
                              class="sr-only"
                              >Checkbox</label
                            >
                          </div>
                        </td>
                        <td
                          class="p-4 text-xs font-medium text-gray-800 "
                        >
                          {{ index+1 }}
                        </td>
                        <td
                          class="p-4 text-xs font-medium text-gray-800 "
                        >
                          {{ user.product_name }}
                        </td>
                        <td
                          class="p-4 text-xs font-medium text-gray-800 "
                        >
                          {{ user.unit_name }}
                        </td>
                        <td
                          class="p-4 text-xs font-medium text-gray-800 "
                        >
                          {{ user.expreesid }}
                        </td>
                        <td
                          class="p-4 text-xs font-medium text-gray-800 "
                        >
                          {{ user.type_name }}
                        </td>
                        <td
                          class="py-4 text-xs text-gray-800 "
                        >
                          {{ user.category_name }}
                        </td>
                        <td
                          class="p-4 text-xs text-gray-800 "
                        >
                          {{ user.quantity }}
                        </td>
                        <td
                          class="p-4 text-xs text-gray-800 "
                        >
                          {{ user.uom }}
                        </td>
                        <td
                          class="p-4 text-xs text-gray-800 "
                        >
                          {{ formatRupiah(Number(user.tariff)) }}
                        </td>
                        <td
                          class="p-4 text-xs text-gray-800 "
                        >
                        {{ formatRupiah(Number(user.subtotal)) }}
                        </td>
                        <td class="p-4 text-end text-sm font-medium">
                          <button
                            type="button"
                            class="text-blue-600 hover:text-blue-800"
                          >
                            <i class="fas fa-edit"></i> Edit
                          </button>
                          <button
                            type="button"
                            class="text-red-600 hover:text-red-800 ml-2"
                          >
                            <i class="fas fa-trash-alt"></i> Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="flex items-center mt-4">
              <div class="text-xs text-gray-500 ms-auto ">
                Showing <span>{{ filteredUsers.length }}</span> users
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 "
        >
          <p class="mt-1 text-sm text-gray-500 ">
            Last updated 5 mins ago
          </p>
        </div>
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
import { BASE_URL } from "@/base.url.utils";

// Reference for container
const containerRef = ref<HTMLDivElement | null>(null);
const myLocationRef = ref<HTMLDivElement | null | string>(null);
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
const myQuantity = ref<string | null | number>(null);
const uom = ref<string | null | number>(null);
const category = ref<string | null | number>(null);
const product_type = ref<string | null | number>(null);
const tariff = ref<string | null | number>(null);
const selectedProductId = ref<string>("");
const m3v = ref<boolean>(false);
const m2a = ref<boolean>(false);
const mp = ref<boolean>(false);
const searchQuery = ref<string>("");

interface RabItem {
  product_id: string;
  product_name: string;
  type_name: string | null;
  category_name: string | null;
  tariff: string | number | null;
  quantity: number | string | null;
  expreesid: string | number | null;
  unit_name: string | null;
  uom: string | null;
  subtotal?: number;
}

const Rab = ref<RabItem[]>([]);

const getOneDataProduct = async (id: string) => {
  const url = `${BASE_URL}rab/${id}`;
  try {
    const response = await axios.get(url);
    hasilOneProductDone.value = response.data.result;
    // Update form fields
    if (hasilOneProductDone.value) {
      uom.value = hasilOneProductDone.value.uom;

      switch (uom.value) {
        case "m2":
          uom.value = "m²";
          m2a.value = true;
          m3v.value = false;
          mp.value = false;
          break;
        case "m3":
          uom.value = "m³";
          m2a.value = false;
          m3v.value = true;
          mp.value = false;
          break;
        case "unit":
          uom.value = "unit";
          m2a.value = false;
          m3v.value = false;
          mp.value = false;
          break;
        case "kg":
          uom.value = "kg";
          m2a.value = false;
          m3v.value = false;
          mp.value = false;
          break;
        default:
          uom.value = uom.value;
          m2a.value = false;
          m3v.value = false;
          mp.value = true;
      }
      category.value = hasilOneProductDone.value.category_name;
      product_type.value = hasilOneProductDone.value.type_name;
      tariff.value = hasilOneProductDone.value.tariff;
    }
    console.log("Product data:", hasilOneProductDone.value);
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};

interface ProductResult {
  id: string;
  product_name: string;
  type_name: string;
  category_name: string;
  uom: string;
  tariff: number;
  // Add other properties as needed
}

interface OneProductResult {
  id: string;
  product_name: string;
  type_name: string;
  category_name: string;
  uom: string;
  tariff: number;
  // Add other properties as needed
}

const hasilProductDone = ref<ProductResult[]>([]);

const hasilOneProductDone = ref<OneProductResult | null>(null);

function saveQuantity(num: number) {
  console.log("Saving Quantity:", num);

  myQuantity.value = num;

  // Set value ke input field
}

function tambahRAB() {
  if (!hasilOneProductDone.value) return;

  const quantity = Number(myQuantity.value) || 0;
  const tariffValue = Number(tariff.value) || 0;

  const data: RabItem = {
    product_id: hasilOneProductDone.value.id,
    product_name: hasilOneProductDone.value.product_name,
    type_name: hasilOneProductDone.value.type_name || null, // Ensure this is string | null
    category_name: hasilOneProductDone.value.category_name || null, // Ensure this is string | null
    tariff: tariff.value || null,
    quantity: myQuantity.value || null,
    unit_name: namaID.value || null,
    expreesid: selectedExpressID.value || null,
    uom: hasilOneProductDone.value.uom || null,
    subtotal: quantity * tariffValue,
  };

  Rab.value.push(data);
  console.log("Rab isinya: ", Rab.value);
}

const filteredUsers = computed<RabItem[]>(() => {
  if (!searchQuery.value) {
    return Rab.value;
  }
  return Rab.value.filter(
    (user) =>
      user.product_name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.unit_name?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.type_name?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.expreesid?.toLocaleString().includes(searchQuery.value) ||
      user.unit_name?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.category_name?.toLowerCase().includes(searchQuery.value.toLowerCase())
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

  highlightByExpressID(1225, 50, 50, 50, 0, 0, 0);

  async function getDataProduct() {
    const url = `${BASE_URL}rab/product`;

    try {
      const dataIssue = await axios.get(url);
      hasilProductDone.value = dataIssue.data.result;
      console.log("Hasil issue Done: ", hasilProductDone.value);
    } catch (error) {
      console.log("Hasil issue Done: ", error);
    }
  }

  watch(selectedExpressID, (newValue) => {
    console.log("Updated selectedExpressID:", newValue);
    getDataBim(newValue);
  });

  getDataProduct();
});

function formatTanggal(dateString: string) {
    const tanggal = new Date(dateString);
    const localeDate = tanggal.toLocaleDateString("en-GB");
  
    return localeDate;
  }

  function formatDateTime(dateString: string) {
  const date = new Date(dateString);
  
  return date.toLocaleString("en-GB"); // "DD/MM/YYYY, HH:MM:SS"
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
