import { Suspense } from "react";
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

          <h1>Test</h1>
          {/* @ts-ignore */}
          <Pagination params={searchParams.episode} slug={params.slug} />
      </>
    );
  }
  