import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type SkillCategory = {
  title: string;
  icon: LucideIcon;
  description: string;
  technologies: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    description:
      "Desarrollo interfaces modernas, interactivas y adaptadas a diferentes dispositivos.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Sass",
      "Bootstrap",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description:
      "Construyo la lógica del servidor, APIs y funcionalidades que conectan las aplicaciones con sus datos.",
    technologies: [
      "Node.js",
      "Express.js",
      "APIs REST",
      "JWT",
      "Autenticación",
      "Autorización",
      "Arquitectura por capas",
    ],
  },
  {
    title: "Bases de datos",
    icon: Database,
    description:
      "Trabajo con almacenamiento, modelado y consulta de datos para aplicaciones web.",
    technologies: [
      "MongoDB",
      "Mongoose",
      "SQL",
      "Firebase",
      "Firestore",
      "Modelado de datos",
      "Operaciones CRUD",
    ],
  },
  {
    title: "Herramientas y despliegue",
    icon: Wrench,
    description:
      "Utilizo herramientas de desarrollo, control de versiones, pruebas y publicación de proyectos.",
    technologies: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Vercel",
      "GitHub Pages",
      "MongoDB Atlas",
      "Vite",
    ],
  },
];

const SkillsSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="habilidades"
      aria-labelledby="skills-title"
      className="relative bg-secondary/30 pt-10 pb-20 md:pt-14 md:pb-24"
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
          className="text-center max-w-3xl mx-auto mb-10 md:mb-12"
        >
          <p className="font-mono text-sm text-primary mb-2">
            03.
          </p>

          <h2
            id="skills-title"
            className="text-3xl md:text-4xl font-bold font-display mb-5"
          >
            Mis{" "}
            <span className="text-gradient">
              Tecnologías
            </span>
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Utilizo diferentes tecnologías y herramientas
            para desarrollar soluciones digitales,
            trabajando tanto en las interfaces de usuario
            como en la lógica del servidor y las bases
            de datos.
          </p>
        </motion.div>

        {/* Tarjetas de tecnologías */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.article
                key={category.title}
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
                className="group h-full rounded-xl border border-cyan-500/15 bg-background/60 p-6 md:p-7 hover:border-cyan-400/50 hover:bg-background/80 transition-colors duration-300"
              >
                {/* Ícono y título */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    <Icon
                      size={24}
                      className="text-cyan-400"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-xl font-bold font-display group-hover:text-cyan-300 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Descripción */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Tecnologías */}
                <ul className="flex flex-wrap gap-2.5">
                  {category.technologies.map((tech) => (
                    <li key={tech}>
                      <span className="inline-flex items-center px-3 py-2 text-sm rounded-lg border border-cyan-500/10 bg-cyan-500/5 text-gray-300 hover:text-cyan-200 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-colors duration-300">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        {/* Mensaje inferior */}
        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mt-12"
        >
          <p className="text-sm text-muted-foreground leading-relaxed">
            Cada proyecto requiere herramientas diferentes.
            Mi objetivo es elegir las tecnologías que mejor
            se adapten a sus necesidades y permitan construir
            soluciones funcionales y mantenibles.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;