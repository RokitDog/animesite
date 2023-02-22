'use client'
import VideoComponent from './VideoComponent';
import useSWR from 'swr'


const fetchEpisode = async (name: String, episode: String) => {
  const data = await fetch(`https://api.consumet.org/anime/gogoanime/watch/${name}-episode-${episode}`, {cache: 'force-cache'})
  return data.json()
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function CurentEpisode({ slug, searchParams }: {slug: string, searchParams: string}) {
  const { data, error, isLoading } = useSWR(`https://api.consumet.org/anime/gogoanime/watch/${slug}-episode-${searchParams}`, fetcher)

  if (isLoading) return <div className='aspect-video mt-[32px] mb-3'>Loading...</div>
  if (error) return <div>Failed to load</div>

  const link1 = data?.sources[4].url

  const episodeName = slug.replaceAll('-', ' ');

  return (
<>
        <h2 className="text-2xl font-medium mt-[34px] capitalize">{episodeName}, Episode: {searchParams}</h2>
        <VideoComponent src1={link1}/>
    </>
  )
}

export default CurentEpisode