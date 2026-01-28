import { motion, useScroll, useTransform } from "framer-motion";
import heroBg from "@/assets/hero-bg.png";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background z-10" />
        <img
          src={heroBg}
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-60"
        />
      </motion.div>

      {/* Content with Parallax */}
      <motion.div 
        style={{ y: y2, opacity }}
        className="container relative z-10 px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full border border-primary/30 bg-primary/20 backdrop-blur-md text-xs font-bold tracking-[0.2em] uppercase text-white mb-6 neon-box">
            Portfolio 2026
          </span>
          
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter mb-4 leading-none">
            ALEX <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">MORGAN</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-muted-foreground font-heading max-w-2xl mx-auto mb-10 tracking-wide">
            Crafting immersive digital experiences at the intersection of design and code.
          </p>
        </motion.div>
      </motion.div>

      {/* Floating Elements for Depth */}
      <motion.div
        style={{ y: useTransform(scrollY, [0, 500], [0, -300]) }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-5"
      />
      <motion.div
        style={{ y: useTransform(scrollY, [0, 500], [0, -400]) }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full -z-5"
      />
    </section>
  );
}
