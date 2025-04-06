
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zen-wood text-white py-16">
      <div className="zen-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-serif mb-4">ZEN Estates</h3>
            <p className="text-zen-fog/80 mb-6">
              Bringing harmony and balance to your living spaces through mindful real estate.
            </p>
            <p className="text-zen-fog/80">
              1234 Tranquility Lane<br />
              Harmony Hills, CA 94123
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-zen-fog/80 hover:text-white zen-transition">Home</a>
              </li>
              <li>
                <a href="#" className="text-zen-fog/80 hover:text-white zen-transition">Properties</a>
              </li>
              <li>
                <a href="#" className="text-zen-fog/80 hover:text-white zen-transition">About Us</a>
              </li>
              <li>
                <a href="#" className="text-zen-fog/80 hover:text-white zen-transition">Our Philosophy</a>
              </li>
              <li>
                <a href="#" className="text-zen-fog/80 hover:text-white zen-transition">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <p className="text-zen-fog/80 mb-4">
              Sign up for our newsletter to receive the latest property listings and zen living tips.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-zen-moss/50 text-white placeholder:text-zen-fog/60 border-none rounded-none px-4 py-2 flex-grow"
              />
              <button className="bg-white text-zen-wood px-4 py-2 font-medium hover:bg-zen-fog zen-transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <Separator className="bg-zen-moss/30 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-zen-fog/70 text-sm">
            &copy; {currentYear} ZEN Estates. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-zen-fog/70 hover:text-white zen-transition text-sm">Privacy Policy</a>
            <a href="#" className="text-zen-fog/70 hover:text-white zen-transition text-sm">Terms of Service</a>
            <a href="#" className="text-zen-fog/70 hover:text-white zen-transition text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
