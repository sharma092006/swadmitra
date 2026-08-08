import ContactHeader from '../components/contact/ContactHeader';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import MapAndReviews from '../components/contact/MapAndReviews';

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#fcfbf9] dark:bg-[#050505] transition-colors duration-300 pt-32 pb-24 flex flex-col items-center justify-center">
      
      <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Header section with breadcrumbs and title */}
        <ContactHeader />

        {/* Unified Contact Block */}
        <div className="bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-[2rem] shadow-xl dark:shadow-none overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left: Contact Info & Map */}
          <ContactInfo />

          {/* Right: Contact Form */}
          <ContactForm />

        </div>
      </div>

      {/* Map & Reviews Section (Based on Reference Image) */}
      <MapAndReviews />

    </main>
  );
}
