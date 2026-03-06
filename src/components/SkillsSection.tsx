import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: 90, color: "hsl(12, 77%, 52%)" },
  { name: "CSS3", level: 85, color: "hsl(205, 87%, 50%)" },
  { name: "JavaScript", level: 80, color: "hsl(48, 89%, 50%)" },
  { name: "React / JSX", level: 75, color: "hsl(193, 95%, 55%)" },
  { name: "Git", level: 100, color: "hsl(10, 65%, 50%)" },
  { name: "Responsive Design", level: 90, color: "hsl(175, 80%, 50%)" },
];

const SkillsSection = () => {
  return (
    <section id="habilidades" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-primary mb-2">02.</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Mis <span className="text-gradient">Habilidades</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium font-mono">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: skill.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
