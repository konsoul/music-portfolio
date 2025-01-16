import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#000080]">
      {/* Full width black navbar background */}
      <div className="w-full bg-[#aa0000] shadow-[8px_12px_black] px-5 py-1.5">
        <div className="absolute inset-1 border border-slate-200 pointer-events-none" />
        <div className="max-w-5xl mx-auto flex justify-between text-center items-center py-4 px-6">
          <div className="text-xl font-bold text-white text-center">
            Bradley Rappa Music
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="w-full">
        <div className="max-w-5xl mx-auto px-6">{children}</div>
      </main>
    </div>
  )
}

export default Layout
