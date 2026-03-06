import { motion } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Código Limpio",
    description: "Escribo código organizado, legible y mantenible.",
  },
  {
    icon: Palette,
    title: "Diseño Moderno",
    description: "Interfaces atractivas con atención al detalle.",
  },
  {
    icon: Zap,
    title: "Rendimiento",
    description: "Sitios rápidos y optimizados para todos los dispositivos.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="font-mono text-sm text-primary mb-2">01.</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Sobre <span className="text-gradient">Mí</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Soy un desarrollador web apasionado por crear soluciones digitales. 
            Actualmente estoy en formación como Full Stack Developer, dominando 
            tecnologías como HTML, CSS, JavaScript y React (JSX). Ya he trabajado 
            en proyectos reales como la página web de una abogada profesional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="card-elevated rounded-xl p-8 text-center hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-display">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
