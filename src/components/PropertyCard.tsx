
import React from 'react';
import { Bath, BedDouble, ArrowUpRight, MapPin } from 'lucide-react';

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  sqft,
}) => {
  return (
    <div className="group bg-white hover-lift relative flex flex-col h-full zen-shadow overflow-hidden">
      <div className="image-zoom-container h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover image-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="flex-grow p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl font-medium text-gray-900 group-hover:text-zen-moss transition-colors">{title}</h3>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-zen-moss/10 group-hover:bg-zen-moss transition-colors">
            <ArrowUpRight className="w-4 h-4 text-zen-moss group-hover:text-white transition-colors" />
          </span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{location}</span>
        </div>
        
        <div className="flex border-t border-gray-100 pt-4 mt-auto">
          <div className="flex items-center mr-4">
            <BedDouble className="w-4 h-4 text-zen-moss mr-1" />
            <span className="text-sm">{bedrooms} Beds</span>
          </div>
          
          <div className="flex items-center mr-4">
            <Bath className="w-4 h-4 text-zen-moss mr-1" />
            <span className="text-sm">{bathrooms} Baths</span>
          </div>
          
          <div className="flex items-center">
            <svg className="w-4 h-4 text-zen-moss mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H8M16 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H16M3 12H21M8 7V17M16 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm">{sqft} sqft</span>
          </div>
        </div>
      </div>
      
      <div className="absolute top-4 left-4 bg-white px-3 py-1 text-zen-wood font-semibold rounded-sm">{price}</div>
    </div>
  );
};

export default PropertyCard;
