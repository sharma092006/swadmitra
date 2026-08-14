import { useEffect } from 'react';
import QualityHeader from '../components/quality/QualityHeader';
import QualityBentoGrid from '../components/quality/QualityBentoGrid';
import { ShieldCheck, Award, ThumbsUp, Globe, BadgeCheck } from 'lucide-react';

export default function Quality() {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcfbf9] dark:bg-[#050505] min-h-screen transition-colors duration-300 font-sans">
      <QualityHeader />
      <QualityBentoGrid />
      
      {/* Modern Marquee Certifications */}
      <section className="py-12 border-y border-black/5 dark:border-white/5 bg-white dark:bg-[#0a0a0a] overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-[200%] animate-marquee">
          {/* Double array for infinite scroll effect */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex flex-1 justify-around items-center min-w-full">
              <div className="flex items-center space-x-3 text-gray-800 dark:text-gray-400 hover:text-[#7b2c2c] dark:hover:text-[#d4a373] transition-colors cursor-pointer group">
                <Award className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-sm uppercase tracking-widest">ISO 9001:2015</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-800 dark:text-gray-400 hover:text-[#7b2c2c] dark:hover:text-[#d4a373] transition-colors cursor-pointer group">
                <ShieldCheck className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-sm uppercase tracking-widest">FSSAI Certified</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-800 dark:text-gray-400 hover:text-[#7b2c2c] dark:hover:text-[#d4a373] transition-colors cursor-pointer group">
                <ThumbsUp className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-sm uppercase tracking-widest">GMP Compliant</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-800 dark:text-gray-400 hover:text-[#7b2c2c] dark:hover:text-[#d4a373] transition-colors cursor-pointer group">
                <Globe className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-sm uppercase tracking-widest">Export Standard</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-800 dark:text-gray-400 hover:text-[#7b2c2c] dark:hover:text-[#d4a373] transition-colors cursor-pointer group">
                <BadgeCheck className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-sm uppercase tracking-widest">Organic Options</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee Animation styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
}
