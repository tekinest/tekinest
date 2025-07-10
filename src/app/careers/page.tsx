
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, DollarSign, Users, Code, Lightbulb, Send, CheckCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CareersPage() {
  const [applicationSubmitted, setApplicationSubmitted] = useState(false)
  const [applicationEmail, setApplicationEmail] = useState("")
  const [selectedPosition, setSelectedPosition] = useState("")

  const positions = [
    // Software Engineers (5)
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Engineering",
      type: "Full-time",
      icon: Code,
      description: "Lead development of scalable web applications and mentor junior developers.",
      requirements: ["5+ years experience", "Full-stack development", "Leadership skills", "Modern frameworks"],
      responsibilities: ["Architect solutions", "Code reviews", "Mentoring", "Technical decisions"]
    },
    {
      id: 2,
      title: "Backend Software Engineer",
      department: "Engineering",
      type: "Full-time",
      icon: Code,
      description: "Build robust server-side applications and APIs for our growing platform.",
      requirements: ["3+ years backend experience", "Database design", "API development", "Cloud platforms"],
      responsibilities: ["API development", "Database optimization", "System architecture", "Performance tuning"]
    },
    {
      id: 3,
      title: "Frontend Software Engineer",
      department: "Engineering",
      type: "Full-time",
      icon: Code,
      description: "Create exceptional user experiences with modern frontend technologies.",
      requirements: ["3+ years frontend experience", "React/Next.js", "TypeScript", "UI/UX principles"],
      responsibilities: ["UI development", "Component libraries", "Performance optimization", "User experience"]
    },
    {
      id: 4,
      title: "Full-Stack Software Engineer",
      department: "Engineering",
      type: "Full-time",
      icon: Code,
      description: "Work across the entire technology stack to deliver complete solutions.",
      requirements: ["4+ years full-stack experience", "Multiple programming languages", "DevOps knowledge", "Problem solving"],
      responsibilities: ["End-to-end development", "System integration", "DevOps tasks", "Technical documentation"]
    },
    {
      id: 5,
      title: "Mobile Software Engineer",
      department: "Engineering",
      type: "Full-time",
      icon: Code,
      description: "Develop cutting-edge mobile applications for iOS and Android platforms.",
      requirements: ["3+ years mobile development", "React Native or native development", "App store deployment", "Mobile UI/UX"],
      responsibilities: ["Mobile app development", "Cross-platform solutions", "App optimization", "User testing"]
    },
    // Web Developers (3)
    {
      id: 6,
      title: "Senior Web Developer",
      department: "Development",
      type: "Full-time",
      icon: Code,
      description: "Lead web development projects and ensure high-quality deliverables.",
      requirements: ["4+ years web development", "Modern frameworks", "Project leadership", "Client communication"],
      responsibilities: ["Project management", "Code quality", "Client interaction", "Team coordination"]
    },
    {
      id: 7,
      title: "Frontend Web Developer",
      department: "Development",
      type: "Full-time",
      icon: Code,
      description: "Create beautiful and functional websites using the latest web technologies.",
      requirements: ["2+ years frontend experience", "HTML/CSS/JavaScript", "Responsive design", "Version control"],
      responsibilities: ["Website development", "UI implementation", "Cross-browser compatibility", "Performance optimization"]
    },
    {
      id: 8,
      title: "WordPress Developer",
      department: "Development",
      type: "Full-time",
      icon: Code,
      description: "Develop custom WordPress themes and plugins for client projects.",
      requirements: ["2+ years WordPress experience", "PHP development", "Custom themes", "Plugin development"],
      responsibilities: ["WordPress development", "Custom solutions", "Site maintenance", "Client support"]
    },
    // Interns (2)
    {
      id: 9,
      title: "Software Engineering Intern",
      department: "Engineering",
      type: "Internship",
      icon: Users,
      description: "Learn and contribute to real-world software development projects.",
      requirements: ["Computer Science student", "Programming fundamentals", "Eagerness to learn", "Team collaboration"],
      responsibilities: ["Code contributions", "Learning sessions", "Project assistance", "Documentation"]
    },
    {
      id: 10,
      title: "Web Development Intern",
      department: "Development",
      type: "Internship",
      icon: Users,
      description: "Gain hands-on experience in web development and digital solutions.",
      requirements: ["Web development basics", "HTML/CSS/JavaScript", "Portfolio projects", "Communication skills"],
      responsibilities: ["Website updates", "Content management", "Testing assistance", "Learning activities"]
    },
    // Prompt Engineer (1)
    {
      id: 11,
      title: "AI Prompt Engineer",
      department: "AI/Innovation",
      type: "Full-time",
      icon: Lightbulb,
      description: "Design and optimize AI prompts for various applications and improve AI model performance.",
      requirements: ["AI/ML knowledge", "Prompt engineering experience", "Language models", "Creative thinking"],
      responsibilities: ["Prompt optimization", "AI model fine-tuning", "Performance analysis", "Innovation research"]
    }
  ]

  const handleApplicationSubmit = (e: React.FormEvent, position: string) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const email = formData.get('email') as string
    
    if (email) {
      setApplicationEmail(email)
      setSelectedPosition(position)
      setApplicationSubmitted(true)
    }
  }

  if (applicationSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        
        <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto text-center max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <CheckCircle className="h-20 w-20 text-green-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Application Submitted!
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Thank you for your interest in the <strong>{selectedPosition}</strong> position. 
                We&apos;ve received your application at <strong>{applicationEmail}</strong>.
              </p>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-semibold mb-4">What happens next?</h3>
                <ul className="text-left text-gray-300 space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    Our team will review your application within 3-5 business days
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    If selected, we&apos;ll reach out for an initial conversation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    Technical assessment and team interviews will follow
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    We&apos;ll keep you updated throughout the process
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => setApplicationSubmitted(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  Apply for Another Position
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3"
                  onClick={() => window.location.href = '/'}
                >
                  Back to Home
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="border-blue-500 text-blue-400 mb-6">
              Join Our Team
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Shape the Future of Technology
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our mission to revolutionize how businesses leverage technology. 
              We&apos;re looking for passionate individuals who want to solve real-world problems.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-blue-600/20 text-blue-400">
                <MapPin className="h-4 w-4 mr-1" />
                100% Remote
              </Badge>
              <Badge variant="secondary" className="bg-green-600/20 text-green-400">
                11 Open Positions
              </Badge>
              <Badge variant="secondary" className="bg-purple-600/20 text-purple-400">
                Competitive Benefits
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Positions */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Open Positions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover opportunities to grow your career while making a meaningful impact
            </p>
          </motion.div>

          <div className="grid gap-8 max-w-6xl mx-auto">
            {positions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-600/20 rounded-lg">
                          <position.icon className="h-6 w-6 text-blue-400" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-white">{position.title}</CardTitle>
                          <CardDescription className="text-gray-300 text-lg mt-1">
                            {position.department} • {position.type}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-gray-300 mb-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          Remote
                        </div>
                        <div className="flex items-center text-gray-300">
                          <DollarSign className="h-4 w-4 mr-1" />
                          TBD
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-300 mb-6 text-lg">{position.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-center text-gray-300">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-semibold mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {position.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-center text-gray-300">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Application Form */}
                    <div className="bg-gray-800/40 rounded-lg p-6 border border-gray-600/50">
                      <h4 className="text-white font-semibold mb-4">Apply for this position</h4>
                      <form onSubmit={(e) => handleApplicationSubmit(e, position.title)} className="flex gap-3">
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Enter your email address"
                          className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                        />
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                          <Send className="h-4 w-4 mr-2" />
                          Apply
                        </Button>
                      </form>
                      <p className="text-gray-400 text-sm mt-2">
                        Simply enter your email and we&apos;ll contact you shortly to discuss next steps.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Join Tekinest?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We&apos;re building more than just technology - we&apos;re creating the future
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Remote-First Culture",
                description: "Work from anywhere with flexible hours and a focus on results, not location.",
                icon: MapPin
              },
              {
                title: "Growth Opportunities",
                description: "Continuous learning, mentorship programs, and career advancement paths.",
                icon: Users
              },
              {
                title: "Innovation Focus",
                description: "Work on cutting-edge projects that solve real-world problems for businesses.",
                icon: Lightbulb
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-700 text-center h-full">
                  <CardHeader>
                    <benefit.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                    <CardTitle className="text-white">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
