import { useState } from 'react'
import AudioPlayer from './components/AudioPlayer'
import song from './assets/zone.mp3'
import './App.css'
import './index.css'
import Layout from './components/ui/Layout'
import Sidebar from './components/ui/Sidebar'

// Example song list - replace src with actual song files
const songList = [
  {
    id: 1,
    title: 'Zone Zone Zone',
    src: song,
    genre: 'Electronic',
  },
  {
    id: 2,
    title: 'Circuit Breaker',
    src: song, // Replace with actual song
    genre: 'Electronic',
  },
  {
    id: 3,
    title: 'Digital Dreams',
    src: song, // Replace with actual song
    genre: 'Ambient',
  },
  {
    id: 4,
    title: 'Synthwave Sunset',
    src: song, // Replace with actual song
    genre: 'Synthwave',
  },
]

function App() {
  const [currentSong, setCurrentSong] = useState(songList[0])

  const handleSongSelect = (song) => {
    setCurrentSong(song)
  }

  // Handle keyboard navigation
  const handleKeyPress = (e) => {
    const currentIndex = songList.findIndex(
      (song) => song.id === currentSong.id
    )

    if (e.key === 'ArrowDown' || e.key === 'Tab') {
      e.preventDefault()
      const nextIndex = (currentIndex + 1) % songList.length
      setCurrentSong(songList[nextIndex])
    } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
      e.preventDefault()
      const prevIndex =
        currentIndex === 0 ? songList.length - 1 : currentIndex - 1
      setCurrentSong(songList[prevIndex])
    }
  }

  return (
    <Layout>
      <div className="container" onKeyDown={handleKeyPress}>
        <div className="flex">
          <Sidebar
            songs={songList}
            currentSong={currentSong}
            onSongSelect={handleSongSelect}
          />
          <div className="window">
            <div className="title">Music Portfolio</div>
            <div className="content">
              <div className="info mt-6 mb-8 text-center">
                <div>Song:{currentSong.title}</div>
                <div className="space-y-2">Genre: {currentSong.genre}</div>
              </div>
              <div>
                <AudioPlayer src={currentSong.src} title={currentSong.title} />
              </div>
            </div>
            <div className="footer">
              &lt;Tab&gt;/&lt;Alt-Tab&gt; change songs &nbsp; &lt;Space&gt;
              pause
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
