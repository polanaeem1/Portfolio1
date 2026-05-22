import { SectionContainer } from '../ui/SectionContainer';
import { portfolioData } from '../../data/portfolio';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function Contact() {
  return (
    <SectionContainer id="contact" className="pb-40 overflow-hidden relative border-t border-white/5">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] -z-10 translate-x-1/2 translate-y-1/2 opacity-50" />
      
      <div className="max-w-4xl mx-auto text-center">
        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8">Get In Touch</h4>
        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12 gradient-text">
          Let's build <br />
          together.
        </h2>

        <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
          Available for strategic roles and high-impact freelance projects.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
           <Button variant="primary" className="w-full md:w-auto h-16 px-12 text-lg" href={`mailto:${portfolioData.contact.email}`}>
            Say Hello
           </Button>
           
           <div className="flex items-center gap-6">
              <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white font-bold transition-colors group">
                 GitHub <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
               <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white font-bold transition-colors group">
                 LinkedIn <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
           </div>
        </div>

        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-500 text-[11px] font-mono tracking-widest uppercase">
           <div>{portfolioData.name.toUpperCase()}.DEV © {new Date().getFullYear()}</div>
           <div>LAST UPDATED // {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase()}</div>
           <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Back to top</a>
           </div>
        </div>
      </div>
    </SectionContainer>
  );
}
