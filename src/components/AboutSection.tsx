import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Palette,
  Zap,
  Layers3,
  GraduationCap,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

type Highlight = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const highlights: Highlight[] = [
  {
    icon: Code2,
    title: "Desarrollo Full Stack",
    description:
      "Construyo interfaces, servidores, APIs y bases de datos para desarrollar soluciones web completas.",
  },
  {
    icon: Palette,
    title: "Diseño moderno",
    description:
      "Creo interfaces atractivas, intuitivas y adaptadas a computadoras, tablets y celulares.",
  },
  {
    icon: Zap,
    title: "Rendimiento",
    description:
      "Busco desarrollar sitios rápidos, funcionales y optimizados para ofrecer una buena experiencia de usuario.",
  },
  {
    icon: Layers3,
    title: "Buenas prácticas",
    description:
      "Organizo el código utilizando componentes reutilizables, separación de responsabilidades y estructuras mantenibles.",
  },
];

const AboutSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="sobre-mi"
      aria-labelledby="about-title"
      className="relative bg-background pt-10 pb-20 md:pt-14 md:pb-24"
    >
      <div className="container mx-auto px-6">

        {/* Encabezado */}
        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-10 md:mb-12"
        >
          <p className="font-mono text-sm text-primary mb-2">
            01.
          </p>

          <h2
            id="about-title"
            className="text-3xl md:text-4xl font-bold mb-6 font-display"
          >
            Sobre <span className="text-gradient">mí</span>
          </h2>

          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-5">
            Soy Esteban Oyarzun Romano, desarrollador web
            Full Stack en la etapa final de mi formación
            y estudiante de Ingeniería en Sistemas.
          </p>

          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Me especializo en desarrollar soluciones
            digitales que combinan diseño, funcionalidad
            y tecnología. Trabajo tanto en las interfaces
            que utilizan los usuarios como en la lógica
            del servidor, las APIs y la gestión de datos.
          </p>
        </motion.div>

        {/* Formación */}
        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="flex flex-col sm:flex-row items-start gap-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 shrink-0">
              <GraduationCap
                size={24}
                className="text-cyan-400"
                aria-hidden="true"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold font-display mb-2">
                Formación profesional
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Actualmente curso Ingeniería en Sistemas
                y estoy finalizando mi formación como
                Desarrollador Full Stack, aplicando mis
                conocimientos en proyectos prácticos de
                frontend, backend y bases de datos.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Características */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 25 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion
                    ? 0
                    : index * 0.08,
                }}
                whileHover={
                  reduceMotion ? undefined : { y: -5 }
                }
                className="card-elevated group rounded-xl p-7 text-center hover:border-cyan-400/40 transition-colors duration-300"
              >
                <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon size={24} aria-hidden="true" />
                </div>

                <h3 className="text-lg font-semibold mb-3 font-display">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Enlace a proyectos */}
        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mt-12"
        >
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 font-medium transition-colors"
          >
            Conocé mis proyectos
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;