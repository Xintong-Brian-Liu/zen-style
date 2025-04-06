
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const backgroundImages = [
  "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
];

const highlightTips = [
  "Tranquil Gardens",
  "Natural Lighting",
  "Minimalist Design",
  "Eco-friendly",
  "Harmonious Flow"
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentTip, setCurrentTip] = useState(0);
  
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
  
  useEffect(() => {
    const tipInterval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % highlightTips.length);
    }, 3000); // Change tip every 3 seconds
    
    return () => clearInterval(tipInterval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Images with Ken Burns effect */}
      {backgroundImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            activeIndex === index ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
          style={{ 
            backgroundImage: `url('${image}')`,
            backgroundPosition: "center 30%",
            transition: "opacity 1s ease-in-out, transform 8s ease-in-out",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}
      
      <div className="relative z-20 h-full zen-container flex flex-col justify-center items-start">
        {/* Floating design elements */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-zen-wood/10 backdrop-blur-sm animate-pulse hidden lg:block"></div>
        <div className="absolute bottom-40 right-40 w-24 h-24 rounded-full bg-zen-moss/10 backdrop-blur-sm animate-pulse delay-300 hidden lg:block"></div>
        
        {/* Moving tag line */}
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 bg-zen-wood/70 backdrop-blur-sm px-4 py-1 rounded-full">
          <p className="text-white text-sm font-light tracking-wider">
            <span className="opacity-70"># </span>
            <span className="transition-all duration-500">{highlightTips[currentTip]}</span>
          </p>
        </div>
        
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-serif text-white font-light tracking-wider mb-6">
            Find Your Place <br />of 
            <span className="relative">
              <span className="relative z-10"> Tranquility</span>
              <span className="absolute bottom-1 left-0 h-2 bg-zen-wood/30 w-full -z-0"></span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zen-fog mb-8 font-light leading-relaxed">
            Discover properties that embrace harmony, balance, and natural beauty
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="group bg-zen-wood hover:bg-zen-moss text-white border-none rounded-none px-8 py-6 transition-all hover:translate-y-[-4px]"
              onClick={scrollToProperties}
            >
              Browse Properties
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button 
                  variant="outline" 
                  className="bg-transparent border border-white text-white hover:bg-white/20 rounded-none px-8 py-6 transition-transform hover:translate-y-[-4px]"
                >
                  Our Philosophy
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-white/90 backdrop-blur-md">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">The Zen Approach</h4>
                  <p className="text-sm">
                    We believe in properties that create balance between human living spaces and natural environments.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        
        {/* Slide indicator dots with animation */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {backgroundImages.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? "bg-white scale-125 shadow-lg shadow-white/20" 
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
          <button 
            onClick={scrollToProperties}
            className="flex flex-col items-center text-white opacity-80 hover:opacity-100 zen-transition group"
          >
            <span className="mb-2 text-sm">Discover More</span>
            <ArrowDown className="animate-bounce group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
