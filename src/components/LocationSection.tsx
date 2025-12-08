import { MapPin, Phone, Clock, Mail } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-accent tracking-[0.2em] uppercase text-sm mb-3">
            Find Us
          </p>
          <h2 className="section-title">Our Location</h2>
          <div className="ornament" />
          <p className="section-subtitle max-w-2xl mx-auto">
            Conveniently located in Sonipat, Haryana with easy access from Delhi NCR
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111094.17648227!2d77.0201962!3d28.9950547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db00b8670400b%3A0x6c34f1fb02e8e76c!2sSonipat%2C%20Haryana!5e0!3m2!1sen!2sin!4v1701234567890!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chirag Garden Location"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="font-serif text-3xl font-semibold text-foreground mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-1">Address</h4>
                  <p className="font-sans text-muted-foreground">
                    Chirag Garden<br />
                    Sonipat, Haryana - 131001<br />
                    India
                  </p>
                </div>
              </div>

              {/* Business Owner */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-1">Dinesh Adhlakha</h4>
                  <p className="font-sans text-muted-foreground">
                    +91 9729401460
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-1">Email</h4>
                  <p className="font-sans text-muted-foreground">
                    dineshadhlakha007@gmail.com
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-1">Office Hours</h4>
                  <p className="font-sans text-muted-foreground">
                    Monday - Sunday<br />
                    9:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="tel:+919729401460"
                className="btn-gold rounded-full inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
