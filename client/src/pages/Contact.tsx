import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

/**
 * Contact Page - Lead capture and video portfolio
 * Design: Cinematic Elegance with contact form and embedded videos
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [] as string[],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    { id: "photography", label: "Photography" },
    { id: "videography", label: "Videography" },
    { id: "floor-plans", label: "Floor Plans" },
    { id: "virtual-tours", label: "Virtual Tours" },
    { id: "matterport", label: "Matterport" },
  ];



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send form data to Josh's email
    const emailBody = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ACompany: ${formData.company}%0AServices Interested: ${formData.services.join(", ") || "Not specified"}%0AMessage: ${formData.message}`;
    
    // Open email client with pre-filled information
    window.location.href = `mailto:josh@artistrymedia.co?subject=New Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(emailBody)}`;
    
    // Show success message
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        services: [],
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-20 gap-4 flex-wrap">
          <div className="flex items-center gap-2 min-w-0">
            <img src="/images/logo.jpg" alt="Artistry Media" className="h-16 w-auto" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">Artistry Media</h1>
              <p className="text-xs text-muted-foreground">Professional Real Estate Media</p>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-8 flex-wrap justify-end">
            <a href="/" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition">
              Home
            </a>
            <a href="/portfolio" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition">
              Portfolio
            </a>
            <a href="/services" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition">
              Services
            </a>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs md:text-sm flex-shrink-0">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 md:pb-24 border-b border-border">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Ready to elevate your real estate listings? Contact us today to discuss your project and get a custom quote.
          </p>
        </div>
      </section>



      {/* Contact Form Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email</h3>
                    <a href="mailto:josh@artistrymedia.co" className="text-accent hover:text-accent/80 transition">josh@artistrymedia.co</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Phone</h3>
                    <a href="tel:+17789398611" className="text-accent hover:text-accent/80 transition">778-939-8611</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">Vancouver, BC</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card border-border p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <ChevronRight className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">We'll be in touch shortly to discuss your project.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition"
                          placeholder="(604) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3">
                        Services Interested In *
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {services.map((service) => (
                          <label key={service.id} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.services.includes(service.id)}
                              onChange={() => handleServiceChange(service.id)}
                              className="w-4 h-4 rounded border-border bg-background cursor-pointer"
                            />
                            <span className="text-sm text-foreground">{service.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-base"
                    >
                      Send Inquiry
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/images/logo.jpg" alt="Artistry Media" className="h-12 w-auto" />
                <h3 className="font-bold text-foreground">Artistry Media Inc.</h3>
              </div>
              <p className="text-sm text-muted-foreground">Professional real estate media solutions.</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/services" className="hover:text-accent transition">Photography</a></li>
                <li><a href="/services" className="hover:text-accent transition">Videography</a></li>
                <li><a href="/services" className="hover:text-accent transition">Floor Plans</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/" className="hover:text-accent transition">Home</a></li>
                <li><a href="/contact" className="hover:text-accent transition">Contact</a></li>
                <li><a href="/portfolio" className="hover:text-accent transition">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition">Instagram</a></li>
                <li><a href="#" className="hover:text-accent transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-accent transition">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2026 Artistry Media Inc. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
