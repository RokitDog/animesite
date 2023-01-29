
import { notFound } from 'next/navigation';
import VideoComponent from './VideoComponent';

interface Props {
    searchParams: string
    fetchEpisode: any
    slug: string
}

async function CurentEpisode({fetchEpisode, slug, searchParams}: Props) {
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