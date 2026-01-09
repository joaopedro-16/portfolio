import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';


import rocketnotesImg from '@/assets/projects/rocketnotes.png';
import mixtapeImg from '@/assets/projects/mixtape.png';
import filmexImg from '@/assets/projects/filmex.png';
import soccerquizImg from '@/assets/projects/soccerquiz.png';

const projects = [
  {
    title: 'Soccer Quiz',
    description: 'Plataforma mobile gamificada focada no ecossistema do futebol. Utilizei React Native e Ionic para criar uma interface moderna e responsiva. Gerenciamento de conteúdo estruturado via Strapi (CMS), permitindo uma gestão dinâmica e escalável das informações.',
    tech: ['React Native', 'Ionic', 'Strapi', 'TypeScript', 'Vite'],
    github: 'https://github.com/FormigTeen/eng-quiz',
    live: '',
    featured: true,
    image: soccerquizImg,
  },
  {
    title: 'RocketNotes – Gerenciador Pessoal de Notas e Links',
    description: 'Aplicação desenvolvida para fortificar conhecimentos em integração Full-stack, conectando um front-end dinâmico em React a um banco de dados SQLite. O projeto foca na organização pessoal, permitindo que o usuário crie blocos de notas categorizados por tags e pesquise por títulos de forma instantânea. Implementei um sistema completo de autenticação de usuários, garantindo que cada pessoa tenha seu ambiente privado e seguro para armazenar informações e links úteis.',
    tech: ['JavaScript', 'React', 'SQLite', 'Netlify'],
    github: 'https://github.com/joaopedro-16/rocketnotes',
    live: 'https://rocketnotex.netlify.app/',
    featured: true,
    image: rocketnotesImg,
  },
  {
    title: 'Mixtape – Marketplace de Áudio e Descoberta Musical',
    description: 'Desenvolvimento de uma plataforma de e-commerce voltada para produtores e DJs, construída com o framework Angular. O projeto foca na exibição eficiente de catálogos musicais, permitindo que o usuário realize filtros dinâmicos por gênero e BPM em tempo real. Implementei uma arquitetura modular com componentes reutilizáveis para a listagem de faixas, integrando players de áudio nativos para pré-visualização imediata e um sistema de gerenciamento de carrinho de compras focado em conversão.',
    tech: ['Angular', 'TypeScript'],
    github: 'https://github.com/joaopedro-16/projetoAngularMixtape',
    live: '',
    featured: true,
    image: mixtapeImg,
  },
  {
    title: 'Filmex – Plataforma de Gerenciamento de Filmes',
    description: "Desenvolvimento de uma aplicação web para exploração e organização de filmes. O projeto utiliza React e TypeScript para oferecer uma interface dinâmica onde o usuário pode buscar filmes em tempo real, gerenciar uma lista de favoritos e adicionar anotações personalizadas para cada título utilizando consumo de API externa para carregar sugestões de filmes populares e garantir que os dados estejam sempre atualizados.",
    tech: ['React', 'TypeScript'],
    github: 'https://github.com/joaopedro-16/projetoAngularMixtape',
    live: '',
    featured: true,
    image: filmexImg,
  },
];

const Projects = () => {

  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const featuredProjects = projects.filter((p) => p.featured);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);


  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            <span className="text-primary font-mono text-lg block mb-2">04.</span>
            Projetos em Destaque
          </h2>
          <div className="w-24 h-1 bg-primary mb-12 rounded-full" />

          <div className="space-y-16 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:text-right' : ''
                  }`}
              >
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <h3 className="text-2xl font-display font-bold mb-4">{project.title}</h3>
                  <div className="p-6 bg-gradient-card rounded-lg shadow-card border border-border mb-4">
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                  <div
                    className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 1 ? 'md:justify-end' : ''
                      }`}
                  >
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md text-xs md:text-sm font-mono bg-secondary border border-border text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-200 cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`flex gap-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <motion.div
                  className={`${index % 2 === 1 ? 'md:order-1' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-video bg-gradient-card rounded-lg border border-border overflow-hidden relative group">
                    {project.image ? (
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedImage({
                            src: project.image,
                            title: project.title,
                          })
                        }
                        className="w-full h-full cursor-zoom-in"
                      >
                        <img
                          src={project.image}
                          alt={`Preview do projeto ${project.title}`}
                          className="w-full h-full object-cover transition-transform duration-300"
                          loading="lazy"
                        />
                      </button>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Folder className="w-16 h-16 text-primary/50" />
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>

            ))


            }

          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <p className="text-center text-sm text-muted-foreground mt-4">
                {selectedImage.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>

  );
};





export default Projects;
