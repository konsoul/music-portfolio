import React, { useRef, useState } from 'react'

function AudioPlayer({ src, title }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play()
      setIsPlaying(true)
    } else {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <>
      <audio ref={audioRef} src={src} preload="metadata" />
      <button
        onClick={togglePlay}
        className="player-button"
        style={{
          background: '#808080',
          border: '2px outset #fff',
          padding: '6px 20px',
          minWidth: '80px',
          cursor: 'pointer',
        }}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </>
  )
}

export default AudioPlayer
