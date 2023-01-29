
'use client'
import './hero.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import SwiperCore, { Autoplay, Pagination, Scrollbar } from 'swiper'
import Image from "next/image"
import Link from 'next/link';

export interface Props {
    popularAnimeData: {
        id: string
        title: string
        image: string
        url: string
    }[]
}

function Hero({popularAnimeData}: Props) {
  SwiperCore.use([Autoplay, Pagination, Scrollbar])
  return (
    <Swiper
    spaceBetween={0}
    slidesPerView={1}
    autoplay={{delay: 5000}}
    pagination={{clickable: true}}
    scrollbar={{draggable: true}}
    loop={true}
    >
        {popularAnimeData.map((anime) => (
        <SwiperSlide key={anime.id}>
          <div className='relative w-full before:w-full before:bg-black before:absolute before:left-0 z-10 before:top-0 before:h-full before:content=[""] before:opacity-40'>
            <h3 className='absolute right-8 bottom-16 text-5xl z-10'>{anime.title}</h3>
            <Link prefetch={false} href={`/anime/${anime.id}?episode=1`} className='absolute left-8 bottom-16 inline-flex items-center py-2 px-4 mr-3 text-lg font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
              Watch Now
            </Link>
            <Image 
              alt='Anime Image Cover'
              src={anime.image}
              width={1193}
              height={549}
              className='w-[1193px] h-[549px] object-cover object-center aspect-auto'
              />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Hero