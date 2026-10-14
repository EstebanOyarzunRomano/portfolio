
import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
} from "lucide-react";

type FormStatus =
  | "idle"
  | "sending"
  | "success"
  | "error";

const CONTACT_EMAIL = "esteban.oyarzun2014@gmail.com";

// Reemplazar con el endpoint real de Formspree.
// Mientras esté vacío, se utilizará el correo electrónico.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqpbobp";

const ContactSection = () => {
  const reduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] =
    useState<FormStatus>("idle");

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    field: "name" | "email" | "message",
    value: string
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    if (status === "error" || status === "success") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const openEmailClient = () => {
    const subject = encodeURIComponent(
      `Consulta web - ${formData.name.trim()}`
    );

    const body = encodeURIComponent(
      `Nombre: ${formData.name.trim()}\n` +
      `Email: ${formData.email.trim()}\n\n` +
      `Proyecto:\n${formData.message.trim()}`
    );

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (status === "sending") return;

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus("error");
      setErrorMessage(
        "Completá todos los campos antes de continuar."
      );
      return;
    }

    // Alternativa sin servicio de formularios:
    // abre la aplicación de correo del visitante.
    if (!FORMSPREE_ENDPOINT) {
      openEmailClient();
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const data = new FormData();
      data.append("name", formData.name.trim());
      data.append("email", formData.email.trim());
      data.append("message", formData.message.trim());

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(
          "No se pudo enviar el formulario."
        );
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error de contacto:", error);

      setStatus("error");
      setErrorMessage(
        "No se pudo enviar el mensaje. Podés escribirme directamente por correo electrónico."
      );
    }
  };

  return (
    <section
      id="contacto"
      aria-labelledby="contact-title"
      className="relative bg-secondary/30 pt-10 pb-20 md:pt-14 md:pb-24"
    >
      <div className="container mx-auto px-6">

        {/* Encabezado */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-12"
        >
          <p className="font-mono text-sm text-primary mb-2">
            05.
          </p>

          <h2
            id="contact-title"
            className="text-3xl md:text-4xl font-bold font-display mb-5"
          >
            Hablemos de tu{" "}
            <span className="text-gradient">
              proyecto
            </span>
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            ¿Necesitás una página web, una tienda online
            o una aplicación personalizada? Contame
            tu idea y conversemos sobre cómo desarrollarla.
          </p>
        </motion.div>

        {/* Contenido */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          {/* Información de contacto */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 mb-10">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan-300 transition-colors break-all"
            >
              <Mail
                size={18}
                className="text-cyan-400 shrink-0"
                aria-hidden="true"
              />
              {CONTACT_EMAIL}
            </a>

            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin
                size={18}
                className="text-cyan-400 shrink-0"
                aria-hidden="true"
              />
              Río Grande, Tierra del Fuego
            </div>
          </div>

          {/* Formulario */}
          <div className="rounded-2xl border border-cyan-500/15 bg-background/60 p-6 md:p-8">
            <div className="mb-7">
              <h3 className="text-xl font-semibold font-display mb-2">
                Contame qué necesitás
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Completá tus datos y una breve descripción
                del proyecto para iniciar la consulta.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Nombre */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium mb-2"
                >
                  Tu nombre
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="¿Cómo te llamás?"
                  autoComplete="name"
                  maxLength={100}
                  value={formData.name}
                  onChange={(event) =>
                    handleChange(
                      "name",
                      event.target.value
                    )
                  }
                  required
                  disabled={status === "sending"}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-400/50 transition-all text-sm disabled:opacity-60"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium mb-2"
                >
                  Tu correo electrónico
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="nombre@ejemplo.com"
                  autoComplete="email"
                  maxLength={254}
                  value={formData.email}
                  onChange={(event) =>
                    handleChange(
                      "email",
                      event.target.value
                    )
                  }
                  required
                  disabled={status === "sending"}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-400/50 transition-all text-sm disabled:opacity-60"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium mb-2"
                >
                  Contame sobre tu proyecto
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="¿Qué tipo de sitio o aplicación necesitás? Contame brevemente tu idea..."
                  rows={5}
                  minLength={10}
                  maxLength={3000}
                  value={formData.message}
                  onChange={(event) =>
                    handleChange(
                      "message",
                      event.target.value
                    )
                  }
                  required
                  disabled={status === "sending"}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-400/50 transition-all text-sm resize-y disabled:opacity-60"
                />
              </div>

              {/* Botón */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send size={17} aria-hidden="true" />

                {status === "sending"
                  ? "Enviando mensaje..."
                  : FORMSPREE_ENDPOINT
                    ? "Enviar consulta"
                    : "Continuar por correo"}
              </button>

              {!FORMSPREE_ENDPOINT && (
                <p className="text-xs text-center text-muted-foreground leading-relaxed">
                  Se abrirá tu aplicación de correo
                  con el mensaje preparado.
                  Deberás confirmar el envío desde allí.
                </p>
              )}

              {/* Mensaje exitoso */}
              {status === "success" && (
                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 10 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  className="flex items-start gap-3 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    Mensaje enviado correctamente.
                    Te responderé a la brevedad.
                  </span>
                </motion.div>
              )}

              {/* Mensaje de error */}
              {status === "error" && (
                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 10 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  className="flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
                >
                  <AlertCircle
                    size={19}
                    className="shrink-0"
                    aria-hidden="true"
                  />
                  <span>{errorMessage}</span>
                </motion.div>
              )}
            </form>
          </div>

          {/* Contacto alternativo */}
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-3">
              ¿Preferís escribirme directamente?
            </p>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200 transition-colors"
            >
              Enviarme un correo
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;