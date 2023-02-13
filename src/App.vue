<script setup lang="ts">
import { RouterView } from "vue-router";
import MainHeader from "@/components/MainHeader.vue";
import { onMounted } from "vue";
import { useShowStore } from "@/stores/show";
const showStore = useShowStore();

const { getShowsHomePage } = showStore;

onMounted(() => {
  getShowsHomePage();
});
</script>

<template>
  <MainHeader></MainHeader>
  <div class="container mx-auto p-6">
    <RouterView />
  </div>
</template>
