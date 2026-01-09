import { motion } from 'framer-motion';
import { GraduationCap, Globe, MapPin, Calendar, Book } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: "Algoritmos e Programação Orientada a Objetos com Swift",
    company: "Instituto de pesquisas ELDORADO - HackaTruck MakerSpace",
    period: "Nov 2023",
    location: "Salvador, BA",
    type: "Presencial",
    typeColor: "bg-green-500/20 text-green-400",
    description: "Capacitação na linguagem Swift, abrangendo o desenvolvimento de aplicações iOS utilizando SwiftUI.",
    skills: ["Swift", "SwiftUI", "POO", "iOS"],
  },
  {
    title: "Programação para Web usando Angular",
    company: "Centro de pesquisa e capacitação Tomorrow",
    period: "Abr 2024",
    location: "Salvador, BA",
    type: "Presencial",
    typeColor: "bg-green-500/20 text-green-400",
    description: "Capacitação focada nos conceitos e no desenvolvimento de Single Page Applications (SPA) utilizando o framework Angular.",
    skills: ["AngularJS", "JavaScript", "TypeScript"],
  },
  {
    title: "Programação Orientada à Objetos com Java",
    company: "Centro de pesquisa e capacitação Tomorrow",
    period: "Mai 2024",
    location: "Salvador, BA",
    type: "Presencial",
    typeColor: "bg-green-500/20 text-green-400",
    description: "Domínio dos pilares da POO (herança, polimorfismo e encapsulamento) em Java para a criação de sistemas modulares e robustos.",
    skills: ["Java", "POO"],
  },
  {
    title: "Programação Back End com Node Js",
    company: "Centro de pesquisa e capacitação Tomorrow",
    period: "Out 2024",
    location: "Salvador, BA",
    type: "Presencial",
    typeColor: "bg-green-500/20 text-green-400",
    description: "Desenvolvimento de APIs RESTful utilizando Node.js e Express, com foco em integração de bancos de dados, escalabilidade e arquitetura de back-end eficiente.",
    skills: ["Node.js", "Express", "REST API"],
  },
];

const education = [
  {
    degree: "Bacharel em Ciência e Tecnologia",
    institution: "Universidade Federal da Bahia (UFBA)",
    year: "2018 - 2023",
    type: "Graduação",
    status: "Concluído",
    statusColor: "text-primary",
  },
  {
    degree: "Bacharel em Ciência da Computação",
    institution: "Universidade Federal da Bahia (UFBA)",
    year: "2024 - 2028",
    type: "Graduação",
    status: "Em andamento",
    statusColor: "text-green-400",
  },
];

const languages = [
  { code: "BR", name: "Português", level: "Nativo", proficiency: 5 },
  { code: "US", name: "Inglês", level: "Avançado", proficiency: 4 },
  { code: "ES", name: "Espanhol", level: "Intermediário", proficiency: 3 },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <div className="w-fit mx-auto text-left">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 flex flex-col">
              <span className="text-primary font-mono text-lg mb-2">02.</span>
              <span>
                Formação & <span className="text-gradient">Idiomas</span>
              </span>
            </h2>
          </div>
          <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Minha trajetória acadêmica e competências
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Formação Acadêmica */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-display font-semibold">Formação Acadêmica</h3>
            </motion.div>

            <div className="space-y-4">
              {education.map((item, index) => (
                <motion.div>
                  <div className="bg-card/50 backdrop-blur-sm rounded-xl p-5 border border-border/50 hover:border-primary/30 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <GraduationCap className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="font-semibold text-foreground">{item.degree}</h4>
                      </div>
                      <span className={`text-sm font-medium ${item.statusColor} bg-primary/10 px-3 py-1 rounded-full`}>
                        {item.status}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground ml-11">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {item.institution}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.year} • {item.type}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Idiomas */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <Globe className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-display font-semibold">Idiomas</h3>
            </motion.div>

            <div className="space-y-3">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.code}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-bold text-muted-foreground w-8">{lang.code}</span>
                      <div>
                        <p className="font-semibold text-foreground">{lang.name}</p>
                        <p className={`text-sm ${lang.level === 'Nativo' || lang.level === 'Avançado' ? 'text-primary' : 'text-green-400'}`}>
                          {lang.level}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2.5 h-2.5 rounded-full ${i < lang.proficiency ? 'bg-primary' : 'bg-muted'
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Experiências */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Book className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-display font-semibold">Cursos & Experiências</h3>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >

                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
                  <h4 className="text-lg font-semibold text-foreground mb-1">{exp.title}</h4>
                  <p className="text-primary font-medium mb-3">{exp.company}</p>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${exp.typeColor}`}>
                      {exp.type}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 cursor-default">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-muted/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;