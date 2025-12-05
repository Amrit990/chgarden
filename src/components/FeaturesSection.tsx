import { Car, Users, Home, Utensils, Crown, Sparkles } from "lucide-react";

const features = [
  {
    icon: Car,
    title: "Spacious Parking",
    description: "Ample parking space for 200+ vehicles with valet service available",
  },
  {
    icon: Users,
    title: "Professional Staff",
    description: "Experienced and courteous team to ensure flawless event execution",
  },
  {
    icon: Home,
    title: "Quality Indoor Venue",
    description: "Air-conditioned halls with elegant interiors and modern amenities",
  },
  {
    icon: Utensils,
    title: "Premium Catering",
    description: "Multi-cuisine menu crafted by expert chefs for every palate",
  },
  {
    icon: Crown,
    title: "Bridal & Groom Suites",
    description: "Luxurious private rooms for the bride and groom to prepare",
  },
  {
    icon: Sparkles,
    title: "Complete Decoration",
    description: "Customized themes and stunning décor for your special day",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gradient-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-accent tracking-[0.2em] uppercase text-sm mb-3">
            Our Services
          </p>
          <h2 className="section-title">Why Choose Us</h2>
          <div className="ornament" />
          <p className="section-subtitle max-w-2xl mx-auto">
            Experience excellence at every step with our comprehensive event services
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-elegant group text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
