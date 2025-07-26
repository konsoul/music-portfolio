import React from 'react'

const Sidebar = ({ songs, currentSong, onSongSelect }) => {
  return (
    <div
      className="rh-window mr-4"
      style={{
        width: '300px',
        height: '500px',
      }}
    >
      <div className="rh-title-bar">Music Library</div>
      <div className="rh-window-content overflow-y-auto flex-1">
        <div className="flex flex-col gap-2">
          {songs.map((song) => (
            <button
              key={song.id}
              onClick={() => onSongSelect(song)}
              className={`w-full text-left p-3 transition-colors ${
                currentSong?.id === song.id
                  ? 'bg-[#aa0000] text-white'
                  : 'bg-[#c0c0c0] text-black hover:bg-[#000080] hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{song.title}</span>
                {currentSong?.id === song.id && (
                  <span className="text-sm">▶</span>
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
