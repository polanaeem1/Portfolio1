import { SectionContainer } from '../ui/SectionContainer';
import { portfolioData } from '../../data/portfolio';
import { motion } from 'motion/react';

export function Skills() {
  return (
    <SectionContainer id="skills">
      <div className="max-w-4xl">
        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 px-1 border-l-2 border-gray-100 ml-1">Expertise</h4>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
          Tools I use to create <br />
          <span className="text-gray-400 italic">remarkable products.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {portfolioData.skills.map((category, idx) => (
            <motion.div 
              key={category.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 border-b border-white/5 pb-3">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span 
                    key={skill}
                    className="tech-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
