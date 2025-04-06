
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const backgroundImages = [
  "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const scrollToProperties = () => {
    const propertiesSection = document.getElementById('featured-properties');
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000); // Change image every 6 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            activeIndex === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ 
            backgroundImage: `url('${image}')`,
            backgroundPosition: "center 30%"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}
      
      <div className="relative z-20 h-full zen-container flex flex-col justify-center items-start">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-serif text-white font-light tracking-wider mb-6">
            Find Your Place <br />of Tranquility
          </h1>
          <p className="text-xl md:text-2xl text-zen-fog mb-8 font-light leading-relaxed">
            Discover properties that embrace harmony, balance, and natural beauty
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-zen-wood hover:bg-zen-moss text-white border-none rounded-none px-8 py-6 transition-transform hover:translate-y-[-4px]"
              onClick={scrollToProperties}
            >
              Browse Properties
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border border-white text-white hover:bg-white/20 rounded-none px-8 py-6 transition-transform hover:translate-y-[-4px]"
            >
              Our Philosophy
            </Button>
          </div>
        </div>
        
        {/* Slide indicator dots */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {backgroundImages.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-white scale-125" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
          <button 
            onClick={scrollToProperties}
            className="flex flex-col items-center text-white opacity-80 hover:opacity-100 zen-transition"
          >
            <span className="mb-2 text-sm">Discover More</span>
            <ArrowDown className="animate-bounce" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
