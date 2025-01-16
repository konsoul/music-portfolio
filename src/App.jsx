import { useState, useEffect } from 'react'
import AudioPlayer from './components/AudioPlayer'
import Layout from './components/ui/Layout'
import Sidebar from './components/ui/Sidebar'
import { parseMetadata } from './utils/metadata'
import './App.css'
import './index.css'

// Import your MP3 files
import zone from './assets/zone.mp3'

// Create initial song list
const songList = [
  {
    src: zone,
    filename: 'zone.mp3',
  },
]

function App() {
  const [songs, setSongs] = useState([])
  const [currentSong, setCurrentSong] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadSongs() {
      try {
        const loadedSongs = await Promise.all(
          songList.map(async (song) => {
            const metadata = await parseMetadata(null, song.src)
            return metadata
          })
        )

        const validSongs = loadedSongs.filter((song) => song !== null)
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
              <div className="title text-2xl">Music Portfolio</div>
              <div className="content">
                <div className="info mt-6 mb-8 text-center">
                  <div className="text-xl">Song: {currentSong.title}</div>
                  <div className="space-y-2 mt-2">
                    <div>
                      Duration: {Math.floor(currentSong.duration)} seconds
                    </div>
                  </div>
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
