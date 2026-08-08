import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="lg:w-2/5 bg-gray-50 dark:bg-[#0a0a0a] p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-black/5 dark:border-white/5 flex flex-col justify-center relative overflow-hidden group/pane">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[20%] w-[60%] h-[60%] bg-[#d4a373] opacity-[0.03] blur-[80px] rounded-full transition-transform duration-1000 group-hover/pane:scale-110"></div>
        <div className="absolute -bottom-[20%] -right-[20%] w-[60%] h-[60%] bg-white opacity-[0.02] blur-[80px] rounded-full transition-transform duration-1000 group-hover/pane:scale-110"></div>
      </div>
      
      <div className="relative z-10">
        
        {/* Subtle Status Pill */}
        <div className="inline-flex items-center space-x-2 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full px-3 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-[9px] font-bold text-gray-800 dark:text-gray-300 uppercase tracking-widest">We're Online</span>
        </div>
        
        <div className="space-y-8">
          {/* Headquarters */}
          <div className="group flex items-start space-x-5 cursor-default">
            <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#111] flex items-center justify-center shrink-0 border border-black/5 dark:border-white/10 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[#d4a373]/40 group-hover:shadow-lg group-hover:shadow-[#d4a373]/10">
              <MapPin className="w-5 h-5 text-gray-400 group-hover:text-[#d4a373] transition-colors duration-300" />
            </div>
            <div className="pt-1 transition-transform duration-300 group-hover:translate-x-1.5">
              <h4 className="text-[10px] font-bold text-gray-800 dark:text-gray-400 uppercase tracking-widest mb-1.5">Headquarters</h4>
              <p className="text-gray-900 dark:text-gray-200 text-sm leading-relaxed font-medium">Block A, Connaught Place,<br/>New Delhi, 110001</p>
            </div>
          </div>

          {/* Subtle Divider */}
          <div className="w-full h-px bg-gradient-to-r from-black/5 via-black/5 to-transparent dark:from-white/5 dark:via-white/5 dark:to-transparent ml-16"></div>

          {/* Phone */}
          <div className="group flex items-start space-x-5 cursor-default">
            <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#111] flex items-center justify-center shrink-0 border border-black/5 dark:border-white/10 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[#d4a373]/40 group-hover:shadow-lg group-hover:shadow-[#d4a373]/10">
              <Phone className="w-5 h-5 text-gray-400 group-hover:text-[#d4a373] transition-colors duration-300" />
            </div>
            <div className="pt-1 transition-transform duration-300 group-hover:translate-x-1.5">
              <h4 className="text-[10px] font-bold text-gray-800 dark:text-gray-400 uppercase tracking-widest mb-1.5">Phone Support</h4>
              <p className="text-gray-900 dark:text-gray-200 text-sm leading-relaxed font-medium mb-0.5">+91 98765 43210</p>
              <p className="text-[#d4a373] text-[10px] font-semibold uppercase tracking-widest">Mon-Sat 9AM-6PM</p>
            </div>
          </div>

          {/* Subtle Divider */}
          <div className="w-full h-px bg-gradient-to-r from-black/5 via-black/5 to-transparent dark:from-white/5 dark:via-white/5 dark:to-transparent ml-16"></div>

          {/* Email */}
          <div className="group flex items-start space-x-5 cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#111] flex items-center justify-center shrink-0 border border-black/5 dark:border-white/10 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[#d4a373]/40 group-hover:shadow-lg group-hover:shadow-[#d4a373]/10 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#d4a373]/0 to-[#d4a373]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               <Mail className="w-5 h-5 text-gray-400 group-hover:text-[#d4a373] transition-colors duration-300 relative z-10" />
            </div>
            <div className="pt-1 transition-transform duration-300 group-hover:translate-x-1.5 flex flex-col justify-center h-12">
              <h4 className="text-[10px] font-bold text-gray-800 dark:text-gray-400 uppercase tracking-widest mb-1">Email Address</h4>
              <div className="flex items-center space-x-1 text-gray-900 dark:text-gray-200 group-hover:text-[#d4a373] transition-colors duration-300">
                <a href="mailto:hello@swadmitra.in" className="text-sm font-medium">hello@swadmitra.in</a>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
