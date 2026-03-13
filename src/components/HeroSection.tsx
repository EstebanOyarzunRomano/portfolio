import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "../assets/descarga.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-sm text-gray-300 bg-cyan-500/10 px-3 py-1 rounded-md mb-4 inline-block"
        >
          ¡Hola! 👋 Mi nombre es
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 font-display"
        >
          <span className="text-foreground">Esteban </span>
          <span className="text-gradient">Oyarzun Romano</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 font-display"
        >
          Desarrollador Web Full Stack
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-xl mx-auto text-muted-foreground mb-10 leading-relaxed"
        >
          Creo experiencias web modernas y funcionales.
          Especializado en HTML, CSS, JavaScript y React.
        </motion.p>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          {[
            { icon: Github, href: "https://github.com/EstebanOyarzunRomano?tab=repositories", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/esteban-damian-oyarzun-romano-06638627a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkPJPb5gwRea83L99lQyIbQ%3D%3D", label: "LinkedIn" },
            { icon: Mail, href: "#contacto", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="p-3 rounded-lg border border-cyan-500/20 bg-white/5 text-cyan-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#sobre-mi"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1.2, y: { repeat: Infinity, duration: 2 } }}
          className="inline-block text-cyan-300 hover:text-white transition-colors"
        >
          <ArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
