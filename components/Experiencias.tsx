'use client'

const experiencias = [
  {
    empresa: 'BrBox Sistemas',
    cargo: 'Senior Fullstack Software Engineer | Tech Lead',
    periodo: 'outubro de 2023 - Atualmente',
    duracao: '2 anos e 3 meses',
    localizacao: 'Rio do Sul, SC',
    descricao: [
      'Como Tech Lead ajudei na organização e na implantação de processos de kanban e nos ritos de daily e planning.',
      'Responsável pelas áreas de desenvolvimento e DevOps colaborando na manutenção da infraestrutura do Google Cloud Platform e revisão de código.',
      'Realizo análise de sistema das demandas geradas por clientes e pela diretoria com o intuito de organizar, planejar e distribuir tarefas para os desenvolvedores.',
      'Implementei processos de gestão financeira, como faturas a pagar e a receber, sistema para antecipação de recebíveis, gestão de PNRs (Pago não Recebido) e gestão de contratos e documentos no sistema principal usando PHP, Laravel e Vue.js.',
      'Desenvolvi integrações com sistemas de terceiros, incluindo plataformas de assinatura de documentos digitais (zapsign), ferramentas de gerenciamento de riscos (raster), sistemas de e-commerce (shopee e mercado livre) e soluções de emissão de documentos fiscais (CT-e, MDFe e GNRE) utilizando Node.js e Java.',
      'Implementei o sistema de Gitlab Community, juntamente com as pipelines de CI (gitlab-ci) para deploy automatizado, com o intuito de diminuir gastos com o serviço cloud do Gitlab.',
    ],
    tecnologias: ['PHP', 'Laravel', 'Vue.js', 'Node.js', 'Java', 'GCP', 'Gitlab CI', 'Docker'],
  },
  {
    empresa: 'Ame Digital',
    cargo: 'Pleno Fullstack Software Engineer',
    periodo: 'novembro de 2022 - setembro de 2023',
    duracao: '11 meses',
    localizacao: 'Rio de Janeiro, Brasil',
    descricao: [
      'Participei de processos de manutenção e desenvolvimento de novas funcionalidades no sistema de PDV (Ponto de Venda) das Lojas Americanas.',
      'Implementei melhorias de usabilidade e performance (query builder) no processo de checkout diminuindo mais ou menos 2s no tempo de processamento das vendas do PDV.',
      'Implementei APIs de ofertas e de descontos, desenvolvidas em Java com Spring Boot, sincronizando as informações do backoffice em um banco de dados no dynamoDB para que o PDV pudesse consumir de forma mais rápida.',
      'Utilizei dos serviços de Lambda e EC2 da AWS para disponibilizar as APIs de processamento de descontos e ofertas, utilizadas pelo sistema de PDV das lojas Americanas.',
      'Participei do processo de decisão, junto com coordenação e equipe de produto, de como esses novos sistemas de ofertas e descontos deveriam funcionar no PDV.',
    ],
    tecnologias: ['Java', 'Spring Boot', 'AWS', 'Lambda', 'EC2', 'DynamoDB'],
  },
  {
    empresa: 'JExperts',
    cargo: 'Pleno Backend Software Engineer',
    periodo: 'junho de 2021 - novembro de 2022',
    duracao: '1 ano 6 meses',
    localizacao: 'Florianópolis, SC',
    descricao: [
      'Atuei na manutenção de microserviços de apoio aos sistemas principais da empresa como gestão de clientes, autenticação de usuários, gestão de workflow e webhooks melhorando manutenibilidade e performance.',
      'Colaborei com o time de DevOps na manutenção da infraestrutura em Kubernetes usando Cloud Code para garantir deploy e entrega contínua.',
      'Atuei em pequenas manutenções no frontend em demandas pontuais.',
      'Desenvolvi um serviço de extração de dados (ETL) do PostgreSQL para armazenamento de dados estruturados no MongoDB (quase uma estrutura de CQRS) e um serviço de API para consulta dos dados extraídos. Esses serviços foram essenciais para a oferta de um novo produto de BI e geração de dashboards interativos oferecidos pela empresa.',
      'Implementei rotinas de CI/CD usando CircleCI para que toda correção ou nova funcionalidade dos sistemas de ETL e API de consulta para reduzir o tempo de deploy.',
    ],
    tecnologias: ['Node.js', 'TypeScript', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'CircleCI', 'CQRS', 'ETL'],
  },
  {
    empresa: 'IPM Sistemas',
    cargo: 'Analista de Sistemas',
    periodo: 'setembro de 2019 - maio de 2021',
    duracao: '1 ano 9 meses',
    localizacao: 'Rio do Sul',
    descricao: [
      'Liderei técnicamente três setores, Educação, Fiscal e Arrecadação, tendo gerenciado, ao todo, dez desenvolvedores.',
      'Participei, junto com a equipe de produto, do planejamento estratégico e definição e melhoria de processos dos módulos do sistema. Atuei na criação, detalhamento e alocação de tarefas.',
      'Planejei e gerenciei a entrega de pouco mais de 45% do módulo Fiscal (Escrita Fiscal e Emissão de NFS-e).',
      'No setor de arrecadação melhorei rotinas de cálculo de IPTU e ITBI reescrevendo consultas e operações em SQL (PostgreSQL) onde um script, que levava mais de 15 minutos, passou a rodar em 2 minutos.',
      'Implementei processo de extração (ETL) de arquivos de dados de CNPJ, contendo mais de 600 mb cada, utilizando Pentaho. Esses dados foram armazenados numa instância de Elasticsearch e usado, posteriormente, para atualização dos dados da receita federal no sistema.',
    ],
    tecnologias: ['PostgreSQL', 'SQL', 'Pentaho', 'Elasticsearch', 'ETL'],
  },
  {
    empresa: 'Evolutize',
    cargo: 'Fullstack Software Engineer | Analista de Sistemas',
    periodo: 'junho de 2015 - agosto de 2019',
    duracao: '4 anos 3 meses',
    localizacao: 'Rio do Sul, SC',
    descricao: [
      'Atuei como desenvolvedor nos módulos Fiscal, Comercial e Faturamento, tanto desktop quanto web, do sistema ERP.',
      'Implementação de regras de negócio para geração de Documentos Fiscais.',
      'Implementei integração do sistema de emissão de nota fiscal eletrônica (NFe) com o sefaz.',
      'Atuei por quase dois anos como analista de sistemas realizando levantamento de requisitos, implantação e treinamentos presenciais com clientes.',
    ],
    tecnologias: ['PHP', 'Java', 'NFe', 'ERP'],
  },
  {
    empresa: 'Instituto Federal Catarinense',
    cargo: 'Software Engineer Intern',
    periodo: 'novembro de 2013 - maio de 2015',
    duracao: '1 ano 7 meses',
    localizacao: 'Rio do Sul, SC',
    descricao: [
      'Ajudei no desenvolvimento de sistemas internos para gestão de patrimônio da instituição implementando o módulo de depreciação.',
      'Planejei e ministrei oficinas extracurriculares e aulas de introdução à programação e android (nativo) para alunos do técnico em informática.',
    ],
    tecnologias: ['Java', 'Android'],
  },
]

