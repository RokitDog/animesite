'use client'

import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/file';


type Props = {
  src1: string
}

function VideoComponent({src1}: Props) {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <div className='aspect-video mt-[32px] mb-3'>
        {hasWindow && <ReactPlayer url={src1} controls={true} width='100%' height='100%'/>}
    </div>
  )
}

export default VideoComponent