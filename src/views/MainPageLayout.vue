<template>
    <div>
        <div class="flex">
            <SidebarJoss/>
            <div class="">
                <NavbarPreline/>
                <div><CardWidthFull/></div>
                <div><CardGridView/></div>
                <div><CardColTiga/></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import NavbarPreline from '../components/NavbarPreline.vue';
import CardWidthFull from '../components/CardWidthFull.vue';
import CardGridView from '../components/CardGridView.vue';
import CardColTiga from '../components/CardColTiga.vue';
import SidebarJoss from '../components/SidebarJoss.vue';

</script>

<style lang="scss" scoped>

</style>