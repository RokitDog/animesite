import Link from "next/link";

const fetchEpisode = async (name: String, episode: String) => {
    const data = await fetch(`https://gogoanime.consumet.org/vidcdn/watch/${name}-episode-${episode}`)
    const animeEpisode = await data.json();

    return animeEpisode
}

export default async function Page({ params, searchParams }: {
    params: { slug: string },
    searchParams: { episode: string },
  }) {

    const episode = await fetchEpisode(params.slug, searchParams.episode)
    const episodeName = params.slug.replaceAll('-', ' ');

    return (
      <>
        <h2 className="text-2xl font-medium mt-[34px] capitalize">{episodeName}, Episode: {searchParams.episode}</h2>
        {episode.Referer ? <iframe src={episode.Referer} className='aspect-video w-full mt-2' allowFullScreen/> : <p className="text-4xl text-center my-[68px]">We are sorry, the episode that you are looking for doesnt exist...</p>}
        <div className="flex items-center justify-between mt-[12px]">
        <Link className="bg-gray-500 p-3 hover:bg-gray-400 transition-all duration-150 ease-in-out" href={`/anime/${params.slug}?episode=${Number(searchParams.episode) - 1}`}>Previous Episode</Link>
        <Link className="bg-gray-500 p-3 hover:bg-gray-400 transition-all duration-150 ease-in-out" href={`/anime/${params.slug}?episode=${Number(searchParams.episode) + 1}`}>Next Episode</Link>
        </div>
      </>
    );
  }