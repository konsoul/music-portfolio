import React from 'react'

const Sidebar = ({ songs, currentSong, onSongSelect }) => {
  return (
    <div
      className="window mr-4 shadow-[8px_12px_black]"
      style={{ width: '300px' }}
    >
      <div className="title">Songs</div>
      <div className="content">
        <div className="flex flex-col gap-2">
          {songs.map((song) => (
            <button
              key={song.id}
              onClick={() => onSongSelect(song)}
              className={`w-full text-left p-4 hover:bg-[#000080] shadow-[8px_12px_black] transition-colors ${
                currentSong?.id === song.id ? 'bg-[#aa0000] text-white' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{song.title}</span>
                {currentSong?.id === song.id && (
                  <span className="text-sm"></span>
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
