import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Target, Zap } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'B.Tech CSE',
    description: 'Sharda University, India',
  },
  {
    icon: MapPin,
    title: 'Nepal → India',
    description: 'Global academic perspective',
  },
  {
    icon: Target,
    title: 'Blockchain Security',
    description: 'Specialized focus',
  },
  {
    icon: Zap,
    title: 'Problem Solver',
    description: 'Real-world challenges',
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-10 md:py-14 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      <div className="section-container relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">// About Me</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Turning Ideas Into{' '}
              <span className="gradient-text">Secure Reality</span>
            </h2>
            <div className="cyber-line max-w-xs mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 flex justify-center"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-2xl blur-2xl scale-110" />
                
                {/* Photo container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary/30 glass-card">
                  {/* Replace this with your photo - add your image to src/assets/profile.jpg */}
                  <img 
                    src="/placeholder.jpg" 
                    alt="Nishchal KC - Blockchain Developer & Cybersecurity Enthusiast"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary rounded-lg rotate-12" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/50 rounded-full" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3 space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
  I’m a <span className="text-foreground font-medium">Computer Science & Engineering</span> student at 
  Sharda University, Greater Noida, originally from Nepal and currently pursuing my academic and 
  professional journey in India.
</p>

<p className="text-lg text-muted-foreground leading-relaxed">
  As a <span className="text-primary">self-driven developer</span> with a strong curiosity for technology, 
  I enjoy solving real-world problems through clean, efficient solutions. My core areas of interest include{' '}
  <span className="text-foreground font-medium">blockchain development</span>,{' '}
  <span className="text-foreground font-medium">cybersecurity</span>, and{' '}
  <span className="text-foreground font-medium">full-stack web development</span>.
</p>

<p className="text-lg text-muted-foreground leading-relaxed">
  I’m passionate about continuous learning and knowledge sharing, shaped by both hands-on experience and 
  real-life challenges. My goal is to grow as a software engineer with a specialization in{' '}
  <span className="text-accent">Blockchain security</span> and{' '}
  <span className="text-accent">Cyber Security </span>.
</p>


              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div>
                  <div className="text-3xl font-display font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Years of Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-accent">4th</div>
                  <div className="text-sm text-muted-foreground">Year Student</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-glow-green">15+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="glass-card-hover p-6 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};