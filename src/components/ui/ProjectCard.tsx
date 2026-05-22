import { motion } from 'motion/react';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { Project } from '../../data/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col glass-card overflow-hidden hover-glow h-full"
    >
      {/* Project Image */}
      <div className="aspect-video w-full bg-zinc-900 flex items-center justify-center overflow-hidden border-b border-white/5 relative group-hover:border-indigo-500/30 transition-colors duration-500">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-600 text-xs transition-transform duration-700"
        >
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          ) : (
            "Project Screenshot Preview"
          )}
        </motion.div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex gap-2 mb-4 flex-wrap min-h-[100px] content-start">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors truncate">
          {project.title}
        </h3>
        
        <p className="text-zinc-400 text-sm mb-4 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="mt-auto pt-6 border-t border-white/5">
          <div className="flex items-center gap-4">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-white transition-opacity hover:opacity-70"
            >
              Demo <ExternalLink size={14} />
            </a>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-zinc-500 transition-colors hover:text-white"
            >
              Source <Github size={14} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
