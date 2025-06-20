"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Search, ArrowLeft, Zap, AlertTriangle } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* 404 Hero Section */}
      <section className="pt-32 pb-20 px-4 min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto text-center max-w-4xl">
          
          {/* Animated 404 Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent mb-4">
              404
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center justify-center space-x-2 text-yellow-400 mb-6"
            >
              <AlertTriangle className="h-6 w-6" />
              <span className="text-xl font-semibold">Page Not Found</span>
              <AlertTriangle className="h-6 w-6" />
            </motion.div>
          </motion.div>

          {/* Creative Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Oops! This page seems to have disappeared into the{" "}
              <span className="bg-gradient-to-r from-blue-400 to-gray-300 bg-clip-text text-transparent">
                digital void
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don&apos;t worry, even the best technology sometimes takes unexpected detours. 
              Let&apos;s get you back on the right path to digital excellence.
            </p>
          </motion.div>

          {/* Animated Tech Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="flex justify-center space-x-8 mb-12"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-blue-400 opacity-30"
              >
                <Zap className="h-8 w-8" />
              </motion.div>
            ))}
          </motion.div>

          {/* Action Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <Card className="bg-gray-900/50 border-gray-700 hover:border-blue-500 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Home className="h-12 w-12 text-blue-400 mx-auto mb-4 group-hover:text-blue-300" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">Go Home</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Return to our homepage and explore our tech solutions
                </p>
                <Link href="/">
                  <Button variant="outline" className="w-full border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                    Take Me Home
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 hover:border-blue-500 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Search className="h-12 w-12 text-blue-400 mx-auto mb-4 group-hover:text-blue-300" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">Our Services</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Discover our AI, cloud, and IT solutions for your business
                </p>
                <Link href="/services">
                  <Button variant="outline" className="w-full border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                    Explore Services
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 hover:border-purple-500 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowLeft className="h-12 w-12 text-purple-400 mx-auto mb-4 group-hover:text-purple-300" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">Go Back</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Return to the previous page you were viewing
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                  onClick={() => window.history.back()}
                >
                  Go Back
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600/20 to-gray-800/20 border border-gray-700 rounded-2xl p-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Lost? Let&apos;s Find the Right Tech Solution for You!
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              While you&apos;re here, why not explore how Tekinest can transform your business with 
              cutting-edge AI, cloud solutions, and IT services tailored for small businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/about">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Learn About Us
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Fun Tech Fact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-500 text-sm">
              💡 <span className="text-blue-400">Tech Fact:</span> The first 404 error was created at CERN in 1992. 
              Now we&apos;re here making them beautiful!
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
