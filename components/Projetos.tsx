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
    ],
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
    name: 'BrBox - Plataforma de Logística',
    description: 'Plataforma de logística para gestão de transportadoras, com funcionalidades de rastreamento, gestão financeira e integração com sistemas de terceiros.',
    stack: ['PHP', 'Laravel', 'Vue.js', 'PostgreSQL', 'Docker', 'GCP'],
    githubUrl: '',
    images: [
      '/projects/brbox/login.png',
      '/projects/brbox/initial.png',
      '/projects/brbox/routes.png',
    ],
    details: `Este projeto foi desenvolvido utilizando Laravel com PHP no Backend e Vue.js com Laravue no Frontend, implementando um sistema completo de gestão logística para controle de pessoas, veículos, rotas, pacotes e operações de transporte.

A escolha do PostgreSQL como banco de dados foi feita pensando na integridade dos dados e nas relações complexas entre empresas, centros de distribuição, pessoas (colaboradores, proprietários, motoristas e prestadores de serviço), veículos, rotas e pacotes que o sistema precisava gerenciar.

O Eloquent ORM do Laravel foi utilizado para garantir um acesso seguro aos dados e facilitar o controle de migrações, permitindo versionamento completo do banco de dados.

A arquitetura RESTful API com Controllers e Models proporcionou uma separação clara entre a lógica de negócio, apresentação em Vue.js e acesso a dados, facilitando manutenção e escalabilidade do sistema através de endpoints bem definidos.

A integração com plataformas externas foi implementada via SOAP e APIs HTTP para sincronização de dados de documentos fiscais (CT-e, MDF-e, GNRE), geração automática de rotas conectando com plataformas de e-commerce (como Mercado Livre e Shopee), eliminando processos manuais repetitivos.

O sistema de autenticação baseado em JWT (JSON Web Tokens) garante segurança nas APIs e controle de acesso por níveis de usuário através de roles e permissões.

O sistema oferece funcionalidades avançadas como unificação inteligente de pessoas (com análise de similaridade de nomes por Levenshtein Distance), gestão de contratos, anexos, documentação de veículos com rastreamento de validade, disponibilidade de recursos, relatórios customizáveis e sincronização bidirecional com sistemas externos.

A arquitetura suporta múltiplas empresas e centros de distribuição com permissões granulares, auditoria completa de alterações e controle de fluxos de aprovação para adiantamentos, pagamentos e operações críticas do sistema.`,
  },
  {
    id: 3,
    name: 'Projeto Solicitação de Adiantamentos',
    description: 'Projeto desenvolvido para gerenciar solicitações de adiantamento de diárias para técnicos em campo, com workflow completo de criação, aprovação e pagamento.',
    stack: ['C#', 'Entity Framework', 'Postgres', 'Integração SOAP', 'ASP.NET Core MVC', 'Razor Views'],
    githubUrl: '',
    images: [
      '/projects/soladiantamento/login.png',
      '/projects/soladiantamento/dashboard.png',
      '/projects/soladiantamento/novasolicitacao.png',
      '/projects/soladiantamento/usuario.png',
    ],
    details: `Este projeto foi desenvolvido utilizando .NET 9.0 com ASP.NET Core MVC no Backend e Razor Views no Frontend, implementando um workflow completo de gestão de solicitações de adiantamento de diárias para técnicos em campo.

A escolha do PostgreSQL como banco de dados foi feita pensando na integridade dos dados e nas relações complexas entre usuários, técnicos, áreas e solicitações que o sistema precisava gerenciar.

O Entity Framework Core foi utilizado como ORM para garantir um acesso seguro aos dados e facilitar o controle de migrações de banco de dados, permitindo versionamento completo do schema.

A arquitetura MVC utilizada proporcionou uma separação clara entre a lógica de negócio, apresentação e acesso a dados, facilitando manutenção e escalabilidade do sistema.

A integração com o sistema ERP Evolutize foi implementada via SOAP para geração automática de títulos a pagar e sincronização de dados de técnicos, eliminando a necessidade de processos manuais.

O sistema de autenticação baseado em Cookie Authentication garante a segurança das informações e controle de acesso por níveis de usuário (criador, aprovador, pagador).

A implementação de notificações por SMTP permite que todos os stakeholders sejam informados automaticamente sobre mudanças no status das solicitações, melhorando a comunicação e rastreabilidade do processo.

O workflow de aprovação multicamadas (criação → aprovação/reprovação → pagamento) garante controle e compliance no processo de adiantamentos.`,
  },
]

export default function Projetos() {
  return (
    <section className="max-w-6xl mx-auto space-y-8">
      <div className="mb-8">
        <p className="text-terminal-green/60 mb-4">
          Projetos desenvolvidos na <span className="text-terminal-green terminal-glow">t-code</span> e outros projetos pessoais. Imagens não apresentam valores nem dados privados.
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

