interface Props {
    searchParams: string
    fetchEpisode: any
    fetchAnimeDetails: any
    slug: string
}

async function CurentEpisode({fetchEpisode, fetchAnimeDetails, slug, searchParams}: Props) {
  const {Referer} = await fetchEpisode(slug, searchParams);

  return (
    <>
        <h2 className="text-2xl font-medium mt-[34px] capitalize">{slug}, Episode: {searchParams}</h2>
        {Referer ?  <iframe id="iframe" src={Referer} className='aspect-video w-full mt-2' loading="eager" allowFullScreen/> : <p className="text-4xl text-center my-[68px]">We are sorry, the episode that you are looking for doesnt exist...</p>}
    </>
  )
}

export default CurentEpisode