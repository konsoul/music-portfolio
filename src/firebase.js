import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBRs2vma05unIUVG0fL5h7wASAJxtK8Ky4',
  authDomain: 'bradley-music-portfolio.firebaseapp.com',
  projectId: 'bradley-music-portfolio',
  storageBucket: 'bradley-music-portfolio.firebasestorage.app',
  messagingSenderId: '828078961711',
  appId: '1:828078961711:web:75ef668865ba64071582da',
  measurementId: 'G-DTHVGWPSDG',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize and export Firebase Storage (not Analytics!)
export const storage = getStorage(app)
