'use client'

const techCategories = {
  'Linguagens': {
    items: ['Node.js', 'TypeScript', 'JavaScript', 'PHP', 'Java', 'Python'],
    description: 'Linguagens de programação que utilizo no dia a dia'
  },
  'Backend Frameworks': {
    items: ['Spring Boot', 'Laravel', 'Express.js', 'FastAPI', 'NestJS', 'AdonisJS'],
    description: 'Frameworks para desenvolvimento backend'
  },
  'Frontend': {
    items: ['React', 'Vue.js', 'Next.js', 'Tailwind CSS'],
    description: 'Tecnologias frontend (consigo arrumar quando necessário)'
  },
  'Bancos de Dados': {
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
    description: 'Bancos de dados relacionais e NoSQL'
  },
  'Cloud & DevOps': {
    items: ['GCP', 'Docker', 'Gitlab CI', 'CircleCI', 'Nginx', 'AWS', 'Heroku', 'Render', 'Kubernetes'],
    description: 'Infraestrutura em nuvem e DevOps'
  },
  'Arquitetura': {
    items: ['Microsserviços', 'Monolito', 'Mensageria', 'CQRS', 'ETL', 'API REST', 'Webhooks', 'GraphQL'],
    description: 'Padrões e arquiteturas de software'
  },
  'Ferramentas': {
    items: ['Linux','Git', 'Bash', 'Pentaho', 'Postman', 'Insomnia', 'Grafana', 'Cloud Monitoring (GCP)', 'Cursor', 'Cloude Code'],
    description: 'Ferramentas de observabilidade, desenvolvimento e automação'
  },
}

export default function Stacks() {
  return (
    <section className="max-w-6xl mx-auto space-y-8">
      <div className="space-y-6">
        {Object.entries(techCategories).map(([category, { items, description }]) => (
          <div key={category} className="border border-terminal-green/20 p-6 hover:border-terminal-green/40 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-terminal-green terminal-glow">
                {category}/
              </h3>
              <span className="text-terminal-green/40 text-xs">{items.length} tecnologias</span>
            </div>
            <p className="text-terminal-green/60 text-sm mb-4">{description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {items.map((tech) => (
                <div 
                  key={tech} 
                  className="text-terminal-green/80 flex items-center text-sm border border-terminal-green/10 p-2 hover:border-terminal-green/30 transition-colors"
                >
                  <span className="text-terminal-green mr-2">└─</span>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 pt-8 border-t border-terminal-green/10 text-center text-terminal-green/60">
        <p>
          <span className="text-terminal-green">$</span> Stack em constante evolução...
        </p>
      </div>
    </section>
  )
}

