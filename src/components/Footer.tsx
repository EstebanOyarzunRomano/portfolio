import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} Esteban Oyarzun Romano. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/EstebanOyarzunRomano", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/esteban-damian-oyarzun-romano-06638627a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8KEikgpiSvmzkEZVyyBndw%3D%3D", label: "LinkedIn" },
            { icon: Mail, href: "#contacto", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
