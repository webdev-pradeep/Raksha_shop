'use client'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false)
   // Sample furniture data
   const furnitureItems = [
    {
      id: 1,
      name: "Modern Sofa",
      description: "Elegant mid-century modern sofa with premium upholstery",
      image: "/public/assets/image1.png",
      price: "$1,299"
    },
    {
      id: 2,
      name: "Scandinavian Armchair",
      description: "Minimalist design with exceptional comfort and durability",
      image: "/public/assets/image1.png",
      price: "$849"
    },
    {
      id: 3,
      name: "Walnut Dining Table",
      description: "Solid walnut dining table with extendable leaf design",
      image: "/public/assets/image1.png",
      price: "$1,599"
    },
    {
      id: 4,
      name: "King Size Bed Frame",
      description: "Contemporary platform bed with integrated storage",
      image: "/public/assets/image1.png",
      price: "$1,899"
    }
  ];

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === furnitureItems.length - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? furnitureItems.length - 1 : prev - 1));
    }
  };

  const goToSlide = ( index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
    }
  };

  // Reset transition state after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

  return (
    <>
    <div className="relative h-screen w-full overflow-hidden bg-gray-900 ">
      {/* Slide container */}
      <div className="h-full w-full">
        {furnitureItems.map((item, index) => (
          <div 
            key={item.id}
            className={`absolute top-0 left-0 h-full w-full transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background image */}
            <div 
              className="absolute inset-0 bg-cover bg-center "
              style={{
                backgroundImage: `url(${item.image})`,
                filter: 'brightness(0.7)'
              }}
            />
            
            {/* Content overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              
              <div className="max-w-2xl p-8 text-center text-white">
                <h2 className="mb-2 text-5xl font-bold">{item.name}</h2>
                <p className="mb-6 text-xl">{item.description}</p>
                <div className="mb-8 text-3xl font-semibold">{item.price}</div>
                <button className="rounded-md bg-white px-8 py-3 text-lg font-medium text-gray-900 transition hover:bg-gray-200">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/30 p-3 text-white backdrop-blur-sm transition hover:bg-white/50"
        disabled={isTransitioning}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/30 p-3 text-white backdrop-blur-sm transition hover:bg-white/50"
        disabled={isTransitioning}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
        {furnitureItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>

    </>
  )
}

export default page 
