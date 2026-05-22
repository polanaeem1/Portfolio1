import { SectionContainer } from '../ui/SectionContainer';
import { TimelineItem } from '../ui/TimelineItem';
import { portfolioData } from '../../data/portfolio';

export function Experience() {
  return (
    <SectionContainer id="experience" className="border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20">
         <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4 px-1 border-l-2 border-white ml-1">Career Journey</h4>
            <h2 className="text-4xl font-bold tracking-tight mb-8 text-white">
              Experience & <br /> Contribution.
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              A commitment to building clean, sustainable software 
              and leading high-impact engineering teams.
            </p>
         </div>

         <div>
            <div className="space-y-4">
              {portfolioData.experience.map((exp, index) => (
                <TimelineItem key={exp.id} exp={exp} index={index} />
              ))}
            </div>
         </div>
      </div>
    </SectionContainer>
  );
}
