'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-terminal-darker/80 backdrop-blur-sm border-b border-terminal-green/20' : ''
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-terminal-green font-bold text-xl">
            <span className="terminal-glow">$</span> andsu.dev
          </div>
          <div className="hidden md:flex gap-8">
            <a href="mailto:andersonlmarchi@gmail.com" className="hover:text-terminal-green/80 transition-colors">
              email
            </a>
            <a 
              href="https://www.linkedin.com/in/andersonlmarchi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-terminal-green/80 transition-colors"
            >
              linkedin
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

