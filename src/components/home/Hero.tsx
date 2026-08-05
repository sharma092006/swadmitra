import { ArrowRight, Play } from 'lucide-react';
import heroVideo from '../../assets/video/hero-video.mp4';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Luxury Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c120c]/70 via-[#1c120c]/40 to-[#1c120c]/80" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 xl:px-16 pt-24 md:pt-32">
        <div className="max-w-3xl flex flex-col items-start">
          
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6 opacity-0 animate-[fadeInDown_1s_ease-out_forwards]">
            <span className="w-2 h-2 rounded-full bg-[#d4a373] animate-pulse"></span>
            <span className="text-[#e8e2d9] text-xs font-semibold uppercase tracking-widest">
              Premium Assam Collection
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards] drop-shadow-lg">
            Experience the True <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e3c19e] to-[#d4a373]">
              Essence of Tea
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#d1c7bc] max-w-2xl mb-10 opacity-0 animate-[fadeInUp_1s_ease-out_0.4s_forwards] drop-shadow-md font-light leading-relaxed">
            Sourced directly from the highest altitude gardens, our exclusive blends offer an unforgettable aroma, rich color, and a beautifully balanced taste.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
            <button className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-[#d4a373] hover:bg-[#c39160] text-gray-900 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-[0_0_20px_rgba(212,163,115,0.4)] hover:shadow-[0_0_30px_rgba(212,163,115,0.6)] transform hover:-translate-y-1">
              <span>Shop Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="w-full sm:w-auto flex items-center justify-center space-x-3 text-white hover:text-[#d4a373] transition-colors duration-300 group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/30 group-hover:border-[#d4a373] bg-white/5 group-hover:bg-[#d4a373]/10 backdrop-blur-sm transition-all duration-300">
                <Play className="w-4 h-4 fill-current ml-1" />
              </div>
              <span className="font-medium tracking-wide">Watch Our Story</span>
            </button>
          </div>
          
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
        <span className="text-[#a89f91] text-xs font-medium uppercase tracking-[0.2em] mb-3">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-[#d4a373] to-transparent"></div>
      </div>
    </section>
  );
}
