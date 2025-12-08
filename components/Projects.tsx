'use client'

// Você pode adicionar seus projetos aqui
const projects = [
  {
    id: 1,
    name: 'Projeto t-code 1',
    description: 'Descrição do projeto desenvolvido na t-code. Stack utilizada e principais funcionalidades.',
    stack: ['Node.js', 'React', 'PostgreSQL', 'Docker', 'Kubernetes'],
    image: '/projects/project1.png', // Adicione suas imagens em public/projects/
    codeSnippet: `// Exemplo de código do projeto
async function processData(data) {
  const result = await db.query(data);
  return result;
}`,
  },
  {
    id: 2,
    name: 'Projeto t-code 2',
    description: 'Outro projeto desenvolvido na t-code com foco em performance e escalabilidade.',
    stack: ['Python', 'FastAPI', 'MongoDB', 'GCP'],
    image: '/projects/project2.png',
    codeSnippet: `# Exemplo de código Python
def handle_request(request):
    return process(request.data)`,
  },
  // Adicione mais projetos conforme necessário
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 border-t border-terminal-green/10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold terminal-glow mb-12">
          $ cd t-code && ls projects/
        </h2>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} className="border border-terminal-green/20 p-8 hover:border-terminal-green/40 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Imagem do projeto */}
                <div className="relative aspect-video bg-terminal-darker border border-terminal-green/20">
                  <div className="absolute inset-0 flex items-center justify-center text-terminal-green/40">
                    <span className="text-sm">project-{index + 1}.png</span>
                  </div>
                  {/* Descomente quando tiver as imagens */}
                  {/* <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  /> */}
                </div>
                
                {/* Informações do projeto */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-terminal-green terminal-glow">
                    {project.name}
                  </h3>
                  <p className="text-terminal-green/80 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="pt-4">
                    <h4 className="text-sm text-terminal-green/60 mb-2">Stack utilizada:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
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
              
              {/* Code snippet */}
              <div className="mt-8 pt-8 border-t border-terminal-green/10">
                <div className="bg-terminal-darker p-4 border border-terminal-green/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-terminal-green/60 text-xs">$ cat {project.name.toLowerCase().replace(/\s+/g, '-')}.js</span>
                  </div>
                  <pre className="text-terminal-green/90 text-sm overflow-x-auto">
                    <code>{project.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-terminal-green/60">
          <p>Mais projetos em desenvolvimento...</p>
        </div>
      </div>
    </section>
  )
}

