import { useState } from 'react'
import AudioPlayer from './components/AudioPlayer'
import song from './assets/zone.mp3'
import './App.css'
import './index.css'
import Layout from './components/ui/Layout'

function App() {
  return (
    <Layout>
      <div className="container">
        <div className="window">
          <div className="title">Music Portfolio</div>
          <div className="content">
            <div className="info mt-6 mb-8 text-center">
              <div>Song:Zone Zone Zone</div>
              <div className="space-y-2">Genre: Electronic</div>
            </div>
            <div>
              <AudioPlayer src={song} title="Zone Zone Zone" />
            </div>
          </div>
          <div className="footer">
            &lt;Tab&gt;/&lt;Alt-Tab&gt; change songs &nbsp; &lt;Space&gt; pause
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
