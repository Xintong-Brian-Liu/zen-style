
import { Button } from "@/components/ui/button";
import PropertyCard from "./PropertyCard";

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "Tranquil Mountain Villa",
    location: "Kyoto, Japan",
    price: "$1,250,000",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "Forest Retreat House",
    location: "Aspen, Colorado",
    price: "$875,000",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "Lakeside Sanctuary",
    location: "Lake Tahoe, California",
    price: "$1,850,000",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4500
  }
];

const FeaturedProperties = () => {
  return (
    <section id="featured-properties" className="section-spacing bg-zen-fog">
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
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              image={property.image}
              title={property.title}
              location={property.location}
              price={property.price}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              sqft={property.sqft}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-zen-moss hover:bg-zen-wood text-white rounded-none px-8 py-6"
          >
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
