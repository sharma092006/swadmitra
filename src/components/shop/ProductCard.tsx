import { useState, useEffect } from 'react';
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSwipe } from '../../hooks/useSwipe';

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  image?: string;
  images?: string[];
  description?: string;
}

export default function ProductCard({ id, name, category, price, image, images: propImages, description }: ProductCardProps) {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Fallback to array if single image is provided
  const images = propImages || (image ? [image] : []);
  
  // Auto-play logic
  useEffect(() => {
    if (images.length <= 1 || isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // 3 seconds per slide

    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  const handleNextImage = (e: React.MouseEvent | TouchEvent) => {
    e.stopPropagation();
    if (images.length > 1) {
      setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  const handlePrevImage = (e: React.MouseEvent | TouchEvent) => {
    e.stopPropagation();
    if (images.length > 1) {
      setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  const swipeHandlers = useSwipe({
    onSwipedLeft: () => handleNextImage({ stopPropagation: () => {} } as any),
    onSwipedRight: () => handlePrevImage({ stopPropagation: () => {} } as any),
  });

  const handleCardClick = () => navigate(`/shop/product/${id}`);
  
  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/cart');
  };

  // Mocking original price and quantity for the UI layout
  const originalPrice = Math.round(price * 1.15); // 15% off mock
  const quantity = "250g"; 

  return (
    <div 
      className="group relative bg-[#0e0e0e] border border-white/5 rounded-2xl hover:border-white/10 transition-all duration-300 cursor-pointer flex flex-col h-full p-4"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Discount Ribbon (Matches screenshot) */}
      <div className="absolute top-0 left-6 z-20 w-12 drop-shadow-md">
        <div className="relative bg-[#cfa175] pt-2 pb-4 flex flex-col items-center">
          <span className="text-white text-[11px] font-bold leading-tight">15%</span>
          <span className="text-white text-[10px] font-bold tracking-widest uppercase leading-tight">OFF</span>
          
          {/* Bottom Cut-out for Ribbon */}
          <div className="absolute -bottom-3 left-0 w-full h-3 flex">
            <div className="w-1/2 h-full bg-[#cfa175]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
            <div className="w-1/2 h-full bg-[#cfa175]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }}></div>
          </div>
        </div>
      </div>

      {/* Image Carousel Container */}
      <div 
        className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#111] mb-4"
        {...swipeHandlers}
      >
        <div 
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt={`${name} - Image ${idx + 1}`} 
              className="w-full h-full object-cover shrink-0 pointer-events-none"
            />
          ))}
        </div>

        {/* Carousel Navigation Arrows (visible on hover) */}
        {images.length > 1 && (
          <>
            <button 
              onClick={(e) => handlePrevImage(e)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/40 hover:bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={(e) => handleNextImage(e)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/40 hover:bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Carousel Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-3 bg-white' : 'w-1.5 bg-white/40'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      
      {/* Content Area */}
      <div className="flex flex-col flex-grow">
        
        {/* Time Pill */}
        <div className="mb-3">
          <span className="inline-flex items-center gap-1.5 bg-[#1a1a1a] border border-white/5 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
            <Clock className="w-3.5 h-3.5 text-gray-400" />
            <span>Express</span>
          </span>
        </div>

        {/* Title & Subtext */}
        <div className="mb-4 flex-grow">
          <h3 className="text-base font-bold text-[#e3a870] leading-snug line-clamp-2 mb-1 transition-colors">
            {name}
          </h3>
          <p className="text-[13px] text-[#6b9fcb] mb-2 font-medium">
            {quantity} • {category}
          </p>
          <p className="text-[12px] text-gray-400 line-clamp-2 leading-relaxed">
            {description || "A premium, hand-picked blend crafted to deliver an exquisite and luxurious tasting experience."}
          </p>
        </div>
        
        {/* Footer (Price & Action) */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white leading-tight">
              ₹{price.toLocaleString('en-IN')}
            </span>
            <span className="text-[13px] text-gray-500 line-through">
              ₹{originalPrice.toLocaleString('en-IN')}
            </span>
          </div>

          <button 
            onClick={handleAddToCartClick}
            className="bg-transparent border border-[#d4a373] text-[#d4a373] hover:bg-[#d4a373] hover:text-black px-5 py-1.5 rounded-lg text-[13px] font-bold uppercase tracking-wider transition-colors duration-200"
          >
            ADD
          </button>
        </div>

      </div>
    </div>
  );
}
