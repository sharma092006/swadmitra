import { ChevronRight, Home, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactHeader() {
  return (
    <div className="flex flex-col items-center text-center mb-12 sm:mb-16 pt-16 md:pt-24">
      {/* Premium Pill Breadcrumbs */}
      <div className="inline-flex items-center space-x-2 bg-white/60 dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-full px-5 py-2 mb-8 shadow-sm hover:shadow-md transition-shadow duration-300">
        <Link to="/" className="flex items-center text-gray-500 hover:text-[#d4a373] transition-colors text-[10px] sm:text-xs font-bold uppercase tracking-widest">
          <Home className="w-3.5 h-3.5 mr-1.5" /> Home
        </Link>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="text-[#d4a373] text-[10px] sm:text-xs font-bold uppercase tracking-widest flex items-center">
           Contact Us
           <Sparkles className="w-3 h-3 ml-2 opacity-70" />
        </span>
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
        Let's Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a373] via-[#e3c19e] to-[#b58557] pr-2">Touch</span>
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base lg:text-lg max-w-2xl font-light leading-relaxed">
        Whether you're looking for bulk orders, custom blending, or simply want to say hello—our executive team is here to provide you with a premium experience.
      </p>
    </div>
  );
}
