
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import AboutPreview from "@/components/home/AboutPreview";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import ContactCta from "@/components/home/ContactCta";

const Index = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <AboutPreview />
      <TestimonialsPreview />
      <ContactCta />
    </div>
  );
};

export default Index;
