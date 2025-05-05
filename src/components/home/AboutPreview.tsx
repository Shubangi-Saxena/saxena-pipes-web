
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">About Saxena & Co</h2>
            <p className="mb-4 text-muted-foreground">
              Since 1991, Saxena & Co has been a trusted partner for Ashirvad Pipes, 
              establishing ourselves as the 3rd-largest distributor in Bangalore and 
              among the top 10 nationwide.
            </p>
            <p className="mb-6 text-muted-foreground">
              Our commitment to quality, customer satisfaction, and innovation has 
              earned us the trust of countless contractors, builders, and homeowners 
              across the region.
            </p>
            <Button asChild className="button-hover">
              <Link to="/about">Read Our Story</Link>
            </Button>
          </div>
          
          <div className="order-1 md:order-2 bg-muted rounded-lg aspect-video flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-primary mb-2">30+</div>
              <p className="text-lg">Years of Excellence</p>
            </div>
            <div className="border-l border-border h-20"></div>
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-primary mb-2">Top 10</div>
              <p className="text-lg">Nationwide Distributor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
