import { useState, useEffect } from 'react'
import AudioPlayer from './components/AudioPlayer'
import Layout from './components/ui/Layout'
import Sidebar from './components/ui/Sidebar'
import { parseMetadata } from './utils/metadata'
import zone from './assets/zone.mp3'
import './App.css'
import './index.css'

const songFiles = [{ src: zone }]

function App() {
  const [songs, setSongs] = useState([])
  const [currentSong, setCurrentSong] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadSongs() {
      try {
        const loadedSongs = await Promise.all(
          songFiles.map((song) => parseMetadata(song.src))
        )

        const validSongs = loadedSongs.filter(Boolean)
        setSongs(validSongs)
        setCurrentSong(validSongs[0])
      } catch (error) {
        console.error('Error loading songs:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadSongs()
  }, [])

  const handleSongSelect = (song) => {
    setCurrentSong(song)
  }

  if (isLoading) {
    return <div className="text-center p-4">Loading songs...</div>
  }

  return (
    <Layout>
      <div className="container">
        <div className="flex">
          <Sidebar
            songs={songs}
            currentSong={currentSong}
            onSongSelect={handleSongSelect}
          />
          {currentSong && (
            <div className="window">
              <div className="title">Music Portfolio</div>
              <div className="content">
                <div className="info mt-6 mb-8 text-center">
                  <div>Song: {currentSong.title}</div>
                </div>
                <div>
                  <AudioPlayer
                    src={currentSong.src}
                    title={currentSong.title}
                  />
                </div>
              </div>
              <div className="footer">
                &lt;Tab&gt;/&lt;Alt-Tab&gt; change songs &nbsp; &lt;Space&gt;
                pause
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default App
