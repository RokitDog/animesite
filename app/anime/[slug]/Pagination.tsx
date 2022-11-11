import Link from "next/link";

interface Props {
    fetchAnimeDetails: any
    slug: string
    params: string
}

async function Pagination({fetchAnimeDetails, slug, params}: Props) {
    const animeDetails = await fetchAnimeDetails(slug)
    const totalEpisodes  = Array.from(Array(Number(animeDetails.totalEpisodes)).keys());

  return (
    <div className="flex flex-wrap gap-2 items-start justify-start mt-[12px] mb-[34px]">
        {totalEpisodes.map((episode) => <Link href={`/anime/${slug}?episode=${episode+1}`} key={episode} className={`px-2 py-1 rounded-md hover:bg-white hover:text-black hover:shadow-md  transition-all duration-150 ease-in-out cursor-pointer ${episode + 1 === Number(params) ? 'bg-[#F6399D]' : 'bg-gray-900'}`}>{episode + 1}</Link>)}
    </div> 
  )
}

export default Pagination