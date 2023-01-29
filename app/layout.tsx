import './global.css';
import { Inter } from '@next/font/google';
import Head from './head';
import Link from 'next/link';
import Hero from './hero';

const inter = Inter();


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const popularAnimeData = await fetch(`${process.env.BASIC_URL}/api/getPopularAnime`, {cache: "no-store"}).then(res => res.json())

  return (
    <html lang="en" className={inter.className}>
      <Head />
      <body className='bg-[#202020] text-white'>
        <div className='max-w-[1193px] mx-auto sticky top-0 z-50 h-[80px] flex items-center bg-[#202020] shadow-lg'>
          <nav><Link href='/' className='text-lg font-medium hover:text-[#F6399D] transition-all duration-150 ease-in-out'>HOME</Link></nav></div>
        <main className='max-w-[1193px] mx-auto'>
            <Hero popularAnimeData={popularAnimeData.results} />
            {children}
        </main>
      </body>
    </html>
  )
}
