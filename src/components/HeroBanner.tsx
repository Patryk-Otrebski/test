import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    id: 1,
    title: "Najnowsze komputery gamingowe",
    subtitle: "W niesamowitej cenie",
    description: "Już od 3 999 zł",
    buttonText: "Kup teraz",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    bgColor: "from-blue-600 to-purple-600",
  },
  {
    id: 2,
    title: "Komputery dla grafików",
    subtitle: "Moc i wydajność",
    description: "Idealne do pracy kreatywnej",
    buttonText: "Sprawdź ofertę",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    bgColor: "from-green-600 to-teal-600",
  },
  {
    id: 3,
    title: "Akcesoria komputerowe",
    subtitle: "Najwyższa jakość",
    description: "Dopasowane do Twoich potrzeb",
    buttonText: "Zobacz więcej",
    image: "https://images.unsplash.com/photo-1563770660941-10a63a9ed40f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    bgColor: "from-red-600 to-orange-600",
  },
];

const HeroBanner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextBanner = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentBanner((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevBanner = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentBanner((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextBanner();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] md:h-[600px] mt-20 overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === currentBanner ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${banner.bgColor} opacity-80`}></div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img
            src={banner.image}
            alt={banner.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-xl text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-2 animate-fadeInUp text-shadow">{banner.title}</h2>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 animate-fadeInUp animation-delay-100 text-shadow">{banner.subtitle}</h3>
                <p className="text-xl mb-6 animate-fadeInUp animation-delay-200 text-shadow">{banner.description}</p>
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-medium transition-all duration-300 animate-fadeInUp animation-delay-300">
                  {banner.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevBanner}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextBanner}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentBanner ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;