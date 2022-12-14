
import AnimeCard from "./AnimeCard";

const getRecentAnime = async (pageNumber: String) => {
    const response = await fetch(`https://gogoanime.consumet.org/recent-release?page=${pageNumber}`, { cache: 'no-store'});
    return await response.json()
}

async function LatestAnime() {
  const recentAnimeData = await getRecentAnime('1');
  const recentAnimeData2 = await getRecentAnime('2');

  return (
    <>
      <div className="mt-[34px] bg-gray-900 p-4 rounded-md">
        <h2 className="text-2xl font-medium">Recent Episodes</h2>
      </div>
      <AnimeCard recentanime={recentAnimeData} />
      <AnimeCard recentanime={recentAnimeData2} />
    </>
  )
}

export default LatestAnime