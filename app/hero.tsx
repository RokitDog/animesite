
'use client'
import './hero.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import SwiperCore, { Autoplay, Pagination, Scrollbar, A11y } from 'swiper'
import Image from "next/image"
import Link from 'next/link';

export interface Props {
    popularAnimeData: {
        animeId: string
        animeTitle: string
        animeImg: string
        releasedDate: string
        animeUrl: string
    }[]
}

function Hero({popularAnimeData}: Props) {
  SwiperCore.use([Autoplay, Pagination, Scrollbar, A11y])
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
        <SwiperSlide key={anime.animeId}>
          <div className='relative w-full before:w-full before:bg-black before:absolute before:left-0 z-10 before:top-0 before:h-full before:content=[""] before:opacity-40'>
            <h3 className='absolute right-8 bottom-16 text-5xl z-10'>{anime.animeTitle}</h3>
            <Link href='/' className='absolute left-8 bottom-16 text-2xl z-10 bg-gray-500 p-3 hover:bg-gray-400 transition-all duration-150 ease-in-out'>
              Watch Now
            </Link>
            <Image 
              alt='Anime Image Cover'
              src={anime.animeImg}
              placeholder='blur'
              blurDataURL={anime.animeImg}
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