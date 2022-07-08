import React from 'react'

import intro from '../videos/intro.webm'

const Video = () => {
  return (
    <div className="video-container">
      <div className="overlay" />
      <video
        className="video"
        src={intro}
        loop={true}
        autoPlay={true}
        playsInline={true}
        muted={true}
        controls={false}
      />
    </div>
  )
}

export default Video
