import Hero from "./hero";
import LatestAnime from "./LatestAnime";
import PopularAnime from "./PopularAnime";



export default async function Home() {


  return (
    <div>
        <div>
          <LatestAnime />
          {/* <PopularAnime /> */}
        </div>
    </div>
  )
}
