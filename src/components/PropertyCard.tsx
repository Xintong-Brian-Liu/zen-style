
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
}

const PropertyCard = ({ 
  image, 
  title, 
  location, 
  price, 
  bedrooms, 
  bathrooms, 
  sqft 
}: PropertyCardProps) => {
  return (
    <Card className="rounded-none overflow-hidden border-none zen-shadow group">
      <div className="relative overflow-hidden h-64">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-serif text-xl mb-2">{title}</h3>
        <p className="text-muted-foreground mb-3">{location}</p>
        <p className="text-xl font-medium text-zen-wood mb-4">{price}</p>
        <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-4 text-sm">
          <div>
            <p className="font-medium">{bedrooms}</p>
            <p className="text-muted-foreground">Bedrooms</p>
          </div>
          <div>
            <p className="font-medium">{bathrooms}</p>
            <p className="text-muted-foreground">Bathrooms</p>
          </div>
          <div>
            <p className="font-medium">{sqft}</p>
            <p className="text-muted-foreground">Sq Ft</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6">
        <Button 
          variant="outline" 
          className="rounded-none border-zen-moss text-zen-wood hover:bg-zen-moss hover:text-white w-full"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
