import Link from "next/link";
import { Suspense } from "react";
import CurentEpisode from "./CurentEpisode";
import Pagination from "./Pagination";

const fetchEpisode = async (name: String, episode: String) => {
    const data = await fetch(`https://gogoanime.consumet.org/vidcdn/watch/${name}-episode-${episode}`, {cache: 'force-cache'})
    return data.json()
}

const fetchAnimeDetails = async (name: String) => {
  const data = await fetch(`https://gogoanime.consumet.org/anime-details/${name}`, {cache: 'force-cache'})
  return data.json()
}

export default async function Page({ params, searchParams }: {
    params: { slug: string },
    searchParams: { episode: string },
  }) {

    return (
      <>
        <Suspense fallback={<div>Loading Episode</div>}>
        <CurentEpisode fetchEpisode={fetchEpisode} fetchAnimeDetails={fetchAnimeDetails} slug={params.slug} searchParams={searchParams.episode} />
        </Suspense>
        <div className="flex items-center justify-between mt-[12px]">
        <Link className="bg-gray-500 p-3 hover:bg-gray-400 transition-all duration-150 ease-in-out" href={`/anime/${params.slug}?episode=${Number(searchParams.episode) - 1}`}>Previous Episode</Link>
        <Link className="bg-gray-500 p-3 hover:bg-gray-400 transition-all duration-150 ease-in-out" href={`/anime/${params.slug}?episode=${Number(searchParams.episode) + 1}`}>Next Episode</Link>
        </div>
        <Suspense fallback={<div>Loading Pagination</div>}>
          <Pagination params={searchParams.episode} slug={params.slug} fetchAnimeDetails={fetchAnimeDetails} />
        </Suspense>
      </>
    );
  }
  