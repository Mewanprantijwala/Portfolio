import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "PostgreSQL",
    "MongoDB", "AWS", "Docker", "Git", "REST APIs", "GraphQL"
  ];

  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Hello, I'm Mohammad Mewan</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm an enthusiastic beginner full-stack developer eager to learn and grow in the world of web development. I enjoy exploring new technologies and building projects to improve my skills.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                When I'm not coding, I like to read about the latest trends in tech, work on personal projects, and connect with other developers to share knowledge and experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I am committed to writing clean code and creating user-friendly applications as I continue my journey in software development.
              </p>
            </div>
            
            <Card className="card-hover">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold mb-6">Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-8 space-y-4">
                  <div>
                    <h5 className="font-medium mb-2">Experience</h5>
                    <p className="text-sm text-muted-foreground">Beginner in software development</p>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Education</h5>
                    <p className="text-sm text-muted-foreground">Currently learning Computer Science</p>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Location</h5>
                    <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};