<template>
  <div class="mb-10">
    <h2 class="mb-4">{{ genre.genreName }}</h2>
    <carousel :items-to-show="numberOfCardsToDisplay" wrap-around>
      <slide v-for="show in genre.shows" :key="show.id">
        <ShowCard :show="show" />
      </slide>
      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<script setup lang="ts">
import ShowCard from "@/components/ShowCard.vue";
import type { ShowGenre } from "@/app/types";
import { computed, toRefs } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();

const numberOfCardsToDisplay = computed(() => {
  return width.value < 900 ? 3 : 5;
});

interface GenreProps {
  genre: ShowGenre;
}

const props = defineProps<GenreProps>();
const { genre } = toRefs(props);
</script>
<style lang="scss">
.carousel__viewport {
  padding: 26px;
}

.carousel__prev {
  left: -37px;
}

.carousel__next {
  right: -37px;
}

.carousel__icon {
  fill: #ffffff;
}
</style>
