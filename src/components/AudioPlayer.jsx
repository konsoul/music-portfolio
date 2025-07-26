import React, { useEffect, useRef, useState } from 'react'
import ProgressBar from './ProgressBar'

const AudioPlayer = ({ src, title }) => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const handleLoadedMetadata = () => {
      setDuration(audioRef.current.duration)
    }

    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime)
    }

    const audioElement = audioRef.current
    audioElement.addEventListener('loadedmetadata', handleLoadedMetadata)
    audioElement.addEventListener('timeupdate', handleTimeUpdate)

    setCurrentTime(0)
    setIsPlaying(false)

    return () => {
      audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audioElement.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [src])

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
    <div className="flex flex-col items-center justify-center h-[200px] px-6">
      {' '}
      {/* Added height and justify-center */}
      <audio ref={audioRef} src={src} preload="metadata" />
      <div className="flex justify-center gap-5 mb-8">
        <div className="relative ">
          <button
            onClick={togglePlay}
            className="bg-[#aa0000] shadow-[8px_12px_black] px-5 py-1.5 min-w-[100px] h-[50px] cursor-pointer text-gray-300"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <div className="absolute inset-1 border border-slate-200 pointer-events-none" />
        </div>

        <div className="relative">
          <button
            onClick={restart}
            className="bg-[#aa0000] shadow-[8px_12px_black] px-5 py-1.5 min-w-[100px] h-[50px] cursor-pointer text-gray-300"
            aria-label="Restart audio"
          >
            Restart
          </button>
          <div className="absolute inset-1 border border-slate-200 pointer-events-none" />
        </div>
      </div>
      <div className="w-full max-w-sm">
        <ProgressBar currentTime={currentTime} duration={duration} />
      </div>
    </div>
  )
}

export default AudioPlayer
