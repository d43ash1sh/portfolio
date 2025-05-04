import { Button } from '@/components/ui/button'
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section id="about" className="container px-4 md:px-6 pt-24 md:pt-32 pb-8">
      <div className="max-w-3xl mx-auto text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
          Debashish
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Web3 & Cybersecurity Enthusiast from Assam, India
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start mb-12">
          <Button asChild>
            <Link href="mailto:d4shh4x0r@wearehackerone.com">
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link 
                href="https://github.com/d43ash1sh" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link 
                href="https://linkedin.com/in/debashishbordoloi" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link 
                href="https://x.com/d43a_io" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="p-6 border rounded-lg bg-card text-left animate-in fade-in-50 slide-in-from-bottom-5 duration-700">
          <h2 className="text-lg font-semibold mb-3">About Me</h2>
          <p className="text-muted-foreground mb-4">
            I'm a 24-year-old Security Researcher and Developer with a passion for Web3 technologies
            and cybersecurity. My work spans from hunting security vulnerabilities to building secure
            applications and exploring decentralized technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Roles & Affiliations</h3>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>• Security Researcher at HackerOne & Bugcrowd</li>
                <li>• Developer Program Member at GitHub, Meta & Google</li>
                <li>• ExDev at CNCF Guwahati Chapter</li>
                <li>• ExItanagar Chapter Leader, OWASP Foundation (2023–24)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">Assam, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection