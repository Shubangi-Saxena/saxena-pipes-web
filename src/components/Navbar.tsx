import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Testimonials", path: "/#testimonials" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Custom handler for testimonials link
  const handleTestimonialsClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const section = document.getElementById("testimonials");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    } else {
      e.preventDefault();
      navigate("/#testimonials");
      setTimeout(() => {
        const section = document.getElementById("testimonials");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 shadow-md backdrop-blur-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/8cf55446-34e0-404c-bff7-8e173307c6e8.png" 
            alt="Saxena & Co logo" 
            className="h-8 w-auto mr-2 dark:filter dark:invert" 
          />
          <span className="text-xl font-bold text-primary leading-none">Saxena & Co</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.name === "Testimonials" ? (
              <Link
                key={link.name}
                to={link.path}
                onClick={handleTestimonialsClick}
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            )
          )}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm shadow-md md:hidden animate-fade-in">
            <div className="container py-5 flex flex-col gap-4">
              {navLinks.map((link) =>
                link.name === "Testimonials" ? (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={handleTestimonialsClick}
                    className="font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
