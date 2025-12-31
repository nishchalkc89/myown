import { motion } from 'framer-motion';
import { Shield, Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/nishchalkc89', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/nishchalkc/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:nishchalkc370@email.com', label: 'Email' },
];

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <a href="#" className="flex items-center gap-2 text-xl font-display font-bold mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <span className="gradient-text">Nishchal</span>
                <span className="text-foreground">Kc</span>
              </a>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Building secure, decentralized solutions for tomorrow's challenges. 
                Passionate about blockchain technology and cybersecurity.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
              <nav className="space-y-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Connect</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-muted/50 border border-border/50 hover:border-primary/30 hover:bg-primary/10 transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-border/50">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Nishchal KC. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
