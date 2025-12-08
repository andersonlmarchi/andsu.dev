'use client'

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-terminal-green/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-terminal-green/60 text-sm">
            <span className="text-terminal-green">$</span> andsu.dev - {new Date().getFullYear()}
          </div>
          <div className="flex gap-6 text-terminal-green/60">
            <a 
              href="https://github.com/andersonlmarchi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-terminal-green transition-colors"
            >
              github
            </a>
            <a 
              href="https://www.linkedin.com/in/andersonlmarchi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-terminal-green transition-colors"
            >
              linkedin
            </a>
            <a 
              href="mailto:andersonlmarchi@gmail.com" 
              className="hover:text-terminal-green transition-colors"
            >
              email
            </a>
            <a 
              href="https://api.whatsapp.com/send?phone=5547991120742" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terminal-green transition-colors"
            >
              whatsapp
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-terminal-green/40 text-xs">
          <p>Desenvolvido com Next.js e muito café ☕</p>
        </div>
      </div>
    </footer>
  )
}

