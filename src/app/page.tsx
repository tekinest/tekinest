"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Cloud, Mail, Settings, Zap, Users, Target, Globe } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              We empower business and everyone
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-400">
              with the beauty of technology
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              and utilize the power to solve major problems
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <Link href="/services">Explore Services</Link>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-8 py-4 text-lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="border-green-500 text-green-400 mb-6">
              Our Mission
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Democratize technological solutions to the masses
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Whether for the general public or small businesses globally, we believe technology should be accessible, 
              understandable, and transformative for everyone.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Link href="/about">Discover Our Story</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We help small businesses achieve their goals with cutting-edge technology solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Cloud, 
                title: "AI Cloud Solutions", 
                description: "Scalable cloud infrastructure with AI-powered optimization",
                href: "/services/ai-cloud"
              },
              { 
                icon: Mail, 
                title: "Email Services", 
                description: "Professional email setup and management for your business",
                href: "/services/email"
              },
              { 
                icon: Settings, 
                title: "IT Support", 
                description: "Comprehensive IT support and system administration",
                href: "/services/it-support"
              },
              { 
                icon: Zap, 
                title: "Process Enhancement", 
                description: "Streamline business processes with smart automation",
                href: "/services"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href={service.href}>
                  <Card className="bg-gray-900/50 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                    <CardHeader>
                      <service.icon className="h-12 w-12 text-blue-400 mb-4" />
                      <CardTitle className="text-white">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="border-green-500 text-green-400 mb-6">
                Why Choose Tekinest
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Founded on Passion, Driven by Results
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Tekinest was founded to feed our passion for helping small businesses with their technological needs. 
                We grew up with the internet among people who didn&apos;t know how to use technology, so helping them use 
                technology to solve their needs brings deep meaning to our work.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 text-blue-400">
                  <Globe className="h-5 w-5" />
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center space-x-2 text-green-400">
                  <Users className="h-5 w-5" />
                  <span>Small Business Focus</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-400">
                  <Target className="h-5 w-5" />
                  <span>Problem Solving</span>
                </div>
              </div>
              <Button className="bg-green-600 hover:bg-green-700">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600/20 to-green-600/20 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold mb-4 text-white">Join Our Mission</h3>
                <p className="text-gray-300 mb-6">
                  Come work for us if you want to be a part of the next economic revolution. 
                  We appreciate young people hungry to solve real life problems of the world.
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <Link href="/careers">View Careers</Link>
                </Button>
              </div>
            </motion.div>
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
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Let&apos;s discuss how we can help you leverage technology to achieve your business goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-8 py-4 text-lg">
                <Link href="/clients">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
