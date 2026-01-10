import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            <span className="text-primary font-mono text-lg block mb-2">05.</span>
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-primary mb-8 rounded-full mx-auto" />

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            Estou sempre aberto a novas oportunidades e projetos interessantes.
            Se você tem uma ideia, quer colaborar ou apenas dizer olá,
            ficarei feliz em ouvir você!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-left"
            >
              <h3 className="text-xl font-display font-semibold mb-6">
                Informações e Contato
              </h3>

              <div className="space-y-4 mb-8">
                <a
                  href="mailto:joaopedropsales@hotmail.com"
                  className="flex items-center gap-4 w-fit text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <span>joaopedropsales@hotmail.com</span>
                </a>
                <a
                  href='https://wa.me/5571991666001' target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 w-fit text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <span>+55 (71) 99166-6001</span>
                </a>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <span>Salvador, BA, Brasil</span>
                </div>


              </div>

              <h4 className="font-semibold mb-4">Redes</h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: 'https://github.com/joaopedro-16', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/joao-p-sales/', label: 'LinkedIn' },
                  { icon: MessageCircle, href: 'https://wa.me/5571991666001', label: 'WhatsApp' },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.form
              action="https://formspree.io/f/mpqwvvvg"
              method="POST"
              className="text-left space-y-4 pt-14"
            >
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  className="bg-secondary border-border focus:border-primary"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  className="bg-secondary border-border focus:border-primary"
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Sua mensagem"
                  rows={5}
                  className="bg-secondary border-border focus:border-primary resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-semibold"
              >
                <Send className="mr-2" size={18} />
                Enviar mensagem
              </Button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
