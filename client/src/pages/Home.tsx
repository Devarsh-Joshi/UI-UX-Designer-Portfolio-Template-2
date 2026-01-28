import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Journey from "@/components/sections/Journey";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Journey />
        <Contact />
      </main>
    </div>
  );
}
