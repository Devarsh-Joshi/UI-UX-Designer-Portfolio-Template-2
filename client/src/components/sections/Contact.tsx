import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Dribbble, Twitter, Linkedin } from "lucide-react";

export default function Contact() {
  const socials = [
    { icon: Dribbble, href: "https://dribbble.com" },
    { icon: Twitter, href: "https://twitter.com" },
    { icon: Linkedin, href: "https://linkedin.com" }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-display font-black mb-8 leading-tight">
            LET'S BUILD THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">FUTURE</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 font-heading leading-relaxed">
            I'm currently available for freelance projects and open to full-time opportunities. 
            If you have an idea that challenges the status quo, I'd love to hear it.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 font-display px-8 h-14 rounded-full text-lg"
              onClick={() => window.location.href = 'mailto:alex@example.com?subject=Project Inquiry'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 font-display px-8 h-14 rounded-full text-lg">
              Download CV
            </Button>
          </div>

          <div className="flex justify-center items-center gap-8">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
      
      <footer className="absolute bottom-6 w-full text-center text-xs text-muted-foreground font-mono opacity-50">
        © 2026 ALEX MORGAN. ALL RIGHTS RESERVED.
      </footer>
    </section>
  );
}
