
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shirt, ArrowRight, ExternalLink, Camera, Globe, Palette } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TiwanovaPage() {
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
            <Shirt className="h-20 w-20 text-blue-400 mx-auto mb-6" />
            <Badge variant="secondary" className="bg-orange-600/20 text-orange-400 mb-6">
              In Development
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Tiwanova
            </h1>
            <p className="text-2xl md:text-3xl text-blue-400 mb-8">
              Look elegant globally
            </p>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Ready made garments made in Africa by vetted Taylors and fashion designers, shipped to you anywhere in the world in days. Take your measurement and have any style you want anytime, for affordable prices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                onClick={() => window.open('https://tiwanova.com', '_blank')}
              >
                Visit Tiwanova
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gradient-to-b hover:from-gray-800 hover:to-[#0d0d12] hover:text-white px-8 py-4 text-lg">
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
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
              alt="Tiwanova preview"
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
                  Looking elegant in historical garments is tough to access, imagine not being able to get a garment in days for an event or everyday life. Traditional African attire often requires specialized knowledge and skills that aren't readily available worldwide.
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
              Revolutionary technology meets traditional craftsmanship for global fashion accessibility
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: "Phone Camera Measurements",
                description: "Take accurate measurements using just your smartphone camera with our AI technology"
              },
              {
                icon: Shirt,
                title: "Vetted Craftspeople",
                description: "Work with verified tailors and fashion designers specializing in traditional African attire"
              },
              {
                icon: Palette,
                title: "Material Selection",
                description: "Choose from premium African fabrics or buy materials to sew yourself"
              },
              {
                icon: Globe,
                title: "Global Shipping",
                description: "Fast worldwide delivery, getting your custom garments to you in days"
              },
              {
                icon: ArrowRight,
                title: "Affordable Pricing",
                description: "Quality traditional garments at prices that won't break the bank"
              },
              {
                icon: ExternalLink,
                title: "Traditional Focus",
                description: "Specializing in authentic African attire with cultural significance"
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
                  Everyone interested in traditional African attires. Whether you're attending a cultural event, expressing your heritage, or simply appreciate the beauty of African fashion, Tiwanova makes authentic garments accessible worldwide.
                </p>
              </CardContent>
            </Card>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Look Elegant Globally?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Experience the beauty of traditional African fashion with modern convenience and global accessibility.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                onClick={() => window.open('https://tiwanova.com', '_blank')}
              >
                Visit Tiwanova Now
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gradient-to-b hover:from-gray-800 hover:to-[#0d0d12] hover:text-white px-8 py-4 text-lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
