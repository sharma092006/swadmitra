import { Send } from 'lucide-react';

export default function ContactForm() {
  return (
    <div className="lg:w-3/5 p-8 md:p-12 relative flex flex-col justify-center bg-white dark:bg-[#0a0a0a]">
        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight">Send us a Message</h3>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[11px] font-bold text-gray-800 dark:text-white uppercase tracking-widest block">Full Name</label>
            <input type="text" placeholder="John Doe" className="w-full bg-gray-50 dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-xl px-5 py-3.5 text-sm text-black dark:text-white focus:outline-none focus:border-[#d4a373] focus:ring-1 focus:ring-[#d4a373] transition-all" />
          </div>
          
          <div className="space-y-2">
            <label className="text-[11px] font-bold text-gray-800 dark:text-white uppercase tracking-widest block">Email Address</label>
            <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-xl px-5 py-3.5 text-sm text-black dark:text-white focus:outline-none focus:border-[#d4a373] focus:ring-1 focus:ring-[#d4a373] transition-all" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[11px] font-bold text-gray-800 dark:text-white uppercase tracking-widest block">Subject</label>
          <select defaultValue="" className="w-full bg-gray-50 dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-xl px-5 py-3.5 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:border-[#d4a373] focus:ring-1 focus:ring-[#d4a373] transition-all appearance-none cursor-pointer">
            <option value="" disabled>How can we help you?</option>
            <option value="wholesale">Wholesale & Bulk Supply</option>
            <option value="export">International Export</option>
            <option value="private-label">Private Label & OEM</option>
            <option value="support">General Support</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-[11px] font-bold text-gray-800 dark:text-white uppercase tracking-widest block">Message</label>
          <textarea placeholder="Write your message here..." className="w-full min-h-[160px] bg-gray-50 dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-sm text-black dark:text-white focus:outline-none focus:border-[#d4a373] focus:ring-1 focus:ring-[#d4a373] transition-all resize-none"></textarea>
        </div>

        <button type="button" className="w-full sm:w-auto bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-xl px-8 py-3.5 mt-2 flex items-center justify-center space-x-2 font-bold text-xs tracking-widest uppercase transition-all shadow-md">
          <span>Send Message</span>
          <Send className="w-4 h-4 ml-1" />
        </button>
      </form>
    </div>
  );
}
