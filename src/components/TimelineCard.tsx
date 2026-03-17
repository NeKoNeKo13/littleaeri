import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

interface TimelineCardProps {
  images: string[];
  label: string;
  title: string;
  description: string;
  index: number;
}

const TimelineCard = ({ images, label, title, description, index }: TimelineCardProps) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const hasMultiple = images.length > 1;

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + images.length) % images.length);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 50) {
      go(info.offset.x > 0 ? -1 : 1);
    }
  };

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
      <div className="relative aspect-[4/5] rounded-[16px] overflow-hidden bg-muted group">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.img
            key={current}
            src={images[current]}
            alt={`${title} — photo ${current + 1}`}
            className="object-cover w-full h-full absolute inset-0 touch-pan-y"
            initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            drag={hasMultiple ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={handleDragEnd}
          />
        </AnimatePresence>

        {hasMultiple && (
          <>
            <button
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/90"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>
            <button
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/90"
              aria-label="Next photo"
            >
              <ChevronRight className="w-4 h-4 text-foreground" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    i === current
                      ? "bg-background w-4"
                      : "bg-background/50"
                  }`}
                  aria-label={`Go to photo ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
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
