import Link from 'next/link';
import './global.css';
import { Inter } from '@next/font/google';
import Head from './head';
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
        <header className='max-w-[1193px] mx-auto'>
            <div>
              <Link href='/'>
                Logo
              </Link>
            </div>
        </header>
        <main className='max-w-[1193px] mx-auto'>
        <Hero popularAnimeData={popularAnimeData} />

        {children}
        </main>
      </body>
    </html>
  )
}
