import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#000080]">
      {/* Full width black navbar background */}
      <div className="w-full bg-black">
        <div className="max-w-5xl mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-xl font-bold text-white">
            Bradley Rappa Music
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-white">
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
            <a href="/tracks" className="hover:text-gray-300">
              Tracks
            </a>
            <a href="/about" className="hover:text-gray-300">
              About
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden px-6 pb-4">
            <div className="flex flex-col gap-4 text-white">
              <a
                href="/"
                className="hover:text-gray-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/tracks"
                className="hover:text-gray-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tracks
              </a>
              <a
                href="/about"
                className="hover:text-gray-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Main content */}
      <main className="w-full">
        <div className="max-w-5xl mx-auto px-6">{children}</div>
      </main>
    </div>
  )
}

export default Layout
