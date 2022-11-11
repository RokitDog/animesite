
import AnimeCard from "./AnimeCard";

const getRecentAnime = async (pageNumber: String) => {
    const response = await fetch(`https://gogoanime.consumet.org/recent-release?page=${pageNumber}`, { cache: 'no-cache'});
    return await response.json()
}

async function LatestAnime() {
  const recentAnimeData = await getRecentAnime('1');
  const recentAnimeData2 = await getRecentAnime('2');
  const recentAnimeData3 = await getRecentAnime('3');

  return (
    <>
      <AnimeCard recentanime={recentAnimeData} />
      <AnimeCard recentanime={recentAnimeData2} />
      <AnimeCard recentanime={recentAnimeData3} />
    </>
  )
}

export default LatestAnime