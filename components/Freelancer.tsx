'use client'

export default function Freelancer() {
  return (
    <section className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-6 text-terminal-green/90 leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-terminal-green terminal-glow mb-4">
            Trabalhos Freelancer
          </h2>
          <p className="text-terminal-green/80 mb-4">
            Estou disponível para trabalhar em projetos freelance como desenvolvedor fullstack, consultoria técnica 
            ou desenvolvimento de soluções personalizadas.
          </p>
        </div>

        <div className="pt-6 border-t border-terminal-green/10">
          <h3 className="text-xl font-bold text-terminal-green terminal-glow mb-4">
            Serviços Oferecidos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-terminal-green/20 p-4">
              <span className="text-terminal-green">└─</span> Desenvolvimento de Sistemas
            </div>
            <div className="border border-terminal-green/20 p-4">
              <span className="text-terminal-green">└─</span> Integrações de Sistemas
            </div>
            <div className="border border-terminal-green/20 p-4">
              <span className="text-terminal-green">└─</span> Arquitetura de Microsserviços
            </div>
            <div className="border border-terminal-green/20 p-4">
              <span className="text-terminal-green">└─</span> DevOps e Infraestrutura Cloud
            </div>
            <div className="border border-terminal-green/20 p-4">
              <span className="text-terminal-green">└─</span> Consultoria Técnica
            </div>
            <div className="border border-terminal-green/20 p-4">
              <span className="text-terminal-green">└─</span> Mentoria e Code Review
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-terminal-green/10">
          <h3 className="text-xl font-bold text-terminal-green terminal-glow mb-4">
            Contato para Projetos
          </h3>
          <div className="space-y-2 text-terminal-green/80">
            <p>
              <span className="text-terminal-green">•</span> Email:{' '}
              <a href="mailto:andersonlmarchi@gmail.com" className="hover:text-terminal-green terminal-glow underline">
                andersonlmarchi@gmail.com
              </a>
            </p>
            <p>
              <span className="text-terminal-green">•</span> WhatsApp:{' '}
              <a href="https://api.whatsapp.com/send?phone=5547991120742" target="_blank" rel="noopener noreferrer" className="hover:text-terminal-green terminal-glow">
                (47) 991120742
              </a>
            </p>
            <p>
              <span className="text-terminal-green">•</span> LinkedIn:{' '}
              <a 
                href="https://www.linkedin.com/in/andersonlmarchi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-terminal-green terminal-glow underline"
              >
                linkedin.com/in/andersonlmarchi
              </a>
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-terminal-green/10">
          <div className="bg-terminal-darker p-6 border border-terminal-green/20">
            <p className="text-terminal-green/60 text-sm mb-2">
              <span className="text-terminal-green">$</span> cat disponibilidade.txt
            </p>
            <p className="text-terminal-green/80">
              Tem processos manuais que poderiam ser automatizados com sistema? Entre em contato comigo pois posso te ajudar. Disponível para novos projetos!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

