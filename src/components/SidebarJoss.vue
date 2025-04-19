<template>
  <div>
    <div
      :class="{ 'w-14': !isiSidebar, 'w-48': isiSidebar }"
      class="z-10 bg-gradient-to-r font-Poppins from-purple-200 to-slate-100 pl-3 h-[133vh] w-14 transition-transform duration-500 relative"
    >
      <span
        @click="openSidebar"
        class="material-icons transition-transform duration-500 cursor-pointer bg-slate-600 text-white border border-slate-700 rounded-full absolute -right-3 top-9"
        :class="{ 'rotate-180': !isiSidebar, 'rotate-0': isiSidebar }"
      >
        arrow_back
      </span>
      <div
        class="flex items-center bg-gradient-to-r from-slate-200 to-white rounded-r-lg space-x-2"
      >
        <img src="../assets/white_logo.png" class="w-10 h-10" />
        <h1 v-if="isiSidebar" class="font-Poppins ml-5 text-2xl">
          <span class="font-bold text-slate-900">BIM</span>
          <span class="font-semibold text-slate-500">PROJECT</span>
        </h1>
      </div>
      <div v-for="menu in menus" :key="menu.title" class="mt-4">
        <div class="flex justify-between hover:bg-slate-100 rounded-md">
          <div
            @click="toggleSubmenu(menu)"
            class="flex items-center cursor-pointer ml-3 mt-4"
          >
            <RouterLink :to="menu.path || '#'">
              <span
                class="material-icons text-slate-700 hover:text-slate-500"
                >{{ menu.icon }}</span
              >
              <span
                v-if="isiSidebar"
                class="ml-2 text-slate-800 hover:text-slate-500"
                >{{ menu.title }}</span
              >
            </RouterLink>
          </div>
          <span
            v-if="isiSidebar && menu.submenu"
            :class="{ 'rotate-180': menu.open, 'rotate-0': !menu.open }"
            class="material-icons text-slate-600 right-2 mt-4"
          >
            arrow_drop_down
          </span>
        </div>
        <ul
          v-if="menu.open && menu.submenu && isiSidebar"
          class="text-slate-700 bg-gray-100 rounded-md ml-6 z-10"
        >
          <li
            v-for="sub in menu.submenu"
            :key="sub.name"
            class="hover:bg-slate-100 hover:font-semibold p-1"
          >
            <RouterLink :to="sub.path || '#'" class="block">{{
              sub.name
            }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import router from "../router";
import { useRoute } from "vue-router";

const route = useRoute();
const UUIDku = ref<string>("");

interface Submenu {
  name: string;
  path: string;
}

interface Menu {
  title: string;
  icon: string;
  path?: string; // keep optional if some menu items truly have no path
  submenu?: Submenu[]; // submenu entries must have path
  open?: boolean;
}

const isiSidebar = ref<boolean>(false);
const menus = ref<Menu[]>([]);
function getUUID() {
  const uuid = route.params.uuid;
  const finalUUID = Array.isArray(uuid) ? uuid[0] : uuid || "";
  UUIDku.value = finalUUID;

  menus.value = [
    { title: "Dashboard", icon: "dashboard", path: `/project/dashboard/${finalUUID}` },
    { title: "Project View", icon: "roofing", path: `/project/view/${finalUUID}` },
    {
      title: "Task",
      icon: "carpenter",
      path: `/project/task/list/1/50/50/50/${finalUUID}`,
      submenu: [
        { name: "Task List", path: `/project/task/list/1/50/50/50/${finalUUID}` },
        { name: "Create Task", path: `/project/task/create/${finalUUID}` },
      ],
      open: false,
    },
    {
      title: "Issue",
      icon: "handyman",
      path: `/project/issue/list/1/50/50/50/${finalUUID}`,
      submenu: [
        {
          name: "Issue List",
          path: `/project/issue/list/1/50/50/50/${finalUUID}`,
        },
        { name: "Create Issue", path: `/project/issue/create/${finalUUID}` },
      ],
      open: false,
    },
    {title: "Document", icon: "design_services",path: `/project/document/${finalUUID}`},
    {
      title: "RAB",
      icon: "app_registration",
      path: `/rab/create/${finalUUID}`,
      submenu: [
        { name: "Create", path: `/rab/create/${finalUUID}` },
        { name: "RAB Product", path: `/rab/product/${finalUUID}` },
      ],
      open: false,
    },
    {
      title: "Library",
      icon: "auto_stories",
      path: `/library/view/${finalUUID}`,
      submenu: [
        { path: `/library/view/${finalUUID}`, name: "List Libraries" },
        { name: "Upload New", path: `/library/view/${finalUUID}` },
      ],
      open: false,
    },
    {
      title: "Team",
      icon: "engineering",
      path: `/setting/user/${finalUUID}`,
      submenu: [
        { name: "List User", path: `/setting/user/${finalUUID}` },
        { name: "Register User", path: `/setting/register/${finalUUID}`},
      ],
      open: false,
    },
  ];
}

const openSidebar = () => {
  isiSidebar.value = !isiSidebar.value;
};

const toggleSubmenu = (menu: Menu) => {
  if (menu.submenu) {
    menu.open = !menu.open;
  }
};

getUUID();
</script>

<style scoped>
@media (max-width: 768px) {
  .w-64 {
    width: 100%;
  }
}
</style>
