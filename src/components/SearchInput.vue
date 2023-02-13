<template>
  <input
    type="text"
    :placeholder="placeHolder"
    v-model="searchQuery"
    @input="onSearch"
    class="bg-black px-3 py-2 outline-0 border border-black transition-all rounded-full focus:border-1 focus:border-gray-600"
  />
</template>
<script setup lang="ts">
import { ref, toRefs } from "vue";

const searchQuery = ref<string>("");

export interface SearchEmits {
  (e: "input", event: string): void;
}

const emit = defineEmits<SearchEmits>();

interface SearchProps {
  placeHolder: string;
}

const props = defineProps<SearchProps>();

const { placeHolder } = toRefs(props);

const onSearch = () => {
  emit("input", searchQuery.value);
};
</script>
