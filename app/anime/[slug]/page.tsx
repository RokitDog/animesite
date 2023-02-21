import CurentEpisode from "./CurentEpisode";
import Pagination from "./Pagination";



export default async function Page({ params, searchParams }: {
    params: { slug: string },
    searchParams: { episode: string },
  }) {


    return (
      <>
          {/* @ts-ignore */}
          <CurentEpisode slug={params.slug} searchParams={searchParams.episode} />
          {/* @ts-ignore */}
          <Pagination params={searchParams.episode} slug={params.slug}/>
      </>
    );
  }
  