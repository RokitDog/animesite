import { IAnimeResult } from "@consumet/extensions";
import Image from "next/image"
import Link from "next/link";
import './animecard.css'


type Props = {
  recentanime: {
    id: 'string',
    episodeId: 'string',
    episodeNumber: number,
    title: 'string',
    image: 'string',
    url: 'string',
  }[]
}

function AnimeCard({recentanime}: Props) {
  return (
      <div className="grid grid-cols-4 gap-[34px] mt-[34px] mb-[34px]">
        {recentanime.map((anime) => (
        <Link href={`/anime/${anime.id}?episode=${anime.episodeNumber}`} key={anime.id} className='relative cursor-pointer anime-card group'>
            <Image 
            alt='Anime Image Cover'
            src={anime.image!}
            width={301}
            height={193}
            className='w-[301px] aspect-square object-cover object-center opacity-100 hover:opacity-40 transition-opacity duration-150 relative'
            />
            <div className="absolute bottom-0 bg-[#F6399D] group-hover:bg-opacity-100 transition-opacity duration-150 ease-in-out bg-opacity-90 w-full h-6 opacity-100 flex justify-between px-2 ">
              <h2 className='text-sm font-medium truncate max-w-[65%] leading-[1.55rem]'>{anime.title}</h2>
              <div className="space-x-2">
                <span className="text-xs font-medium border border-xs rounded-md px-2">{anime.episodeNumber}</span>
              </div>
            </div>
            <button className="button opacity-0 group-hover:opacity-100 pointer-events-none"></button>
          </Link>
        ))}
    </div>
  )
}

export default AnimeCard