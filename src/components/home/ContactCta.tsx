
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactCta = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Contact our team for expert advice on the best piping solutions for your specific needs. 
            We're here to help with product selection, technical specifications, and pricing information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="button-hover">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 hover:bg-primary-foreground/10 button-hover text-primary-foreground hover:text-primary-foreground">
                <a href="tel:9008982026">
                  Call: +91 9008982026
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 hover:bg-primary-foreground/10 button-hover text-primary-foreground hover:text-primary-foreground">
                <a href="tel:9845386626">
                  Call: +91 9845386626
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
