interface Props {
    episode: string
}

function Iframe({episode}: Props) {

  return (
    <>
        <iframe id="iframe" src={episode} className='aspect-video w-full mt-2' allowFullScreen/>
    </>
  )
}

export default Iframe