import { SectionContainer } from '../ui/SectionContainer';
import { portfolioData } from '../../data/portfolio';
import { Cpu, Target, Rocket } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Cpu,
      title: "Clean Logic",
      desc: "Architecting systems that are as readable as they are performant."
    },
    {
      icon: Target,
      title: "UX Driven",
      desc: "Placing the user at the center of every architectural decision."
    },
    {
      icon: Rocket,
      title: "Impact Focused",
      desc: "Beyond code, I focus on delivering real value to your business."
    }
  ];

  return (
    <SectionContainer id="about">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-20 items-start">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Specializing in bridging <br />
            <span className="text-zinc-500">complex engineering</span> and <span className="text-white">human intuition.</span>
          </h2>
          
          <div className="space-y-6 text-lg text-zinc-400 leading-relaxed max-w-3xl">
            <p>{portfolioData.about.intro}</p>
            <p><span className="text-white font-semibold">{portfolioData.about.specialization}:</span> {portfolioData.about.value}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/5">
            {values.map((v, i) => (
              <div key={i} className="group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <v.icon size={20} />
                </div>
                <h4 className="font-bold text-white mb-2">{v.title}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group">
           <div className="aspect-[4/5] rounded-[40px] bg-zinc-900 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500 border border-white/5">
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
           </div>
           
           {/* Floating decoration */}

        </div>
      </div>
    </SectionContainer>
  );
}
