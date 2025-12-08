'use client'

const codeExamples = [
  {
    title: 'API REST com Node.js',
    language: 'javascript',
    code: `// Exemplo de endpoint robusto
app.post('/api/users', async (req, res) => {
  try {
    const user = await UserService.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`,
  },
  {
    title: 'Dockerfile otimizado',
    language: 'dockerfile',
    code: `FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]`,
  },
  {
    title: 'Kubernetes Deployment',
    language: 'yaml',
    code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: app
        image: gcr.io/project/app:latest
        ports:
        - containerPort: 3000`,
  },
]

export default function CodeShowcase() {
  return (
    <section id="code" className="py-20 px-6 border-t border-terminal-green/10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold terminal-glow mb-12">
          $ cat code-snippets/
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {codeExamples.map((example, index) => (
            <div key={index} className="border border-terminal-green/20 p-6 hover:border-terminal-green/40 transition-colors">
              <h3 className="text-xl font-bold text-terminal-green mb-4 terminal-glow">
                {example.title}
              </h3>
              <div className="bg-terminal-darker p-4 border border-terminal-green/20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-terminal-green/60 text-xs">
                    $ cat {example.title.toLowerCase().replace(/\s+/g, '-')}.{example.language === 'javascript' ? 'js' : example.language === 'dockerfile' ? 'dockerfile' : 'yaml'}
                  </span>
                </div>
                <pre className="text-terminal-green/90 text-sm overflow-x-auto">
                  <code>{example.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-terminal-green/60">
            <span className="text-terminal-green">$</span> Mais exemplos de código disponíveis no{' '}
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
      </div>
    </section>
  )
}

