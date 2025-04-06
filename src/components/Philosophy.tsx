
import { Separator } from "@/components/ui/separator";

const Philosophy = () => {
  return (
    <section className="section-spacing bg-white">
      <div className="zen-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Our Zen Philosophy</h2>
            <div className="w-20 h-0.5 bg-zen-moss mb-6"></div>
            <p className="text-muted-foreground mb-6">
              In a world of constant noise and distraction, we believe your home should be a sanctuary that promotes balance, 
              harmony and connection with nature.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Harmony with Nature</h3>
                <p className="text-muted-foreground">
                  We select properties that integrate with their natural surroundings, featuring organic materials, 
                  ample natural light, and connections to outdoor spaces.
                </p>
              </div>
              
              <Separator className="bg-zen-stone" />
              
              <div>
                <h3 className="text-xl font-medium mb-2">Simplicity & Space</h3>
                <p className="text-muted-foreground">
                  Our properties embrace clean designs with uncluttered spaces that allow for mindful living, 
                  featuring practical layouts that promote tranquility.
                </p>
              </div>
              
              <Separator className="bg-zen-stone" />
              
              <div>
                <h3 className="text-xl font-medium mb-2">Balance & Wellness</h3>
                <p className="text-muted-foreground">
                  We believe your home should support your well-being, with features that enhance mental clarity, 
                  physical health, and emotional balance.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Zen Mountain View" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-zen-stone -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-zen-leaf -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
