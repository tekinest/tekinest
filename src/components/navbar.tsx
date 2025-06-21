"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center px-4 pt-4">
      <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 max-w-6xl w-full">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/images/tekines_logo.png" 
                alt="Tekinest Logo" 
                width={32} 
                height={32}
                className="h-8 w-8"
              />
              <span className="text-2xl font-bold text-white">Tekinest</span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex space-x-8">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-blue-400 data-[state=open]:text-blue-400">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-gray-900 border border-gray-700">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-br from-blue-600/20 to-gray-800/20 p-6 no-underline outline-none focus:shadow-md border border-gray-700"
                          href="/services"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            All Services
                          </div>
                          <p className="text-sm leading-tight text-gray-300">
                            Comprehensive technology solutions for your business needs
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/services/ai-cloud"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-blue-400 focus:bg-gray-800 focus:text-blue-400"
                        >
                          <div className="text-sm font-medium leading-none text-white">AI Cloud Solutions</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                            Scalable cloud infrastructure with AI optimization
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/services/email"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-blue-400 focus:bg-gray-800 focus:text-blue-400"
                        >
                          <div className="text-sm font-medium leading-none text-white">Email Services</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                            Professional email setup and management
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/services/it-support"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-blue-400 focus:bg-gray-800 focus:text-blue-400"
                        >
                          <div className="text-sm font-medium leading-none text-white">IT Support</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                            Comprehensive IT support and administration
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-blue-400 data-[state=open]:text-blue-400">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-gray-900 border border-gray-700">
                    <li className="row-span-4">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-br from-gray-800/20 to-blue-600/20 p-6 no-underline outline-none focus:shadow-md border border-gray-700"
                          href="/solutions"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            Our Solutions
                          </div>
                          <p className="text-sm leading-tight text-gray-300">
                            Custom solutions for modern business challenges
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/solutions/tiwanova"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-blue-400 focus:bg-gray-800 focus:text-blue-400"
                        >
                          <div className="text-sm font-medium leading-none text-white">Tiwanova</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                            Look elegant globally with African garments
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/solutions/kosebi"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-blue-400 focus:bg-gray-800 focus:text-blue-400"
                        >
                          <div className="text-sm font-medium leading-none text-white">Kosebi</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                            African recipe wiki for diaspora communities
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/solutions/nestos"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-blue-400 focus:bg-gray-800 focus:text-blue-400"
                        >
                          <div className="text-sm font-medium leading-none text-white">NestOS</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                            Better dashboard for managing your doings
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/clients" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
                    Clients
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Get Started Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-gray-800"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-gray-700"
          >
            <div className="flex flex-col space-y-4">
              {/* Services */}
              <div>
                <h3 className="text-white font-semibold mb-2">Services</h3>
                <div className="flex flex-col space-y-2 pl-4">
                  <Link 
                    href="/services/ai-cloud" 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    AI Cloud Solutions
                  </Link>
                  <Link 
                    href="/services/email" 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Email Services
                  </Link>
                  <Link 
                    href="/services/it-support" 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    IT Support
                  </Link>
                  <Link 
                    href="/services" 
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    View All Services
                  </Link>
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h3 className="text-white font-semibold mb-2">Solutions</h3>
                <div className="flex flex-col space-y-2 pl-4">
                  <Link 
                    href="/solutions/tiwanova" 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Tiwanova
                  </Link>
                  <Link 
                    href="/solutions/kosebi" 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Kosebi
                  </Link>
                  <Link 
                    href="/solutions/nestos" 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    NestOS
                  </Link>
                  <Link 
                    href="/solutions" 
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    View All Solutions
                  </Link>
                </div>
              </div>

              {/* Main Navigation */}
              <div className="flex flex-col space-y-3 pt-2">
                <Link 
                  href="/clients" 
                  className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Clients
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>

              {/* Mobile Get Started Button */}
              <div className="pt-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
