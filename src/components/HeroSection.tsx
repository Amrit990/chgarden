import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-burgundy-dark/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-burgundy-dark/40 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="font-sans text-gold-light tracking-[0.3em] uppercase text-sm mb-4 animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Welcome to
        </p>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 animate-fade-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Chirag Garden
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <span className="w-16 h-px bg-gold-light" />
          <span className="text-gold font-serif text-xl italic">Sonipat, Haryana</span>
          <span className="w-16 h-px bg-gold-light" />
        </div>
        
        <p className="font-sans text-cream/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          Your dream venue for unforgettable weddings, birthday celebrations, and grand gatherings
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <a
            href="#booking"
            className="btn-gold rounded-full text-burgundy-dark"
          >
            Book Now
          </a>
          <a
            href="#gallery"
            className="px-8 py-3 font-sans font-medium tracking-wide uppercase text-sm border-2 border-cream/30 text-cream rounded-full transition-all duration-300 hover:bg-cream/10 hover:border-cream/50"
          >
            View Gallery
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-cream/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
