
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Globe,
  Server,
  Database,
  Code2,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";

type FeaturedProject = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  image?: string;
};

type BackendProject = {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  icon: LucideIcon;
};

const featuredProjects: FeaturedProject[] = [
  {
    title: "Estudio Jurídico Díaz Ecenarro",
    category: "Sitio web profesional",
    description:
      "Sitio web desarrollado para un estudio jurídico, con presentación de servicios, información profesional y opciones de contacto. Diseño responsive orientado a facilitar la navegación de los clientes.",
    tags: ["HTML", "CSS", "Sass", "JavaScript"],
    liveUrl: "https://abogadadiazecenarro.com.ar/",
    githubUrl:
      "https://github.com/EstebanOyarzunRomano/estudio-juridico",
    image: "./public/estudio_juridico.png"
  },
  {
    title: "Agustina Andrade – Abogada",
    category: "Sitio web profesional",
    description:
      "Sitio web para una profesional del derecho, desarrollado con una interfaz moderna, secciones informativas, formulario de contacto y diseño adaptable a distintos dispositivos.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://draandrade.com.ar/",
    githubUrl:
      "https://github.com/EstebanOyarzunRomano/agustina-estudio-juridico",
    image: "./public/dra_andrade.png"
  },
  {
    title: "Sistema de turnos",
    category: "Aplicación web",
    description:
      "Aplicación web orientada a la gestión de reservas y turnos. Desarrollada con React y TypeScript, con una interfaz que permite organizar citas de forma clara y sencilla.",
    tags: ["React", "TypeScript"],
    liveUrl: "https://sistema-de-turnos-dun.vercel.app/",
    githubUrl:
      "https://github.com/EstebanOyarzunRomano/sistema-de-turnos",
    image: "./public/sistema_de_turnos.png"
  },
];

const backendProjects: BackendProject[] = [
  {
    title: "EventHub Argentina",
    description:
      "API REST para la gestión de eventos e inscripciones. Incluye autenticación, roles de usuario y operaciones de administración de eventos y reservas.",
    tags: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "API REST",
    ],
    githubUrl:
      "https://github.com/EstebanOyarzunRomano/eventhub-argentina-backend",
    icon: Database,
  },
  {
    title: "ShipNow Backend",
    description:
      "Proyecto backend desarrollado con una arquitectura por capas para organizar rutas, controladores, servicios y acceso a datos mediante MongoDB.",
    tags: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
    ],
    githubUrl:
      "https://github.com/EstebanOyarzunRomano/shipnow-backend",
    icon: Server,
  },
];

const ProjectsSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="proyectos"
      aria-labelledby="projects-title"
      className="relative bg-background pt-10 pb-20 md:pt-14 md:pb-24"
    >
      <div className="container mx-auto px-6">

        {/* Encabezado principal */}
        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="font-mono text-sm text-primary mb-2">
            04.
          </p>

          <h2
            id="projects-title"
            className="text-3xl md:text-4xl font-bold font-display mb-5"
          >
            Mis <span className="text-gradient">Proyectos</span>
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Una selección de trabajos y aplicaciones que
            desarrollé utilizando distintas tecnologías,
            desde sitios profesionales hasta soluciones
            con frontend y backend.
          </p>
        </motion.div>

        {/* Proyectos destacados */}
        <div className="flex items-center gap-3 mb-7">
          <Globe
            size={21}
            className="text-cyan-400"
            aria-hidden="true"
          />

          <h3 className="text-xl md:text-2xl font-semibold font-display">
            Proyectos destacados
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 25 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: reduceMotion ? 0 : index * 0.08,
              }}
              whileHover={
                reduceMotion ? undefined : { y: -5 }
              }
              className="group flex flex-col overflow-hidden rounded-xl border border-cyan-500/15 bg-secondary/30 hover:border-cyan-400/40 transition-colors duration-300"
            >
              {/* Vista previa */}
              <div className="relative h-48 overflow-hidden bg-slate-900 border-b border-cyan-500/10">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Vista previa de ${project.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-blue-500/10">
                    <Code2
                      size={38}
                      className="text-cyan-400/60"
                      aria-hidden="true"
                    />
                    <span className="font-mono text-xs text-cyan-200/60">
                      {project.category}
                    </span>
                  </div>
                )}

                <span className="absolute top-4 left-4 rounded-md border border-cyan-400/20 bg-background/90 px-3 py-1.5 text-xs font-medium text-cyan-300 backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Contenido */}
              <div className="flex flex-1 flex-col p-6">
                <h4 className="text-lg font-bold font-display mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h4>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-cyan-500/5 border border-cyan-500/10 px-2.5 py-1 text-xs font-mono text-cyan-200/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Enlaces */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-cyan-500/10">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition-colors"
                  >
                    Ver sitio
                    <ArrowUpRight size={16} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/20 px-4 py-2.5 text-sm text-gray-300 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors"
                  >
                    <Github size={16} />
                    Código
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Separación */}
        <div className="my-14 md:my-16 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

        {/* Proyectos backend */}
        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="mb-7"
        >
          <div className="flex items-center gap-3 mb-3">
            <Server
              size={21}
              className="text-cyan-400"
              aria-hidden="true"
            />

            <h3 className="text-xl md:text-2xl font-semibold font-display">
              Desarrollo Backend
            </h3>
          </div>

          <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Proyectos enfocados en la lógica del servidor,
            construcción de APIs, autenticación y
            persistencia de datos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {backendProjects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion
                    ? 0
                    : index * 0.1,
                }}
                className="group flex flex-col rounded-xl border border-cyan-500/15 bg-secondary/20 p-6 hover:border-cyan-400/40 transition-colors duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 shrink-0">
                    <Icon
                      size={24}
                      className="text-cyan-400"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <span className="block text-xs font-mono text-cyan-400 mb-1">
                      Backend / API REST
                    </span>

                    <h4 className="text-lg font-bold font-display group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h4>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-2.5 py-1 text-xs font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-cyan-500/10">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200 transition-colors"
                  >
                    <Github size={17} />
                    Ver código en GitHub
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Enlace a todos los repositorios */}
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
            href="https://github.com/EstebanOyarzunRomano?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/30 px-6 py-3 text-sm font-medium text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-colors"
          >
            <Github size={19} />
            Explorar todos mis repositorios
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;