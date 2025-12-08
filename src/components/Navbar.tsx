import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#location" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span
              className={`font-serif text-2xl font-bold transition-colors ${
                isScrolled ? "text-primary" : "text-cream"
              }`}
            >
              Chirag Garden
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                  isScrolled ? "text-foreground" : "text-cream"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking"
              className={`btn-gold rounded-full px-6 py-2 text-xs ${
                isScrolled ? "" : "bg-cream/20 text-cream border border-cream/30 hover:bg-cream/30"
              }`}
              style={isScrolled ? {} : { boxShadow: 'none' }}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? "text-foreground" : "text-cream"}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/20 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-sans text-base font-medium transition-colors ${
                    isScrolled ? "text-foreground" : "text-cream"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-gold rounded-full text-center mt-2"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
