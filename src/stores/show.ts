import { ref } from "vue";
import { defineStore } from "pinia";
import {
  getShowById,
  getShowEpisodes,
  getShows,
  searchShowByName,
} from "@/app/api";
import type { Show, ShowGenre } from "@/app/types";
import { config } from "@/config";
import { groupEpisodesBySeason } from "@/utils/utils";

export const useShowStore = defineStore("show", () => {
  const homePageShowList = ref<ShowGenre[]>([]);
  const currentSelectedShow = ref();
  const showSearchList = ref<Show[]>([]);

  const getShowsHomePage = async () => {
    try {
      const { data } = await getShows();

      config.homeCategories.forEach((genre: string) => {
        const showsByGenre = data
          .filter((show: Show) => show.genres.includes(genre))
          .sort((a: Show, b: Show) => a.rating.average > b.rating.average);

        homePageShowList.value.push({ genreName: genre, shows: showsByGenre });
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getSelectedShowById = async (id: number) => {
    try {
      const { data } = await getShowById(id);
      setCurrentlySelectedShow(data);
    } catch (e) {
      console.log(e);
    }
  };

  const setCurrentlySelectedShow = (show: Show) => {
    currentSelectedShow.value = show;
    getShowEpisodeList(show.id);
  };

  const getShowsByName = async (name: string) => {
    try {
      const { data } = await searchShowByName(name);
      showSearchList.value = data;
    } catch (e) {
      console.log(e);
    }
  };

  const getShowEpisodeList = async (showId: string) => {
    try {
      const { data } = await getShowEpisodes(showId);
      currentSelectedShow.value.episodes = groupEpisodesBySeason(data);
    } catch (e) {
      console.log(e);
    }
  };

  const clearSearchResults = () => {
    showSearchList.value = [];
  };

  return {
    homePageShowList,
    currentSelectedShow,
    showSearchList,
    getShowsHomePage,
    getSelectedShowById,
    setCurrentlySelectedShow,
    getShowsByName,
    clearSearchResults,
    getShowEpisodeList,
  };
});
