import { motion } from "framer-motion";
import { Globe, Github } from "lucide-react";

const projects = [
  {
    title: "Sitio Web Profesional para Abogada",
    description:
      "Página web profesional desarrollada para un estudio jurídico, con diseño elegante, sección de especialidades, equipo profesional y formulario de contacto. Optimizada para una navegación clara y responsive en todos los dispositivos.",
    tags: ["HTML", "CSS", "Sass", "JavaScript"],
    liveUrl: "https://abogadadiazecenarro.com.ar/",
    githubUrl: "https://github.com/EstebanOyarzunRomano/estudio-juridico",
  },
  
  {
    title: "Sitio Web de Música Rap",
    description:
      "Sitio web dedicado a la música rap desarrollado como proyecto inicial de mi formación en Desarrollo Web Full Stack. Construido con HTML, CSS, Sass y Bootstrap, aplicando conceptos de maquetación, diseño responsive y organización de estilos.",
    tags: ["HTML", "CSS", "Sass", "Bootstrap"],
    liveUrl: "https://estebanoyarzunromano.github.io/proyecto-pagina-musica/",
    githubUrl: "https://github.com/EstebanOyarzunRomano/proyecto-pagina-musica",
  },
  
  {
    title: "Portfolio Personal de Desarrollo Web",
    description:
      "Portfolio personal desarrollado con React para presentar mis proyectos, habilidades y experiencia como desarrollador web. Incluye animaciones, diseño moderno en modo oscuro y una interfaz responsive optimizada para diferentes dispositivos.",
    tags: ["HTML", "React", "JavaScript"],
    liveUrl: "https://portfolio-red-one-68.vercel.app/",
    githubUrl: "https://github.com/EstebanOyarzunRomano/portfolio",
  },

  {
    title: "Sistema de turnos",
    description: "Sistema web de gestión de turnos que permite a los usuarios reservar citas de manera simple y rápida. Incluye visualización de disponibilidad, registro de turnos y administración básica desde el panel del sistema. Desarrollado con React y tecnologías modernas de desarrollo web para ofrecer una experiencia ágil.", 
    tags: ["HTML", "JavaScript", "React"],
    liveUrl: "https://sistema-de-turnos-dun.vercel.app/",
    githubUrl: "https://github.com/EstebanOyarzunRomano/sistema-de-turnos",
  },

];

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-primary mb-2">03.</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Mis <span className="text-gradient">Proyectos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="card-elevated rounded-xl p-6 flex flex-col justify-between hover:border-primary/20 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Code size={20} />
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Ver sitio"
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        <Globe size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2 font-display group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-1 rounded bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Need to import Code from lucide
import { Code } from "lucide-react";

export default ProjectsSection;
