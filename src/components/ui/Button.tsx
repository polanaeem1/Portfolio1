import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  className?: string;
  href?: string;
}

export function Button({ children, onClick, variant = 'primary', className = '', href }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-bold transition-all duration-200 text-sm";
  
  const variants = {
    primary: "bg-white text-black hover:bg-zinc-200 shadow-sm",
    secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/10",
    ghost: "bg-transparent text-zinc-400 hover:text-white hover:bg-white/5",
    outline: "bg-transparent border border-zinc-700 text-white hover:bg-zinc-800"
  };

  const Component = href ? 'a' : motion.button;
  const props = href ? { href } : { onClick };

  return (
    <Component
      {...props}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  );
}
