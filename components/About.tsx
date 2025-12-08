'use client'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 border-t border-terminal-green/10">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold terminal-glow">
            $ cat about.txt
          </h2>
          
          <div className="space-y-6 text-terminal-green/90 leading-relaxed">
            <p>
              Olá, sou <span className="text-terminal-green terminal-glow">Anderson</span>, desenvolvedor fullstack 
              com foco em backend e Tech Lead na <span className="text-terminal-green terminal-glow">t-code</span>.
            </p>
            
            <p>
              Minha especialidade está em criar aplicações robustas do zero, desde o desenvolvimento 
              até o deploy em produção. Trabalho com Docker, orquestração em Kubernetes e tenho 
              experiência sólida com <span className="text-terminal-green terminal-glow">Google Cloud Platform (GCP)</span>.
            </p>
            
            <p>
              Como Tech Lead, oriento equipes e garanto que os projetos sejam entregues com qualidade, 
              seguindo as melhores práticas de desenvolvimento e DevOps.
            </p>
            
            <p>
              No frontend, consigo fazer ajustes e melhorias quando necessário, mas prefiro focar 
              no backend onde minha expertise realmente brilha.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-terminal-green/10">
            <h3 className="text-2xl font-bold mb-4 terminal-glow">$ skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-terminal-green/80">
              <div>
                <span className="text-terminal-green">•</span> Backend Development
              </div>
              <div>
                <span className="text-terminal-green">•</span> Tech Leadership
              </div>
              <div>
                <span className="text-terminal-green">•</span> Docker & Containerization
              </div>
              <div>
                <span className="text-terminal-green">•</span> Kubernetes Orchestration
              </div>
              <div>
                <span className="text-terminal-green">•</span> GCP Cloud Services
              </div>
              <div>
                <span className="text-terminal-green">•</span> VPS Management
              </div>
              <div>
                <span className="text-terminal-green">•</span> CI/CD Pipelines
              </div>
              <div>
                <span className="text-terminal-green">•</span> System Architecture
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

