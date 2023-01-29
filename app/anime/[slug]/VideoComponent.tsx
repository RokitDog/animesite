'use client'

import ReactPlayer from 'react-player/file'

type Props = {
  src1: string
}

function VideoComponent({src1}: Props) {
  return (
    <div className='aspect-video mt-[32px] mb-3'>
        <ReactPlayer url={src1} controls={true} width='100%' height='100%'/>
    </div>
  )
}

export default VideoComponent