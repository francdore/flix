import type { Episode } from "@/app/types";

export const groupEpisodesBySeason = (episodes: Episode[]) => {
  return episodes.reduce((group: any, product: any) => {
    const { season } = product;
    group[season] = group[season] || [];
    group[season].push(product);
    return group;
  }, {});
};
