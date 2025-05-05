
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Saxena & Co</h3>
            <p className="text-sm opacity-80">
              Trusted distributor of pipes and fittings since 1991. Quality, customer satisfaction, 
              and innovation are at the heart of everything we do.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:9845386626" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +91 9845386626
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:saxenaco@yahoo.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  saxenaco@yahoo.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1" />
                <span className="text-primary-foreground/80">
                  Bangalore, Karnataka, India
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-6">
          <p className="text-sm text-center">
            &copy; {currentYear} Saxena & Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
