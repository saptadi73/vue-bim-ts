<template>
  <div>
    <div
      class="grid p-5 md:grid-cols-2 md:gap-4 bg-white border shadow-sm rounded-xl w-[80vw]"
    >
      <!-- start Card  -->
      <div id="card1" class="">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800">
            Create Product Type and Category
          </h3>
          <h4 class="text-base font-semibold text-slate-600 mt-2">
            Create Type
          </h4>
          <div class="sm:flex rounded-lg shadow-sm mt-3">
            <span
              class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-100 text-sm font-Roboto text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg"
              >Type</span
            >
            <input
              v-model="product_type"
              id="type"
              type="text"
              readonly
              class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>
          <button
            class="rounded-lg shadow-lg bg-slate-900 text-white font-Roboto p-2 mt-5"
          >
            Add Type
          </button>

          <h4 class="text-base font-semibold text-slate-600 mt-3">
            Create Category
          </h4>
          <div class="sm:flex rounded-lg shadow-sm mt-3">
            <span
              class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-100 text-sm font-Roboto text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg"
              >Category</span
            >
            <input
              v-model="product_category"
              id="category"
              type="text"
              readonly
              class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>
          <button
            class="rounded-lg shadow-lg bg-slate-900 text-white font-Roboto p-2 mt-5"
          >
            Add Category
          </button>
        </div>
        <div
          class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5"
        >
          <p class="mt-1 text-sm text-gray-500">Last updated 5 mins ago</p>
        </div>
      </div>

      <!-- start Card2  -->
      <div id="card2" class="">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800">Create RAB Product</h3>
          <h4 class="text-base font-semibold text-slate-600 mt-2">
            Create Product
          </h4>
          <div class="sm:flex rounded-lg shadow-sm mt-3">
            <span
              class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-100 text-sm font-Roboto text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg"
              >Product Name</span
            >
            <input
              v-model="product_name"
              id="product_name"
              type="text"
              class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>
          <div class="relative">
            <select
              id="product_type_select"
              ref="productTypeSelect"
              v-model="selectedProductType"
              class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
            >
              <option
                v-for="product in ListProductTypeItem"
                :key="product.id"
                :value="product.id"
              >
                {{ product.type_name }}
              </option>
            </select>
            <label
              for="product_type_select"
              class="absolute font-Roboto top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500"
              >Choose Product Type</label
            >
          </div>

          <div class="relative">
            <select
              id="product_category_select"
              ref="productCategorySelect"
              v-model="selectedProductCategory"
              class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
            >
              <option
                v-for="product in ListProductCategory"
                :key="product.id"
                :value="product.id"
              >
                {{ product.category_name }}
              </option>
            </select>
            <label
              for="product_category_select"
              class="absolute font-Roboto top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500"
              >Choose Product Category</label
            >
          </div>

          <div class="relative">
            <select
              id="uom"
              ref="productUoMSelect"
              v-model="selectedProductUoM"
              class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
            >
              <option
                v-for="product in ListProductUoM"
                :key="product.id"
                :value="product.id"
              >
                {{ product.uom }}
              </option>
            </select>
            <label
              for="uom"
              class="absolute font-Roboto top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500"
              >Unit of Measurement</label
            >
          </div>

          <div class="sm:flex rounded-lg shadow-sm mt-3">
            <span
              class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-100 text-sm font-Roboto text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg"
              >Tariff</span
            >
            <input
              v-model="tariff"
              id="tariff"
              type="number"
              class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>

          
        </div>
        <div
          class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5"
        >
          <p class="mt-1 text-sm text-gray-500">Last updated 5 mins ago</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import { BASE_URL } from "@/base.url.utils";

const product_type = ref<string>("");
const product_name = ref<string>("");
const product_category = ref<string>("");
const selectedProductType = ref<string>("");
const selectedProductCategory = ref<string>("");
const selectedProductUoM = ref<string>("");
const tariff = ref<string>("");

interface ProductTypeItem {
  id: string;
  type_name: string;
}

interface ProductCategoryItem {
  id: string;
  category_name: string;
}

interface ProductUoMItem {
  id: string;
  uom: string;
}

const ListProductTypeItem = ref<ProductTypeItem[]>([]);
const ListProductCategory = ref<ProductCategoryItem[]>([]);
const ListProductUoM = ref<ProductUoMItem[]>([]);

async function getProductType() {
  const url = `${BASE_URL}rab/product/type`;
  try {
    const response = await axios.get(url);
    if (response.data && response.data.result) {
      ListProductTypeItem.value = response.data.result;
      console.log("List Produk Type", ListProductTypeItem.value);
    } else {
      console.error("Unexpected API response structure", response.data);
    }
  } catch (error) {
    console.error("Error fetching product types:", error);
    // You might want to show a user-friendly error message here
  }
}

async function getProductCategory() {
  const url = `${BASE_URL}rab/product/category`;
  try {
    const response = await axios.get(url);
    if (response.data && response.data.result) {
      ListProductCategory.value = response.data.result;
      console.log("List Produk Category", ListProductCategory.value);
    } else {
      console.error("Unexpected API response structure", response.data);
    }
  } catch (error) {
    console.error("Error fetching product categories:", error);
    // You might want to show a user-friendly error message here
  }
}

async function getProductUoM() {
  const url = `${BASE_URL}rab/product/uom`;
  try {
    const response = await axios.get(url);
    if (response.data && response.data.result) {
      ListProductUoM.value = response.data.result;
      console.log("List Produk UoM", ListProductUoM.value);
    } else {
      console.error("Unexpected API response structure", response.data);
    }
  } catch (error) {
    console.error("Error fetching product categories:", error);
    // You might want to show a user-friendly error message here
  }
}

onMounted(() => {
  getProductType();
  getProductCategory();
  getProductUoM();
});
</script>

<style lang="scss" scoped></style>
