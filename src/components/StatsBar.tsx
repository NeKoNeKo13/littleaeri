import { motion } from "framer-motion";

interface Stat {
  label: string;
  value: string;
}

const stats: Stat[] = [
  { label: "Age", value: "12 Months" },
  { label: "Weight", value: "10.4 kg" },
  { label: "Height", value: "72 cm" },
  { label: "Teeth", value: "10" },
  { label: "First Word", value: "Papa" },
];

const StatsBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      className="bg-card rounded-[24px] shadow-soft p-8"
    >
      <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-6">
        Growth Stats
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl font-display font-semibold text-foreground tabular-nums">
              {stat.value}
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default StatsBar;
