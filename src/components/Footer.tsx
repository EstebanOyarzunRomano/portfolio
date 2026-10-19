
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Code2,
  ArrowUpRight,
} from "lucide-react";

const navigationLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Tecnologías", href: "#habilidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/EstebanOyarzunRomano",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/esteban-damian-oyarzun-romano-06638627a",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:esteban.oyarzun2014@gmail.com",
    icon: Mail,
  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-cyan-500/15 bg-background">
      <div className="container mx-auto px-6">

        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 py-12 md:py-14">

          {/* Marca */}
          <div className="md:col-span-1">
            <a
              href="#inicio"
              className="inline-flex items-center gap-3 mb-5 group"
              aria-label="Seven Web - Ir al inicio"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 group-hover:border-cyan-400/50 transition-colors">
                <Code2
                  size={21}
                  className="text-cyan-400"
                />
              </div>

              <span className="font-display text-xl font-bold tracking-tight">
                Seven
                <span className="text-cyan-400">
                  Web Estudio
                </span>
              </span>
            </a>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Desarrollo web y soluciones digitales
              a medida. Sitios profesionales,
              tiendas online y aplicaciones
              pensadas para impulsar cada proyecto.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-5">
              Navegación
            </h3>

            <nav
              aria-label="Navegación del pie de página"
              className="grid grid-cols-2 gap-x-5 gap-y-3"
            >
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-cyan-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contacto y redes */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-5">
              Conectemos
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              ¿Tenés una idea o necesitás
              una página web? Hablemos
              sobre tu próximo proyecto.
            </p>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200 transition-colors mb-6"
            >
              Solicitar presupuesto
              <ArrowUpRight size={17} />
            </a>

            <div className="flex items-center gap-3">
              {socialLinks.map(
                ({ label, href, icon: Icon }) => {
                  const isExternal =
                    href.startsWith("https://");

                  return (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      title={label}
                      target={
                        isExternal
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        isExternal
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="w-10 h-10 flex items-center justify-center rounded-lg border border-cyan-500/15 bg-cyan-500/5 text-muted-foreground hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-colors"
                    >
                      <Icon
                        size={19}
                        aria-hidden="true"
                      />
                    </a>
                  );
                }
              )}
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-border/60 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Seven Web.
            Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-5">
            <span className="text-xs text-muted-foreground">
              Desarrollado por Esteban Oyarzun Romano
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Volver al inicio"
              title="Volver al inicio"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-colors"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
