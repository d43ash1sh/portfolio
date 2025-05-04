import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Calendar, Mail, Send } from 'lucide-react'
import Link from 'next/link'

const Contact = () => {
  return (
    <section id="contact" className="container px-4 md:px-6 py-16 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-4 text-center md:text-left">
          Get in Touch
        </h2>
        <p className="text-muted-foreground mb-8 text-center md:text-left">
          Have a question or want to work together? Feel free to reach out!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-xl">Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="Name"
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Email"
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Subject"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder="Your message"
                    className="min-h-[120px] w-full"
                  />
                </div>
                <Button className="w-full sm:w-auto" type="submit">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="flex flex-col space-y-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <Link
                    href="mailto:d4shh4x0r@wearehackerone.com"
                    className="text-primary hover:underline"
                  >
                    d4shh4x0r@wearehackerone.com
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border flex-grow">
              <CardHeader>
                <CardTitle className="text-xl">Schedule a Call</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className="text-muted-foreground mb-4">
                  Prefer to talk directly? Book a time slot that works for you.
                </p>
                <div className="mt-auto">
                  <Button asChild className="w-full">
                    <Link
                      href="https://calendly.com/debashishbordoloi007/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule a Meeting
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact