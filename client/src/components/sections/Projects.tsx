import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import projectPlaceholder from "@/assets/project-placeholder.png";

const projects = [
  {
    id: 1,
    title: "Neon Finance",
    category: "Fintech Dashboard",
    image: projectPlaceholder,
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    id: 2,
    title: "Aether OS",
    category: "Spatial Interface",
    image: projectPlaceholder,
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    id: 3,
    title: "Cyber Commerce",
    category: "E-Commerce Platform",
    image: projectPlaceholder,
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: 4,
    title: "Nexus AI",
    category: "Machine Learning Hub",
    image: projectPlaceholder,
    color: "from-orange-500/20 to-red-500/20"
  }
];

export default function Projects() {
  return (
    <section id="work" className="py-24 bg-background relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex justify-between items-end"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Selected Work</h2>
            <p className="text-muted-foreground font-heading">A curation of recent digital products.</p>
          </div>
          <span className="hidden md:block text-xs font-mono text-primary">// 001 - 004</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer"
            >
              {/* Card Background & Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-xl -z-10 group-hover:from-primary/20 transition-colors duration-500" />
              
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-card aspect-[4/3]">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`} />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                
                {/* Overlay Button */}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-background/80 backdrop-blur-md p-3 rounded-full border border-white/20">
                    <ArrowUpRight className="text-white w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm font-heading">{project.category}</p>
                </div>
                <span className="text-xs font-mono text-muted-foreground mt-2">202{6-index}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
