
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
    featured: true,
    yearBuilt: 2019,
    lotSize: "0.75 acres",
    propertyType: "Single Family",
    description: "A serene mountain retreat featuring traditional Japanese design elements with modern amenities."
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
    featured: false,
    yearBuilt: 2021,
    lotSize: "1.2 acres",
    propertyType: "Cabin",
    description: "Contemporary cabin nestled among towering pines, perfect for peaceful living."
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
    featured: false,
    yearBuilt: 2020,
    lotSize: "2.1 acres",
    propertyType: "Luxury Home",
    description: "Stunning lakefront property with panoramic views and private beach access."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "Zen Garden Estate",
    location: "Sedona, Arizona",
    price: "$1,425,000",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3800,
    featured: true,
    yearBuilt: 2022,
    lotSize: "1.5 acres",
    propertyType: "Contemporary",
    description: "Modern desert home with meditation gardens and red rock canyon views."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "Coastal Harmony House",
    location: "Big Sur, California",
    price: "$2,100,000",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2800,
    featured: false,
    yearBuilt: 2018,
    lotSize: "3.0 acres",
    propertyType: "Modern",
    description: "Architectural masterpiece perched on coastal cliffs with endless ocean views."
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "Minimalist Beach Retreat",
    location: "Tulum, Mexico",
    price: "$695,000",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    featured: false,
    yearBuilt: 2023,
    lotSize: "0.5 acres",
    propertyType: "Beach House",
    description: "Eco-friendly beachfront villa with sustainable design and private cenote access."
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
                yearBuilt={property.yearBuilt}
                lotSize={property.lotSize}
                propertyType={property.propertyType}
                description={property.description}
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
