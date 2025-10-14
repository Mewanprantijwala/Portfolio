import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-gradient mb-4">Mewan Developer</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Full-Stack Software Developer passionate about creating innovative 
                digital solutions and beautiful user experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Experience
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2">
                <a
                  href="mailto:john.developer@example.com"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  webgest.grafik@gmail.com
                </a>
                <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/raza-gas-and-domestic-appliances-7655aa33b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:john.developer@example.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} John Developer. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart size={16} className="text-red-500" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};