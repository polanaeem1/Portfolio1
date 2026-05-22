import { SectionContainer } from '../ui/SectionContainer';
import { ProjectCard } from '../ui/ProjectCard';
import { portfolioData } from '../../data/portfolio';

export function Projects() {
  return (
    <SectionContainer id="projects" className="border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4 px-1 border-l-2 border-indigo-500 ml-1">Featured Projects</h4>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            I build products that <span className="text-zinc-500 group-hover:text-white transition-colors">actually ship.</span>
          </h2>
        </div>
        <p className="text-zinc-500 text-sm font-medium pb-1 font-mono">
          Browse all {portfolioData.projects.length} featured items →
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
}
