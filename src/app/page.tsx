"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Cloud, Mail, Settings, Zap, Users, Globe } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Animated Background Lines */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-20 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20 + 10}%`,
                transform: `rotate(${Math.random() * 30 - 15}deg)`,
              }}
              animate={{
                y: ["0vh", "120vh"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear",
              }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`secondary-${i}`}
              className="absolute w-0.5 h-32 bg-gradient-to-b from-transparent via-gray-400/20 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20 + 10}%`,
                transform: `rotate(${Math.random() * 40 - 20}deg)`,
              }}
              animate={{
                y: ["0vh", "120vh"],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
              We empower businesses and everyone
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-12 text-blue-400 leading-tight">
              with the beauty of technology
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed">
              and utilize the power to solve major problems
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <Link href="/contact">Get Started</Link>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gradient-to-b hover:from-gray-800 hover:to-[#0d0d12] hover:text-white px-8 py-4 text-lg">
                <Link href="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="border-gray-600 text-gray-300 mb-6">
              Our Clients
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by Growing Businesses
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              We partner with innovative companies across industries to deliver transformative technology solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Bricklage",
                industry: "Real Estate",
                description: "Technological infrastructure development for real estate market entry",
                website: "https://bricklage.com",
                logo: "🏢"
              },
              {
                name: "aj-playground.org",
                industry: "Portfolio",
                description: "Comprehensive portfolio platform with blog and authentication",
                website: "https://aj-playground.org",
                logo: "👨‍💻"
              },
              {
                name: "Mkagrik International",
                industry: "Agriculture",
                description: "Digital marketplace connecting farmers with produce and equipment",
                website: "https://mk-agrikint.org",
                logo: "🌾"
              }
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 h-full">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-4">{client.logo}</div>
                    <CardTitle className="text-white text-xl">{client.name}</CardTitle>
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-500/30">
                      {client.industry}
                    </Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-300 mb-6">
                      {client.description}
                    </CardDescription>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-gray-600 text-gray-300 hover:bg-gradient-to-b hover:from-gray-800 hover:to-[#0d0d12] hover:text-white"
                      onClick={() => window.open(client.website, '_blank')}
                    >
                      Visit Website
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Link href="/clients">View All Our Clients</Link>
            </Button>
          </div>
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="border-gray-600 text-gray-300 mb-6">
              Why Choose Tekinest
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto">
              Founded on Passion, Driven by Results
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-blue-600/10 to-gray-800/10 rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white">Our Story</h3>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Tekinest was founded to feed our passion for helping small businesses with their technological needs. 
                  We grew up with the internet among people who didn&apos;t know how to use technology, so helping them use 
                  technology to solve their needs brings deep meaning to our work.
                </p>
              </div>

              <Button 
                size="lg" 
                className="bg-gradient-to-b from-gray-700 to-[#0d0d12] hover:from-gray-600 hover:to-gray-800 text-lg px-8 py-4"
              >
                <Link href="/about">Learn More About Us</Link>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            {/* Right Column - Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-white text-center lg:text-left">
                What Sets Us Apart
              </h3>

              <div className="grid gap-6">
                {[
                  {
                    icon: Globe,
                    title: "Global Reach",
                    description: "Serving businesses worldwide with localized expertise and 24/7 support across all time zones.",
                    color: "text-blue-400"
                  },
                  {
                    icon: Users,
                    title: "Small Business Focus", 
                    description: "Specialized solutions tailored for growing companies, understanding unique challenges and budget constraints.",
                    color: "text-gray-300"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-gray-800/30 to-gray-900/30 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
                  >
                    <div className={`p-3 rounded-lg bg-gray-800/50 ${feature.color}`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Mission */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-600/20 to-gray-800/20 rounded-2xl p-8 border border-gray-700 text-center">
              <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-white">Join Our Mission</h3>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Come work for us if you want to be a part of the next economic revolution. 
                We appreciate young people hungry to solve real life problems of the world.
              </p>
              <Button className="bg-gradient-to-b from-gray-700 to-[#0d0d12] hover:from-gray-600 hover:to-gray-800 text-white text-lg px-8 py-4">
                <Link href="/careers">View Careers</Link>
              </Button>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Let&apos;s discuss how we can help you leverage technology to achieve your business goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gradient-to-b hover:from-gray-800 hover:to-[#0d0d12] hover:text-white px-8 py-4 text-lg">
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