import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Work = () => {
  const projects = [
    {
      title: "Horizon Finance",
      category: "Brand Identity & Web",
      description:
        "Complete brand overhaul for a fintech startup, including visual identity and web platform design.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
    {
      title: "Lumina Studio",
      category: "UI/UX Design",
      description:
        "Mobile app design for a photography platform with AI-powered editing features.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
    },
    {
      title: "Verde Living",
      category: "E-commerce",
      description:
        "Sustainable furniture brand's online store with immersive product experiences.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
    },
    {
      title: "Pulse Health",
      category: "Product Design",
      description:
        "Health monitoring dashboard for wearable device ecosystem.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section id="work" className="py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4 block">
              Selected Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium">
              Featured <span className="italic">projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A curated selection of projects that showcase my approach to design
            and development.
          </p>
        </div>

        {/* Projects grid - cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group cursor-pointer overflow-hidden border-border hover:border-primary/50 transition-all duration-500 hover:shadow-elevated"
            >
              {/* Project image */}
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-wider uppercase text-primary">
                    {project.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                <CardTitle className="font-display text-2xl font-medium group-hover:text-primary transition-colors flex items-center justify-between">
                  {project.title}
                  <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
