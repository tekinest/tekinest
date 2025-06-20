"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Bot, GraduationCap, Users, ArrowRight, Star, Zap } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SolutionsPage() {
  const solutions = [
    {
      name: "ChatNest",
      tagline: "AI Chatbot Wrapper for Business Owners",
      description: "Empower your business with intelligent AI conversations that understand your customers and provide instant, accurate responses 24/7.",
      icon: MessageSquare,
      features: [
        "Custom AI training on your business data",
        "Multi-platform integration (website, social media, messaging apps)",
        "Real-time analytics and conversation insights",
        "Seamless handoff to human agents when needed",
        "Multilingual support for global reach",
        "Industry-specific templates and workflows"
      ],
      benefits: [
        "Reduce customer service costs by up to 70%",
        "Provide instant 24/7 customer support",
        "Increase customer satisfaction and engagement",
        "Scale your business without hiring more staff"
      ],
      targetAudience: "Small to medium businesses looking to automate customer service and improve customer experience",
      href: "/solutions/chatnest",
      status: "Available Now",
      pricing: "Starting at $99/month"
    },
    {
      name: "TekiSite",
      tagline: "Teaching Tech Skills to Young Folks",
      description: "An interactive learning platform designed to teach essential technology skills to young people, preparing them for the digital future.",
      icon: GraduationCap,
      features: [
        "Interactive coding tutorials and exercises",
        "Project-based learning approach",
        "Mentorship programs with industry professionals",
        "Career guidance and job placement assistance",
        "Certification programs for various tech skills",
        "Community forums and peer-to-peer learning"
      ],
      benefits: [
        "Bridge the digital skills gap",
        "Provide accessible tech education",
        "Create pathways to tech careers",
        "Build a community of young tech enthusiasts"
      ],
      targetAudience: "Young people aged 16-25 interested in learning technology skills and pursuing tech careers",
      href: "/solutions/tekisite",
      status: "Coming Soon",
      pricing: "Freemium model with premium features"
    }
  ]

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
            <Badge variant="outline" className="border-green-500 text-green-400 mb-6">
              Our Solutions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Innovative Solutions for Modern Challenges
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We create custom solutions that address real-world problems and help businesses and individuals thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <solution.icon className="h-12 w-12 text-blue-400 mr-4" />
                    <div>
                      <h2 className="text-4xl font-bold text-white">{solution.name}</h2>
                      <p className="text-lg text-green-400 mt-1">{solution.tagline}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-300 mb-6">
                    {solution.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 flex items-start">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Benefits</h3>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-gray-300 flex items-start">
                          <Star className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Link href={solution.href} className="flex items-center">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    {solution.status === "Available Now" && (
                      <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black">
                        <Link href="/contact">Get Started</Link>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Solution Card */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 border-gray-700 h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <solution.icon className="h-16 w-16 text-blue-400" />
                        <Badge 
                          variant={solution.status === "Available Now" ? "default" : "secondary"}
                          className={solution.status === "Available Now" ? "bg-green-600/20 text-green-400" : "bg-orange-600/20 text-orange-400"}
                        >
                          {solution.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-white text-2xl">{solution.name}</CardTitle>
                      <CardDescription className="text-green-400 text-lg">
                        {solution.tagline}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <p className="text-gray-300">
                          {solution.description}
                        </p>
                        
                        <div>
                          <h4 className="font-semibold text-white mb-2">Target Audience</h4>
                          <p className="text-gray-300 text-sm">{solution.targetAudience}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-white mb-2">Pricing</h4>
                          <p className="text-blue-400 font-medium">{solution.pricing}</p>
                        </div>

                        <div className="pt-4">
                          {solution.status === "Available Now" ? (
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">
                              <Link href="/contact">Get Started Today</Link>
                            </Button>
                          ) : (
                            <Button variant="outline" className="w-full border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black">
                              <Link href="/contact">Join Waitlist</Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Solutions */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Our Solutions?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions are built with real-world experience and designed to solve actual business problems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "AI-Powered",
                description: "Leverage the latest AI technology to automate processes and enhance user experiences."
              },
              {
                icon: Users,
                title: "User-Centric",
                description: "Designed with the end-user in mind, ensuring ease of use and maximum adoption."
              },
              {
                icon: Zap,
                title: "Scalable",
                description: "Built to grow with your business, from startup to enterprise level."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-700 h-full text-center">
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-blue-400 mb-4 mx-auto" />
                    <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Whether you need an AI chatbot for customer service or want to invest in tech education, 
              we have solutions that can make a real difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-8 py-4 text-lg">
                <Link href="/services">Explore All Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
