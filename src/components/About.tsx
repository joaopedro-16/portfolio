import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Código Limpo',
    description: 'Escrevo código legível, manutenível e bem documentado.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Interfaces bonitas e intuitivas que encantam os usuários.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Aplicações rápidas e otimizadas para a melhor experiência.',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            <span className="text-primary font-mono text-lg block mb-2">01.</span>
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-primary mb-8 rounded-full" />

          <div className="grid md:grid-cols-2 gap-12 items-top">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Sou um desenvolvedor em formação,
                apaixonado por criar interfaces modernas e funcionais que proporcionam boas experiências ao usuário.
                Atualmente curso Ciência da Computação na UFBA e venho construindo uma base sólida em desenvolvimento de aplicações utilizando.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Minha jornada na programação começou pela curiosidade em entender como aplicações funcionam por trás das telas,
                e desde então venho desenvolvendo projetos que unem lógica, design e performance.
                Tenho foco em front-end, com uma visão integrada do back-end,
                o que me permite compreender melhor o funcionamento completo das aplicações e tomar decisões mais consistentes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mantenho o foco na constante evolução, explorando novas tecnologias e metodologias para entregar código de qualidade.
                Estou comprometido em colaborar com projetos desafiantes e que busquem causar um impacto real através de interfaces inteligentes e bem estruturadas.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-display font-semibold text-primary">
                Meus Princípios
              </h3>
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-lg bg-gradient-card border border-border hover:border-primary/50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
