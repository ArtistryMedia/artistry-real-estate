import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Play, X } from "lucide-react";
import { useState } from "react";

/**
 * Portfolio Page - Detailed project showcase
 * Design: Cinematic Elegance with masonry grid layout
 */

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: "Modern Interior - Spring Street, Port Moody",
      category: "Photography & Videography",
      description: "A beautifully designed modern interior space featuring contemporary furnishings and elegant lighting. Professional photography captures every detail with perfect lighting and composition.",
      image: "/manus-storage/portfolio-interior-1_44440848.jpg",
      services: ["Photography", "Videography"],
      featured: true,
      isVideo: false,
    },
    {
      id: 2,
      title: "Luxury Exterior - Port Moody",
      category: "Photography",
      description: "Stunning exterior photography showcasing a beautiful residential property with professional landscaping. Captured during optimal lighting conditions to highlight architectural features.",
      image: "/manus-storage/portfolio-exterior-1_a025d375.jpg",
      services: ["Photography"],
      featured: false,
      isVideo: false,
    },
    {
      id: 3,
      title: "Professional Floor Plans - Spring Street",
      category: "Floor Plans",
      description: "Detailed architectural floor plans with precise measurements and room specifications. Multi-level layout showing all rooms, dimensions, and property features.",
      image: "/manus-storage/floorplan-1_c86fa406.jpg",
      services: ["Floor Plans"],
      featured: false,
      isVideo: false,
    },
    {
      id: 4,
      title: "Contemporary Home Design",
      category: "Photography",
      description: "Professional exterior photography of a contemporary home design. Features modern architecture, landscaping, and curb appeal captured in perfect lighting.",
      image: "/manus-storage/portfolio-exterior-2_9e08e790.jpg",
      services: ["Photography"],
      featured: false,
      isVideo: false,
    },
    {
      id: 5,
      title: "Interior Design Showcase",
      category: "Photography",
      description: "Beautiful interior space showcasing modern design elements, lighting, and spatial layout. Professional photography highlighting the property's best features.",
      image: "/manus-storage/portfolio-interior-2_33b2d271.jpg",
      services: ["Photography"],
      featured: false,
      isVideo: false,
    },
    {
      id: 6,
      title: "Property Tour - Delta",
      category: "Videography",
      description: "Professional cinematic property tour showcasing a beautiful residential property in Delta. Features drone footage, interior walkthrough, and professional editing.",
      video: "https://www.youtube.com/embed/AWGVjWdXMnU",
      thumbnail: "https://img.youtube.com/vi/AWGVjWdXMnU/maxresdefault.jpg",
      services: ["Videography"],
      featured: false,
      isVideo: true,
    },
    {
      id: 7,
      title: "Property Tour - Coquitlam",
      category: "Videography",
      description: "Stunning cinematic video tour of a luxury property in Coquitlam. Professional videography with drone shots, color grading, and immersive presentation.",
      video: "https://www.youtube.com/embed/8dCZSCgiB0I",
      thumbnail: "https://img.youtube.com/vi/8dCZSCgiB0I/maxresdefault.jpg",
      services: ["Videography"],
      featured: false,
      isVideo: true,
    },
    {
      id: 8,
      title: "Property Tour - Eyremount",
      category: "Videography",
      description: "Professional property video tour of Eyremount residence. Features cinematic videography, professional editing, and compelling visual storytelling.",
      video: "https://www.youtube.com/embed/XPnhHIP4YYE",
      thumbnail: "https://img.youtube.com/vi/XPnhHIP4YYE/maxresdefault.jpg",
      services: ["Videography"],
      featured: false,
      isVideo: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-20 gap-4 flex-wrap">
          <div className="flex items-center gap-2 min-w-0">
            <img src="/manus-storage/artistry-media-logo-2x_6f6be184.png" alt="Artistry Media" className="h-16 w-auto" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">Artistry Media</h1>
              <p className="text-xs text-muted-foreground">Professional Real Estate Media</p>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-8 flex-wrap justify-end">
            <a href="/" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition">
              Home
            </a>
            <a href="#portfolio" className="text-xs md:text-sm text-accent font-medium">
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

      {/* Header */}
      <section className="pt-32 pb-16 md:pb-24 border-b border-border">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our latest projects showcasing the quality and creativity we bring to every real estate listing.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-max">
            {projects.map((project: any, index) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${
                  project.featured ? "md:col-span-2 md:row-span-2" : ""
                } ${index === 4 ? "md:col-span-2" : ""}`}
                onClick={() => project.isVideo ? setSelectedVideo(project.video) : setSelectedProject(project.id)}
              >
                <div className="relative h-64 md:h-full min-h-64 overflow-hidden bg-card">
                {project.isVideo ? (
                    <div className="relative w-full h-full">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <Play className="w-16 h-16 text-white drop-shadow-lg" />
                      </div>
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                  <div className="relative z-10">
                    <p className="text-sm text-accent mb-2">{project.category}</p>
                    <h3 className="text-xl font-bold text-foreground mb-4">{project.title}</h3>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                      <Play className="w-4 h-4" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl bg-card border-border max-h-[90vh] overflow-y-auto">
            {(() => {
              const project = projects.find((p: any) => p.id === selectedProject);
              return project ? (
                <div>
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 p-2 bg-background/80 hover:bg-background rounded-lg transition"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="p-8">
                    <p className="text-sm text-accent mb-2">{project.category}</p>
                    <h2 className="text-3xl font-bold mb-4 text-foreground">{project.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{project.description}</p>

                    <div className="mb-8">
                      <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">Services Provided</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((service: string) => (
                          <span
                            key={service}
                            className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm text-accent font-medium"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a href="/contact" className="w-full">
                      <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        Get Similar Service
                        <ChevronRight className="ml-2 w-5 h-5" />
                      </Button>
                    </a>
                  </div>
                </div>
              ) : null;
            })()}
          </Card>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 p-2 bg-background/80 hover:bg-background rounded-lg transition z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={selectedVideo}
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Showcase Your Property?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how Artistry Media can help you attract premium buyers with stunning visual content.
            </p>
            <a href="/contact" className="inline-block">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
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
                <img src="/manus-storage/artistry-media-logo-2x_6f6be184.png" alt="Artistry Media" className="h-12 w-auto" />
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
                <li><a href="/services" className="hover:text-accent transition">Services</a></li>
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
