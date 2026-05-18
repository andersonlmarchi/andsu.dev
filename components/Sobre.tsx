'use client'

export default function Sobre() {
  return (
    <section className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-6 text-terminal-green/90 leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-terminal-green terminal-glow mb-4">
            Anderson Luis Marchi
          </h2>
          <p className="text-terminal-green/80 mb-2">
            <span className="text-terminal-green">•</span> Senior Software Engineer | Node.js | Typescript | PHP | Java | Docker
          </p>
          <p className="text-terminal-green/80">
            <span className="text-terminal-green">•</span> Rio do Sul, Santa Catarina, Brasil
          </p>
        </div>

        <div className="pt-6 border-t border-terminal-green/10">
          <h3 className="text-xl font-bold text-terminal-green terminal-glow mb-4">
            Resumo
          </h3>
          <p className="mb-4">
            Trabalho há <span className="text-terminal-green terminal-glow">11 anos</span> como desenvolvedor fullstack, 
            atuando em sistemas de gestão pública, plataformas de logística e ecommerce, soluções financeiras para 
            transportadoras, integrações com documentos fiscais, PDV de varejo (Lojas Americanas), assinaturas digitais e integração com 
            grandes e-commerces, como <span className="text-terminal-green terminal-glow">Shopee</span> e{' '}
            <span className="text-terminal-green terminal-glow">Mercado Livre</span>.
          </p>
          <p className="mb-4">
            Também trabalhei com extração de dados para BI, rotinas de integração, automações e sustentação de ambientes 
            em cloud. Gosto de trabalhar com práticas ágeis, priorização clara e foco em qualidade técnica.
          </p>
          <p className="mb-4">
            Já liderei equipes, organizei demandas e participei da evolução de produtos em diferentes tipos de empresas. 
            Além disso, atualmente colaboro como <span className="text-terminal-green terminal-glow">mentor no projeto FabTec</span>, 
            do Instituto Federal Catarinense de Rio do Sul, apoiando alunos em infraestrutura em nuvem e desenvolvimento de software.
          </p>
          <p>
            Nos últimos anos tenho trabalhado com linguagens como PHP, Java, Node.js (Typescript) e tecnologias como 
            Spring Boot, React, Vue.js, PostgreSQL, MySQL, MongoDB, Docker, Kubernetes, GCP, AWS, Gitlab CI, Elasticsearch, 
            Nginx e em arquiteturas de mensageria e microsserviços.
          </p>
        </div>

        <div className="pt-6 border-t border-terminal-green/10">
          <h3 className="text-xl font-bold text-terminal-green terminal-glow mb-4">
            Principais Competências
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-terminal-green/20 p-4">
              <span className="text-terminal-green">└─</span> Liderança Técnica
            </div>
            <div className="border border-terminal-green/20 p-4">
              <span className="text-terminal-green">└─</span> Cloud Computing e DevOps
            </div>
            <div className="border border-terminal-green/20 p-4">
              <span className="text-terminal-green">└─</span> Desenvolvimento Fullstack
            </div>            
            <div className="border border-terminal-green/20 p-4">
              <span className="text-terminal-green">└─</span> Integrações de Sistemas
            </div>
            <div className="border border-terminal-green/20 p-4">
              <span className="text-terminal-green">└─</span> Microsserviços
            </div>
            <div className="border border-terminal-green/20 p-4">
              <span className="text-terminal-green">└─</span> Gerenciamento de Projetos
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-terminal-green/10">
          <h3 className="text-xl font-bold text-terminal-green terminal-glow mb-4">
            Idiomas
          </h3>
          <div className="space-y-2">
            <p><span className="text-terminal-green">•</span> Português (Nativo)</p>
            <p><span className="text-terminal-green">•</span> Inglês (Profissional)</p>
          </div>
        </div>

        <div className="pt-6 border-t border-terminal-green/10">
          <h3 className="text-xl font-bold text-terminal-green terminal-glow mb-4">
            Contato
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
                (47) 9 9112 0742
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
                /andersonlmarchi
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

