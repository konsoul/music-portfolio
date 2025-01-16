import React from 'react'

const Sidebar = ({ songs, currentSong, onSongSelect }) => {
  return (
    <div className="window mr-4" style={{ width: '300px' }}>
      <div className="title">Songs</div>
      <div className="content">
        <div className="flex flex-col gap-2">
          {songs.map((song) => (
            <button
              key={song.id}
              onClick={() => onSongSelect(song)}
              className={`w-full text-left p-2 hover:bg-gray-400 transition-colors ${
                currentSong?.id === song.id ? 'bg-[#aa0000] text-white' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{song.title}</span>
                {currentSong?.id === song.id && (
                  <span className="text-sm">▶ Playing</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
