import { Badge } from '@/components/ui/badge'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Web Development',
      skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    },
    {
      title: 'Security',
      skills: ['Ethical Hacking', 'API Pentesting', 'IDS', 'OWASP Top 10', 'Vulnerability Assessment'],
    },
    {
      title: 'Blockchain',
      skills: ['IPFS', 'Ethereum', 'Smart Contracts', 'Web3.js', 'Solidity Basics'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'AWS', 'GCP', 'CI/CD', 'Vercel', 'Netlify'],
    },
  ]

  return (
    <section id="skills" className="container px-4 md:px-6 py-8 bg-muted/30">
      <div className="max-w-5xl mx-auto py-12">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center md:text-left">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary"
                    className="text-sm py-1 px-3"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills