"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Users, ArrowRight, Zap, Shirt, ChefHat, Monitor } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SolutionsPage() {
  const solutions = [
    {
      name: "Tiwanova",
      tagline: "Look elegant globally",
      description: "Ready made garments made in Africa by vetted Taylors and fashion designers, shipped to you anywhere in the world in days. Take your measurement and have any style you want anytime, for affordable prices.",
      icon: Shirt,
      problem: "Looking elegant in historical garments is tough to access, imagine not being able to get a garment in days for an event or everyday life",
      features: [
        "Take measurement with your phone camera",
        "Have vetted Taylors and fashion designers craft your chosen garment",
        "Buy different materials to sew yourself or use",
        "Global shipping in days",
        "Affordable pricing",
        "Traditional African attire focus"
      ],
      audience: "Everyone interested in traditional African attires",
      status: "In Development",
      href: "/solutions/tiwanova"
    },
    {
      name: "Kosebi",
      tagline: "A recipe wiki for African dishes for people living in the diaspora",
      description: "This will be a wiki for various dishes of African origin, it will show you everything you need to make a dish from planning to even dishing it out.",
      icon: ChefHat,
      problem: "Many people who live abroad away from Africa are either forced to eat the dish of the place they are in or buy expensive African dishes from African restaurants. This is not always what they want, because the hunger African food can cure is different from what any other dish can cure.",
      features: [
        "Comprehensive recipe database",
        "Step-by-step cooking instructions",
        "Modifications and substitution suggestions",
        "Add ingredients to cart automatically",
        "Cultural context and dish history",
        "Community contributions and reviews"
      ],
      audience: "Africans in diaspora and anyone else who enjoy African dishes",
      status: "Beta",
      href: "/solutions/kosebi"
    },
    {
      name: "NestOS",
      tagline: "A better dashboard for managing your doings",
      description: "A chat interface that allows you take control of your day to day activity, ask questions about data, files and media. Also allow you connect with third party apps.",
      icon: Monitor,
      problem: "The current LLMs are too general and barely context aware, NestOS will provide a better interface that uses context of your files and media to provide answers and manipulates data.",
      features: [
        "Terminal to run commands on your files and media",
        "Chat interface to query your apps and files",
        "Ask it anything like a normal LLM using environment context",
        "Organize results intelligently for continued conversations",
        "Upload and store files in folders to reference later",
        "Third-party app integrations"
      ],
      audience: "Corporate employees, high performance individuals, ADHD folks that want to understand their life, those combining traditional UI with LLM",
      status: "In Development",
      href: "/solutions/nestos"
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
            <Badge variant="outline" className="border-blue-500 text-blue-400 mb-6">
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
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <div className="grid lg:grid-cols-12 gap-8">
                  {/* Solution Preview Box - Takes 4/12 width */}
                  <div className={`lg:col-span-4 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'} bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-2xl p-8 flex flex-col justify-between`}>
                    <div>
                      <div className="text-center mb-6">
                        <solution.icon className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white">{solution.name}</h3>
                        <p className="text-lg text-blue-400 mt-1">{solution.tagline}</p>
                        <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 mt-3">
                          {solution.status}
                        </Badge>
                      </div>
                      <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-600 bg-white/5 flex items-center justify-center">
                        <Image
                          src="/images/client-media/demo.png"
                          alt={`${solution.name} preview`}
                          fill
                          className="object-contain p-4 hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                        <Link href={solution.href} className="flex items-center justify-center">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Solution Information Box - Takes 8/12 width */}
                  <div className={`lg:col-span-8 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-2xl p-8`}>
                    <div className="space-y-8">
                      {/* Header */}
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-4">Solution Overview</h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                          {solution.description}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Left Column - Problem & Audience */}
                        <div className="space-y-6">
                          {/* Problem Statement */}
                          <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 p-5 rounded-xl border border-red-500/30">
                            <h3 className="text-lg font-semibold text-red-400 mb-3">Problem We Solve</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {solution.problem}
                            </p>
                          </div>

                          {/* Target Audience */}
                          <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-5 rounded-xl border border-green-500/30">
                            <h3 className="text-lg font-semibold text-green-400 mb-3">Target Audience</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {solution.audience}
                            </p>
                          </div>
                        </div>

                        {/* Right Column - Features */}
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
                          <div className="space-y-2">
                            {solution.features.slice(0, 6).map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                                <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Call to Action */}
                      <div className="flex gap-4 pt-4">
                        <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gradient-to-b hover:from-gray-800 hover:to-[#0d0d12] hover:text-white flex-1">
                          <Link href="/contact">Contact Us</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
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
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gradient-to-b hover:from-gray-800 hover:to-[#0d0d12] hover:text-white px-8 py-4 text-lg">
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
