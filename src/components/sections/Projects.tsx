import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Shield, Vote, FileCheck, Car, Cake, UtensilsCrossed, GraduationCapIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'PhishGuard',
    description: 'AI-powered phishing URL detection system with real-time analysis, zero-day detection, and behavioral URL analysis. Includes browser extension compatibility.',
    icon: Shield,
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'AI/ML'],
    featured: true,
    gradient: 'from-primary to-accent',
    github: '#',
    live: '#',
  },
  {
    title: 'Blockchain E-Voting',
    description: 'Secure, transparent online voting system with one-vote-per-user using unique ID verification, MetaMask integration, and Solidity smart contracts.',
    icon: Vote,
    tags: ['Solidity', 'Ethereum', 'MetaMask', 'MySQL', 'Web3'],
    featured: true,
    gradient: 'from-accent to-glow-green',
    github: '#',
    live: '#',
  },
  {
    title: 'Blockchain Exam System',
    description: 'Final year project featuring tamper-proof online examinations with IPFS storage for question papers and Dockerized architecture for scalability.',
    icon: FileCheck,
    tags: ['Blockchain', 'IPFS', 'Docker', 'Smart Contracts', 'Pinata'],
    featured: true,
    gradient: 'from-glow-green to-primary',
    github: '#',
    live: '#',
  },
  {
    title: 'Divya Kunj Academy',
    description: 'Designed and developed an educational institute website for Divy Kunj Academy, providing academic information, announcements, and institutional details through a clean and responsive user interface.',
    icon: GraduationCapIcon,
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    featured: false,
    github: 'https://github.com/nishchalkc89/divy_kunj_academy.git',
    live: 'https://nishchalkc89.github.io/divy_kunj_academy/#',
  },
  {
    title: 'Rani Cake',
    description: 'Beautiful frontend website for a cake shop featuring elegant product displays and modern animations.',
    icon: Cake,
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    featured: false,
    github: 'https://github.com/nishchalkc89/Rani_cake.git',
    live: 'https://nishchalkc89.github.io/Rani_cake/',
  },
  {
    title: 'The Mist',
    description: 'Full-featured restaurant website with online ordering system, table booking functionality, and modern UI/UX.',
    icon: UtensilsCrossed,
    tags: ['React', 'Node.js', 'Database', 'Full Stack'],
    featured: false,
    github: 'https://github.com/nishchalkc89/THE_MIST.git',
    live: 'https://nishchalkc89.github.io/THE_MIST/',
  },

];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  if (project.featured) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="glass-card-hover p-6 md:p-8 relative overflow-hidden group"
      >
        {/* Gradient Overlay */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />
        
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Icon */}
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${project.gradient} shrink-0`}>
            <project.icon className="w-8 h-8 text-primary-foreground" />
          </div>

          <div className="flex-1 space-y-4">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-primary mb-2 block">Featured Project</span>
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
              <div className="flex gap-2 shrink-0">
                <a
                  href={project.github}
                  className="p-2 rounded-lg bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={project.live}
                  className="p-2 rounded-lg bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card-hover p-6 group"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
          <project.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs font-mono rounded bg-muted text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        <a
          href={project.github}
          className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
        >
          <Github className="w-4 h-4" /> Code
        </a>
        <a
          href={project.live}
          className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
        >
          <ExternalLink className="w-4 h-4" /> Live
        </a>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-10 md:py-14 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />
      
      <div className="section-container relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">// Featured Work</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Projects That{' '}
              <span className="gradient-text">Define Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From AI-powered security to blockchain voting systems, explore my journey in building secure, innovative solutions
            </p>
            <div className="cyber-line max-w-xs mx-auto mt-6" />
          </motion.div>

          {/* Featured Projects */}
          <div className="space-y-6 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* Other Projects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-display font-semibold text-foreground mb-6 text-center">
              Other Noteworthy Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index + 3} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
