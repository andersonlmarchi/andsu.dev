'use client'

import { useState } from 'react'

type Tab = 'sobre' | 'stacks' | 'experiencias' | 'freelancer' | 'projetos'

interface TabsProps {
  children: (activeTab: Tab) => React.ReactNode
}

export default function Tabs({ children }: TabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>('sobre')

  const tabs: { id: Tab; label: string; command: string }[] = [
    { id: 'sobre', label: 'Sobre', command: 'cat sobre.txt' },
    { id: 'stacks', label: 'Stacks', command: 'ls tech-stack/' },
    { id: 'experiencias', label: 'Experiências', command: 'cat experiencias.txt' },
    { id: 'projetos', label: 'Projetos', command: 'cd github && ls projects/' },
    { id: 'freelancer', label: 'Freelancer', command: 'cd freelancer && ls' },
  ]

  return (
    <div className="min-h-screen">
      {/* Tab Navigation */}
      <div className="border-b border-terminal-green/20 bg-terminal-darker/50 backdrop-blur-sm sticky top-16 z-40">
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
        {children(activeTab)}
      </div>
    </div>
  )
}

