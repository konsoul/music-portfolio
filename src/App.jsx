import { useState, useEffect } from 'react'
import AudioPlayer from './components/AudioPlayer'
import Layout from './components/ui/Layout'
import Sidebar from './components/ui/Sidebar'
import { parseMetadata } from './utils/metadata'
import './App.css'
import './index.css'

// This will automatically import all MP3 files from the assets folder
const audioFiles = import.meta.glob('./assets/*.mp3')

function App() {
  const [songs, setSongs] = useState([])
  const [currentSong, setCurrentSong] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadSongs() {
      try {
        // Load all audio files
        const importedSongs = await Promise.all(
          Object.entries(audioFiles).map(async ([path, importFn]) => {
            const src = await importFn()
            return parseMetadata(src.default)
          })
        )

        const validSongs = importedSongs.filter(Boolean)
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
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default App
