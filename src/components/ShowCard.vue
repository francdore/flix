<template>
  <div
    class="rounded-xl bg-gray-800 mr-3 transition-all hover:scale-105 cursor-pointer active:cursor-grabbing"
    @click="setSelectedShowAndNavigate(show)"
  >
    <div>
      <img
        ref="showCardImage"
        v-if="show?.image.medium"
        :src="show?.image.medium"
        :alt="show?.name"
        class="w-96 rounded"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Show } from "@/app/types";
import { toRefs } from "vue";
import { useShowStore } from "@/stores/show";
import { useRouter } from "vue-router";

const router = useRouter();

const showStore = useShowStore();

const { setCurrentlySelectedShow } = showStore;

interface ShowCardProps {
  show: Show;
}

const props = defineProps<ShowCardProps>();

const { show } = toRefs(props);

// This can be changed to an event emitter and functionality can be moved to home view
const setSelectedShowAndNavigate = (show: Show) => {
  setCurrentlySelectedShow(show);
  router.push("/show/" + show.id);
};
</script>
