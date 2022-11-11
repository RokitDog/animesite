import './global.css';
import { Inter } from '@next/font/google';
import Head from './head';
import Link from 'next/link';
import Hero from './hero';

const inter = Inter();

const getPopularAnime = async () => {
  const response = await fetch('https://gogoanime.consumet.org/top-airing?page=1', { cache: 'no-cache'});
  return response.json()
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const popularAnimeData = await getPopularAnime();

  return (
    <html lang="en" className={inter.className}>
      <Head />
      <body className='bg-[#202020] text-white'>
        <div className='max-w-[1193px] mx-auto sticky top-0 z-50 h-[80px] flex items-center bg-[#202020] shadow-lg'>
          <nav><Link href='/' className='text-lg font-medium hover:text-[#F6399D] transition-all duration-150 ease-in-out'>HOME</Link></nav></div>
        <main className='max-w-[1193px] mx-auto'>
          <Hero popularAnimeData={popularAnimeData} />
          {children}
        </main>
      </body>
    </html>
  )
}
