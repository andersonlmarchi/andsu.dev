'use client'

const techCategories = {
  'Backend': ['Node.js', 'Python', 'Go', 'Java', 'Rust'],
  'Databases': ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
  'Cloud & DevOps': ['GCP', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD'],
  'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  'Tools': ['Git', 'Linux', 'Bash', 'Nginx', 'Prometheus'],
}

export default function TechStack() {
  return (
    <section id="tech" className="py-20 px-6 border-t border-terminal-green/10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold terminal-glow mb-12">
          $ ls tech-stack/
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(techCategories).map(([category, techs]) => (
            <div key={category} className="border border-terminal-green/20 p-6 hover:border-terminal-green/40 transition-colors">
              <h3 className="text-xl font-bold text-terminal-green mb-4 terminal-glow">
                {category}/
              </h3>
              <ul className="space-y-2">
                {techs.map((tech) => (
                  <li key={tech} className="text-terminal-green/80 flex items-center">
                    <span className="text-terminal-green mr-2">└─</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

