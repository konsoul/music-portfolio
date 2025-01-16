// src/utils/metadata.js
import { songData } from './songData' // Add this import at the top
let uniqueId = 0

export async function parseMetadata(src) {
  try {
    return new Promise((resolve) => {
      const audio = new Audio(src)

      audio.addEventListener('loadedmetadata', () => {
        const rawFilename = src.split('/').pop().replace('.mp3', '')
        const decodedFilename = decodeURIComponent(rawFilename)

        const matchingSong = Object.values(songData).find(
          (song) => song.filename.replace('.mp3', '') === decodedFilename
        )

        const metadata = {
          id: `song-${uniqueId++}`,
          title: matchingSong ? matchingSong.title : decodedFilename,
          duration: audio.duration,
          src: src,
        }

        resolve(metadata)
      })

      audio.addEventListener('error', () => {
        console.error('Error loading audio metadata')
        resolve(null)
      })
    })
  } catch (error) {
    console.error('Error parsing metadata:', error)
    return null
  }
}
