import { useState } from 'react'
import AudioPlayer from './components/AudioPlayer.jsx' // Updated import path
import song from './assets/zone.mp3'
import './App.css'

function App() {
  return (
    <div className="container">
      <div className="window">
        <div className="title">Music Portfolio</div>
        <div className="content">
          <div className="info">
            <div>Song:Zone Zone Zone</div>
            <div>Genre: Electronic</div>
          </div>
          <div>
            <AudioPlayer src={song} title="Zone Zone Zone" />
          </div>
        </div>
        <div className="footer">
          &lt;Tab&gt;/&lt;Alt-Tab&gt; between elements &nbsp; &lt;Space&gt;
          selects &nbsp; &lt;F12&gt; next screen
        </div>
      </div>
    </div>
  )
}

export default App
