import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    year: "2026",
    title: "The Future",
    subtitle: "AI & Design Synthesis",
    desc: "Exploring the boundaries of generative interfaces and predictive UX paradigms.",
    side: "left"
  },
  {
    year: "2024",
    title: "Metaverse Lab",
    subtitle: "Lead Product Designer",
    desc: "Architecting design systems for spatial computing and immersive 3D environments.",
    side: "right"
  },
  {
    year: "2022",
    title: "Neo-Fintech",
    subtitle: "Senior UX Designer",
    desc: "Revolutionizing digital banking through emotional design and radical simplicity.",
    side: "left"
  },
  {
    year: "2020",
    title: "Academy of Arts",
    subtitle: "BFA Graduation",
    desc: "Defining a personal aesthetic that blends brutalist structure with fluid motion.",
    side: "right"
  }
];

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      id="journey" 
      ref={containerRef}
      className="py-40 bg-background relative overflow-hidden"
    >
      {/* Dynamic Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[30vw] font-display font-black whitespace-nowrap">HISTORY</h2>
      </div>

      <div className="container px-6 relative z-10">
        <div className="flex flex-col items-center">
          {events.map((event, index) => (
            <div key={index} className="w-full max-w-5xl mb-40 last:mb-0 relative">
              <div className={`flex flex-col ${event.side === 'left' ? 'md:items-start' : 'md:items-end'} items-center`}>
                
                {/* Year Counter */}
                <motion.span 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="text-8xl md:text-[12rem] font-display font-black text-white/5 leading-none mb-[-2rem] md:mb-[-4rem]"
                >
                  {event.year}
                </motion.span>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative z-10 w-full md:w-2/3 p-8 md:p-12 glass border-l-4 ${event.side === 'left' ? 'border-primary' : 'border-secondary'} rounded-r-2xl overflow-hidden group`}
                >
                  {/* Hover Accent */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${event.side === 'left' ? 'from-primary/10' : 'from-secondary/10'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl md:text-5xl font-display font-bold mb-2 tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                      {event.title}
                    </h3>
                    <p className={`text-lg md:text-xl font-heading font-medium mb-6 ${event.side === 'left' ? 'text-primary' : 'text-secondary'}`}>
                      {event.subtitle}
                    </p>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
                      {event.desc}
                    </p>
                  </div>

                  {/* Decorative Number */}
                  <span className="absolute bottom-4 right-8 text-6xl font-display font-black text-white/5 italic">
                    0{index + 1}
                  </span>
                </motion.div>
              </div>

              {/* Connecting Lines for Desktop */}
              <div className={`absolute top-1/2 ${event.side === 'left' ? 'left-[60%]' : 'right-[60%]'} w-1/2 h-px bg-gradient-to-r from-white/10 to-transparent hidden md:block -z-10`} />
            </div>
          ))}
        </div>
      </div>

      {/* Side Progress Bar */}
      <motion.div 
        style={{ scaleY: scrollYProgress }}
        className="fixed right-8 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-primary via-accent to-secondary origin-top hidden lg:block z-50 rounded-full"
      />
    </section>
  );
}
