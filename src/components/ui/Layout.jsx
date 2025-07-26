import React, { useEffect, useState } from 'react'



const Layout = ({ children }) => {
  const [audioPlayerRef, setAudioPlayerRef] = useState(null)

  const togglePlayFromKeyboard = () => {
    if (audioPlayerRef && audioPlayerRef.togglePlay) {
      audioPlayerRef.togglePlay()
    }
  }
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0000AA' }}>
      {/* Red Hat style header */}
      <div className="w-full text-white px-4 py-2 flex justify-between">
        <span className="font-bold text-yellow-300">
          Red Hat Bradley (C) 1996 Bradley Hat Software
        </span>
        <span className="font-bold text-yellow-300">Music Player System</span>
      </div>

      {/* Main content */}
      <main className="w-full flex items-center justify-center min-h-[calc(100vh-120px)]">
        <div className="max-w-4xl mx-auto px-6">{children}</div>
      </main>

      {/* Red Hat style footer navigation */}
      <div className="rh-footer">
        &lt;Space&gt; play/pause | &lt;Enter&gt; choose | &lt;Tab&gt; select
      </div>
    </div>
  )
}

export default Layout
