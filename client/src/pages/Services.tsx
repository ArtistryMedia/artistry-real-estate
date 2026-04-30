import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Camera, Video, Grid3x3, MapPin, Zap, Check } from "lucide-react";
import { useState } from "react";

/**
 * Services Page - Detailed service descriptions
 * Design: Cinematic Elegance with comprehensive service information
 */

export default function Services() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const services = [
    {
      id: "photography",
      title: "Professional Photography",
      icon: Camera,
      description: "Stunning architectural and real estate photography that showcases properties in their best light.",
      features: [
        "High-resolution professional photography",
        "Drone and aerial photography",
        "Interior and exterior shots",
        "Twilight and golden hour photography",
        "HDR processing for enhanced detail",
        "Fast turnaround times",
      ],
      image: "/images/interior2.jpg",
      gallery: [
        "/images/interior2.jpg",
        "/images/interior1.jpg",
        "/images/exterior1.jpg",
        "/images/exterior2.jpg",
      ],
    },
    {
      id: "videography",
      title: "Cinematic Videography",
      icon: Video,
      description: "Professional video production that tells compelling stories and captivates potential buyers.",
      features: [
        "4K and 8K video production",
        "Cinematic drone footage",
        "Professional color grading",
        "Sound design and music",
        "Custom editing and effects",
        "Multiple format delivery",
      ],
      image: "/images/exterior1.jpg",
    },
    {
      id: "floor-plans",
      title: "Architectural Floor Plans",
      icon: Grid3x3,
      description: "Detailed floor plans with precise measurements and professional architectural design.",
      features: [
        "2D floor plan creation",
        "Precise measurements and dimensions",
        "Room labels and specifications",
        "Professional design layout",
        "Multiple format options",
        "Quick turnaround",
      ],
      image: "/images/floorplan.jpg",
    },
    {
      id: "virtual-tours",
      title: "360° Virtual Tours",
      icon: MapPin,
      description: "Immersive virtual tours allowing clients to explore properties remotely from any device.",
      features: [
        "360-degree panoramic tours",
        "Interactive navigation",
        "Mobile-friendly design",
        "Fast loading times",
        "Customizable branding",
        "Analytics and tracking",
      ],
      image: "/images/exterior2.jpg",
    },
    {
      id: "matterport",
      title: "Matterport 3D Tours",
      icon: Zap,
      description: "Professional Matterport 3D tours with interactive features, measurements, and analytics.",
      features: [
        "Professional 3D scanning",
        "Interactive floor plans",
        "Measurement tools",
        "Property insights analytics",
        "SEO optimization",
        "Lead generation tracking",
      ],
      image: "/images/interior1.jpg",
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
            <a href="/" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition">
              Home
            </a>
            <a href="/portfolio" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition">
              Portfolio
            </a>
            <a href="#services" className="text-xs md:text-sm text-accent font-medium">
              Services
            </a>
            <a href="/contact" className="flex-shrink-0">
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs md:text-sm">
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 md:pb-24 border-b border-border">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive real estate media solutions tailored to showcase your properties and attract qualified buyers.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-32">
        <div className="container">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            const hasGallery = (service as any).gallery;
            const hasVideos = (service as any).videos;

            return (
              <div key={service.id} className="mb-20 md:mb-32 last:mb-0">
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-start ${isEven ? "" : "md:grid-cols-2"}`}>
                  {/* Content */}
                  <div className={isEven ? "order-1" : "order-2"}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-600 to-amber-500 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground">{service.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-8">{service.description}</p>

                    <div className="mb-8">
                      <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">Key Features</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a href="/contact" className="w-full">
                      <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        Get a Custom Quote
                        <ChevronRight className="ml-2 w-5 h-5" />
                      </Button>
                    </a>
                  </div>

                  {/* Media Section */}
                  <div className={`order-${isEven ? "2" : "1"}`}>
                    {hasGallery && (
                      <div className="space-y-4">
                        <div className="relative rounded-lg overflow-hidden h-96 md:h-full min-h-96">
                          <img
                            src={selectedPhoto || hasGallery[0]}
                            alt="Gallery"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                          {hasGallery.map((photo: string, idx: number) => (
                            <button
                              key={idx}
                              onClick={() => setSelectedPhoto(photo)}
                              className={`relative rounded-lg overflow-hidden h-20 border-2 transition-all ${
                                (selectedPhoto || hasGallery[0]) === photo
                                  ? "border-accent"
                                  : "border-border hover:border-accent/50"
                              }`}
                            >
                              <img
                                src={photo}
                                alt={`Gallery ${idx + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}



                    {!hasGallery && !hasVideos && (
                      <div className="relative rounded-lg overflow-hidden h-96 md:h-full min-h-96">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Videos Section for Videography */}
                {service.id === "videography" && (
                  <div className="mt-20 md:mt-32">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {[
                        {
                          id: 1,
                          title: "Property Tour - Delta",
                          url: "https://www.youtube.com/embed/AWGVjWdXMnU",
                        },
                        {
                          id: 2,
                          title: "Property Tour - Coquitlam",
                          url: "https://www.youtube.com/embed/8dCZSCgiB0I",
                        },
                        {
                          id: 3,
                          title: "Property Tour - Eyremount",
                          url: "https://www.youtube.com/embed/XPnhHIP4YYE",
                        },
                      ].map((video: any) => (
                        <Card key={video.id} className="overflow-hidden bg-card border-border">
                          <div className="relative w-full aspect-video bg-black">
                            <iframe
                              width="100%"
                              height="100%"
                              src={video.url}
                              title={video.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full"
                            />
                          </div>
                          <div className="p-4">
                            <h4 className="font-bold text-foreground text-sm">{video.title}</h4>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {index < services.length - 1 && (
                  <div className="mt-20 md:mt-32 border-t border-border" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss which services are right for your properties and create a custom package.
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
                <li><a href="#services" className="hover:text-accent transition">Photography</a></li>
                <li><a href="#services" className="hover:text-accent transition">Videography</a></li>
                <li><a href="#services" className="hover:text-accent transition">Floor Plans</a></li>
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

      {/* Photo Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <img
              src={selectedPhoto}
              alt="Full size"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2 bg-background/80 hover:bg-background rounded-lg transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
