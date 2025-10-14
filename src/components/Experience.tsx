import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

export const Experience = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Beginner Full-Stack Developer",
      company: "Personal Projects",
      location: "San Francisco, CA",
      period: "2024 - Present",
      description: "Learning and building web applications using modern technologies. Working on personal and academic projects to strengthen my skills in both frontend and backend development.",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Git"]
    },
   
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Work Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={exp.id} className="card-hover">
                <CardHeader>
                  <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};