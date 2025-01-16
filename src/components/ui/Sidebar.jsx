import React from 'react'

const Sidebar = ({ songs, currentSong, onSongSelect }) => {
  return (
    <div
      className="window mr-4 shadow-[8px_12px_black]"
      style={{
        width: '300px',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className="title">Songs</div>
      <div className="overflow-y-auto flex-1">
        <div className="flex flex-col gap-2 p-2">
          {songs.map((song) => (
            <button
              key={song.id}
              onClick={() => onSongSelect(song)}
              className={`w-full text-left p-4 hover:bg-[#000080] after:content-[''] after:absolute after:bg-black after:w-full after:h-full after:top-1 after:left-1 after:-z-10 relative transition-colors ${
                currentSong?.id === song.id
                  ? 'bg-[#aa0000] text-white'
                  : 'bg-[#c0c0c0] text-black hover:text-white'
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
