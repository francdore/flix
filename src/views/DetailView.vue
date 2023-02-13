<template>
  <div class="mt-5">
    <div
      v-if="currentSelectedShow"
      class="flex flex-col justify-evenly md:flex-row"
    >
      <div class="p-3 flex-1" v-if="currentSelectedShow?.image?.original">
        <img
          :src="currentSelectedShow.image.original"
          :alt="currentSelectedShow.name"
        />
      </div>
      <div class="p-3 flex-1">
        <h1 class="mb-3">
          <router-link to="/">
            <ArrowLeftCircleIcon class="h-6 w-6 text-white inline-block" />
          </router-link>
          {{ currentSelectedShow.name }}
        </h1>
        <p class="mb-3">
          {{ currentSelectedShow.language }}, Rating:
          {{ currentSelectedShow.rating.average }}/10, Genres: {{ genreList }}
        </p>
        <div v-html="currentSelectedShow.summary"></div>
        <div class="mt-5" v-if="currentSelectedShow?.episodes">
          <div
            v-for="[season, episodes] in Object.entries(
              currentSelectedShow?.episodes
            )"
            :key="season"
            class="mb-4"
          >
            <h2 class="mb-3 rounded-lg bg-neutral-700 p-2">
              Season {{ season }}
            </h2>
            <div v-for="episode in episodes" :key="episode.id" class="mb-1">
              <h3>{{ episode.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      Please select a show from the home page or search in the top right corner.
    </div>
  </div>
</template>
<script setup lang="ts">
import { useShowStore } from "@/stores/show";
import { storeToRefs } from "pinia";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { ArrowLeftCircleIcon } from "@heroicons/vue/20/solid";

const route = useRoute();

const showStore = useShowStore();

const { getSelectedShowById } = showStore;

const { currentSelectedShow } = storeToRefs(showStore);

const genreList = computed(() => {
  return currentSelectedShow?.value?.genres.join(", ");
});

onMounted(() => {
  if (route.params.id.length) {
    getSelectedShowById(+route.params.id);
  }
});
</script>
