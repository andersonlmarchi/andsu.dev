'use client'

import ImageCarousel from './ImageCarousel'

// Você pode adicionar seus projetos do GitHub aqui
const projetos = [
  {
    id: 1,
    name: 'Projeto LogPago',
    description: 'Projeto desenvolvido para disponibilizar antecipações de recebíveis de forma rápida e segura.',
    stack: ['Node.js', 'React', 'PostgreSQL', 'Docker', 'Typescript', 'Express'],
    githubUrl: '',
    images: [
      '/projects/logpago/initial.png',
      '/projects/logpago/dashboard.png',
      '/projects/logpago/negotiations.png',
    ], // Array de imagens para o carrossel
    details: `Este projeto foi desenvolvido utilizando Node.js e React no Frontend e Node.js com Express no Backend. 
    
    A escolha do PostgreSQL como banco de dados foi feita pensando na integridade dos dados e nas relações complexas que o sistema precisava gerenciar. 
    
    O Typescript foi utilizado para garantir a tipagem dos dados e evitar erros de execução. 
    
    A containerização com Docker permite que o sistema seja facilmente implantado e escalado conforme a demanda, garantindo alta disponibilidade e performance.

    A integração com a API do LogPago foi feita utilizando o axios para realizar as requisições e garantir a segurança das informações.

    A integração com o sistema de autenticação foi feita utilizando o JWT para garantir a segurança das informações.

    Além de usar uma arquitetura de microsserviços temos outro serviço que se comunica com o Whatsapp para comunicação entre o sistema e o Fornecedor. Temos webhooks do whatsapp para identificar o contato do fornecedor e dele atualizar o status da negociação.
    `,
  },
  {
    id: 2,
    name: 'Projeto t-code 2',
    description: 'Outro projeto desenvolvido na t-code com foco em performance e escalabilidade.',
    stack: ['Python', 'FastAPI', 'MongoDB', 'GCP'],
    githubUrl: 'https://github.com/andersonlmarchi/projeto-2',
    images: [
      // '/projects/project2-1.png',
      // '/projects/project2-2.png',
    ], // Array de imagens para o carrossel
    details: `Sistema desenvolvido com foco em performance e processamento de grandes volumes de dados.

Optei por Python com FastAPI devido à sua excelente performance em operações assíncronas e processamento de dados. O MongoDB foi escolhido para permitir flexibilidade no schema e facilitar a evolução do sistema conforme novas necessidades surgem.

A integração com GCP permite aproveitar serviços gerenciados como Cloud Functions e BigQuery, reduzindo a complexidade operacional e garantindo escalabilidade automática.`,
  },
  // Adicione mais projetos conforme necessário
]

export default function Projetos() {
  return (
    <section className="max-w-6xl mx-auto space-y-8">
      <div className="mb-8">
        <p className="text-terminal-green/60 mb-4">
          Projetos desenvolvidos na <span className="text-terminal-green terminal-glow">t-code</span> e outros projetos pessoais.
        </p>
      </div>
      
      <div className="space-y-16">
        {projetos.length > 0 ? (
          projetos.map((projeto, index) => (
            <div key={projeto.id} className="border border-terminal-green/20 p-8 hover:border-terminal-green/40 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Carrossel de imagens do projeto */}
                <ImageCarousel 
                  images={projeto.images || []} 
                  projectName={projeto.name}
                />
                
                {/* Informações do projeto */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-terminal-green terminal-glow">
                      {projeto.name}
                    </h3>
                    {projeto.githubUrl && (
                      <a
                        href={projeto.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-terminal-green/60 hover:text-terminal-green transition-colors text-sm"
                      >
                        <span className="text-terminal-green">→</span> GitHub
                      </a>
                    )}
                  </div>
                  <p className="text-terminal-green/80 leading-relaxed">
                    {projeto.description}
                  </p>
                  
                  <div className="pt-4">
                    <h4 className="text-sm text-terminal-green/60 mb-2">Stack utilizada:</h4>
                    <div className="flex flex-wrap gap-2">
                      {projeto.stack.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 border border-terminal-green/30 text-terminal-green/80 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Detalhes do projeto */}
              {projeto.details && (
                <div className="mt-8 pt-8 border-t border-terminal-green/10">
                  <div className="bg-terminal-darker p-6 border border-terminal-green/20">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-terminal-green/60 text-xs">$ cat sobre-projeto.txt</span>
                    </div>
                    <div className="text-terminal-green/90 text-sm leading-relaxed whitespace-pre-line">
                      {projeto.details}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-12 border border-terminal-green/20">
            <p className="text-terminal-green/60 mb-4">
              <span className="text-terminal-green">$</span> ls projects/
            </p>
            <p className="text-terminal-green/80">
              Adicione seus projetos editando o arquivo <span className="text-terminal-green">components/Projetos.tsx</span>
            </p>
          </div>
        )}
      </div>
      
      <div className="mt-12 text-center text-terminal-green/60">
        <p>
          <span className="text-terminal-green">$</span> Mais projetos em desenvolvimento...
        </p>
        <p className="mt-2 text-sm">
          Veja mais no{' '}
          <a 
            href="https://github.com/andersonlmarchi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-terminal-green hover:terminal-glow underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  )
}

