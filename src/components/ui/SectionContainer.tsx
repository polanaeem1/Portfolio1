import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
}

export function SectionContainer({ children, id, className = '', dark = false }: SectionContainerProps) {
  return (
    <section 
      id={id} 
      className={`section-padding bg-transparent text-white ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container-wide"
      >
        {children}
      </motion.div>
    </section>
  );
}
