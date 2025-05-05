
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import AboutPreview from "@/components/home/AboutPreview";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import ContactCta from "@/components/home/ContactCta";

const Index = () => {
  return (
    <div>
      <div 
        className="fixed inset-0 z-[-1] opacity-10"
        style={{
          backgroundImage: `url('/lovable-uploads/deb0cd20-fba6-4a91-ba26-338c87ba2998.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Hero />
      <FeaturedProducts />
      <AboutPreview />
      <TestimonialsPreview />
      <ContactCta />
    </div>
  );
};

export default Index;
