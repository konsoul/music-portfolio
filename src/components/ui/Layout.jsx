import React from 'react'

const Layout = ({ children }) => {
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
        &lt;Tab&gt;/&lt;Alt-Tab&gt; between elements | &lt;Space&gt; selects |
        &lt;F12&gt; next screen
      </div>
    </div>
  )
}

export default Layout
