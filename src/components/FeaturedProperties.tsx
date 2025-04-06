
import { Button } from "@/components/ui/button";
import PropertyCard from "./PropertyCard";
import { useState, useEffect } from "react";

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "Tranquil Mountain Villa",
    location: "Kyoto, Japan",
    price: "$1,250,000",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    featured: true
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "Forest Retreat House",
    location: "Aspen, Colorado",
    price: "$875,000",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,
    featured: false
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "Lakeside Sanctuary",
    location: "Lake Tahoe, California",
    price: "$1,850,000",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4500,
    featured: false
  }
];

const FeaturedProperties = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  // Animate cards into view when they become visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.id.split('-')[1]);
            if (!visibleCards.includes(id)) {
              setVisibleCards(prev => [...prev, id]);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll('.property-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [visibleCards]);

  return (
    <section id="featured-properties" className="section-spacing bg-gradient-to-b from-zen-fog to-zen-stone/20">
      <div className="zen-container">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Featured Properties</h2>
          <div className="w-20 h-0.5 bg-zen-moss mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully selected properties that embody the principles of zen living, 
            featuring open spaces, natural light, and harmony with their surroundings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div 
              id={`card-${property.id}`}
              key={property.id} 
              className={`property-card transition-all duration-700 transform ${
                visibleCards.includes(property.id) 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <PropertyCard
                image={property.image}
                title={property.title}
                location={property.location}
                price={property.price}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                sqft={property.sqft}
              />
              {property.featured && (
                <div className="absolute top-4 right-4 bg-zen-moss text-white text-xs font-semibold px-2 py-1 rounded-sm">
                  FEATURED
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-zen-moss hover:bg-zen-wood text-white rounded-none px-8 py-6 transition-all hover:shadow-lg hover:-translate-y-1"
          >
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
