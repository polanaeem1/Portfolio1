import { Experience } from '../../data/portfolio';
import { motion } from 'motion/react';

interface TimelineItemProps {
  exp: Experience;
  index: number;
}

export function TimelineItem({ exp, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0 md:grid md:grid-cols-[1fr_auto_4fr] gap-8 mb-10 last:mb-0"
    >
      {/* Date (Desktop) */}
      <div className="hidden md:block text-right pt-1">
        <span className="text-xs font-mono text-zinc-500">
          {exp.period}
        </span>
      </div>

      {/* Timeline Line & Dot */}
      <div className="absolute left-0 top-0 bottom-0 md:relative flex flex-col items-center">
        <div className="w-2.5 h-2.5 rounded-full bg-white ring-4 ring-white/5 z-10 mt-2" />
        <div className="w-px h-full bg-white/5 -mt-2" />
      </div>

      {/* Content */}
      <div className="pb-8 glass-card p-6 mb-4">
        <div className="md:hidden mb-2">
          <span className="text-xs font-mono text-zinc-500">
            {exp.period}
          </span>
        </div>
        
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-white mb-0.5">{exp.role}</h3>
            <p className="text-sm font-medium text-zinc-500">{exp.company}</p>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 bg-white/5 px-2 py-1 rounded">
            {index === 0 ? 'Intern' : 'Intern'}
          </div>
        </div>
        
        <ul className="space-y-3">
          {exp.description.map((item, i) => (
            <li key={i} className="text-zinc-400 text-sm leading-relaxed flex gap-2">
              <span className="text-zinc-600 mt-1.5 shrink-0 block w-1 h-1 rounded-full bg-zinc-600" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
