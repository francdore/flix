import axios from "axios";

export const getShows = async () => {
  return await axios.get("/shows");
};

export const getShowById = async (id: number) => {
  return await axios.get(`/shows/${id}`);
};

export const searchShowByName = async (searchQuery: string) => {
  return await axios.get(`/search/shows`, { params: { q: searchQuery } });
};

export const getShowEpisodes = async (showId: string) => {
  return await axios.get(`/shows/${showId}/episodes`);
};
