import { useState } from 'react';
import { ShoppingBag, Star, ArrowRight, ChevronRight, Leaf } from 'lucide-react';

const teaCategories = [
  {
    id: 'black-tea',
    name: 'Black Tea',
    description: 'Robust, full-bodied flavors with a rich, malty finish. Perfect for your morning awakening.',
    themeColor: 'from-amber-900/80 to-stone-900/90',
    image: 'https://images.unsplash.com/photo-1651608154985-dcc87b27a63e?q=80&w=600&auto=format&fit=crop',
    products: [
      { name: 'Assam Black Tea', rating: 4.8, reviews: 124 , image: 'https://images.unsplash.com/photo-1651608154985-dcc87b27a63e?q=80&w=600&auto=format&fit=crop' },
      { name: 'Darjeeling Black Tea', rating: 4.9, reviews: 89 , image: 'https://images.unsplash.com/photo-1527398317618-b3da8a79e0ca?q=80&w=600&auto=format&fit=crop' },
      { name: 'Nilgiri Black Tea', rating: 4.7, reviews: 56 , image: 'https://images.unsplash.com/photo-1765809411613-9870f2f2d459?q=80&w=600&auto=format&fit=crop' },
      { name: 'CTC Tea', rating: 4.6, reviews: 210 , image: 'https://images.unsplash.com/photo-1758390285674-f1d55b9d1312?q=80&w=600&auto=format&fit=crop' },
      { name: 'English Breakfast Tea', rating: 4.8, reviews: 156 , image: 'https://images.unsplash.com/photo-1723142856505-5fe883fa11fe?q=80&w=600&auto=format&fit=crop' },
      { name: 'Earl Grey Tea', rating: 4.9, reviews: 342 , image: 'https://images.unsplash.com/photo-1701544872167-7f5ee73cb435?q=80&w=600&auto=format&fit=crop' },
      { name: 'Masala Black Tea', rating: 4.7, reviews: 118 , image: 'https://images.unsplash.com/photo-1559038297-5b37efcd59d4?q=80&w=600&auto=format&fit=crop' },
      { name: 'Single Origin Black Tea', rating: 5.0, reviews: 45 , image: 'https://images.unsplash.com/photo-1767721887917-ad186b3f5f2d?q=80&w=600&auto=format&fit=crop' },
    ]
  },
  {
    id: 'green-tea',
    name: 'Green Tea',
    description: 'Delicate, fresh, and packed with antioxidants. A revitalizing journey for body and mind.',
    themeColor: 'from-emerald-800/80 to-teal-900/90',
    image: 'https://images.unsplash.com/photo-1763617702099-d956f3fd8324?q=80&w=600&auto=format&fit=crop',
    products: [
      { name: 'Pure Green Tea', rating: 4.7, reviews: 88 , image: 'https://images.unsplash.com/photo-1763617702099-d956f3fd8324?q=80&w=600&auto=format&fit=crop' },
      { name: 'Matcha Green Tea', rating: 5.0, reviews: 412 , image: 'https://images.unsplash.com/photo-1527398317618-b3da8a79e0ca?q=80&w=600&auto=format&fit=crop' },
      { name: 'Jasmine Green Tea', rating: 4.8, reviews: 156 , image: 'https://images.unsplash.com/photo-1765809411613-9870f2f2d459?q=80&w=600&auto=format&fit=crop' },
      { name: 'Moroccan Mint Green Tea', rating: 4.9, reviews: 204 , image: 'https://images.unsplash.com/photo-1758390285674-f1d55b9d1312?q=80&w=600&auto=format&fit=crop' },
      { name: 'Sencha Green Tea', rating: 4.8, reviews: 93 , image: 'https://images.unsplash.com/photo-1723142856505-5fe883fa11fe?q=80&w=600&auto=format&fit=crop' },
      { name: 'Gunpowder Green Tea', rating: 4.6, reviews: 75 , image: 'https://images.unsplash.com/photo-1701544872167-7f5ee73cb435?q=80&w=600&auto=format&fit=crop' },
      { name: 'Tulsi Green Tea', rating: 4.7, reviews: 132 , image: 'https://images.unsplash.com/photo-1559038297-5b37efcd59d4?q=80&w=600&auto=format&fit=crop' },
      { name: 'Honey Lemon Green Tea', rating: 4.8, reviews: 267 , image: 'https://images.unsplash.com/photo-1767721887917-ad186b3f5f2d?q=80&w=600&auto=format&fit=crop' },
    ]
  },
  {
    id: 'herbal-tea',
    name: 'Herbal Tea',
    description: 'Caffeine-free botanical blends to soothe, calm, and restore your natural balance.',
    themeColor: 'from-orange-800/80 to-red-900/90',
    image: 'https://images.unsplash.com/photo-1702987908200-de80baec74e4?q=80&w=600&auto=format&fit=crop',
    products: [
      { name: 'Chamomile Tea', rating: 4.9, reviews: 310 , image: 'https://images.unsplash.com/photo-1702987908200-de80baec74e4?q=80&w=600&auto=format&fit=crop' },
      { name: 'Peppermint Tea', rating: 4.8, reviews: 185 , image: 'https://images.unsplash.com/photo-1527398317618-b3da8a79e0ca?q=80&w=600&auto=format&fit=crop' },
      { name: 'Hibiscus Tea', rating: 4.7, reviews: 142 , image: 'https://images.unsplash.com/photo-1765809411613-9870f2f2d459?q=80&w=600&auto=format&fit=crop' },
      { name: 'Lemongrass Tea', rating: 4.6, reviews: 98 , image: 'https://images.unsplash.com/photo-1758390285674-f1d55b9d1312?q=80&w=600&auto=format&fit=crop' },
      { name: 'Lavender Tea', rating: 4.9, reviews: 215 , image: 'https://images.unsplash.com/photo-1723142856505-5fe883fa11fe?q=80&w=600&auto=format&fit=crop' },
      { name: 'Rose Tea', rating: 4.8, reviews: 167 , image: 'https://images.unsplash.com/photo-1701544872167-7f5ee73cb435?q=80&w=600&auto=format&fit=crop' },
      { name: 'Detox Herbal Tea', rating: 4.7, reviews: 289 , image: 'https://images.unsplash.com/photo-1559038297-5b37efcd59d4?q=80&w=600&auto=format&fit=crop' },
      { name: 'Relaxation Tea', rating: 4.8, reviews: 154 , image: 'https://images.unsplash.com/photo-1767721887917-ad186b3f5f2d?q=80&w=600&auto=format&fit=crop' },
    ]
  },
  {
    id: 'white-tea',
    name: 'White Tea',
    description: 'The purest and most delicate tea leaves, subtly sweet and elegantly refined.',
    themeColor: 'from-stone-400/80 to-stone-600/90',
    image: 'https://images.unsplash.com/photo-1651608152231-dbee4d57e874?q=80&w=600&auto=format&fit=crop',
    products: [
      { name: 'Silver Needle White Tea', rating: 5.0, reviews: 128 , image: 'https://images.unsplash.com/photo-1651608152231-dbee4d57e874?q=80&w=600&auto=format&fit=crop' },
      { name: 'White Peony Tea', rating: 4.8, reviews: 76 , image: 'https://images.unsplash.com/photo-1527398317618-b3da8a79e0ca?q=80&w=600&auto=format&fit=crop' },
      { name: 'Organic White Tea', rating: 4.7, reviews: 54 , image: 'https://images.unsplash.com/photo-1765809411613-9870f2f2d459?q=80&w=600&auto=format&fit=crop' },
      { name: 'Premium White Tea', rating: 4.9, reviews: 92 , image: 'https://images.unsplash.com/photo-1758390285674-f1d55b9d1312?q=80&w=600&auto=format&fit=crop' },
      { name: 'White Darjeeling Tea', rating: 4.8, reviews: 110 , image: 'https://images.unsplash.com/photo-1723142856505-5fe883fa11fe?q=80&w=600&auto=format&fit=crop' },
    ]
  },
  {
    id: 'oolong-tea',
    name: 'Oolong Tea',
    description: 'Partially oxidized for a complex flavor profile bridging green and black teas.',
    themeColor: 'from-amber-700/80 to-orange-900/90',
    image: 'https://images.unsplash.com/photo-1708010433898-2685301f61ed?q=80&w=600&auto=format&fit=crop',
    products: [
      { name: 'Classic Oolong Tea', rating: 4.7, reviews: 85 , image: 'https://images.unsplash.com/photo-1708010433898-2685301f61ed?q=80&w=600&auto=format&fit=crop' },
      { name: 'Milk Oolong Tea', rating: 4.9, reviews: 240 , image: 'https://images.unsplash.com/photo-1527398317618-b3da8a79e0ca?q=80&w=600&auto=format&fit=crop' },
      { name: 'Tie Guan Yin Tea', rating: 5.0, reviews: 165 , image: 'https://images.unsplash.com/photo-1765809411613-9870f2f2d459?q=80&w=600&auto=format&fit=crop' },
      { name: 'Roasted Oolong Tea', rating: 4.8, reviews: 98 , image: 'https://images.unsplash.com/photo-1758390285674-f1d55b9d1312?q=80&w=600&auto=format&fit=crop' },
      { name: 'Premium Oolong Tea', rating: 4.9, reviews: 77 , image: 'https://images.unsplash.com/photo-1723142856505-5fe883fa11fe?q=80&w=600&auto=format&fit=crop' },
    ]
  },
  {
    id: 'flavored-tea',
    name: 'Flavored Tea',
    description: 'Exquisite blends infused with natural spices, fruits, and fragrant botanicals.',
    themeColor: 'from-rose-800/80 to-purple-900/90',
    image: 'https://images.unsplash.com/photo-1572232189109-8462e31c1202?q=80&w=600&auto=format&fit=crop',
    products: [
      { name: 'Masala Chai', rating: 4.9, reviews: 512 , image: 'https://images.unsplash.com/photo-1572232189109-8462e31c1202?q=80&w=600&auto=format&fit=crop' },
      { name: 'Cardamom Tea', rating: 4.8, reviews: 215 , image: 'https://images.unsplash.com/photo-1527398317618-b3da8a79e0ca?q=80&w=600&auto=format&fit=crop' },
      { name: 'Saffron Tea', rating: 5.0, reviews: 145 , image: 'https://images.unsplash.com/photo-1765809411613-9870f2f2d459?q=80&w=600&auto=format&fit=crop' },
      { name: 'Peach Tea', rating: 4.7, reviews: 189 , image: 'https://images.unsplash.com/photo-1758390285674-f1d55b9d1312?q=80&w=600&auto=format&fit=crop' },
      { name: 'Apple Cinnamon Tea', rating: 4.8, reviews: 201 , image: 'https://images.unsplash.com/photo-1723142856505-5fe883fa11fe?q=80&w=600&auto=format&fit=crop' },
      { name: 'Orange Spice Tea', rating: 4.7, reviews: 167 , image: 'https://images.unsplash.com/photo-1701544872167-7f5ee73cb435?q=80&w=600&auto=format&fit=crop' },
      { name: 'Caramel Tea', rating: 4.6, reviews: 134 , image: 'https://images.unsplash.com/photo-1559038297-5b37efcd59d4?q=80&w=600&auto=format&fit=crop' },
      { name: 'Chocolate Tea', rating: 4.5, reviews: 98 , image: 'https://images.unsplash.com/photo-1767721887917-ad186b3f5f2d?q=80&w=600&auto=format&fit=crop' },
    ]
  },
  {
    id: 'wellness-tea',
    name: 'Wellness Tea',
    description: 'Purposefully crafted blends to support your daily health and vitality.',
    themeColor: 'from-lime-800/80 to-green-900/90',
    image: 'https://images.unsplash.com/photo-1668587877964-16488273b0ab?q=80&w=600&auto=format&fit=crop',
    products: [
      { name: 'Immunity Tea', rating: 4.8, reviews: 320 , image: 'https://images.unsplash.com/photo-1668587877964-16488273b0ab?q=80&w=600&auto=format&fit=crop' },
      { name: 'Detox Tea', rating: 4.7, reviews: 285 , image: 'https://images.unsplash.com/photo-1527398317618-b3da8a79e0ca?q=80&w=600&auto=format&fit=crop' },
      { name: 'Slim Tea', rating: 4.6, reviews: 210 , image: 'https://images.unsplash.com/photo-1765809411613-9870f2f2d459?q=80&w=600&auto=format&fit=crop' },
      { name: 'Digestive Tea', rating: 4.8, reviews: 195 , image: 'https://images.unsplash.com/photo-1758390285674-f1d55b9d1312?q=80&w=600&auto=format&fit=crop' },
      { name: 'Sleep Wellness Tea', rating: 4.9, reviews: 415 , image: 'https://images.unsplash.com/photo-1723142856505-5fe883fa11fe?q=80&w=600&auto=format&fit=crop' },
      { name: 'Stress Relief Tea', rating: 4.9, reviews: 378 , image: 'https://images.unsplash.com/photo-1701544872167-7f5ee73cb435?q=80&w=600&auto=format&fit=crop' },
      { name: 'Energy Tea', rating: 4.7, reviews: 188 , image: 'https://images.unsplash.com/photo-1559038297-5b37efcd59d4?q=80&w=600&auto=format&fit=crop' },
      { name: 'Diabetic Care Tea', rating: 4.8, reviews: 156 , image: 'https://images.unsplash.com/photo-1767721887917-ad186b3f5f2d?q=80&w=600&auto=format&fit=crop' },
    ]
  },
  {
    id: 'iced-tea',
    name: 'Iced Tea',
    description: 'Refreshingly crisp and cool infusions, perfectly balanced for warm days.',
    themeColor: 'from-cyan-700/80 to-blue-900/90',
    image: 'https://images.unsplash.com/photo-1644335471325-52e2d44fca64?q=80&w=600&auto=format&fit=crop',
    products: [
      { name: 'Lemon Iced Tea', rating: 4.8, reviews: 245 , image: 'https://images.unsplash.com/photo-1644335471325-52e2d44fca64?q=80&w=600&auto=format&fit=crop' },
      { name: 'Peach Iced Tea', rating: 4.9, reviews: 312 , image: 'https://images.unsplash.com/photo-1527398317618-b3da8a79e0ca?q=80&w=600&auto=format&fit=crop' },
      { name: 'Mango Iced Tea', rating: 4.8, reviews: 278 , image: 'https://images.unsplash.com/photo-1765809411613-9870f2f2d459?q=80&w=600&auto=format&fit=crop' },
      { name: 'Green Iced Tea', rating: 4.7, reviews: 198 , image: 'https://images.unsplash.com/photo-1758390285674-f1d55b9d1312?q=80&w=600&auto=format&fit=crop' },
      { name: 'Raspberry Iced Tea', rating: 4.8, reviews: 234 , image: 'https://images.unsplash.com/photo-1723142856505-5fe883fa11fe?q=80&w=600&auto=format&fit=crop' },
      { name: 'Mint Iced Tea', rating: 4.7, reviews: 165 , image: 'https://images.unsplash.com/photo-1701544872167-7f5ee73cb435?q=80&w=600&auto=format&fit=crop' },
    ]
  },
  {
    id: 'specialty-tea',
    name: 'Specialty Tea',
    description: 'Rare, unique, and artisanal creations for the ultimate tea connoisseur.',
    themeColor: 'from-fuchsia-800/80 to-violet-900/90',
    image: 'https://images.unsplash.com/photo-1586965142106-83751d8f57a3?q=80&w=600&auto=format&fit=crop',
    products: [
      { name: 'Kashmiri Kahwa', rating: 5.0, reviews: 189 , image: 'https://images.unsplash.com/photo-1586965142106-83751d8f57a3?q=80&w=600&auto=format&fit=crop' },
      { name: 'Blue Tea (Butterfly Pea)', rating: 4.9, reviews: 245 , image: 'https://images.unsplash.com/photo-1702987908200-de80baec74e4?q=80&w=600&auto=format&fit=crop' },
      { name: 'Golden Turmeric Tea', rating: 4.8, reviews: 210 , image: 'https://images.unsplash.com/photo-1572232189109-8462e31c1202?q=80&w=600&auto=format&fit=crop' },
      { name: 'Ayurvedic Tea', rating: 4.8, reviews: 176 , image: 'https://images.unsplash.com/photo-1765809411613-9870f2f2d459?q=80&w=600&auto=format&fit=crop' },
      { name: 'Smoke Tea', rating: 4.6, reviews: 88 , image: 'https://images.unsplash.com/photo-1763617702099-d956f3fd8324?q=80&w=600&auto=format&fit=crop' },
      { name: 'Blooming Flower Tea', rating: 4.9, reviews: 312 , image: 'https://images.unsplash.com/photo-1701544872167-7f5ee73cb435?q=80&w=600&auto=format&fit=crop' },
    ]
  }
];

