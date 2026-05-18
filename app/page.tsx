'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import Sobre from '@/components/Sobre'
import Stacks from '@/components/Stacks'
import Experiencias from '@/components/Experiencias'
import Freelancer from '@/components/Freelancer'
import Projetos from '@/components/Projetos'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type Tab = 'sobre' | 'stacks' | 'experiencias' | 'freelancer' | 'projetos'

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('sobre')

  // Detectar hash na URL e ativar aba correspondente
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === '#about') {
        setActiveTab('sobre')
        // Scroll suave até a seção de abas
        setTimeout(() => {
          const element = document.getElementById('about')
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      }
    }

    // Verificar hash inicial
    handleHashChange()

    // Ouvir mudanças no hash
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const tabs: { id: Tab; label: string; command: string }[] = [
    { id: 'sobre', label: 'Sobre', command: 'cat sobre.txt' },
    { id: 'stacks', label: 'Stacks', command: 'ls tech-stack/' },
    { id: 'experiencias', label: 'Experiências', command: 'cat experiencias.txt' },
    { id: 'projetos', label: 'Projetos', command: 'cd github && ls projects/' },
    { id: 'freelancer', label: 'Contrate-me', command: 'cd freelancer && ls' },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'sobre':
        return <Sobre />
      case 'stacks':
        return <Stacks />
      case 'experiencias':
        return <Experiencias />
      case 'freelancer':
        return <Freelancer />
      case 'projetos':
        return <Projetos />
      default:
        return <Sobre />
    }
  }

  return (
    <main className="min-h-screen bg-terminal-darker">
      <Header />
      <Hero />
      
      {/* Tab Navigation */}
      <div id="about" className="border-b border-terminal-green/20 bg-terminal-darker/50 backdrop-blur-sm sticky top-16 z-40 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-mono border-b-2 transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-terminal-green text-terminal-green terminal-glow'
                    : 'border-transparent text-terminal-green/60 hover:text-terminal-green/80 hover:border-terminal-green/30'
                }`}
              >
                <span className="text-terminal-green/40">$</span> {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="mb-6 text-terminal-green/60 text-sm">
            <span className="terminal-glow">anderson@andsu.dev</span>:<span className="text-terminal-green">~</span>$ {tabs.find(t => t.id === activeTab)?.command}
          </div>
        </div>
        {renderTabContent()}
      </div>
      
      <Footer />
    </main>
  )
}
