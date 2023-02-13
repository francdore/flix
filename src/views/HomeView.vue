<template>
  <div class="mt-4">
    <keep-alive>
      <ShowCardList
        v-for="genre in homePageShowList"
        :key="genre.genreName"
        :genre="genre"
      />
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
import { useShowStore } from "@/stores/show";
import ShowCardList from "@/components/ShowCardList.vue";
import { storeToRefs } from "pinia";

const showStore = useShowStore();
const { homePageShowList } = storeToRefs(showStore);
</script>
