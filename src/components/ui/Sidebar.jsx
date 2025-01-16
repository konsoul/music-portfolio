import React from 'react'

const Sidebar = ({ songs, currentSong, onSongSelect }) => {
  return (
    <div className="window mr-4" style={{ width: '300px' }}>
      <div className="title">Songs</div>
      <div className="content">
        <div className="flex flex-col gap-1">
          {songs.map((song, index) => (
            <button
              key={index}
              onClick={() => onSongSelect(song)}
              className={`w-full text-left p-2 outline-none focus:outline-none transition-colors
                ${
                  currentSong?.id === song.id
                    ? 'bg-[#aa0000] text-white'
                    : 'hover:bg-gray-400'
                }
              `}
              tabIndex={0}
            >
              <div className="flex items-center">
                <span className="flex-1">{song.title}</span>
                {currentSong?.id === song.id && (
                  <span className="text-sm">▶ Playing</span>
                )}
              </div>
              <div className="text-sm opacity-75">{song.genre}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
