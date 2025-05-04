import HeroSection from '@/components/sections/hero'
import CurrentActivities from '@/components/sections/current-activities'
import Skills from '@/components/sections/skills'
import Projects from '@/components/sections/projects'
import Contact from '@/components/sections/contact'

export default function Home() {
  return (
    <div className="flex flex-col space-y-24 pt-16">
      <HeroSection />
      <CurrentActivities />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}