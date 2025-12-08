import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Anderson - Fullstack Developer & Tech Lead',
  description: 'Portfolio de Anderson - Desenvolvedor Fullstack, Tech Lead e especialista em DevOps',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  )
}

