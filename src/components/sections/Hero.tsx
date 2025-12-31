import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Shield, Code, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Blockchain Network Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
          {/* Blockchain nodes */}
          <g className="text-primary" fill="currentColor">
            <circle cx="100" cy="150" r="4" />
            <circle cx="250" cy="100" r="3" />
            <circle cx="400" cy="80" r="5" />
            <circle cx="550" cy="120" r="4" />
            <circle cx="700" cy="90" r="3" />
            <circle cx="150" cy="300" r="4" />
            <circle cx="350" cy="280" r="5" />
            <circle cx="500" cy="320" r="4" />
            <circle cx="650" cy="260" r="3" />
            <circle cx="80" cy="450" r="5" />
            <circle cx="200" cy="500" r="3" />
            <circle cx="380" cy="480" r="4" />
            <circle cx="580" cy="450" r="5" />
            <circle cx="720" cy="420" r="4" />
            <circle cx="120" cy="620" r="3" />
            <circle cx="300" cy="680" r="4" />
            <circle cx="480" cy="650" r="5" />
            <circle cx="620" cy="600" r="3" />
            <circle cx="750" cy="580" r="4" />
          </g>
          {/* Connection lines */}
          <g stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.4">
            <line x1="100" y1="150" x2="250" y2="100" />
            <line x1="250" y1="100" x2="400" y2="80" />
            <line x1="400" y1="80" x2="550" y2="120" />
            <line x1="550" y1="120" x2="700" y2="90" />
            <line x1="100" y1="150" x2="150" y2="300" />
            <line x1="250" y1="100" x2="350" y2="280" />
            <line x1="400" y1="80" x2="500" y2="320" />
            <line x1="550" y1="120" x2="650" y2="260" />
            <line x1="150" y1="300" x2="350" y2="280" />
            <line x1="350" y1="280" x2="500" y2="320" />
            <line x1="500" y1="320" x2="650" y2="260" />
            <line x1="150" y1="300" x2="80" y2="450" />
            <line x1="350" y1="280" x2="380" y2="480" />
            <line x1="500" y1="320" x2="580" y2="450" />
            <line x1="650" y1="260" x2="720" y2="420" />
            <line x1="80" y1="450" x2="200" y2="500" />
            <line x1="200" y1="500" x2="380" y2="480" />
            <line x1="380" y1="480" x2="580" y2="450" />
            <line x1="580" y1="450" x2="720" y2="420" />
            <line x1="80" y1="450" x2="120" y2="620" />
            <line x1="200" y1="500" x2="300" y2="680" />
            <line x1="380" y1="480" x2="480" y2="650" />
            <line x1="580" y1="450" x2="620" y2="600" />
            <line x1="720" y1="420" x2="750" y2="580" />
            <line x1="120" y1="620" x2="300" y2="680" />
            <line x1="300" y1="680" x2="480" y2="650" />
            <line x1="480" y1="650" x2="620" y2="600" />
            <line x1="620" y1="600" x2="750" y2="580" />
          </g>
          {/* Hexagon blocks */}
          <g stroke="hsl(var(--primary))" strokeWidth="1" fill="none" opacity="0.2">
            <polygon points="400,200 430,220 430,260 400,280 370,260 370,220" />
            <polygon points="200,400 230,420 230,460 200,480 170,460 170,420" />
            <polygon points="600,500 630,520 630,560 600,580 570,560 570,520" />
          </g>
        </svg>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        {/* Orbiting Icons */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: 300, height: 300 }}
        >
          <motion.div
            className="absolute w-10 h-10 bg-card/80 backdrop-blur rounded-lg flex items-center justify-center border border-border/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '150px 150px', left: 'calc(50% - 20px)', top: 'calc(50% - 170px)' }}
          >
            <Shield className="w-5 h-5 text-primary" />
          </motion.div>
          <motion.div
            className="absolute w-10 h-10 bg-card/80 backdrop-blur rounded-lg flex items-center justify-center border border-border/50"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '-130px 0', left: 'calc(50% + 120px)', top: '50%' }}
          >
            <Code className="w-5 h-5 text-accent" />
          </motion.div>
          <motion.div
            className="absolute w-10 h-10 bg-card/80 backdrop-blur rounded-lg flex items-center justify-center border border-border/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '130px 0', left: 'calc(50% - 160px)', top: '50%' }}
          >
            <Lock className="w-5 h-5 text-glow-green" />
          </motion.div>
        </motion.div>
      </div>

      <div className="section-container relative z-10 pt-20 md:pt-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-mono text-primary">Available for opportunities</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Nishchal KC</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              <span className="text-foreground font-medium">Blockchain Developer</span> &{' '}
              <span className="text-foreground font-medium">Cybersecurity Enthusiast</span>
            </p>
            <p className="text-lg text-muted-foreground mt-2 font-mono">
              {'<'}Building secure, decentralized solutions{' />'}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Computer Science student passionate about blockchain technology, cybersecurity, 
            and building innovative solutions that make the digital world more secure.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-border hover:border-primary/50 hover:bg-primary/5">
              <a href="#contact" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-border hover:border-primary/50 hover:bg-primary/5">
              <a href="#projects" className="flex items-center gap-2">
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                View Projects
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://github.com/nishchalkc89"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/nishchalkc/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:nishchalkc370@example.com"
              className="p-3 rounded-full bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.div> */}
    </section>
  );
};