export default function TeaCollection() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const activeCategory = teaCategories[activeCategoryIndex];

  const handleTabChange = (index: number) => {
    if (index === activeCategoryIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategoryIndex(index);
      setIsAnimating(false);
    }, 200); // Wait for fade out
  };

  return (
    <section className="w-full py-10 md:py-16 bg-[#fcfbf9] dark:bg-[#121212] transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-8 md:mb-10">
          <span className="text-[#d4a373] font-medium tracking-wider text-xs uppercase mb-2 flex items-center gap-2">
            <Leaf className="w-3.5 h-3.5" /> Discover Our Blends
          </span>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#2c1e16] dark:text-[#f4ebd0] tracking-tight mb-3">
            Premium Tea Collection
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-sm md:text-base">
            Explore our curated selection of world-class teas, handpicked for exceptional flavor, aroma, and wellness benefits.
          </p>
        </div>

        {/* Premium Boxy Layout Container */}
        <div className="bg-white dark:bg-[#1a1a1a] rounded-[2rem] border border-gray-100 dark:border-white/5 shadow-[0_8px_40px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_40px_rgba(255,255,255,0.02)] overflow-hidden">
          
          {/* Main Visual Image & Tab Navigation Header */}
          <div className="relative w-full h-[260px] md:h-[340px] overflow-hidden">
            {/* Background Image that changes with category */}
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out transform ${isAnimating ? 'scale-105 opacity-80' : 'scale-100 opacity-100'}`}
              style={{ backgroundImage: `url(${activeCategory.image})` }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${activeCategory.themeColor} mix-blend-multiply transition-colors duration-500`} />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
            </div>

            {/* Tab Navigation (Positioned over image) */}
            <div className="absolute top-0 left-0 right-0 z-10 pt-4 md:pt-6 px-4 md:px-6">
              <div className="flex overflow-x-auto hide-scrollbar snap-x pb-3 gap-2 items-center justify-start md:justify-center">
                {teaCategories.map((category, index) => (
                  <button
                    key={category.id}
                    onClick={() => handleTabChange(index)}
                    className={`
                      relative px-4 py-2 rounded-full whitespace-nowrap text-[13px] md:text-sm font-semibold transition-all duration-300 snap-center
                      ${activeCategoryIndex === index 
                        ? 'bg-white/20 text-white backdrop-blur-md shadow-lg border border-white/30' 
                        : 'bg-black/20 text-white/80 hover:bg-black/40 hover:text-white backdrop-blur-sm border border-transparent'
                      }
                    `}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Banner Content */}
            <div className={`absolute bottom-0 left-0 right-0 p-5 md:p-8 z-10 transition-all duration-500 transform ${isAnimating ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2 drop-shadow-lg">
                {activeCategory.name}
              </h3>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium drop-shadow-md line-clamp-2 md:line-clamp-none">
                {activeCategory.description}
              </p>
            </div>
          </div>

          {/* Product Grid Area */}
          <div className="p-5 md:p-8 lg:p-10">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                Featured {activeCategory.name}s
              </h4>
              <button className="hidden md:flex items-center gap-1.5 text-[13px] font-semibold text-[#d4a373] hover:text-[#b3855a] transition-colors group">
                View All <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              {activeCategory.products.map((product, idx) => (
                <div 
                  key={idx} 
                  className="group relative bg-gray-50 dark:bg-[#222] rounded-2xl p-3 md:p-4 border border-gray-100 dark:border-white/5 hover:border-[#d4a373]/30 dark:hover:border-[#d4a373]/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
                >
                  {/* Mock Image Box */}
                  <div className="w-full aspect-square bg-gray-200 dark:bg-[#333] rounded-xl mb-3 md:mb-4 overflow-hidden relative group-hover:shadow-inner transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#d4a373]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                    <img 
                      src={product.image} 
                      alt={product.name} loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Quick Add Button */}
                    <button className="absolute bottom-3 right-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-2.5 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#d4a373] hover:text-white dark:hover:bg-[#d4a373] z-20">
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1 mb-1.5">
                        <Star className="w-3 h-3 fill-[#d4a373] text-[#d4a373]" />
                        <span className="text-[11px] font-bold text-gray-700 dark:text-gray-300">{product.rating}</span>
                        <span className="text-[11px] text-gray-500 dark:text-gray-400">({product.reviews})</span>
                      </div>
                      <h5 className="font-bold text-gray-900 dark:text-white text-sm leading-tight mb-1 group-hover:text-[#d4a373] transition-colors line-clamp-2">
                        {product.name}
                      </h5>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-bold text-base text-gray-900 dark:text-white">
                        ₹1,499
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-8 md:hidden flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-100 dark:bg-[#333] text-gray-900 dark:text-white font-semibold text-sm hover:bg-gray-200 dark:hover:bg-[#444] transition-colors">
              View All {activeCategory.name} <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
