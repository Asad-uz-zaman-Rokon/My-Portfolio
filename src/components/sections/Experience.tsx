"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import { SectionHeader } from "../ui/SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-zinc-950/50">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader title="Experience & Education" subtitle="My professional and academic journey." />

        <div className="mt-16 space-y-12">
          <div className="relative border-l-2 border-zinc-800 pl-8 ml-4 md:ml-0">
            {content.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-12 relative"
              >
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[41px] top-1 ring-4 ring-black" />
                <span className="text-blue-400 text-sm font-bold tracking-widest uppercase">{exp.duration}</span>
                <h3 className="text-2xl font-bold mt-2">{exp.role}</h3>
                <h4 className="text-lg text-zinc-300 font-medium mb-4">{exp.company}</h4>
                <p className="text-zinc-400 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}

            {content.education.map((edu, index) => (
              <motion.div
                key={`edu-${index}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: (content.experience.length + index) * 0.2 }}
                className="mb-12 relative"
              >
                <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[41px] top-1 ring-4 ring-black" />
                <span className="text-purple-400 text-sm font-bold tracking-widest uppercase">{edu.year}</span>
                <h3 className="text-2xl font-bold mt-2">{edu.degree}</h3>
                <h4 className="text-lg text-zinc-300 font-medium mb-2">{edu.university}{edu.cgpa ? ` (CGPA: ${edu.cgpa})` : ""}</h4>
                <div className="flex flex-wrap gap-2 mt-4">
                  {edu.coursework.map((course, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-zinc-900 border border-white/5 rounded-full text-zinc-400">
                      {course}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
