import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Code2,
  Database,
  ShoppingCart,
  Layout,
  Server,
} from "lucide-react";

import heroBg from "../assets/descarga.jpg";

const services = [
  { icon: Layout, name: "Páginas web" },
  { icon: ShoppingCart, name: "Tiendas online" },
  { icon: Code2, name: "Aplicaciones web" },
  { icon: Server, name: "APIs y Backend" },
  { icon: Database, name: "Bases de datos" },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/EstebanOyarzunRomano",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/esteban-damian-oyarzun-romano-06638627a",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:esteban.oyarzun2014@gmail.com",
    label: "Enviar correo electrónico",
  },
];

const HeroSection = () => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay: number) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 25 },

    animate: {
      opacity: 1,
      y: 0,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.6,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut" as const,
    },
  });

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-28"
    >
      {/* Fondo original */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Iluminación decorativa */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[450px] max-w-full bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"
      />

      {/* Contenido principal */}
      <div className="container relative z-10 mx-auto px-6 text-center">

        {/* Etiqueta superior */}
        <motion.div {...reveal(0.2)}>
          <span className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs md:text-sm text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full mb-6">
            DESARROLLO WEB · SOLUCIONES DIGITALES
          </span>
        </motion.div>

        {/* Marca principal */}
        <motion.h1
          {...reveal(0.4)}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 font-display tracking-tight leading-[1.08]"
        >
          <span className="block text-foreground">
            SEVEN WEB
          </span>

          <span className="block text-gradient">
            ESTUDIO
          </span>
        </motion.h1>

        {/* Mensaje principal */}
        <motion.h2
          {...reveal(0.6)}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-4 font-display font-medium"
        >
          Transformamos ideas en soluciones digitales.
        </motion.h2>

        {/* Descripción simplificada */}
        <motion.p
          {...reveal(0.8)}
          className="max-w-2xl mx-auto text-muted-foreground text-sm sm:text-base md:text-lg mb-5 leading-relaxed"
        >
          Páginas web, tiendas online y aplicaciones
          a medida para potenciar tu negocio.
        </motion.p>

        {/* Presentación personal */}
        <motion.div
          {...reveal(0.9)}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-1 sm:gap-2 mb-8"
        >
          <span className="text-xs sm:text-sm text-gray-400">
            Por Esteban Damián Oyarzun Romano
          </span>

          <span
            className="hidden sm:inline text-cyan-400"
            aria-hidden="true"
          >
            ·
          </span>

          <span className="text-xs sm:text-sm text-cyan-300">
            Desarrollador Full Stack
          </span>
        </motion.div>

        {/* Botones principales */}
        <motion.div
          {...reveal(1)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-9"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-cyan-500/20"
          >
            Solicitar presupuesto

            <ArrowUpRight
              size={19}
              aria-hidden="true"
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>

          <a
            href="#proyectos"
            className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-lg border border-cyan-500/30 bg-white/5 text-cyan-200 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
          >
            Ver mis proyectos

            <ArrowRight
              size={19}
              aria-hidden="true"
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>

        {/* Servicios destacados */}
        <motion.div
          {...reveal(1.1)}
          className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto mb-9"
        >
          {services.map(({ icon: Icon, name }) => (
            <motion.div
              key={name}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -4, scale: 1.03 }
              }
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-cyan-500/20 bg-white/5 backdrop-blur-sm text-gray-300 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors"
            >
              <Icon
                size={16}
                className="text-cyan-400"
                aria-hidden="true"
              />

              <span className="text-xs md:text-sm font-medium">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Redes sociales */}
        <motion.div
          {...reveal(1.2)}
          className="flex items-center justify-center gap-4 mb-9"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={
                href.startsWith("http")
                  ? "_blank"
                  : undefined
              }
              rel={
                href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="p-3 rounded-lg border border-cyan-500/20 bg-white/5 text-cyan-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
            >
              <Icon size={20} aria-hidden="true" />
            </a>
          ))}
        </motion.div>

        {/* Indicador de scroll */}
        <motion.a
          href="#sobre-mi"
          aria-label="Desplazarse a la sección Sobre mí"
          initial={
            reduceMotion
              ? false
              : { opacity: 0 }
          }
          animate={
            reduceMotion
              ? { opacity: 1 }
              : { opacity: 1, y: [0, 8, 0] }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  opacity: { delay: 1.4 },
                  y: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  },
                }
          }
          className="inline-flex text-cyan-300 hover:text-white transition-colors"
        >
          <ArrowDown size={24} />
        </motion.a>

      </div>
    </section>
  );
};

export default HeroSection;