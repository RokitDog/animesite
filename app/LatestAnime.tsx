import AnimeCard from "./AnimeCard";

async function LatestAnime() {
  const data = await fetch(`${process.env.BASIC_URL}/api/getRecentAnime`, {cache: "no-store"}).then(res => res.json())

  return (
    <>
      <div className="mt-[34px] bg-gray-900 p-4 rounded-md">
        <h2 className="text-2xl font-medium">Recent Episodes</h2>
      </div>
      <AnimeCard recentanime={data.results} />
    </>
  )
}

export default LatestAnime