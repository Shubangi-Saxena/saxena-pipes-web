
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-background min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Trusted Distributor of Pipes & Fittings Since 1991
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: "0.1s"}}>
            Saxena & Co is the 3rd largest distributor in Bangalore and among the top 10 nationwide. 
            We provide high-quality piping solutions for residential, commercial, and institutional projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: "0.2s"}}>
            <Button asChild size="lg" className="button-hover">
              <Link to="/products">Explore Products</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="button-hover">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
