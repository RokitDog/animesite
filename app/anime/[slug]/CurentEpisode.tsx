import { notFound } from 'next/navigation';
import VideoComponent from './VideoComponent';

interface Props {
    searchParams: string
    fetchEpisode: any
    slug: string
}

const fetchEpisode = async (name: String, episode: String) => {
  const data = await fetch(`https://api.consumet.org/anime/gogoanime/watch/${name}-episode-${episode}`, {cache: 'force-cache'})
  return data.json()
}

async function CurentEpisode({ slug, searchParams}: Props) {
  const {sources} = await fetchEpisode(slug, searchParams);

  if(!sources) {
    notFound();
  }

  const link1 = sources[4].url;

  const episodeName = slug.replaceAll('-', ' ');

  return (
<>
        <h2 className="text-2xl font-medium mt-[34px] capitalize">{episodeName}, Episode: {searchParams}</h2>
        <VideoComponent src1={link1}/>
    </>
  )
}

export default CurentEpisode