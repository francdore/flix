<template>
  <div class="h-16 flex items-center bg-neutral-800 px-8">
    <router-link to="/">
      <img
        src="/src/assets/img/netflix.png"
        class="shrink-0 w-32 h-auto mr-4"
        alt="Netflix"
      />
    </router-link>
    <div class="ml-auto relative m-w-24 md:min-w-80">
      <SearchInput place-holder="Search" @input="searchTvShows" />
      <div
        v-if="showSearchList.length"
        class="search-results w-full absolute bg-neutral-800 z-10 rounded-lg drop-shadow-md p-2 top-16 max-h-80 overflow-y-auto"
      >
        <ul>
          <li
            v-for="searchResult of showSearchList"
            :key="searchResult.show.id"
            @click="selectSearchResult(searchResult.show.id)"
            class="p-2 rounded-lg cursor-pointer transition-all hover:bg-neutral-900"
          >
            {{ searchResult.show.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SearchInput from "@/components/SearchInput.vue";
import { useShowStore } from "@/stores/show";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const showStore = useShowStore();
const { getShowsByName, getSelectedShowById, clearSearchResults } = showStore;
const { showSearchList } = storeToRefs(showStore);

const router = useRouter();

const searchTvShows = (searchQuery: string) => {
  getShowsByName(searchQuery);
};

const selectSearchResult = (showId: number) => {
  getSelectedShowById(showId).then(() => {
    clearSearchResults();
    router.push(`/show/${showId}`);
  });
};
</script>
<style lang="scss">
.search-results {
  &::-webkit-scrollbar {
    @apply w-3;
  }

  &::-webkit-scrollbar-track {
    @apply bg-neutral-800;
  }

  &::-webkit-scrollbar-thumb {
    @apply bg-neutral-900;
  }
}
</style>
