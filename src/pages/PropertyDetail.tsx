
import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Square, Home, Bath, BedDouble, Heart, Share2, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

// Mock data for the Berkeley property from the Redfin link
const properties = {
  1: {
    id: 1,
    title: "1170 Oxford St",
    location: "Berkeley, CA 94707",
    price: "$1,295,000",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1456,
    yearBuilt: 1924,
    lotSize: "0.13 acres",
    propertyType: "Single Family Residential",
    description: "Charming Berkeley home with original hardwood floors, updated kitchen, and tranquil garden. Perfect for those seeking a peaceful retreat in the heart of the city.",
    images: [
      "/lovable-uploads/5eaa6421-de14-4e68-bc6b-4b3bffb13659.png",
      "/lovable-uploads/539b4d47-e4c5-44b2-9998-5d1d2f93ef07.png",
      "/lovable-uploads/34667c6b-9679-4da4-806d-f61f4f6a3f4c.png",
      "/lovable-uploads/993ecd36-357a-4fda-ad93-3aec0c8557bb.png"
    ],
    details: {
      propertyType: "Single Family Residential",
      yearBuilt: 1924,
      lotSize: "5,663 sq ft",
      parking: "2 spaces",
      heating: "Forced air",
      cooling: "None",
      fireplace: "Yes",
      stories: "2",
      foundation: "Concrete slab",
      roof: "Composition shingle"
    },
    monthlyPayment: "$8,234",
    propertyTax: "$1,294/mo",
    insurance: "$108/mo",
    hoaFees: "None",
    neighborhood: "Berkeley",
    walkScore: 89,
    transitScore: 77,
    bikeScore: 95
  }
};

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties[Number(id) as keyof typeof properties];

  if (!property) {
    return (
      <div className="min-h-screen bg-zen-fog flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Property Not Found</h2>
          <Link to="/" className="text-zen-moss hover:underline">
            Return to Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zen-fog">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="zen-container py-4">
          <Link to="/" className="inline-flex items-center text-zen-moss hover:text-zen-wood transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Properties
          </Link>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="zen-container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          <div className="aspect-video overflow-hidden rounded-lg">
            <img 
              src={property.images[0]} 
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {property.images.slice(1, 4).map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src={image} 
                  alt={`${property.title} ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {property.images.length > 4 && (
              <div className="aspect-square bg-black/50 rounded-lg flex items-center justify-center text-white">
                +{property.images.length - 4} more
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Property Header */}
            <div className="bg-white p-6 rounded-lg zen-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="font-serif text-3xl font-bold text-gray-900 mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    {property.location}
                  </div>
                  <div className="text-3xl font-bold text-zen-moss mb-4">
                    {property.price}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center">
                  <BedDouble className="w-5 h-5 text-zen-moss mr-2" />
                  <span className="font-medium">{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-5 h-5 text-zen-moss mr-2" />
                  <span className="font-medium">{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center">
                  <Square className="w-5 h-5 text-zen-moss mr-2" />
                  <span className="font-medium">{property.sqft} sqft</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-zen-moss mr-2" />
                  <span className="font-medium">Built {property.yearBuilt}</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Property Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Home className="w-5 h-5 mr-2 text-zen-moss" />
                  Property Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(property.details).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Monthly Payment */}
            <Card>
              <CardHeader>
                <CardTitle>Monthly Payment Estimate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Principal & Interest</span>
                    <span className="font-medium">{property.monthlyPayment}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Property Tax</span>
                    <span className="font-medium">{property.propertyTax}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Insurance</span>
                    <span className="font-medium">{property.insurance}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>HOA Fees</span>
                    <span className="font-medium">{property.hoaFees}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between items-center font-bold text-lg">
                    <span>Total Monthly</span>
                    <span className="text-zen-moss">$9,636</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Agent */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Agent</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-zen-moss rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl">ZR</span>
                  </div>
                  <h3 className="font-medium">Zen Realty Team</h3>
                  <p className="text-sm text-gray-600">Licensed Real Estate Agent</p>
                </div>
                <Button className="w-full bg-zen-moss hover:bg-zen-wood">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Agent
                </Button>
                <Button variant="outline" className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Agent
                </Button>
              </CardContent>
            </Card>

            {/* Walkability Scores */}
            <Card>
              <CardHeader>
                <CardTitle>Walkability & Transit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Walk Score</span>
                  <span className="font-bold text-zen-moss">{property.walkScore}/100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Transit Score</span>
                  <span className="font-bold text-zen-moss">{property.transitScore}/100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Bike Score</span>
                  <span className="font-bold text-zen-moss">{property.bikeScore}/100</span>
                </div>
              </CardContent>
            </Card>

            {/* Neighborhood Info */}
            <Card>
              <CardHeader>
                <CardTitle>Neighborhood</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-medium mb-2">{property.neighborhood}</h3>
                <p className="text-sm text-gray-600">
                  Berkeley is known for its vibrant culture, excellent schools, and proximity to nature. 
                  This area offers easy access to UC Berkeley, downtown shops, and hiking trails.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
