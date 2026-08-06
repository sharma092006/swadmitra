import { Package, Building2, LifeBuoy, Globe, Mail, Leaf } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-20 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Background elements for premium feel */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a373]/20 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-[#d4a373] opacity-[0.02] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
          
          {/* Brand & Description */}
          <div className="lg:col-span-2 pr-0 lg:pr-8">
            <div className="flex flex-col items-start mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <Leaf className="w-8 h-8 text-[#d4a373]" />
                <span className="text-2xl font-bold tracking-tight text-white uppercase">SwadMitra</span>
              </div>
              <div className="h-px w-12 bg-[#d4a373]/50"></div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for premium bulk tea supply, custom master blending, export solutions, and end-to-end private-label (OEM) manufacturing. Elevating brands globally with every cup.
            </p>
          </div>

          {/* Our Services */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Package className="w-4 h-4 text-[#d4a373]" />
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider">Our Services</h3>
            </div>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#d4a373] text-sm transition-colors duration-300">Bulk Tea Supply</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4a373] text-sm transition-colors duration-300">Private Label (OEM)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4a373] text-sm transition-colors duration-300">Custom Blending</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4a373] text-sm transition-colors duration-300">Global Export</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4a373] text-sm transition-colors duration-300">Packaging Solutions</a></li>
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Building2 className="w-4 h-4 text-[#d4a373]" />
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider">Our Company</h3>
            </div>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#d4a373] text-sm transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4a373] text-sm transition-colors duration-300">Quality Standards</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4a373] text-sm transition-colors duration-300">Sustainability</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4a373] text-sm transition-colors duration-300">Certifications</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4a373] text-sm transition-colors duration-300">Careers</a></li>
            </ul>
          </div>

          {/* Support & Help */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <LifeBuoy className="w-4 h-4 text-[#d4a373]" />
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider">Support & Help</h3>
            </div>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#d4a373] text-sm transition-colors duration-300">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4a373] text-sm transition-colors duration-300">Service Warranty</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4a373] text-sm transition-colors duration-300">Contact Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4a373] text-sm transition-colors duration-300">Order Tracking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4a373] text-sm transition-colors duration-300">FAQs</a></li>
            </ul>
          </div>

          {/* Connect & Contact */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Globe className="w-4 h-4 text-[#d4a373]" />
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider">Connect With Us</h3>
            </div>
            <div className="flex items-center space-x-3 mb-8">
              <a href="#" className="w-8 h-8 rounded-md bg-[#1a1a1a] border border-white/5 flex items-center justify-center hover:bg-[#d4a373] hover:border-[#d4a373] hover:text-gray-900 text-gray-400 transition-all duration-300">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-md bg-[#1a1a1a] border border-white/5 flex items-center justify-center hover:bg-[#d4a373] hover:border-[#d4a373] hover:text-gray-900 text-gray-400 transition-all duration-300">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-md bg-[#1a1a1a] border border-white/5 flex items-center justify-center hover:bg-[#d4a373] hover:border-[#d4a373] hover:text-gray-900 text-gray-400 transition-all duration-300">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-md bg-[#1a1a1a] border border-white/5 flex items-center justify-center hover:bg-[#d4a373] hover:border-[#d4a373] hover:text-gray-900 text-gray-400 transition-all duration-300">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center space-x-2 mb-4">
              <Mail className="w-4 h-4 text-[#d4a373]" />
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider">Contact Info</h3>
            </div>
            <a href="mailto:enterprise@swadmitra.com" className="text-gray-400 hover:text-[#d4a373] text-sm transition-colors duration-300">
              enterprise@swadmitra.com
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} SwadMitra. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-xs text-gray-500">
            <a href="#" className="hover:text-[#d4a373] transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-[#d4a373] transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-[#d4a373] transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
