import { useState } from 'react';
import { Send, Calendar, ArrowRight } from 'lucide-react';

import img1 from '../../assets/assam_ctc_tea_1786083099298.png';
import img2 from '../../assets/darjeeling_first_flush_1786083109823.png';
import img3 from '../../assets/masala_chai_1786083121309.png';
import img4 from '../../assets/earl_grey_1786083131352.png';

export default function B2BConnect() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  
  const filters = ['ALL', 'HARVEST REPORTS', 'PRIVATE LABEL', 'MANUFACTURING', 'SUSTAINABILITY'];
  
  const articles = [
    {
      id: 1,
      category: 'MANUFACTURING',
      date: 'AUG 12, 2026',
      title: 'The Future of High-Volume CTC Production: Automation & Quality',
      image: img1
    },
    {
      id: 2,
      category: 'PRIVATE LABEL',
      date: 'JUL 24, 2026',
      title: 'Building a Luxury Tea Brand: White Label Strategies for 2027',
      image: img2
    },
    {
      id: 3,
      category: 'SUSTAINABILITY',
      date: 'JUN 15, 2026',
      title: 'Ethical Sourcing: The Blueprint for Modern FMCG Supply Chains',
      image: img3
    },
    {
      id: 4,
      category: 'HARVEST REPORTS',
      date: 'MAY 02, 2026',
      title: 'Q2 Global Harvest Analysis: Assam & Darjeeling Yields',
      image: img4
    },
    {
      id: 5,
      category: 'MANUFACTURING',
      date: 'APR 18, 2026',
      title: 'Optimizing Oxidation: Data-Driven Approaches for CTC Black Tea',
      image: img2
    }
  ];

  const filteredArticles = articles.filter(
    article => activeFilter === 'ALL' || article.category === activeFilter
  );

  return (
    <section className="py-8 lg:py-12 bg-white dark:bg-[#050505] transition-colors duration-500 border-t border-black/10 dark:border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 xl:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-stretch">
          
          {/* Left Panel: Wholesale Inquiry Form */}
          <div className="bg-white dark:bg-[#0a0a0a] rounded-[1.5rem] lg:rounded-[2rem] p-5 lg:p-6 border border-black/10 dark:border-white/5 relative overflow-hidden group flex flex-col justify-between">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#d4a373] opacity-0 group-hover:opacity-[0.03] blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3 transition-opacity duration-1000 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-4">
                <div className="flex items-center space-x-3 mb-1">
                  <div className="w-7 h-7 rounded-full bg-[#d4a373]/10 dark:bg-white/5 flex items-center justify-center border border-[#d4a373]/20 dark:border-white/10">
                    <Send className="w-3 h-3 text-[#d4a373]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-black dark:text-white tracking-tight">
                    Initiate a Partnership
                  </h3>
                </div>
                <p className="text-[11px] text-gray-800 dark:text-gray-400 pl-10">
                  Our executive team will reply within 24 hours.
                </p>
              </div>

              <form className="space-y-3 flex-grow flex flex-col justify-end">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label className="text-[8px] font-bold text-black dark:text-gray-300 uppercase tracking-widest pl-1">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full bg-white dark:bg-[#111] border border-black/20 dark:border-white/10 rounded-lg px-3 py-2 text-xs text-black dark:text-white focus:outline-none focus:border-[#d4a373] dark:focus:border-[#d4a373] focus:ring-1 focus:ring-[#d4a373] transition-all"
                    />
                  </div>
                  {/* Email Input */}
                  <div className="space-y-1">
                    <label className="text-[8px] font-bold text-black dark:text-gray-300 uppercase tracking-widest pl-1">
                      Corporate Email
                    </label>
                    <input 
                      type="email" 
                      placeholder="jane@company.com"
                      className="w-full bg-white dark:bg-[#111] border border-black/20 dark:border-white/10 rounded-lg px-3 py-2 text-xs text-black dark:text-white focus:outline-none focus:border-[#d4a373] dark:focus:border-[#d4a373] focus:ring-1 focus:ring-[#d4a373] transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1">
                  <label className="text-[8px] font-bold text-black dark:text-gray-300 uppercase tracking-widest pl-1">
                    Inquiry Type
                  </label>
                  <select className="w-full bg-white dark:bg-[#111] border border-black/20 dark:border-white/10 rounded-lg px-3 py-2 text-xs text-gray-800 dark:text-gray-400 focus:outline-none focus:border-[#d4a373] dark:focus:border-[#d4a373] focus:ring-1 focus:ring-[#d4a373] transition-all appearance-none">
                    <option>High-Volume Bulk Supply</option>
                    <option>Private Label & OEM</option>
                    <option>Custom Master Blending</option>
                    <option>Other / General Partnership</option>
                  </select>
                </div>

                {/* Message Input */}
                <div className="space-y-1">
                  <label className="text-[8px] font-bold text-black dark:text-gray-300 uppercase tracking-widest pl-1">
                    Your Requirements
                  </label>
                  <textarea 
                    rows={2}
                    placeholder="Estimated volumes and specifications..."
                    className="w-full bg-white dark:bg-[#111] border border-black/20 dark:border-white/10 rounded-lg px-3 py-2 text-xs text-black dark:text-white focus:outline-none focus:border-[#d4a373] dark:focus:border-[#d4a373] focus:ring-1 focus:ring-[#d4a373] transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-1">
                  <button 
                    type="button"
                    className="w-full bg-[#d4a373] text-white rounded-lg py-2.5 flex items-center justify-center space-x-2 font-bold text-[10px] tracking-wide hover:bg-[#b0855b] transition-colors shadow-[0_0_20px_rgba(212,163,115,0.15)] hover:shadow-[0_0_30px_rgba(212,163,115,0.3)]"
                  >
                    <Send className="w-3 h-3" />
                    <span>SUBMIT INQUIRY</span>
                  </button>
                  <p className="text-[8px] text-gray-400 text-center pt-2">
                    By submitting, you agree to our Corporate Privacy Policy.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Right Panel: Market Insights */}
          <div className="bg-white dark:bg-[#0a0a0a] rounded-[1.5rem] lg:rounded-[2rem] p-5 lg:p-6 border border-black/10 dark:border-white/5 flex flex-col h-full">
            
            <h3 className="text-lg md:text-xl font-bold text-black dark:text-white tracking-tight mb-4">
              Market Insights
            </h3>

            {/* Filter Pills - Responsive & Scrollable */}
            <div className="flex overflow-x-auto hide-scrollbar snap-x mb-4 pb-1 -mx-1 px-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <div className="flex flex-nowrap gap-2">
                {filters.map((filter) => (
                  <button 
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`snap-start shrink-0 px-3 py-1.5 rounded-full text-[8px] sm:text-[9px] font-bold tracking-widest transition-all duration-300 ${
                      activeFilter === filter 
                        ? 'bg-black dark:bg-white text-white dark:text-gray-900 shadow-sm' 
                        : 'bg-white dark:bg-[#111] text-gray-800 dark:text-gray-400 border border-black/20 dark:border-white/10 hover:border-black/40 dark:hover:border-white/30'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable Article Grid with Animation */}
            <div className="flex flex-col space-y-2 overflow-y-auto pr-3 custom-scrollbar flex-1 min-h-[300px] max-h-[380px] lg:max-h-[350px]">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <div 
                    key={`${article.id}-${activeFilter}`} // Forces re-render for animation
                    className="animate-[fadeIn_0.5s_ease-out] bg-white dark:bg-[#111] border border-black/5 dark:border-white/5 rounded-lg overflow-hidden group cursor-pointer hover:border-[#d4a373]/40 dark:hover:border-[#d4a373]/40 hover:bg-black/5 dark:hover:bg-white/5 transition-all flex flex-col sm:flex-row shrink-0"
                  >
                    {/* Article Thumbnail */}
                    <div className="relative w-full sm:w-28 h-24 shrink-0 overflow-hidden bg-gray-100 dark:bg-[#050505]">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute top-1.5 left-1.5 bg-black/80 backdrop-blur-md text-white text-[6px] font-bold tracking-widest px-1 py-0.5 rounded uppercase">
                        {article.category}
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-3 flex flex-col flex-grow justify-between">
                      <div>
                        <div className="flex items-center space-x-1.5 text-gray-500 mb-1">
                          <Calendar className="w-2.5 h-2.5" />
                          <span className="text-[8px] font-bold tracking-widest uppercase">{article.date}</span>
                        </div>
                        <h4 className="text-[11px] sm:text-xs font-bold text-black dark:text-white leading-snug group-hover:text-[#d4a373] transition-colors line-clamp-2">
                          {article.title}
                        </h4>
                      </div>
                      
                      <div className="flex items-center space-x-1 mt-2">
                        <span className="text-[8px] font-bold text-[#d4a373] uppercase tracking-widest">
                          Read Briefing
                        </span>
                        <ArrowRight className="w-2.5 h-2.5 text-[#d4a373] transform translate-x-0 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-center h-full text-xs text-gray-500 dark:text-gray-400 font-medium italic animate-[fadeIn_0.5s_ease-out]">
                  No insights available for this category yet.
                </div>
              )}
            </div>

          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.02);
          border-radius: 10px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(212, 163, 115, 0.4);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(212, 163, 115, 0.8);
        }
      `}} />
    </section>
  );
}
