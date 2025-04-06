
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import Philosophy from "@/components/Philosophy";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <FeaturedProperties />
      <Philosophy />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
