import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Feito por João Pedro Sales
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
