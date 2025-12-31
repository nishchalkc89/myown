import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Award, MapPin } from 'lucide-react';

const timeline = [
  {
    type: 'education',
    title: 'B.Tech in Computer Science & Engineering',
    organization: 'Sharda University',
    location: 'Greater Noida, India',
    period: '2022 - Present (4th Year)',
    description: 'Pursuing Bachelor of Technology with focus on blockchain development, cybersecurity, and full-stack web development.',
    icon: GraduationCap,
    current: true,
  },
 {
  type: 'internship',
  title: 'Full Stack Developer Intern',
  organization: 'Verastix Technology Pvt. Ltd.',
  location: 'Nepal',
  period: 'June 2025 - July 2025',
  description:
    'Developed and implemented a Doctor Appointment Booking System, contributing to both frontend and backend development. Worked on building reliable, user-friendly features and ensured smooth data handling and system usability. Gained hands-on experience in full-stack development and real-world application deployment.',
  icon: Briefcase,
  current: false,
  },
  {
  type: 'internship',
  title: 'Data Analyst Intern',
  organization: 'Sapivi Enterprise Pvt. Ltd.',
  location: 'India',
  period: 'June 2024 - August 2024',
  description:
    'Developed Python scripts to extract, clean, and organize large datasets from online sources. Worked with SQL and Excel to ensure data accuracy, reliability, and usability while automating data workflows for internal analysis.',
  icon: Briefcase,
  current: true,
},

  {
    type: 'education',
    title: 'Higher Secondary Education (+2)',
    organization: 'Gorkha Secondary School (GSS)',
    location: 'Tulsipur, Dang, Nepal',
    period: 'Completed',
    description: 'Completed higher secondary education with focus on science and mathematics.',
    icon: GraduationCap,
    current: false,
  },
  {
    type: 'education',
    title: 'Secondary Education (SEE)',
    organization: 'Mid West Point Academy',
    location: 'Nepal',
    period: 'Completed',
    description: 'Completed secondary education examination with strong foundation in sciences.',
    icon: GraduationCap,
    current: false,
  },
];

const achievements = [
  'Built 5+ full-stack projects with modern technologies',
  'Specializing in blockchain security and smart contracts',
  'Active contributor to open-source projects',
  'Continuous learner in cybersecurity domain',
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-10 md:py-14 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="section-container relative z-10">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">// Journey</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Education &{' '}
              <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From Nepal to India, tracing my path in technology and innovation
            </p>
            <div className="cyber-line max-w-xs mx-auto mt-6" />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Timeline */}
            <div className="lg:col-span-2">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
                
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative pl-16"
                    >
                      {/* Timeline Dot */}
                      <div className={`absolute left-4 top-1 timeline-dot ${item.current ? 'animate-pulse-glow' : ''}`} />
                      
                      {/* Card */}
                      <div className="glass-card p-6 hover:border-primary/30 transition-colors">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`px-2 py-1 text-xs font-mono rounded ${
                            item.type === 'education' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
                          }`}>
                            {item.type === 'education' ? 'Education' : 'Internship'}
                          </span>
                          {item.current && (
                            <span className="px-2 py-1 text-xs font-mono rounded bg-glow-green/10 text-glow-green flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-glow-green animate-pulse" />
                              {/* Current */}
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="font-medium text-foreground/80">{item.organization}</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {item.location}
                          </span>
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                        
                        <div className="mt-3 text-xs font-mono text-primary">
                          {item.period}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:sticky lg:top-24 self-start"
            >
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">
                    Highlights
                  </h3>
                </div>
                
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">Looking for</p>
                  <p className="text-foreground font-medium">
                    Internships & Full-time opportunities in Blockchain & Cybersecurity
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
