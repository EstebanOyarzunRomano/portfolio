
import { motion, useReducedMotion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  MonitorSmartphone,
  Database,
  Server,
  Settings,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
};

const services: Service[] = [
  {
    icon: Globe,
    title: "Páginas web profesionales",
    description:
      "Diseño y desarrollo sitios web modernos, rápidos y adaptados a la identidad de cada negocio.",
    features: [
      "Sitios institucionales",
      "Landing pages",
      "Portfolios profesionales",
      "Diseño responsive",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Tiendas online",
    description:
      "Desarrollo soluciones de comercio electrónico para mostrar productos y facilitar las ventas por internet.",
    features: [
      "Catálogos de productos",
      "Carritos de compras",
      "Integraciones de pago",
      "Tiendanube y soluciones a medida",
    ],
  },
  {
    icon: MonitorSmartphone,
    title: "Aplicaciones web",
    description:
      "Construyo aplicaciones interactivas y sistemas personalizados según las necesidades de cada proyecto.",
    features: [
      "Paneles de administración",
      "Sistemas de gestión",
      "Autenticación de usuarios",
      "Funcionalidades personalizadas",
    ],
  },
  {
    icon: Server,
    title: "Backend y APIs",
    description:
      "Desarrollo la lógica del servidor y los servicios que permiten que una aplicación funcione de manera integral.",
    features: [
      "APIs REST",
      "Node.js y Express",
      "Autenticación y autorización",
      "Integración de servicios",
    ],
  },
  {
    icon: Database,
    title: "Bases de datos",
    description:
      "Diseño e integro sistemas de almacenamiento para administrar información de manera organizada.",
    features: [
      "MongoDB",
      "Modelado de datos",
      "Consultas y operaciones CRUD",
      "Integración con aplicaciones",
    ],
  },
  {
    icon: Settings,
    title: "Mantenimiento e integraciones",
    description:
      "Implemento mejoras y funcionalidades para mantener los sitios web actualizados y operativos.",
    features: [
      "Actualización de contenidos",
      "Corrección de errores",
      "Formularios y notificaciones",
      "Publicación y despliegue",
    ],
  },
];

const ServicesSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="servicios"
      aria-labelledby="servicios-title"
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
          className="text-center max-w-3xl mx-auto mb-10 md:mb-12"
        >
          <p className="font-mono text-sm text-primary mb-2">
            02.
          </p>

          <h2
            id="servicios-title"
            className="text-3xl md:text-4xl font-bold font-display mb-5"
          >
            Mis <span className="text-gradient">Servicios</span>
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Desarrollo soluciones digitales para profesionales,
            emprendimientos y empresas. Desde una página web
            hasta aplicaciones completas con frontend, backend
            y bases de datos.
          </p>
        </motion.div>

        {/* Tarjetas de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 25 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.45,
                  delay: reduceMotion ? 0 : index * 0.06,
                }}
                whileHover={
                  reduceMotion ? undefined : { y: -5 }
                }
                className="group relative h-full rounded-xl border border-cyan-500/15 bg-secondary/30 p-7 hover:border-cyan-400/50 hover:bg-secondary/50 transition-colors duration-300"
              >
                {/* Ícono */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 mb-6">
                  <Icon
                    size={24}
                    className="text-cyan-400"
                    aria-hidden="true"
                  />
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold font-display mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                {/* Descripción */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Características */}
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        {/* Llamado a la acción */}
        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12 md:mt-14"
        >
          <p className="text-muted-foreground mb-5">
            ¿Tenés una idea o necesitás una solución web?
          </p>

          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-cyan-500/20"
          >
            Hablemos de tu proyecto
            <ArrowUpRight size={19} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;