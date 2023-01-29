import { ANIME } from "@consumet/extensions"
const anime = new ANIME.Gogoanime();

export const recentEpisodes = async () => anime.fetchRecentEpisodes(1).then(data => data)
