import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Database, 
  Shield, 
  Boxes, 
  Terminal,
  GitBranch,
  Container,
  Cloud
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming & Development',
    icon: Code2,
    color: 'primary',
    skills: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React.js', level: 80 },
      { name: 'TypeScript', level: 75 },
      { name: 'Python', level: 70 },
      { name: 'Go', level: 45 },
    ],
  },
  {
    title: 'Blockchain & Smart Contracts',
    icon: Boxes,
    color: 'accent',
    skills: [
      { name: 'Solidity', level: 75 },
      { name: 'Ethereum', level: 70 },
      { name: 'Smart Contracts', level: 70 },
      { name: 'MetaMask', level: 80 },
      { name: 'Ganache/Truffle', level: 65 },
    ],
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    color: 'cyber',
    skills: [
      { name: 'Phishing Detection', level: 75 },
      { name: 'Security Fundamentals', level: 70 },
      { name: 'Blockchain Security', level: 65 },
      { name: 'IPFS', level: 60 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Terminal,
    color: 'primary',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Supabase', level: 75 },
      { name: 'Docker', level: 60 },
      { name: 'Streamlit', level: 65 },
      { name: 'Pinata (IPFS)', level: 60 },
    ],
  },
];

const SkillBar = ({ name, level, delay, color }: { name: string; level: number; delay: number; color: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px' });

  const getColorClass = () => {
    switch (color) {
      case 'accent': return 'bg-accent';
      case 'glow-green': return 'bg-glow-green';
      default: return 'bg-primary';
    }
  };

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs font-mono text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${getColorClass()}`}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1.2, delay: delay + 0.3, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-10 md:py-14 relative">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="section-container relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">// Skills & Expertise</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Technologies I{' '}
              <span className="gradient-text">Work With</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building secure, scalable, and innovative solutions
            </p>
            <div className="cyber-line max-w-xs mx-auto mt-6" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                className="glass-card p-6 md:p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    category.color === 'accent' ? 'bg-accent/10' : 
                    category.color === 'glow-green' ? 'bg-glow-green/10' : 'bg-primary/10'
                  }`}>
                    <category.icon className={`w-6 h-6 ${
                      category.color === 'accent' ? 'text-accent' : 
                      category.color === 'glow-green' ? 'text-glow-green' : 'text-primary'
                    }`} />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={categoryIndex * 0.15 + skillIndex * 0.1}
                      color={category.color}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-muted-foreground mb-6 font-mono">// Also familiar with</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Mern Stack', 'MySQL', 'PostgreSQL', 'Tailwind CSS', 'Node.js', 'REST APIs', 'Web3.js','MetaMask', 'Python', 'Git & GitHub', 'Solidity',].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-card/50 border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
