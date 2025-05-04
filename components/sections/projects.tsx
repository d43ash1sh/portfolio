import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Github, ExternalLink } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'SpeedPulse',
      description: 'A decentralized cloud storage platform built on IPFS and Ethereum, allowing users to securely store and share files without relying on centralized services.',
      tags: ['Tailwind CSS', 'React (Next.js / Vite)', 'Framer Motion', 'Node.js'],
      githubUrl: 'https://github.com/d43ash1sh/SpeedPulse',
      liveUrl: 'https://speed-pulse-iota.vercel.app',
    },
    {
      title: 'Subz',
      description: 'A fast and efficient subdomain enumeration tool designed for security researchers and penetration testers to discover hidden subdomains during security assessments.',
      tags: ['Python', 'Security', 'CLI', 'Reconnaissance'],
      githubUrl: 'https://github.com/d43ash1sh/subdomain_enumeration',
      liveUrl: '#',
    },
    {
      title: 'Modern UI Explorer',
      description: 'A sleek, fast, and fully modular Next.js + Tailwind CSS UI framework—built with performance, developer experience, and design scalability in mind.',
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'ESLint + Prettier'],
      githubUrl: 'https://github.com/d43ash1sh/modern-ui-explorer',
      liveUrl: 'https://modern-ui-explorer.vercel.app/',
    },
    {
      title: 'Host-Based IDS',
      description: 'A lightweight intrusion detection system that monitors system activities for suspicious behavior and potential security threats, with real-time alerts.',
      tags: ['Cybersecurity', 'Python', 'System Monitoring', 'Alerts'],
      githubUrl: 'https://github.com/d43ash1sh/HostAware-Intrusion-Detection-System',
      liveUrl: '#',
    },
  ]

  return (
    <section id="projects" className="container px-4 md:px-6 py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center md:text-left">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border-border overflow-hidden transition-all duration-300 hover:shadow-md flex flex-col"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <CardDescription className="text-muted-foreground mb-4">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-3 pt-2">
                <Button variant="outline" size="sm" asChild>
                  <Link 
                    href={project.githubUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Link>
                </Button>
                {project.liveUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <Link 
                      href={project.liveUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects