// utils/metadata.js

export async function parseMetadata(src) {
  try {
    return new Promise((resolve) => {
      const audio = new Audio(src)

      audio.addEventListener('loadedmetadata', () => {
        // Decode the URL and replace any remaining encoding with spaces
        const decodedFilename = decodeURIComponent(src.split('/').pop())
        const title = decodedFilename.replace('.mp3', '')

        const metadata = {
          id: Date.now(),
          title: title,
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
