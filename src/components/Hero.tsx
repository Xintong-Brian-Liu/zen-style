
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProperties = () => {
    const propertiesSection = document.getElementById('featured-properties');
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative h-full zen-container flex flex-col justify-center items-start">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-serif text-white font-light tracking-wider mb-6">
            Find Your Place <br />of Tranquility
          </h1>
          <p className="text-xl md:text-2xl text-zen-fog mb-8 font-light leading-relaxed">
            Discover properties that embrace harmony, balance, and natural beauty
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-zen-wood hover:bg-zen-moss text-white border-none rounded-none px-8 py-6"
              onClick={scrollToProperties}
            >
              Browse Properties
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border border-white text-white hover:bg-white/20 rounded-none px-8 py-6"
            >
              Our Philosophy
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
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
