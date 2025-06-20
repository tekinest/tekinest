"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Mail, Settings, Zap, Server, Shield, Database, Cpu, ArrowRight } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ServicesPage() {
  const services = [
    {
      icon: Cloud,
      title: "AI Cloud Solutions",
      description: "Scalable cloud infrastructure with AI-powered optimization for modern businesses",
      features: ["Cloud Migration", "AI Integration", "Auto-scaling", "Cost Optimization"],
      href: "/services/ai-cloud"
    },
    {
      icon: Mail,
      title: "Email Services",
      description: "Professional email setup and management for your business communications",
      features: ["Custom Domain Email", "Security Setup", "Migration Services", "24/7 Support"],
      href: "/services/email"
    },
    {
      icon: Settings,
      title: "IT Support",
      description: "Comprehensive IT support and system administration for your business",
      features: ["Remote Support", "System Maintenance", "Security Updates", "Help Desk"],
      href: "/services/it-support"
    },
    {
      icon: Zap,
      title: "Process Enhancement",
      description: "Streamline business processes with smart automation and optimization",
      features: ["Workflow Automation", "Data Analysis", "Process Optimization", "Training"],
      href: "/services/process-enhancement"
    },
    {
      icon: Server,
      title: "Infrastructure Management",
      description: "Complete server and infrastructure management solutions",
      features: ["Server Setup", "Monitoring", "Backup Solutions", "Disaster Recovery"],
      href: "/services/infrastructure"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your business with comprehensive cybersecurity solutions",
      features: ["Security Audits", "Threat Protection", "Compliance", "Employee Training"],
      href: "/services/cybersecurity"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Efficient data storage, backup, and analytics solutions",
      features: ["Database Design", "Data Migration", "Analytics Setup", "Backup Solutions"],
      href: "/services/data-management"
    },
    {
      icon: Cpu,
      title: "Custom Development",
      description: "Tailored software solutions built specifically for your business needs",
      features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"],
      href: "/services/custom-development"
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
              Our Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Comprehensive Technology Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From AI cloud solutions to cybersecurity, we provide everything your business needs to thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
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
                      <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300 mb-4">
                        {service.description}
                      </CardDescription>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center text-blue-400 text-sm font-medium">
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Tekinest?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with a deep understanding of small business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Our team consists of experienced professionals who understand both technology and business needs."
              },
              {
                title: "Tailored Solutions",
                description: "Every solution is customized to fit your specific business requirements and budget."
              },
              {
                title: "Ongoing Support",
                description: "We provide continuous support and maintenance to ensure your technology keeps working for you."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-700 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {benefit.description}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how our services can help transform your business with technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
