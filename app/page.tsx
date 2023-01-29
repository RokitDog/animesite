import Hero from "./hero";
import LatestAnime from "./LatestAnime";



export default async function Home() {


  return (
    <div>
        <div>
          {/* @ts-ignore */}
          <LatestAnime />
        </div>
    </div>
  )
}
