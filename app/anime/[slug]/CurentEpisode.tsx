import { notFound } from 'next/navigation';

interface Props {
    searchParams: string
    fetchEpisode: any
    slug: string
}

async function CurentEpisode({fetchEpisode, slug, searchParams}: Props) {
  const {Referer} = await fetchEpisode(slug, searchParams);

  if(!Referer) {
    notFound();
  }

  const episodeName = slug.replaceAll('-', ' ');

  return (
    <>
        <h2 className="text-2xl font-medium mt-[34px] capitalize">{episodeName}, Episode: {searchParams}</h2>
        <iframe id="iframe" src={Referer} className='aspect-video w-full mt-2' loading="eager" allowFullScreen/>
    </>
  )
}

export default CurentEpisode