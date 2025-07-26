import { getDownloadURL, listAll, ref } from 'firebase/storage'
import { storage } from '../firebase'

export async function getAllSongs() {
  try {
    // Reference to the root of your storage bucket
    const musicRef = ref(storage, '/')

    // Get all files in storage
    const result = await listAll(musicRef)

    // Get download URLs for all MP3 files
    const songs = await Promise.all(
      result.items
        .filter((item) => item.name.endsWith('.mp3'))
        .map(async (item) => {
          const url = await getDownloadURL(item)
          const filename = item.name.replace('.mp3', '')

          return {
            id: crypto.randomUUID(),
            title: filename,
            src: url,
            duration: 0,
          }
        })
    )

    return songs
  } catch (err) {
    console.error('Error fetching songs', err)
    return []
  }
}
