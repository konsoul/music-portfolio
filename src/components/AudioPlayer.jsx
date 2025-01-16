import React, { useRef, useState } from 'react'

const AudioPlayer = ({ src, title }) => {
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
    audioRef.current.currentTime = 0
    if (!audioRef.current.paused) {
      audioRef.current.play()
    }
  }

  return (
    <div className="flex justify-center gap-4">
      <audio ref={audioRef} src={src} preload="metadata" />
      <button
        onClick={togglePlay}
        className="bg-[#aa0000] shadow-[8px_12px_black] px-5 py-1.5 min-w-[100px] h-[50px] cursor-pointer text-gray-300"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      <button
        onClick={restart}
        className="bg-[#aa0000] shadow-[8px_12px_black] px-5 py-1.5 min-w-[100px] h-[50px] cursor-pointer text-gray-300"
        aria-label="Restart audio"
      >
        Restart
      </button>
    </div>
  )
}

export default AudioPlayer
