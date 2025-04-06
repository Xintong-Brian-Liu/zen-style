
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <section className="section-spacing bg-zen-stone/30">
      <div className="zen-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Begin Your Journey</h2>
          <div className="w-20 h-0.5 bg-zen-moss mx-auto mb-6"></div>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact us to discover how we can help you find your perfect sanctuary 
            or discuss the unique aspects of your property.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  className="rounded-none border-zen-sand focus:border-zen-wood focus:ring-zen-wood"
                  required 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Your email" 
                  className="rounded-none border-zen-sand focus:border-zen-wood focus:ring-zen-wood"
                  required 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="interest" className="block text-sm font-medium">
                I am interested in
              </label>
              <select 
                id="interest" 
                className="w-full h-10 px-3 py-2 bg-white border border-zen-sand rounded-none focus:outline-none focus:border-zen-wood"
                required
              >
                <option value="">Please select</option>
                <option value="buying">Finding a property</option>
                <option value="selling">Selling my property</option>
                <option value="investing">Investment opportunities</option>
                <option value="other">Other inquiry</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <Textarea 
                id="message" 
                placeholder="Tell us about your needs..." 
                className="min-h-[120px] rounded-none border-zen-sand focus:border-zen-wood focus:ring-zen-wood"
                required
              />
            </div>
            <div className="text-center pt-4">
              <Button 
                type="submit" 
                className="bg-zen-wood hover:bg-zen-moss text-white rounded-none px-8 py-6 min-w-[200px]"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
