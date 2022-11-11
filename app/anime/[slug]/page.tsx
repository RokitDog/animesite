import Link from "next/link";
// import Iframe from "./Iframe";

// const fetchEpisode = async (name: String, episode: String) => {
//     const data = await fetch(`https://gogoanime.consumet.org/vidcdn/watch/${name}-episode-${episode}`)
//     const animeEpisode = await data.json();

//     return animeEpisode
// }

// const fetchAnimeDetails = async (name: String) => {
//   const data = await fetch(`https://gogoanime.consumet.org/anime-details/${name}`)
//   const animeDetails = await data.json();

//   return animeDetails;
// }

export default async function Page({ params, searchParams }: {
    params: { slug: string },
    searchParams: { episode: string },
  }) {

    // const episode = await fetchEpisode(params.slug, searchParams.episode)
    // const animeDetails = await fetchAnimeDetails(params.slug);
    // const totalEpisodes  = Array.from(Array(Number(animeDetails.totalEpisodes)).keys());

    return (
      <>
        <h2 className="text-2xl font-medium mt-[34px] capitalize">, Episode: {searchParams.episode}</h2>
        {/* {episode.Referer ? <Iframe episode={episode.Referer} /> : <p className="text-4xl text-center my-[68px]">We are sorry, the episode that you are looking for doesnt exist...</p>} */}
        {/* <div className="flex items-center justify-between mt-[12px]">
        <Link className="bg-gray-500 p-3 hover:bg-gray-400 transition-all duration-150 ease-in-out" href={`/anime/${params.slug}?episode=${Number(searchParams.episode) - 1}`}>Previous Episode</Link>
        <Link className="bg-gray-500 p-3 hover:bg-gray-400 transition-all duration-150 ease-in-out" href={`/anime/${params.slug}?episode=${Number(searchParams.episode) + 1}`}>Next Episode</Link>
        </div> */}
        {/* <div className="flex flex-wrap space-x-2 mt-[12px] mb-[34px]">
          {totalEpisodes.map((episode) => <Link href={`/anime/${params.slug}?episode=${episode+1}`} key={episode} className={`px-2 py-1 rounded-md hover:bg-white hover:text-black hover:shadow-md  transition-all duration-150 ease-in-out cursor-pointer ${episode + 1 === Number(searchParams.episode) ? 'bg-[#F6399D]' : 'bg-gray-900'}`}>{episode + 1}</Link>)}
        </div> */}
      </>
    );
  }