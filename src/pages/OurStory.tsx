import { Leaf, Shield, Award, Droplet, Sun, Handshake, Sprout, Star } from 'lucide-react';
import heroBgImg from '../assets/premium_hero_bg_1786080942993.png';

export default function OurStory() {
  const values = [
    {
      id: 1,
      title: 'Purity & Origin',
      description: 'Sourced directly from the highest-altitude estates, ensuring unblended, authentic single-origin quality.',
      icon: <Droplet className="w-5 h-5" />,
      tag: '01'
    },
    {
      id: 2,
      title: 'Sustainability',
      description: 'Committed to organic farming practices and biodegradable packaging to protect our ecosystem.',
      icon: <Sun className="w-5 h-5" />,
      tag: '02'
    },
    {
      id: 3,
      title: 'Direct Trade',
      description: 'Building transparent relationships with master cultivators, empowering local farming communities.',
      icon: <Handshake className="w-5 h-5" />,
      tag: '03'
    },
    {
      id: 4,
      title: 'Craftsmanship',
      description: 'Preserving orthodox orthodox rolling and natural oxidation techniques for a superior cup.',
      icon: <Sprout className="w-5 h-5" />,
      tag: '04'
    }
  ];

  const milestones = [
    {
      year: '1995',
      title: 'The Inception',
      description: 'Founded in the foothills of Assam with a single 50-acre family estate, dedicated to orthodox black tea production.',
      icon: <Leaf className="w-5 h-5 text-[#d4a373]" />,
      color: 'bg-[#d4a373]/10 text-[#d4a373]'
    },
    {
      year: '2005',
      title: 'Organic Certification',
      description: 'Transitioned 100% of our estates to organic, regenerative farming, achieving global USDA and EU Organic certifications.',
      icon: <Shield className="w-5 h-5 text-emerald-600" />,
      color: 'bg-emerald-600/10 text-emerald-600'
    },
    {
      year: '2015',
      title: 'Global Export Operations',
      description: 'Expanded infrastructure to supply premium bulk tea to over 40 countries, establishing a state-of-the-art blending facility.',
      icon: <Award className="w-5 h-5 text-blue-600" />,
      color: 'bg-blue-600/10 text-blue-600'
    },
    {
      year: '2026',
      title: 'The Premium Archive',
      description: 'Launch of our ultra-premium retail catalog, offering the top 1% of our harvests directly to discerning consumers worldwide.',
      icon: <Star className="w-5 h-5 text-purple-600" />,
      color: 'bg-purple-600/10 text-purple-600'
    }
  ];

  return (
    <main className="min-h-screen bg-[#fcfbf9] dark:bg-[#050505] transition-colors duration-300 pt-36 md:pt-44 pb-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
          <div className="w-full lg:w-1/2">
            <span className="inline-flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4a373] mb-6 border border-[#d4a373]/30 rounded-full px-4 py-1.5">
              <Leaf className="w-3 h-3" />
              <span>Heritage & Legacy</span>
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-black dark:text-white leading-[1.1] mb-6">
              Rooted in <br /> Tradition.<br />
              <span className="italic font-light text-gray-500">Crafted for Luxury.</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-lg mb-8">
              For over three decades, Swadmitra has been synonymous with uncompromised quality. We don't just sell tea; we curate an experience forged by the masters of the leaf, bridging the gap between ancient heritage and modern elegance.
            </p>
            <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-black dark:text-white">
              <span>Trusted by connoisseurs</span>
              <div className="h-px w-12 bg-black/20 dark:bg-white/20"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            {/* The Image Container */}
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 shadow-2xl">
              <img src={heroBgImg} alt="Tea Estate" className="w-full h-full object-cover scale-105" />
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
            </div>
            
            {/* Floating Badges */}
            <div className="absolute top-8 -left-4 md:-left-8 bg-white/95 dark:bg-[#111]/95 backdrop-blur-md border border-black/5 dark:border-white/5 rounded-xl p-3 shadow-xl flex items-center gap-3 animate-float-slow">
              <div className="bg-[#d4a373]/10 p-2.5 rounded-lg">
                <Shield className="w-5 h-5 text-[#d4a373]" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">Certification</p>
                <p className="text-xs font-bold text-black dark:text-white">100% Organic</p>
              </div>
            </div>

            <div className="absolute bottom-12 -right-4 md:-right-6 bg-white/95 dark:bg-[#111]/95 backdrop-blur-md border border-black/5 dark:border-white/5 rounded-xl p-3 shadow-xl flex flex-col gap-1.5 animate-float-delayed">
              <p className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">Global Reach</p>
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-1.5">
                  <div className="w-6 h-6 rounded-full bg-gray-200 border border-white dark:border-[#111]"></div>
                  <div className="w-6 h-6 rounded-full bg-gray-300 border border-white dark:border-[#111]"></div>
                  <div className="w-6 h-6 rounded-full bg-gray-400 border border-white dark:border-[#111]"></div>
                </div>
                <span className="text-xs font-bold text-black dark:text-white">40+ Countries</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Strip */}
        <div className="py-8 border-y border-black/10 dark:border-white/10 mb-20 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Certified Quality</span>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Mock Logos using text for premium typography feel */}
            <span className="text-lg md:text-xl font-bold font-serif tracking-tight text-black dark:text-white">FSSAI Certified</span>
            <span className="text-lg md:text-xl font-bold font-serif tracking-tight text-black dark:text-white">USDA Organic</span>
            <span className="text-lg md:text-xl font-bold font-serif tracking-tight text-black dark:text-white">ISO 9001:2015</span>
          </div>
        </div>

        {/* Split Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="bg-[#fcfaf8] dark:bg-[#0c0c0c] rounded-3xl p-8 md:p-10 border border-black/5 dark:border-white/5 group hover:border-[#d4a373]/50 transition-colors duration-300 shadow-sm hover:shadow-md">
            <div className="bg-white dark:bg-[#111] border border-black/5 dark:border-white/5 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm">
              <Leaf className="w-5 h-5 text-[#d4a373]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-black dark:text-white mb-3">Our Heritage</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
              Born from the fertile soils of India's most prestigious tea-growing regions, our heritage is built on generations of knowledge. We honor the traditional methods of cultivation while embracing modern standards of perfection.
            </p>
            <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#d4a373] dark:hover:bg-[#d4a373] transition-colors">
              Discover Origins
            </button>
          </div>

          <div className="bg-[#f8faf9] dark:bg-[#0a0f0d] rounded-3xl p-8 md:p-10 border border-black/5 dark:border-white/5 group hover:border-emerald-600/30 transition-colors duration-300 shadow-sm hover:shadow-md">
            <div className="bg-white dark:bg-[#111] border border-black/5 dark:border-white/5 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm">
              <Shield className="w-5 h-5 text-emerald-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-black dark:text-white mb-3">Our Promise</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
              A commitment to absolute transparency. Every leaf in our archive is traceable, ethically sourced, and rigorously tested for purity. We promise a cup that is as beneficial to the earth as it is to your wellbeing.
            </p>
            <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white transition-colors">
              View Standards
            </button>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-black dark:text-white">The Swadmitra Values</h2>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hidden sm:block">Core Principles</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {values.map((value) => (
              <div key={value.id} className="bg-white dark:bg-[#0a0a0a] p-6 md:p-7 rounded-2xl border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-[#fcfbf9] dark:bg-[#111] border border-black/5 dark:border-white/5 p-2.5 rounded-lg text-black dark:text-white group-hover:text-[#d4a373] transition-colors">
                    {value.icon}
                  </div>
                  <span className="text-[10px] font-bold text-gray-300 dark:text-gray-700">{value.tag}</span>
                </div>
                <h3 className="text-base font-bold text-black dark:text-white mb-2">{value.title}</h3>
                <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed font-normal">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Journey Timeline */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-black dark:text-white">Our Journey</h2>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hidden sm:block">Decades of Excellence</span>
          </div>
          
          <div className="space-y-3">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="bg-white dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8 hover:border-black/10 dark:hover:border-white/10 hover:shadow-sm transition-all duration-300 group cursor-default">
                
                <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${milestone.color}`}>
                  {milestone.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-sm md:text-base font-bold text-black dark:text-white">{milestone.title}</span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 bg-gray-100 dark:bg-[#1a1a1a] rounded border border-black/5 dark:border-white/5 text-gray-600 dark:text-gray-300">{milestone.year}</span>
                  </div>
                  <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                    {milestone.description}
                  </p>
                </div>

                <div className="hidden lg:flex shrink-0 items-center justify-center w-8 h-8 rounded-full border border-black/10 dark:border-white/10 group-hover:bg-black group-hover:border-black dark:group-hover:bg-white dark:group-hover:border-white transition-colors">
                  <Leaf className="w-3 h-3 text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
