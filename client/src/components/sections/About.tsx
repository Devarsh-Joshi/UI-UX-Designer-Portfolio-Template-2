import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "Product Design", "UI/UX", "Interaction Design", 
    "Framer Motion", "React", "WebGL", "3D Modeling"
  ];

  return (
    <section id="about" className="py-24 bg-background/50 border-y border-white/5 backdrop-blur-sm">
      <div className="container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Behind the <span className="text-accent">Pixel</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground font-heading">
              <p>
                I am a multidisciplinary designer based in Neo-Tokyo, obsessed with the details that bridge the gap between human intuition and machine logic.
              </p>
              <p>
                With over 5 years of experience in digital product design, I focus on creating interfaces that aren't just usable, but memorable. I believe that good design dissolves into behavior.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-mono text-white/50 mb-4 uppercase tracking-widest">Stack & Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] z-0" />
            
            <div className="relative z-10 p-8 glass rounded-2xl border border-white/10">
               <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500" />
                   <div className="w-3 h-3 rounded-full bg-green-500" />
                 </div>
                 <span className="font-mono text-xs text-muted-foreground">terminal.app</span>
               </div>
               
               <div className="font-mono text-sm space-y-4">
                 <div>
                   <span className="text-primary">➜</span> <span className="text-blue-400">~</span> whoami
                 </div>
                 <div className="text-muted-foreground pl-4">
                   "Alex Morgan"<br/>
                   "Design Engineer"<br/>
                   "Visual Storyteller"
                 </div>
                 
                 <div>
                   <span className="text-primary">➜</span> <span className="text-blue-400">~</span> locate
                 </div>
                 <div className="text-muted-foreground pl-4">
                   "San Francisco, CA"
                 </div>
                 
                 <div>
                   <span className="text-primary">➜</span> <span className="text-blue-400">~</span> status
                 </div>
                 <div className="text-green-400 pl-4">
                   ● Open to Work
                 </div>
                 
                 <div className="animate-pulse">
                   <span className="text-primary">➜</span> <span className="text-blue-400">~</span> <span className="inline-block w-2 h-4 bg-white align-middle" />
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
