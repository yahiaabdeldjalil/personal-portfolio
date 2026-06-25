// components/projects.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ProjectModal from "@/components/project-modal";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        scroll-mt-32
        py-6
        max-w-7xl
        mx-auto
        px-6
        lg:px-8
      "
    >
      <motion.h2
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="
          text-5xl
          font-black
          text-white
          light:text-slate-900
          mb-14
        "
      >
        Featured Projects
      </motion.h2>

      <div
        className="
          grid
          lg:grid-cols-2
          gap-10
        "
      >
        {projects.map((project, index) => (
          <ProjectModal
            key={project.title}
            project={project}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                cursor-pointer
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                light:border-slate-200
                bg-white/[0.03]
                light:bg-white
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-violet-500/30
                light:hover:border-violet-500/20
                shadow-[0_0_30px_rgba(59,130,246,0.08)]
                light:shadow-[0_10px_35px_rgba(99,102,241,0.04)]
                hover:shadow-[0_0_70px_rgba(139,92,246,0.20)]
                light:hover:shadow-[0_20px_50px_rgba(139,92,246,0.08)]
              "
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-950/80
                    light:from-slate-100/10
                    via-transparent
                    to-transparent
                  "
                />
              </div>

              <div className="p-8">
                <div
                  className="
                    inline-flex
                    rounded-full
                    border
                    border-violet-500/20
                    light:border-violet-500/30
                    bg-violet-500/10
                    light:bg-violet-50
                    px-4
                    py-1
                    text-sm
                    text-violet-300
                    light:text-violet-700
                    font-medium
                  "
                >
                  {project.badge}
                </div>

                <h3
                  className="
                    mt-4
                    text-3xl
                    font-bold
                    text-white
                    light:text-slate-950
                  "
                >
                  {project.title}
                </h3>

                <div
                  className="
                    mt-6
                    text-violet-300
                    light:text-violet-650
                    font-semibold
                  "
                >
                  View Case Study & Details →
                </div>
              </div>
            </motion.div>
          </ProjectModal>
        ))}
      </div>
    </section>
  );
}