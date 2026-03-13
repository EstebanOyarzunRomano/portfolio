import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const form = e.currentTarget;
      const data = new FormData(form);

      const response = await fetch("https://formspree.io/f/TU_ENDPOINT_REAL", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setStatus("idle");
        }, 4000);
      } else {
        setStatus("error");

        setTimeout(() => {
          setStatus("idle");
        }, 4000);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-primary mb-2">04.</p>

          <h2 className="text-3xl md:text-4xl font-bold font-display">
            <span className="text-gradient">Contacto</span>
          </h2>

          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            ¿Tenés un proyecto en mente? ¡Hablemos!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <div className="flex items-center justify-center gap-8 mb-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              <span>esteban.oyarzun2014@gmail.com</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span>Rio Grande, Tierra del Fuego</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Tu proyecto"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send size={16} />
              {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
            </button>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400"
              >
                <CheckCircle size={18} />
                <span>Mensaje enviado correctamente. Te responderé pronto.</span>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
              >
                <AlertCircle size={18} />
                <span>Hubo un error al enviar el mensaje. Intentá nuevamente.</span>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;