import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import sevenWebLogo from "../assets/logo_corregido.png";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Tecnologías", href: "#habilidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const navRef = useRef<HTMLElement>(null);
  const scrollLockRef = useRef(false);
  const unlockTimerRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

  const reduceMotion = useReducedMotion();

  // Detectar la sección activa según el desplazamiento.
  useEffect(() => {
    let frameId: number | null = null;

    const updateActiveSection = () => {
      if (scrollLockRef.current) return;

      const sections = navItems
        .map((item) =>
          document.getElementById(item.href.slice(1))
        )
        .filter(
          (element): element is HTMLElement =>
            element !== null
        );

      if (!sections.length) return;

      const navHeight =
        navRef.current?.getBoundingClientRect().height ?? 72;

      const referenceLine = navHeight + 40;

      if (window.scrollY <= 10) {
        setActiveSection("inicio");
        return;
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

      if (atBottom) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      let currentSection = sections[0].id;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= referenceLine) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    const handleScroll = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        updateActiveSection();
        frameId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  // Cerrar menú móvil con Escape.
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  // Limpiar el temporizador.
  useEffect(() => {
    return () => {
      if (unlockTimerRef.current !== null) {
        clearTimeout(unlockTimerRef.current);
      }
    };
  }, []);

  // Navegación controlada para evitar errores de posición.
  const navigateTo = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const sectionId = href.substring(1);
    const target = document.getElementById(sectionId);

    if (!target) {
      console.warn(`No se encontró la sección: ${sectionId}`);
      return;
    }

    // Cerrar el menú móvil
    setIsOpen(false);
    setActiveSection(sectionId);

    // Cancelar cualquier temporizador anterior
    if (unlockTimerRef.current !== null) {
      clearTimeout(unlockTimerRef.current);
    }

    scrollLockRef.current = true;

    // Esperar a que termine la animación del menú
    const delay = window.innerWidth < 1024 ? 300 : 0;

    window.setTimeout(() => {
      const navHeight =
        navRef.current?.getBoundingClientRect().height ?? 72;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        navHeight -
        12;

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: reduceMotion ? "auto" : "smooth",
      });

      window.history.replaceState(null, "", href);

      unlockTimerRef.current = setTimeout(() => {
        scrollLockRef.current = false;
        unlockTimerRef.current = null;
      }, reduceMotion ? 0 : 900);
    }, delay);
  };

  return (
    <motion.nav
      ref={navRef}
      initial={reduceMotion ? false : { y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        ease: "easeOut",
      }}
      aria-label="Navegación principal"
      className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-500/10 bg-background/85 backdrop-blur-xl"
    >
      <div className="container mx-auto flex items-center justify-between gap-4 px-6 py-4">

        {/* Logo */}
        <a
          href="#inicio"
          onClick={(event) => navigateTo(event, "#inicio")}
          className="flex shrink-0 items-center"
          aria-label="Seven Web - Ir al inicio"
        >
          <img 
          src={sevenWebLogo} 
          alt="Seven Web Logo" 
          className="h-auto w-[140px] sm:w-[220px] object-contain" 
          loading="lazy"
          decoding="async"
          />
        </a>

        {/* Menú escritorio */}
        <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navItems.map((item) => {
            const isActive =
              activeSection === item.href.substring(1);

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(event) => {
                    console.log("Click en:", item.label);
                    setIsOpen(false);
                    navigateTo(event, item.href);
                  }}
                  aria-current={
                    isActive ? "location" : undefined
                  }
                  className={`relative text-sm whitespace-nowrap transition-colors duration-300 ${
                    isActive
                      ? "text-cyan-300"
                      : "text-muted-foreground hover:text-cyan-300"
                  }`}
                >
                  {item.label}

                  {isActive && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Botón de presupuesto */}
        <a
          href="#contacto"
          onClick={(event) =>
            navigateTo(event, "#contacto")
          }
          className="hidden lg:inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-500 text-slate-950 text-sm font-semibold hover:bg-cyan-400 transition-colors whitespace-nowrap"
        >
          Solicitar presupuesto
          <ArrowUpRight size={16} />
        </a>

        {/* Botón móvil */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={
            isOpen ? "Cerrar menú" : "Abrir menú"
          }
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="lg:hidden p-2 text-foreground hover:text-cyan-300 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={
              reduceMotion
                ? false
                : { opacity: 0, height: 0 }
            }
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.25,
            }}
            className="lg:hidden max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-cyan-500/10 bg-background/95 backdrop-blur-xl"
          >
            <ul className="flex flex-col gap-1 px-6 py-5">
              {navItems.map((item) => {
                const isActive =
                  activeSection === item.href.substring(1);

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(event) =>
                        navigateTo(event, item.href)
                      }
                      aria-current={
                        isActive ? "location" : undefined
                      }
                      className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-cyan-500/10 text-cyan-300"
                          : "text-muted-foreground hover:bg-white/5 hover:text-cyan-300"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}

              <li className="mt-4">
                <a
                  href="#contacto"
                  onClick={(event) =>
                    navigateTo(event, "#contacto")
                  }
                  className="flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-3.5 text-slate-950 font-semibold"
                >
                  Solicitar presupuesto
                  <ArrowUpRight size={18} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;