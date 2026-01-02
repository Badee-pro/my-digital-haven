import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Picture */}
          <div className="opacity-0 animate-fade-up mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-xs">👋</span>
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="opacity-0 animate-fade-up delay-100 font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight mb-4">
            Your Name
          </h1>

          {/* Education */}
          <div className="opacity-0 animate-fade-up delay-200 flex items-center justify-center gap-2 mb-8">
            <span className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium">
              🎓 Computer Science @ University of Waterloo
            </span>
          </div>

          {/* Subheadline */}
          <p className="opacity-0 animate-fade-up delay-300 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 font-body leading-relaxed">
            Passionate about building digital experiences at the intersection of design and technology.
          </p>

          {/* CTA buttons */}
          <div className="opacity-0 animate-fade-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#work">View My Work</a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/resume">View Resume</Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-600">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs tracking-widest uppercase text-muted-foreground">
              Scroll
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-foreground/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
