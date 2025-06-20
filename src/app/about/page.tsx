"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Globe, Heart, Lightbulb, Rocket } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
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
              About Tekinest
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Founded on Passion, Driven by Purpose
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Our mission is technological empowerment, whether for the general public or small businesses globally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  Tekinest was founded to feed our passion for helping small businesses with their technological needs. 
                  We grew up with the internet among people who didn&apos;t know how to use technology, so helping them use 
                  technology to solve their needs was something that brought deep meaning to our work.
                </p>
                <p>
                  We believe that technology should not be a barrier to success, but rather an enabler that helps 
                  businesses and individuals achieve their goals more efficiently and effectively.
                </p>
                <p>
                  Today, we continue to work with small businesses and individuals around the world, providing them 
                  with the technological tools and knowledge they need to succeed in an increasingly digital world.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600/20 to-green-600/20 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold mb-6 text-white">Our Core Values</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Passion-Driven</h4>
                      <p className="text-gray-300 text-sm">We genuinely care about helping businesses succeed</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">People-First</h4>
                      <p className="text-gray-300 text-sm">Technology should serve people, not the other way around</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Global Impact</h4>
                      <p className="text-gray-300 text-sm">Making technology accessible worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-700 h-full">
                <CardHeader>
                  <Target className="h-12 w-12 text-blue-400 mb-4" />
                  <CardTitle className="text-white text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-lg">
                    Technological empowerment, making technology accessible, 
                    understandable, and transformative for small businesses and individuals globally.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-700 h-full">
                <CardHeader>
                  <Lightbulb className="h-12 w-12 text-green-400 mb-4" />
                  <CardTitle className="text-white text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-lg">
                    A world where every business, regardless of size or location, has access to the technological 
                    tools and knowledge needed to thrive in the digital economy.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Do</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in making complex technology simple and accessible for businesses of all sizes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Technology Consulting",
                description: "We help businesses understand and implement the right technology solutions for their specific needs and budget.",
                icon: Users
              },
              {
                title: "System Implementation",
                description: "From cloud infrastructure to email systems, we handle the technical setup so you can focus on your business.",
                icon: Rocket
              },
              {
                title: "Ongoing Support",
                description: "We provide continuous support and education to ensure your technology keeps working for you as your business grows.",
                icon: Heart
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-700 h-full text-center">
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-blue-400 mb-4 mx-auto" />
                    <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Come work for us if you want to be a part of the next economic revolution. 
              We appreciate young people hungry to solve real life problems of the world.
            </p>
            
            <div className="bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-white">We&apos;re Looking For</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    Passionate problem solvers
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                    Technology enthusiasts
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    Customer-focused individuals
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                    Creative thinkers
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    Team collaborators
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                    Continuous learners
                  </li>
                </ul>
              </div>
              
              <div className="mt-8">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  <Link href="/careers">View Open Positions</Link>
                </Button>
              </div>
            </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how we can help your business leverage technology to achieve its goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-8 py-4 text-lg">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
