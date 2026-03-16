import { motion } from "framer-motion";

interface TimelineCardProps {
  image: string;
  label: string;
  title: string;
  description: string;
  index: number;
}

const TimelineCard = ({ image, label, title, description, index }: TimelineCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      whileHover={{ y: -4 }}
      className="bg-card rounded-[24px] p-2 shadow-soft transition-shadow hover:shadow-hover"
    >
      <div className="aspect-[3/4] rounded-[16px] overflow-hidden bg-muted">
        <motion.img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
          whileHover={{ scale: 1.02, rotate: -1 }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        />
      </div>
      <div className="p-6">
        <span className="text-accent font-bold tracking-widest text-xs uppercase">
          {label}
        </span>
        <h3 className="text-2xl font-display mt-2 mb-3 text-foreground tracking-tight">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed max-w-[55ch]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default TimelineCard;
