
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, ArrowRight, Terminal, MessageSquare, Upload, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function NestOSPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Monitor className="h-20 w-20 text-blue-400 mx-auto mb-6" />
            <Badge variant="secondary" className="bg-orange-600/20 text-orange-400 mb-6">
              In Development
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              NestOS
            </h1>
            <p className="text-2xl md:text-3xl text-blue-400 mb-8">
              A better dashboard for managing your doings
            </p>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
              A chat interface that allows you take control of your day to day activity, ask questions about data, files and media. Also allow you connect with third party apps.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 text-lg cursor-not-allowed"
                disabled
              >
                Coming Soon
                <Zap className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gradient-to-b hover:from-gray-800 hover:to-[#0d0d12] hover:text-white px-8 py-4 text-lg">
                <Link href="/contact">Get Early Access</Link>
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              Website launching soon - join our waitlist for early access
            </p>
          </motion.div>

          {/* Preview Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative w-full max-w-4xl mx-auto h-96 rounded-2xl overflow-hidden border border-gray-700 bg-gray-900/50"
          >
            <Image
              src="/images/client-media/demo.png"
              alt="NestOS preview"
              fill
              className="object-contain p-8 hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Problem We Solve</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-500/30 p-8">
              <CardContent className="p-0">
                <p className="text-xl text-gray-300 leading-relaxed">
                  The current LLMs are too general and barely context aware, NestOS will provide a better interface that uses context of your files and media to provide answers and manipulates data. Traditional dashboards and AI assistants don't understand your personal workflow and data context.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Key Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A revolutionary AI-powered personal dashboard that understands your context and workflow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Terminal,
                title: "Terminal Integration",
                description: "Run commands on your files and media directly through the AI interface"
              },
              {
                icon: MessageSquare,
                title: "Context-Aware Chat",
                description: "Chat interface that queries your apps and files with full context understanding"
              },
              {
                icon: Zap,
                title: "LLM with Environment Context",
                description: "Ask anything like a normal LLM but with access to your personal environment"
              },
              {
                icon: ArrowRight,
                title: "Intelligent Organization",
                description: "Organizes results intelligently for continued conversations and workflow"
              },
              {
                icon: Upload,
                title: "File Management",
                description: "Upload and store files in folders to reference later in conversations"
              },
              {
                icon: Monitor,
                title: "Third-Party Integrations",
                description: "Connect with your favorite apps and services for seamless workflow"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-700 h-full">
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-blue-400 mb-4" />
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

      {/* Target Audience */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Who Is This For?</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-500/30 p-8">
              <CardContent className="p-0 text-center">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Corporate employees, high performance individuals, ADHD folks that want to understand their life, those combining traditional UI with LLM. Perfect for anyone who wants a smarter, more contextual way to manage their digital life and workflows.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Development Status */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-blue-600/10 to-gray-800/10 rounded-2xl p-12 border border-gray-700/50 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-white">Currently In Development</h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                NestOS is being actively developed to revolutionize how you interact with your digital environment. 
                We're building something truly special that will change how you manage your daily workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  <Link href="/contact">Join the Waitlist</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gradient-to-b hover:from-gray-800 hover:to-[#0d0d12] hover:text-white px-8 py-4 text-lg">
                  <Link href="/solutions">View Other Solutions</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
