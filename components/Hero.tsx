'use client'

import { useEffect, useState } from 'react'

const commands = [
  'whoami',
  'cat about.txt',
  'ls projects/',
  'cd t-code',
]

export default function Hero() {
  const [currentCommand, setCurrentCommand] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const command = commands[currentCommand]
    let index = 0
    setDisplayText('')

    const typingInterval = setInterval(() => {
      if (index < command.length) {
        setDisplayText(command.slice(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          setCurrentCommand((prev) => (prev + 1) % commands.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [currentCommand])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6">
          <div className="text-sm text-terminal-green/60">
            <span className="terminal-glow">anderson@andsu.dev</span>:<span className="text-terminal-green">~</span>$ 
            <span className="ml-2">{displayText}</span>
            <span className={`inline-block w-2 h-5 bg-terminal-green ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
          </div>
          
          <div className="mt-12 space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold terminal-glow">
              Fullstack Developer
            </h1>
            <h2 className="text-3xl md:text-5xl text-terminal-green/80">
              & Tech Lead
            </h2>
            <p className="text-lg md:text-xl text-terminal-green/60 mt-6 max-w-2xl">
              10 anos de experiência como desenvolvedor fullstack.
              <br />
              Tech Lead | Especialista em Backend | DevOps | GCP & Kubernetes
            </p>
          </div>

          <div className="mt-12 flex gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 border border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-terminal-darker transition-all duration-300"
            >
              ver projetos
            </a>
            <a 
              href="#about" 
              className="px-6 py-3 text-terminal-green/80 hover:text-terminal-green transition-colors"
            >
              sobre mim
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

