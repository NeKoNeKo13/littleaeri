import { motion } from "framer-motion";
import heroImage from "@/assets/hero-baby.jpg";

const HeroSection = () => {
  return (
    <section className="relative pb-16 pt-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        className="text-center mb-10"
      >
        <span className="text-accent font-bold tracking-widest text-xs uppercase">
          The Sunbeam Archive
        </span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display tracking-tighter text-foreground mt-4 mb-4">
          Documenting Lily's<br />First Trip Around the Sun
        </h1>
        <p className="text-lg text-muted-foreground max-w-[50ch] mx-auto leading-relaxed">
          A collection of golden moments, tiny milestones, and the small wonders
          that make up her story so far.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="bg-card rounded-[24px] p-2 shadow-soft max-w-2xl mx-auto"
      >
        <div className="aspect-[4/5] rounded-[16px] overflow-hidden">
          <img
            src={heroImage}
            alt="Baby Lily smiling in the garden"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6 text-center">
          <p className="text-muted-foreground text-sm">
            <span className="font-semibold text-foreground tabular-nums">11 Months, 2 Days</span>{" "}
            — Latest Chapter
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
