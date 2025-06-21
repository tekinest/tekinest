"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Building, Leaf, User, Cpu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ClientsPage() {
  const clients = [
    {
      name: "Bricklage",
      industry: "Real Estate",
      icon: Building,
      project: "Assisted in the development of the technological infrastructure for their products' market entry, as they are a real estate company.",
      services: ["Cloud Infrastructure", "Database Design", "API Development", "Security Implementation"],
      results: ["50% faster deployment", "Enhanced security", "Scalable architecture", "Improved performance"],
      testimonial: "Tekinest helped us build a robust technological foundation that allowed us to enter the market with confidence.",
      link: "#"
    },
    {
      name: "aj-playground.org",
      industry: "Portfolio",
      icon: User,
      project: "We developed AJ's portfolio, which encompassed a playground, a blog, and comprehensive authentication and authorization mechanisms.",
      services: ["Full-stack Development", "Authentication System", "Blog Platform", "Portfolio Design"],
      results: ["100% uptime", "Secure authentication", "SEO optimized", "Mobile responsive"],
      testimonial: "The team created exactly what I envisioned - a comprehensive platform that showcases my work beautifully.",
      link: "https://aj-playground.org"
    },
    {
      name: "Mkagrik International",
      industry: "Agriculture",
      icon: Leaf,
      project: "A family-run farm, we constructed the infrastructure and website to facilitate the connection between other farmers and farm produce, equipment, and other essential requirements.",
      services: ["E-commerce Platform", "Inventory Management", "Farmer Network", "Mobile App"],
      results: ["200% increase in connections", "Streamlined operations", "Digital marketplace", "Global reach"],
      testimonial: "Tekinest transformed our traditional farming business into a modern, connected agricultural network.",
      link: "#"
    },
    {
      name: "Tibratech Industries",
      industry: "Technology",
      icon: Cpu,
      project: "Website showcasing the company's offerings with modern design and comprehensive service information.",
      services: ["Website Design", "Content Management", "SEO Optimization", "Performance Tuning"],
      results: ["75% increase in leads", "Improved user experience", "Better search rankings", "Professional presence"],
      testimonial: "Our new website perfectly represents our technology services and has significantly increased our online presence.",
      link: "#"
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
              Our Clients
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Success Stories That Inspire Us
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From real estate to agriculture, we&apos;ve helped businesses across industries leverage technology to achieve their goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Case Studies */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="space-y-16">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                  {/* Client Logo Box */}
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-2xl p-8 flex flex-col justify-center items-center">
                    <h3 className="text-xl font-semibold text-white mb-6 text-center">Client Logo</h3>
                    <div className="relative w-full max-w-sm h-64 rounded-lg overflow-hidden border border-gray-600 bg-white/5 flex items-center justify-center">
                      <Image
                        src="/images/client-media/demo.png"
                        alt={`${client.name} logo`}
                        fill
                        className="object-contain p-4 hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Client Information Box */}
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-2xl p-8">
                    <div className="flex items-center mb-6">
                      <client.icon className="h-12 w-12 text-blue-400 mr-4" />
                      <div>
                        <h2 className="text-3xl font-bold text-white">{client.name}</h2>
                        <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 mt-2">
                          {client.industry}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-300 mb-8">
                      {client.project}
                    </p>

                    <div className="grid gap-8 mb-8">
                      {/* Services Provided */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Services Provided</h3>
                        <div className="flex flex-wrap gap-2">
                          {client.services.map((service, serviceIndex) => (
                            <Badge key={serviceIndex} variant="outline" className="border-blue-500 text-blue-400">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Key Results</h3>
                        <ul className="space-y-2">
                          {client.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="text-gray-300 flex items-center">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-300 mb-6 bg-gray-800/30 p-4 rounded-r-lg">
                      &quot;{client.testimonial}&quot;
                    </blockquote>

                    {client.link !== "#" && (
                      <div className="text-center">
                        <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                          <Link href={client.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These numbers represent real businesses that have grown with our help
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed", description: "Successful technology implementations" },
              { number: "4", label: "Industries Served", description: "From agriculture to real estate" },
              { number: "100%", label: "Client Satisfaction", description: "Every project delivered with excellence" },
              { number: "24/7", label: "Support Available", description: "Ongoing assistance when you need it" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-700 text-center h-full">
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold text-blue-400">{stat.number}</CardTitle>
                    <CardDescription className="text-white text-lg font-semibold">
                      {stat.label}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{stat.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how we can help your business achieve similar results with the right technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gradient-to-b hover:from-gray-800 hover:to-[#0d0d12] hover:text-white px-8 py-4 text-lg">
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
