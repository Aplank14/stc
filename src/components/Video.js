import React from 'react'
import {useState} from 'react'

export default function Video() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoSource =
    'https://grangerchurch.com/wp-content/uploads/2019/10/Web-Loop-Oct2019.mp4'

  const onLoadedData = () => {
    setTimeout(() => {
      setIsVideoLoaded(true)
    }, 1000)
  }

  return (
    <div>
      <img
        src="thumbnail.png"
        className="video-thumb"
        alt="thumb"
        style={{opacity: isVideoLoaded ? 0 : 1}}
      />
      <video
        autoPlay
        playsInline
        loop
        muted
        src={videoSource}
        onLoadedData={onLoadedData}
        style={{opacity: isVideoLoaded ? 1 : 0}}
        className="Video"
      />
    </div>
  )
}
