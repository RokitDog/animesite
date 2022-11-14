'use client'

import ReactPlayer from 'react-player/file'

type Props = {
  src1: string
  src2: string
}

function VideoComponent({src1, src2}: Props) {
  return (
    <div className='aspect-video'>
        <ReactPlayer url={src1 || src2} controls={true} width='100%' height='100%' light={true}/>
    </div>
  )
}

export default VideoComponent