import React from 'react'

const ProgressBar = ({ currentTime, duration }) => {
  const progressPercentage = (currentTime / duration) * 100 || 0

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="w-full mt-4">
      <div className="progress-bar-container relative h-5 bg-[#ebebff] rounded">
        <div
          className="progress-bar absolute top-0 left-0 h-full bg-[#aa0000] transition-all duration-300 ease-linear rounded"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="flex justify-between mt-1 text-sm">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  )
}

export default ProgressBar
