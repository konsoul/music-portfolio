import React from 'react'

const Sidebar = ({ songs, currentSong, onSongSelect }) => {
  return (
    <div className="window mr-4" style={{ width: '300px' }}>
      <div className="title text-xl">Songs</div>
      <div className="content">
        <div className="flex flex-col gap-2">
          {songs.map((song) => (
            <button
              key={song.id}
              onClick={() => onSongSelect(song)}
              className={`w-full text-left p-3 outline-none focus:outline-none transition-colors
                ${
                  currentSong?.id === song.id
                    ? 'bg-[#aa0000] text-white'
                    : 'hover:bg-gray-400'
                }
              `}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold">{song.title}</span>
                {currentSong?.id === song.id && (
                  <span className="text-sm">▶ Playing</span>
                )}
              </div>
              <div className="text-sm mt-1 opacity-75">
                <div>{song.artist}</div>
                <div>{song.album}</div>
                <div>{song.genre}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
