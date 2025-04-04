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
      <div class="flex items-center bg-gradient-to-r from-slate-200 to-white rounded-r-lg space-x-2">
        <img src="../assets/white_logo.png" class="w-10 h-10" />
        <h1 v-if="isiSidebar" class="font-Poppins ml-5 text-2xl">
          <span class="font-bold text-slate-900">BIM</span>
          <span class="font-semibold text-slate-500">PROJECT</span>
        </h1>
      </div>
      <div v-for="menu in menus" :key="menu.title" class="mt-4">
        <div class="flex justify-between hover:bg-slate-100 rounded-md">
          <div @click="toggleSubmenu(menu)" class="flex items-center cursor-pointer ml-3 mt-4">
            <RouterLink :to="menu.path || '#'">
              <span class="material-icons text-slate-700 hover:text-slate-500">{{ menu.icon }}</span>
              <span v-if="isiSidebar" class="ml-2 text-slate-800 hover:text-slate-500">{{ menu.title }}</span>
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
        <ul v-if="menu.open && menu.submenu && isiSidebar" class="text-slate-700 bg-gray-100 rounded-md ml-6 z-10">
          <li v-for="sub in menu.submenu" :key="sub.name" class="hover:bg-slate-100 hover:font-semibold p-1">
            <RouterLink :to="sub.path" class="block">{{ sub.name }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

interface Submenu {
  name: string;
  path: string;
}

interface Menu {
  title: string;
  icon: string;
  path?: string;
  submenu?: Submenu[];
  open?: boolean;
}

const isiSidebar = ref<boolean>(false);
const menus = ref<Menu[]>([
  { title: "Dashboard", icon: "dashboard", path: "/dashboard" },
  {
    title: "Project",
    icon: "roofing",
    submenu: [
      { name: "List Project", path: "/project/list" },
      { name: "New Project", path: "/project/new" },
      { name: "Project Team", path: "/project/team" }
    ],
    open: false
  },
  {
    title: "Document",
    icon: "architecture",
    submenu: [
      { name: "List Document", path: "/document/list" },
      { name: "Upload New", path: "/document/new" },
    ],
    open: false
  },
  {
    title: "Library",
    icon: "auto_stories",
    submenu: [
      { path: "/library/list", name: "List Libraries" },
      { name: "Upload New", path: "/library/new" },
    ],
    open: false
  },
  {
    title: "Settings",
    icon: "settings",
    submenu: [
      { name: "List User", path: "/setting/user" },
      { name: "Register User", path: "/settings/register" },
    ],
    open: false
  }
]);

const openSidebar = () => {
  isiSidebar.value = !isiSidebar.value;
};

const toggleSubmenu = (menu: Menu) => {
  if (menu.submenu) {
    menu.open = !menu.open;
  }
};
</script>

<style scoped>
@media (max-width: 768px) {
  .w-64 {
    width: 100%;
  }
}
</style>
