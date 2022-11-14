
import { notFound } from 'next/navigation';
import VideoComponent from './VideoComponent';

interface Props {
    searchParams: string
    fetchEpisode: any
    slug: string
}

async function CurentEpisode({fetchEpisode, slug, searchParams}: Props) {
  const data = await fetchEpisode(slug, searchParams);

  if(!data) {
    notFound();
  }

  const link1 = data.sources[0].file;
  const link2 = data.sources_bk[0].file;

  const episodeName = slug.replaceAll('-', ' ');

  return (
    <>
        <h2 className="text-2xl font-medium mt-[34px] capitalize">{episodeName}, Episode: {searchParams}</h2>
        <VideoComponent src1={link1} src2={link2} />
    </>
  )
}

export default CurentEpisode