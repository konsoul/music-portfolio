// utils/metadata.js

export async function parseMetadata(audioFile, src) {
  try {
    return new Promise((resolve) => {
      const audio = new Audio(src)

      audio.addEventListener('loadedmetadata', () => {
        // Create metadata object with available information
        const metadata = {
          id: Date.now(),
          title: src.split('/').pop().replace('.mp3', ''), // Gets filename without extension
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
