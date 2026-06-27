"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import { SectionHeader } from "../ui/SectionHeader";

export function Skills() {
  const skillCategories = [
    { title: "Languages", items: content.skills.languages },
    { title: "Frontend", items: content.skills.frontend },
    { title: "Backend", items: content.skills.backend },
    { title: "Databases", items: content.skills.databases },
    { title: "Tools", items: content.skills.tools },
  ];

  return (
    <section id="skills" className="py-24 relative bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="My Skills" subtitle="The technologies and tools I work with every day." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/40 border border-white/5 p-6 rounded-3xl backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-6 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-black/50 border border-white/10 rounded-full text-sm font-medium text-zinc-300 hover:text-white hover:border-blue-500/50 transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
