// src/utils/metadata.js
// src/utils/metadata.js
import { songData } from './songData'

export async function parseMetadata(src) {
  try {
    return new Promise((resolve) => {
      const audio = new Audio(src)

      audio.addEventListener('loadedmetadata', () => {
        // Get filename and decode URL encoding first
        const fullFilename = decodeURIComponent(src.split('/').pop())

        // Remove .mp3 and the random suffix (everything after the last hyphen)
        const baseFilename = fullFilename
          .replace('.mp3', '')
          .split('-')[0]
          .trim()

        // Look up the clean title in our songData
        const songInfo = songData[baseFilename] || { title: baseFilename }

        const metadata = {
          id: crypto.randomUUID(),
          title: songInfo.title,
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
