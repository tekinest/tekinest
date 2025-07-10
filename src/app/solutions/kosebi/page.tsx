
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChefHat, ArrowRight, ExternalLink, Users, Globe, Book } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function KosebiPage() {
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
            <ChefHat className="h-20 w-20 text-blue-400 mx-auto mb-6" />
            <Badge variant="secondary" className="bg-green-600/20 text-green-400 mb-6">
              Beta Status
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Kosebi
            </h1>
            <p className="text-2xl md:text-3xl text-blue-400 mb-8">
              A recipe wiki for African dishes for people living in the diaspora
            </p>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
              This will be a wiki for various dishes of African origin, it will show you everything you need to make a dish from planning to even dishing it out.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                onClick={() => window.open('https://kosebi.com', '_blank')}
              >
                Visit Kosebi
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
              alt="Kosebi preview"
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
                  Many people who live abroad away from Africa are either forced to eat the dish of the place they are in or buy expensive African dishes from African restaurants. This is not always what they want, because the hunger African food can cure is different from what any other dish can cure.
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
              Everything you need to recreate authentic African dishes from anywhere in the world
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Book,
                title: "Comprehensive Recipe Database",
                description: "Extensive collection of traditional African recipes from across the continent"
              },
              {
                icon: ChefHat,
                title: "Step-by-Step Instructions",
                description: "Detailed cooking instructions with tips from experienced African chefs"
              },
              {
                icon: Users,
                title: "Community Contributions",
                description: "Share your family recipes and learn from others in the diaspora community"
              },
              {
                icon: Globe,
                title: "Cultural Context",
                description: "Learn about the history and cultural significance of each dish"
              },
              {
                icon: ArrowRight,
                title: "Ingredient Substitutions",
                description: "Find local alternatives for hard-to-find African ingredients"
              },
              {
                icon: ExternalLink,
                title: "Shopping Integration",
                description: "Add ingredients to your cart automatically from local stores"
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
                  Africans in diaspora and anyone else who enjoy African dishes. Whether you're homesick for your grandmother's cooking or curious about authentic African cuisine, Kosebi connects you with the flavors of home.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Cook Authentic African Dishes?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join our community and discover the rich culinary heritage of Africa, no matter where you are in the world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                onClick={() => window.open('https://kosebi.com', '_blank')}
              >
                Visit Kosebi Now
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
