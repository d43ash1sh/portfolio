"use client"

import { useState, useEffect } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import Link from 'next/link'
import { Code2, Shield, BookOpen, Contact } from 'lucide-react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-sm border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link 
          href="/" 
          className="font-medium tracking-tight text-xl hover:text-primary/90 transition-colors hover-glow"
        >
          d43a_io
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href="#about" 
            className="text-sm font-medium hover:text-primary/90 transition-colors flex items-center gap-2 hover-glow"
          >
            <BookOpen className="h-4 w-4" />
            About
          </Link>
          <Link 
            href="#skills" 
            className="text-sm font-medium hover:text-primary/90 transition-colors flex items-center gap-2 hover-glow"
          >
            <Code2 className="h-4 w-4" />
            Skills
          </Link>
          <Link 
            href="#projects" 
            className="text-sm font-medium hover:text-primary/90 transition-colors flex items-center gap-2 hover-glow"
          >
            <Shield className="h-4 w-4" />
            Projects
          </Link>
          <Link 
            href="#contact" 
            className="text-sm font-medium hover:text-primary/90 transition-colors flex items-center gap-2 hover-glow"
          >
            <Contact className="h-4 w-4" />
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header