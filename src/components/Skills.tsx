import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaDocker,
  FaFigma,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiPython,
  SiSwift,
  SiMongodb,
  SiStrapi,
  SiVite,
  SiNextdotjs,
  SiExpress,
  SiIonic,
} from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Swift', icon: SiSwift, color: '#F05138' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'GitHub', icon: FaGithub, color: '#ffffff' },
  { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Strapi', icon: SiStrapi, color: '#2F2E8B' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Vite', icon: SiVite, color: '#646CFF' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Angular', icon: FaAngular, color: '#DD0031' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Express', icon: SiExpress, color: '#ffffff' },
  { name: 'React Native', icon: FaReact, color: '#61DAFB' },
  { name: 'Ionic', icon: SiIonic, color: '#3880FF' },
];

const SkillCard = ({
  skill,
  index,
  isInView,
}: {
  skill: { name: string; icon: React.ElementType; color: string };
  index: number;
  isInView: boolean;
}) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const Icon = skill.icon;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const iconColor = (theme === 'light' && skill.color.toLowerCase() === '#ffffff')
    ? '#000000'
    : skill.color;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="flex flex-col items-center justify-center p-4 bg-secondary/30 dark:bg-secondary/50 border border-border rounded-xl hover:border-primary/50 hover:bg-secondary cursor-default aspect-square w-28 md:w-32"
    >
      <Icon
        className="text-3xl md:text-4xl mb-3"
        style={{ color: iconColor }}
      />
      <span className="text-xs md:text-sm font-medium text-center whitespace-nowrap">
        {skill.name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            <span className="text-primary font-mono text-lg block mb-2">03.</span>
            Habilidades
          </h2>
          <div className="w-24 h-1 bg-primary mb-6 rounded-full" />

          <div className="mb-16">
            <h3 className="text-xl font-display font-semibold mb-8 text-center">
              Linguagens, ferramentas e tecnologias que utilizo para criar soluções
            </h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
              {skills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} isInView={isInView} />
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Skills;