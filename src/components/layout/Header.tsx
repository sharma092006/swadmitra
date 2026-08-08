import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  ShoppingBag,
  User,
  Menu,
  X,
  ChevronDown,
  Heart,
  Mail,
  Phone,
  MapPin,
  Sun,
  Moon
} from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ||
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      name: 'Shop', 
      path: '/shop',
      hasDropdown: true,
      subLinks: [
        { name: 'Products', path: '/shop' },
        { name: 'Single Product', path: '/shop/product/1' },
        { name: 'Cart', path: '/cart' },
        { name: 'Checkout', path: '/checkout' }
      ]
    },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Quality', path: '/#quality' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar - Hidden on mobile */}
      <div className={`bg-[#1c120c] text-[#d1c7bc] text-[13px] font-medium transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-[42px] opacity-100'} hidden lg:flex items-center justify-between px-4 sm:px-6 md:px-8 xl:px-16`}>
        {/* Left Side: Contact Info */}
        <div className="flex items-center space-x-7">
          <a href="mailto:hello@swadmitra.com" className="flex items-center space-x-2 hover:text-white transition-colors duration-200 group">
            <Mail className="w-3.5 h-3.5 text-[#d4a373] group-hover:text-[#e3c19e] transition-colors" />
            <span>hello@swadmitra.com</span>
          </a>
          <a href="tel:+9118001234567" className="flex items-center space-x-2 hover:text-white transition-colors duration-200 group">
            <Phone className="w-3.5 h-3.5 text-[#d4a373] group-hover:text-[#e3c19e] transition-colors" />
            <span>1800-112-2334</span>
          </a>
          <div className="flex items-center space-x-2">
            <MapPin className="w-3.5 h-3.5 text-[#d4a373]" />
            <span>Assam, India</span>
          </div>
        </div>

        {/* Right Side: Socials & Theme Toggle */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#a89f91] hover:text-white transition-colors duration-200"><FaFacebook className="w-3.5 h-3.5" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#a89f91] hover:text-white transition-colors duration-200"><FaTwitter className="w-3.5 h-3.5" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#a89f91] hover:text-white transition-colors duration-200"><FaLinkedin className="w-3.5 h-3.5" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#a89f91] hover:text-white transition-colors duration-200"><FaInstagram className="w-3.5 h-3.5" /></a>
          </div>
          <div className="h-4 w-px bg-white/10"></div>
          <button
            onClick={toggleDarkMode}
            className="flex items-center space-x-2 hover:text-white transition-colors duration-200 group"
          >
            {isDarkMode ? (
              <>
                <Sun className="w-4 h-4 text-[#d4a373] group-hover:text-[#e3c19e] transition-colors" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-[#d4a373] group-hover:text-[#e3c19e] transition-colors" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Navigation - Floating Boxy Style */}
      <div className={`px-4 sm:px-6 md:px-8 xl:px-16 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className={`mx-auto max-w-[1400px] flex items-center justify-between bg-white/95 dark:bg-[#111]/95 backdrop-blur-md rounded-none px-4 md:px-8 py-3 transition-all duration-500 border border-black/10 dark:border-white/10 ${isScrolled
          ? 'shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.03)] translate-y-0'
          : 'shadow-[0_4px_20px_rgb(0,0,0,0.04)] dark:shadow-none translate-y-2'
          }`}>

          {/* Left: Logo & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              className="md:hidden text-gray-800 dark:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link to="/" className="flex items-center">
              <span className="text-2xl md:text-3xl font-serif font-bold text-[#2c1e16] dark:text-[#f4ebd0] tracking-tight whitespace-nowrap">
                Swadmitra
              </span>
            </Link>
          </div>

          {/* Center: Desktop Links */}
          <nav className="hidden md:flex flex-1 items-center justify-center space-x-8 px-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group/navitem">
                <Link
                  to={link.path}
                  className={`flex items-center space-x-1 text-[13px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 py-4 ${link.name === 'Shop' ? 'text-[#ff4500] dark:text-[#ff4500]' : 'text-black dark:text-gray-200 hover:text-[#d4a373] dark:hover:text-[#d4a373]'}`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown className="w-4 h-4 opacity-50 group-hover/navitem:rotate-180 transition-transform duration-300" />
                  )}
                </Link>

                {link.hasDropdown && link.subLinks && (
                  <div className="absolute top-[100%] left-0 mt-0 opacity-0 invisible group-hover/navitem:opacity-100 group-hover/navitem:visible transition-all duration-300 w-[240px] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-t-[3px] border-[#ff4500] z-50">
                    <div className="flex flex-col py-4">
                      {link.subLinks.map((sublink) => (
                        <Link 
                          key={sublink.name} 
                          to={sublink.path}
                          className="px-6 py-3 text-[14px] font-medium text-[#111] hover:text-[#ff4500] hover:bg-gray-50 transition-colors"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center space-x-4 md:space-x-5 md:pl-4 md:border-l border-black/10 dark:border-gray-700">
            <button className="text-gray-900 dark:text-gray-200 hover:text-[#7b2c2c] dark:hover:text-[#d4a373] transition-colors duration-300">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden md:block text-gray-900 dark:text-gray-200 hover:text-[#7b2c2c] dark:hover:text-[#d4a373] transition-colors duration-300">
              <User className="w-5 h-5" />
            </button>
            <button className="hidden md:block text-gray-900 dark:text-gray-200 hover:text-[#7b2c2c] dark:hover:text-[#d4a373] transition-colors duration-300 relative group">
              <Heart className="w-5 h-5" />
            </button>
            <button className="text-gray-900 dark:text-gray-200 hover:text-[#7b2c2c] dark:hover:text-[#d4a373] transition-colors duration-300 relative group flex items-center space-x-2">
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1.5 -right-2 bg-[#d4a373] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[16px] text-center">
                  0
                </span>
              </div>
            </button>

            <button className="hidden md:block ml-4 bg-[#7b2c2c] hover:bg-[#5c2121] dark:bg-[#d4a373] dark:hover:bg-[#b0875e] text-white dark:text-gray-900 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`absolute top-full left-0 right-0 bg-white dark:bg-[#1a1a1a] shadow-xl transition-all duration-300 origin-top overflow-hidden ${mobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
        <div className="px-6 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-black dark:text-gray-200 pb-3 border-b border-black/10 dark:border-gray-800"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 flex flex-col space-y-4">
            <a href="#account" className="flex items-center space-x-3 text-gray-900 dark:text-gray-400">
              <User className="w-5 h-5" />
              <span>My Account</span>
            </a>
            <a href="#wishlist" className="flex items-center space-x-3 text-gray-900 dark:text-gray-400">
              <Heart className="w-5 h-5" />
              <span>Wishlist</span>
            </a>
            <button className="w-full mt-4 bg-[#7b2c2c] text-white px-4 py-3 rounded-xl font-semibold text-center">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
