"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import { SectionHeader } from "../ui/SectionHeader";
import { FaTrophy } from "react-icons/fa";

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="Achievements" subtitle="Milestones and recognitions I've received." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {content.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors"
            >
              <div className="w-12 h-12 bg-yellow-500/10 text-yellow-500 rounded-full flex items-center justify-center shrink-0">
                <FaTrophy size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold">{achievement.title}</h3>
                <span className="text-blue-400 text-sm font-medium">{achievement.year}</span>
                <p className="text-zinc-400 mt-2">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
