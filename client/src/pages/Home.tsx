import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Play, Grid3x3, Camera, Video, MapPin, Zap } from "lucide-react";
import { useState } from "react";

/**
 * Artistry Media Inc. Portfolio Website
 * Design: Cinematic Elegance - Dark sophisticated aesthetic with warm gold accents
 * Typography: Playfair Display (headings) + Inter (body)
 * Color Palette: Deep charcoal backgrounds, warm gold accents, cream text
 */

export default function Home() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const services = [
    {
      id: "photography",
      title: "Photography",
      description: "Professional real estate photography showcasing properties in their best light",
      icon: Camera,
      color: "from-amber-600 to-amber-500",
    },
    {
      id: "videography",
      title: "Videography",
      description: "Cinematic property videos that tell compelling stories and captivate buyers",
      icon: Video,
      color: "from-amber-500 to-yellow-500",
    },
    {
      id: "floor-plans",
      title: "Floor Plans",
      description: "Detailed architectural floor plans with precise measurements and layouts",
      icon: Grid3x3,
      color: "from-yellow-500 to-amber-600",
    },
    {
      id: "virtual-tours",
      title: "Virtual Tours",
      description: "Immersive 360° virtual tours allowing clients to explore properties remotely",
      icon: MapPin,
      color: "from-amber-600 to-orange-500",
    },
    {
      id: "matterport",
      title: "Matterport",
      description: "Professional Matterport 3D tours with interactive features and analytics",
      icon: Zap,
      color: "from-orange-500 to-amber-600",
    },
  ];

// ONLY showing the parts that needed fixing ↓

const portfolioItems = [
  {
    id: 1,
    title: "Modern Interior - Spring Street",
    category: "Photography & Videography",
    image: "/images/interior1.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Luxury Exterior - Port Moody",
    category: "Photography",
    image: "/images/exterior1.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Professional Floor Plans",
    category: "Floor Plans",
    image: "/images/floorplan.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "Contemporary Home Design",
    category: "Photography",
    image: "/images/exterior2.jpg",
    featured: false,
  },
];

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
            <a href="/services" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition">
              Services
            </a>
            <a href="/portfolio" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition">
              Portfolio
            </a>
            <a href="/contact" className="flex-shrink-0">
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs md:text-sm">
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('/images/interior1.jpg')`,
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
              <p className="text-sm font-medium text-accent">Premium Real Estate Media Solutions</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
              Showcase Your Properties with <span className="text-accent">Cinematic Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Professional photography, videography, floor plans, virtual tours, and Matterport services designed to elevate your real estate listings and attract premium buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <a href="/portfolio">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base">
                View Our Work
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="/contact">
              <Button size="lg" variant="outline" className="border-accent/50 text-foreground hover:bg-accent/10">
                Book a Shoot
              </Button>
            </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 border-t border-border">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Comprehensive real estate media solutions tailored to showcase your properties and attract qualified buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  className="group cursor-pointer bg-card border-border hover:border-accent/50 transition-all duration-300 p-6 flex flex-col"
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground flex-grow">{service.description}</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <a href="/services" className="text-accent text-sm font-medium hover:text-accent/80 transition flex items-center gap-2">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32 border-t border-border">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our latest projects showcasing the quality and creativity we bring to every real estate listing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${
                  item.featured ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className="relative h-64 md:h-full min-h-64 overflow-hidden bg-card">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                  <div className="relative z-10">
                    <p className="text-sm text-accent mb-2">{item.category}</p>
                    <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                      <Play className="w-4 h-4" />
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="/portfolio">
              <Button size="lg" variant="outline" className="border-accent/50 text-foreground hover:bg-accent/10">
                View All Projects
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Elevate Your Listings?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how Artistry Media can help you attract premium buyers with stunning visual content.
            </p>
            <a href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base">
                Book a Shoot
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
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
                <li><a href="#" className="hover:text-accent transition">Photography</a></li>
                <li><a href="#" className="hover:text-accent transition">Videography</a></li>
                <li><a href="#" className="hover:text-accent transition">Floor Plans</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition">About</a></li>
                <li><a href="#" className="hover:text-accent transition">Contact</a></li>
                <li><a href="#" className="hover:text-accent transition">Blog</a></li>
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
