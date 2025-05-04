import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Code, BookOpen, Users } from 'lucide-react'

const CurrentActivities = () => {
  const activities = [
    {
      title: 'Security Research',
      description: 'Actively hunting for vulnerabilities in web applications and APIs through bug bounty programs.',
      icon: Shield,
    },
    {
      title: 'Web3 Development',
      description: 'Building decentralized applications using Ethereum, IPFS, and exploring smart contract security.',
      icon: Code,
    },
    {
      title: 'Community Leadership',
      description: 'Leading the OWASP Itanagar Chapter and mentoring upcoming security professionals.',
      icon: Users,
    },
    {
      title: 'Continuous Learning',
      description: 'Staying up-to-date with the latest in cybersecurity and blockchain technologies.',
      icon: BookOpen,
    },
  ]

  return (
    <section id="current" className="container px-4 md:px-6 py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center md:text-left">
          What I'm doing now
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <Card key={index} className="border-border overflow-hidden transition-all duration-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <activity.icon className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">{activity.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CurrentActivities