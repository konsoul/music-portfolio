import React, { useRef, useState } from 'react'
import '../index.css'

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

  const restart = () => {
    if (audioRef.current.paused) {
      audioRef.current.currentTime = 0
    }
  }

  return (
    <>
      <audio ref={audioRef} src={src} preload="metadata" />
      <button
        onClick={togglePlay}
        className="player-button"
        style={{
          background: '#aa0000',
          boxShadow: '8px 12px black',
          padding: '6px 20px',
          minWidth: '100px',
          height: '50px',
          cursor: 'pointer',
        }}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      <button
        onClick={restart}
        className="player-button"
        style={{
          background: '#aa0000',
          boxShadow: '8px 12px black',
          padding: '6px 20px',
          margin: '10px 5px 10px 15px ',
          minWidth: '100px',
          height: '50px',
          cursor: 'pointer',
        }}
      >
        Restart
      </button>
    </>
  )
}

export default AudioPlayer
