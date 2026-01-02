import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, Phone, ExternalLink } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Software Developer Intern",
      company: "Tech Company",
      location: "Toronto, ON",
      period: "May 2024 - Aug 2024",
      highlights: [
        "Developed and maintained web applications using React and TypeScript",
        "Collaborated with cross-functional teams to deliver features on time",
        "Improved application performance by 30% through code optimization",
      ],
    },
    {
      title: "Research Assistant",
      company: "University of Waterloo",
      location: "Waterloo, ON",
      period: "Sep 2023 - Dec 2023",
      highlights: [
        "Conducted research on machine learning algorithms",
        "Published findings in academic conferences",
        "Mentored junior students on research methodologies",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University of Waterloo",
      period: "2021 - 2026",
      details: "Co-op Program • Dean's List",
    },
  ];

  const skills = {
    languages: ["TypeScript", "Python", "Java", "C++", "SQL"],
    frameworks: ["React", "Node.js", "Next.js", "TailwindCSS", "Express"],
    tools: ["Git", "Docker", "AWS", "PostgreSQL", "MongoDB"],
  };

  return (
    <>
      <Helmet>
        <title>Resume | Your Name</title>
        <meta name="description" content="Professional resume and work experience" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-medium mb-2">Resume</h1>
              <p className="text-muted-foreground">My professional experience and skills</p>
            </div>
            <Button variant="hero" className="gap-2">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </div>

          {/* Contact Info */}
          <section className="bg-card rounded-lg p-6 mb-8 border border-border">
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="mailto:your@email.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                your@email.com
              </a>
              <span className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Waterloo, ON
              </span>
              <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ExternalLink className="w-4 h-4" />
                linkedin.com/in/yourname
              </a>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-medium mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Experience
            </h2>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{job.title}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground text-right">
                      <p>{job.period}</p>
                      <p>{job.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-medium mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Education
            </h2>
            {education.map((edu, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-lg">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.school}</p>
                    <p className="text-sm text-muted-foreground mt-1">{edu.details}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section>
            <h2 className="font-display text-2xl font-medium mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Skills
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold mb-3">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold mb-3">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Resume;
