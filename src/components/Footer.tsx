import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-burgundy-dark text-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl font-bold mb-4">Chirag Garden</h3>
            <p className="font-sans text-cream/70 leading-relaxed mb-6">
              Creating unforgettable memories for weddings, celebrations, and special gatherings in Sonipat, Haryana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Features", "Gallery", "Book Now", "Location"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="font-sans text-cream/70 hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Wedding Venue",
                "Birthday Parties",
                "Engagement Ceremonies",
                "Corporate Events",
                "Anniversary Celebrations",
              ].map((service) => (
                <li key={service}>
                  <span className="font-sans text-cream/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="font-sans text-cream/70">
                  Sonipat, Haryana - 131001, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="font-sans text-cream/70">+91 9729401460</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="font-sans text-cream/70">dineshadhlakha007@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="font-sans text-sm text-cream/60">
              © 2024 Chirag Garden. All rights reserved.
            </p>
            <p className="font-sans text-sm text-cream/60 flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-gold fill-gold" /> in Haryana
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