export default function Experiencias() {
  return (
    <section className="max-w-6xl mx-auto space-y-8">
      <div className="space-y-12">
        {experiencias.map((exp, index) => (
          <div 
            key={index} 
            className="border border-terminal-green/20 p-8 hover:border-terminal-green/40 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-terminal-green terminal-glow mb-2">
                  {exp.empresa}
                </h3>
                <p className="text-xl text-terminal-green/80 mb-1">{exp.cargo}</p>
                <p className="text-terminal-green/60 text-sm">
                  <span className="text-terminal-green">•</span> {exp.periodo} ({exp.duracao})
                </p>
                <p className="text-terminal-green/60 text-sm">
                  <span className="text-terminal-green">•</span> {exp.localizacao}
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {exp.descricao.map((item, idx) => (
                <p key={idx} className="text-terminal-green/80 leading-relaxed">
                  <span className="text-terminal-green mr-2">└─</span>
                  {item}
                </p>
              ))}
            </div>

            <div className="pt-6 border-t border-terminal-green/10">
              <h4 className="text-sm text-terminal-green/60 mb-3">Tecnologias utilizadas:</h4>
              <div className="flex flex-wrap gap-2">
                {exp.tecnologias.map((tech) => (
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
        ))}
      </div>
    </section>
  )
}

