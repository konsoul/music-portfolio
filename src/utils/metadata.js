// utils/metadata.js

export async function parseMetadata(src) {
  try {
    return new Promise((resolve) => {
      const audio = new Audio(src)

      audio.addEventListener('loadedmetadata', () => {
        const metadata = {
          id: Date.now(),
          title: src.split('/').pop().replace('.mp3', ''),
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
