import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Phone, User, Mail, MessageSquare, CalendarDays, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    guests: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.eventType) {
      toast({
        title: "Please fill required fields",
        description: "Name, phone number and event type are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission delay for animation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset after showing success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          eventType: "",
          eventDate: "",
          guests: "",
          message: "",
        });
      }, 3000);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-24 bg-gradient-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card-elegant p-12 md:p-16 text-center animate-scale-in">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center animate-fade-in">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-primary mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Thank You!
              </h3>
              <p className="font-sans text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: "0.4s" }}>
                Your enquiry has been submitted successfully.<br />
                We will contact you soon to discuss your event.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();

  return (
    <section id="booking" className="py-24 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`text-center mb-12 scroll-fade-up ${headerVisible ? 'visible' : ''}`}
          >
            <p className="font-sans text-accent tracking-[0.2em] uppercase text-sm mb-3">
              Get In Touch
            </p>
            <h2 className="section-title">Book Your Event</h2>
            <div className="ornament" />
            <p className="section-subtitle max-w-2xl mx-auto">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
          </div>

          {/* Form */}
          <div
            ref={formRef}
            className={`scroll-scale ${formVisible ? 'visible' : ''}`}
          >
            <form onSubmit={handleSubmit} className="card-elegant p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="font-sans text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-border focus:border-primary bg-background"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-sans text-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="border-border focus:border-primary bg-background"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="font-sans text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-border focus:border-primary bg-background"
                />
              </div>

              {/* Event Type */}
              <div className="space-y-2">
                <Label htmlFor="eventType" className="font-sans text-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Event Type *
                </Label>
                <Select
                  value={formData.eventType}
                  onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                >
                  <SelectTrigger className="border-border focus:border-primary bg-background">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="birthday">Birthday Party</SelectItem>
                    <SelectItem value="engagement">Engagement</SelectItem>
                    <SelectItem value="anniversary">Anniversary</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Event Date */}
              <div className="space-y-2">
                <Label htmlFor="eventDate" className="font-sans text-foreground flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-primary" />
                  Preferred Date
                </Label>
                <Input
                  id="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="border-border focus:border-primary bg-background"
                />
              </div>

              {/* Number of Guests */}
              <div className="space-y-2">
                <Label htmlFor="guests" className="font-sans text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Expected Guests
                </Label>
                <Select
                  value={formData.guests}
                  onValueChange={(value) => setFormData({ ...formData, guests: value })}
                >
                  <SelectTrigger className="border-border focus:border-primary bg-background">
                    <SelectValue placeholder="Select guest count" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50-100">50 - 100</SelectItem>
                    <SelectItem value="100-200">100 - 200</SelectItem>
                    <SelectItem value="200-300">200 - 300</SelectItem>
                    <SelectItem value="300-500">300 - 500</SelectItem>
                    <SelectItem value="500+">500+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message" className="font-sans text-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Additional Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your event..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-border focus:border-primary bg-background resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary rounded-full px-12 py-6 text-base disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
