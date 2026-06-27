"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import { SectionHeader } from "../ui/SectionHeader";
import { FaCode, FaBrain, FaRocket } from "react-icons/fa";

export function About() {
  const cards = [
    {
      icon: FaCode,
      title: "Development",
      description: content.about.passion,
    },
    {
      icon: FaBrain,
      title: "AI Integration",
      description: content.about.aiInterest,
    },
    {
      icon: FaRocket,
      title: "Problem Solving",
      description: content.about.mindset,
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="About Me" subtitle={content.about.introduction} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl backdrop-blur-sm"
              >
                <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
