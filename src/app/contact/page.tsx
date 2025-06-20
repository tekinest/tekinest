"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Clock, Send, MessageSquare } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
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
              Get in Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let&apos;s Start Your Technology Journey
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with technology? We&apos;re here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
              <p className="text-lg text-gray-300 mb-8">
                We&apos;d love to hear about your project and discuss how we can help your business grow with technology.
              </p>

              <div className="space-y-6">
                <Card className="bg-gray-900/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Mail className="h-8 w-8 text-blue-400" />
                      <div>
                        <h3 className="text-white font-semibold">General Inquiries</h3>
                        <p className="text-blue-400">hi@tekinest.com</p>
                        <p className="text-gray-400 text-sm">For general questions and information</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <MessageSquare className="h-8 w-8 text-green-400" />
                      <div>
                        <h3 className="text-white font-semibold">Consulting Services</h3>
                        <p className="text-green-400">consulting@tekinest.com</p>
                        <p className="text-gray-400 text-sm">For project discussions and consulting</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Clock className="h-8 w-8 text-blue-400" />
                      <div>
                        <h3 className="text-white font-semibold">Response Time</h3>
                        <p className="text-white">Within 24 hours</p>
                        <p className="text-gray-400 text-sm">We typically respond to all inquiries within one business day</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Send Us a Message</CardTitle>
                  <CardDescription className="text-gray-300">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Company (Optional)</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Service Interest</label>
                    <select className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none">
                      <option value="">Select a service</option>
                      <option value="ai-cloud">AI Cloud Solutions</option>
                      <option value="email">Email Services</option>
                      <option value="it-support">IT Support</option>
                      <option value="consulting">General Consulting</option>
                      <option value="custom">Custom Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Budget Range</label>
                    <select className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none">
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k-plus">$50,000+</option>
                      <option value="discuss">Let&apos;s discuss</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Message</label>
                    <textarea
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none h-32 resize-none"
                      placeholder="Tell us about your project, goals, and how we can help..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>

                  <p className="text-gray-400 text-sm text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here are some common questions we receive from potential clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "What types of businesses do you work with?",
                answer: "We primarily work with small to medium-sized businesses across various industries including real estate, agriculture, technology, and more. Our solutions are tailored to fit businesses of any size."
              },
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary depending on complexity. Simple setups can take 1-2 weeks, while comprehensive solutions may take 2-3 months. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes! We offer ongoing support and maintenance for all our solutions. This includes regular updates, troubleshooting, and help desk services to ensure your technology keeps working smoothly."
              },
              {
                question: "What's your pricing structure?",
                answer: "Our pricing depends on the specific services and complexity of your project. We offer competitive rates and flexible payment options. Contact us for a detailed quote based on your needs."
              },
              {
                question: "Can you work with our existing systems?",
                answer: "Absolutely! We specialize in integrating with existing systems and can help modernize your current setup without disrupting your operations."
              },
              {
                question: "Do you offer training for our team?",
                answer: "Yes, we provide comprehensive training to ensure your team can effectively use and maintain the technology solutions we implement. This includes documentation and hands-on training sessions."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-700 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {faq.answer}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Other Ways to Connect</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Choose the communication method that works best for you
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <Mail className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Send us a detailed message about your project
                  </p>
                  <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                    <a href="mailto:hi@tekinest.com">hi@tekinest.com</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <MessageSquare className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Schedule a Call</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Book a consultation to discuss your needs
                  </p>
                  <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black">
                    <Link href="/schedule">Schedule Now</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <MessageSquare className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Live Chat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Get instant answers to your questions
                  </p>
                  <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <div className="flex justify-center space-x-6">
                <Link href="/linkedin" className="text-gray-400 hover:text-blue-400 transition-colors">
                  LinkedIn
                </Link>
                <Link href="/twitter" className="text-gray-400 hover:text-blue-400 transition-colors">
                  X (Twitter)
                </Link>
                <Link href="/github" className="text-gray-400 hover:text-blue-400 transition-colors">
                  GitHub
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
