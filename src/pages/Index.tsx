import HeroSection from "@/components/HeroSection";
import TimelineCard from "@/components/TimelineCard";
import StatsBar from "@/components/StatsBar";
import { motion } from "framer-motion";

import newbornImg from "@/assets/newborn.jpg";
import firstStepsImg from "@/assets/first-steps.jpg";
import beachImg from "@/assets/beach-day.jpg";
import birthdayImg from "@/assets/first-birthday.jpg";
import heroImg from "@/assets/hero-baby.jpg";

const events = [
{
  image: "/lovable-uploads/7884deb5-deac-4f7b-9bdf-e82e2c5f1d2e.jpg",
  label: "Day 01 — June 21",
  title: "The Day Everything Changed",
  description:
  "She arrived at 6:42 AM, weighing 3.2 kg, with the tiniest hands we'd ever seen. The room was quiet except for her first breath — and then, everything was different."
},
{
  image: firstStepsImg,
  label: "Month 09 — December 8",
  title: "Ten Wobbly Steps",
  description:
  "Between the coffee table and the couch — ten whole steps. She looked as surprised as we were. Then she sat down, laughed, and did it again."
},
{
  image: beachImg,
  label: "Month 07 — October 20",
  title: "First Touch of Sand",
  description:
  "She wasn't sure about the sand at first, squeezing it between her fingers with deep suspicion. By sunset, she was digging like she'd done it her whole life."
},
{
  image: heroImg,
  label: "Month 06 — September 12",
  title: "The First Taste of Watermelon",
  description:
  "A sticky, red-faced afternoon in the garden. She wasn't sure at first, but by the third bite, we had a fan. The dress didn't survive."
},
{
  image: birthdayImg,
  label: "Month 12 — March 15",
  title: "One Whole Trip Around the Sun",
  description:
  "One candle, one cake, and the whole family gathered around. She smashed the cake with both hands and grinned through the frosting. A perfect first birthday."
}];


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <HeroSection />

        <StatsBar />

        {/* Timeline */}
        <section className="py-16 relative">
          {/* The thread line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] border-l-2 border-dashed border-primary/20 -translate-x-1/2 hidden sm:block" />

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold uppercase tracking-widest text-accent/80 text-center mb-12">
            
            Her Story So Far
          </motion.h2>

          <div className="grid gap-10">
            {events.map((event, i) =>
            <TimelineCard key={i} {...event} index={i} />
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center border-t border-border">
          <p className="text-sm text-muted-foreground font-body">
            Made with love — From Mama & Papa  © 2025
          </p>
        </footer>
      </div>
    </div>);

};

export default Index;