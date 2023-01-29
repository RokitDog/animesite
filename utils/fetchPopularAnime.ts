import { ANIME } from "@consumet/extensions"
const anime = new ANIME.Gogoanime();

export const popularAnime = async () => anime.fetchTopAiring(1).then(data => data)
