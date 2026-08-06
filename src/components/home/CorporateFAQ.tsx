import { useState } from 'react';
import { MessageSquare, Package, ShieldCheck, Truck, Plus, Minus, HeadphonesIcon, ArrowRight } from 'lucide-react';

export default function CorporateFAQ() {
  const [activeTab, setActiveTab] = useState('Bulk Supply');
  const [openId, setOpenId] = useState<number | null>(1);
  
  const tabs = [
    { name: 'Bulk Supply', icon: Package },
    { name: 'Private Label', icon: ShieldCheck },
    { name: 'Logistics', icon: Truck },
    { name: 'Support', icon: HeadphonesIcon }
  ];
  
  const faqData = [
    {
      id: 1,
      category: 'Bulk Supply',
      question: 'What are SwadMitra\'s minimum order quantities (MOQ)?',
      answer: 'Our standard MOQ for wholesale bulk supply is 500kg per tea grade. However, for enterprise FMCG clients testing new regional blends, SwadMitra offers scaled pilot runs starting at 100kg.'
    },
    {
      id: 2,
      category: 'Bulk Supply',
      question: 'Does SwadMitra offer custom master blending?',
      answer: 'Yes. SwadMitra’s elite team of master tasters can engineer proprietary flavor profiles using premium Assam and Darjeeling leaves, tailored specifically for your target demographic to ensure market exclusivity.'
    },
    {
      id: 3,
      category: 'Bulk Supply',
      question: 'Are SwadMitra facilities globally certified?',
      answer: 'Absolutely. All SwadMitra manufacturing and processing units operate under strict global compliance, holding ISO 9001:2015, HACCP, and GMP certifications to guarantee uncompromised quality for bulk exports.'
    },
    {
      id: 4,
      category: 'Private Label',
      question: 'Does SwadMitra’s Private Label include custom packaging?',
      answer: 'Yes, SwadMitra provides turn-key OEM services. We handle everything from sourcing and custom blending to bespoke packaging design, FSSAI/FDA compliance labeling, and final retail-ready logistics.'
    },
    {
      id: 5,
      category: 'Private Label',
      question: 'Can we use our own branding on SwadMitra blends?',
      answer: 'Yes. Our White Label and Private Label programs allow you to launch premium CTC, Green, and Flavored teas completely under your own brand identity, leveraging our massive manufacturing scale.'
    },
    {
      id: 6,
      category: 'Logistics',
      question: 'Does SwadMitra handle global freight and customs?',
      answer: 'Yes. SwadMitra’s dedicated logistics team provides comprehensive CIF and FOB shipping options, managing all documentation, phytosanitary certificates, and customs clearance protocols for exports to over 40 countries.'
    },
    {
      id: 7,
      category: 'Logistics',
      question: 'What are your standard lead times for bulk shipments?',
      answer: 'For standard SwadMitra bulk blends, lead times are typically 14-21 days from order confirmation. Custom blends and private label orders may require 30-45 days depending on packaging and blending complexity.'
    },
    {
      id: 8,
      category: 'Support',
      question: 'Will we have a dedicated SwadMitra account manager?',
      answer: 'Yes. Every B2B partner is assigned a dedicated SwadMitra Executive Account Manager to oversee your procurement pipeline, ensure quality consistency, and coordinate logistics seamlessly.'
    },
    {
      id: 9,
      category: 'Support',
      question: 'Do you offer emergency procurement support?',
      answer: 'Yes. We maintain strategic reserves of premium Assam and Darjeeling teas to assist our enterprise partners with expedited processing and shipping for urgent inventory replenishments.'
    }
  ];

  const filteredFaqs = faqData.filter(faq => faq.category === activeTab);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-12 lg:py-16 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 border-t border-gray-100 dark:border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 xl:px-16">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-3">
            Corporate Knowledge <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a373] to-[#e3c19e]">Base.</span>
          </h2>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-light">
            Comprehensive details on our global manufacturing protocols, bulk logistics, and OEM private label capabilities.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex overflow-x-auto hide-scrollbar snap-x gap-2 pb-2 px-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {tabs.map((tab) => (
              <button 
                key={tab.name}
                onClick={() => { setActiveTab(tab.name); setOpenId(null); }}
                className={`snap-start shrink-0 flex items-center space-x-1.5 px-4 py-2 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all duration-300 border ${
                  activeTab === tab.name 
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-gray-900 dark:border-white shadow-sm' 
                    : 'bg-transparent text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/30'
                }`}
              >
                <tab.icon className="w-3 h-3" />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid: FAQ Accordion + Concierge Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left: Accordion */}
          <div className="lg:col-span-8 flex flex-col space-y-2.5 min-h-[350px]">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = openId === faq.id;
                const num = String(index + 1).padStart(2, '0');
                
                return (
                  <div 
                    key={faq.id}
                    className={`bg-gray-50 dark:bg-[#111] rounded-xl overflow-hidden transition-all duration-300 border ${
                      isOpen 
                        ? 'border-[#d4a373] shadow-[0_0_15px_rgba(212,163,115,0.08)] dark:shadow-[0_0_20px_rgba(212,163,115,0.12)]' 
                        : 'border-gray-200 dark:border-white/5 hover:border-[#d4a373]/40'
                    }`}
                  >
                    <button 
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full text-left px-4 py-3.5 lg:px-5 lg:py-4 flex items-center justify-between focus:outline-none group"
                    >
                      <div className="flex items-center space-x-3 pr-4">
                        <div className={`shrink-0 w-6 h-6 rounded flex items-center justify-center text-[9px] font-black transition-colors ${
                          isOpen ? 'bg-[#d4a373] text-white' : 'bg-gray-200 dark:bg-white/10 text-gray-500 dark:text-gray-400 group-hover:bg-[#d4a373]/20 group-hover:text-[#d4a373]'
                        }`}>
                          {num}
                        </div>
                        <h4 className={`text-xs md:text-sm font-bold transition-colors ${isOpen ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                          {faq.question}
                        </h4>
                      </div>
                      <div className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                        isOpen 
                          ? 'border-[#d4a373] bg-[#d4a373]/10 text-[#d4a373]' 
                          : 'border-gray-200 dark:border-white/10 text-gray-400 dark:text-gray-500 group-hover:border-[#d4a373]/50 group-hover:text-[#d4a373]'
                      }`}>
                        {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                      </div>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-4 pb-4 lg:px-5 lg:pb-5 pt-0 pl-[3.25rem]">
                        <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex items-center justify-center h-full text-xs text-gray-500 dark:text-gray-400 font-medium italic animate-[fadeIn_0.5s_ease-out] py-10 border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                More information coming soon for this category.
              </div>
            )}
          </div>

          {/* Right: Concierge Card */}
          <div className="lg:col-span-4 bg-[#0a0a0a] rounded-2xl p-6 lg:p-8 border border-white/10 relative overflow-hidden group shadow-xl">
            {/* Ambient Corner Glow */}
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#d4a373] opacity-[0.05] group-hover:opacity-[0.1] blur-[50px] rounded-full transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                <MessageSquare className="w-4 h-4 text-[#d4a373]" />
              </div>
              
              <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                Require Immediate <br/> Executive Support?
              </h3>
              
              <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
                Confused about minimum order volumes, custom blending capabilities, or looking for specific phytosanitary compliance? Our global concierge team is ready to engineer a solution for your needs.
              </p>

              <button className="w-full bg-[#d4a373] text-white rounded-lg py-3 flex items-center justify-center space-x-2 font-bold text-xs tracking-wide hover:bg-[#b0855b] transition-all duration-300 shadow-[0_0_20px_rgba(212,163,115,0.15)] hover:shadow-[0_0_30px_rgba(212,163,115,0.3)] group-hover:scale-[1.02]">
                <span>Contact Concierge</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-white/10">
                <div className="flex flex-col items-center justify-center text-center">
                  <span className="text-white font-black text-xs mb-1">24/7</span>
                  <span className="text-[7px] text-gray-500 font-bold uppercase tracking-widest">Global<br/>Support</span>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <span className="text-white font-black text-xs mb-1">&lt;2h</span>
                  <span className="text-[7px] text-gray-500 font-bold uppercase tracking-widest">Response<br/>Time</span>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <span className="text-white font-black text-xs mb-1">100%</span>
                  <span className="text-[7px] text-gray-500 font-bold uppercase tracking-widest">Quality<br/>Assurance</span>
                </div>
              </div>

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
      `}} />
    </section>
  );
}
