import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image 
                src="/images/tekines_logo_with_name.png" 
                alt="Tekinest Logo" 
                width={150} 
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Technological empowerment for small businesses and the general public globally. 
              We empower everyone with the beauty of technology.
            </p>
            <div className="flex space-x-6">
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

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/ai-cloud" className="text-gray-400 hover:text-blue-400 transition-colors">
                  AI Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/email" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Email Services
                </Link>
              </li>
              <li>
                <Link href="/services/it-support" className="text-gray-400 hover:text-blue-400 transition-colors">
                  IT Support
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/chatnest" className="text-gray-400 hover:text-blue-400 transition-colors">
                  ChatNest
                </Link>
              </li>
              <li>
                <Link href="/solutions/tekisite" className="text-gray-400 hover:text-blue-400 transition-colors">
                  TekiSite
                </Link>
              </li>
              <li>
                <Link href="/solutions/business-automation" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Business Automation
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-400 hover:text-blue-400 transition-colors">
                  View All Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Our Clients
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Tekinest. All rights reserved. Technological empowerment for everyone.
          </p>
        </div>
      </div>
    </footer>
  )
}
