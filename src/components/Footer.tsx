
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Custom handler for testimonials link
  const handleTestimonialsClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const section = document.getElementById("testimonials");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      e.preventDefault();
      navigate("/#testimonials");
      setTimeout(() => {
        const section = document.getElementById("testimonials");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-6 relative">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Saxena & Co</h3>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/51291b2b-0d0f-4b8f-96ef-2f4f314dba4b.png" 
                alt="Ashirvad by Aliaxis" 
                className="h-5 mr-2" 
              />
              <span className="text-xs">Authorized Distributor</span>
            </div>
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
                <Link to="/#testimonials" onClick={handleTestimonialsClick} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
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
                <Phone size={18} />
                <a href="tel:9008982026" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +91 9008982026
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:saxenaco@yahoo.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  saxenaco@yahoo.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={36} className="mt-1" />
                <span className="text-primary-foreground/80">
                  132/3 A C Garden 4th Cross, Lalbagh Rd, near Shantinagar Bus Depot, Sudhama Nagar, Bengaluru, Karnataka 560027
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm">
              &copy; {currentYear} Saxena & Co. All rights reserved.
            </p>
            <div className="mt-2 md:mt-0 flex items-center">
              <img 
                src="/lovable-uploads/8cf55446-34e0-404c-bff7-8e173307c6e8.png" 
                alt="Saxena & Co logo" 
                className="h-8 w-auto filter invert" 
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
