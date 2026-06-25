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

                bg-white/[0.03]

                backdrop-blur-xl

                transition-all
                duration-500

                hover:border-violet-500/30

                shadow-[0_0_30px_rgba(59,130,246,0.08)]
                hover:shadow-[0_0_70px_rgba(139,92,246,0.20)]
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
                    from-slate-950
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

                    bg-violet-500/10

                    px-4
                    py-1

                    text-sm
                    text-violet-300
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
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-4

                    text-slate-400
                    leading-7
                  "
                >
                  {/* {project.overview} */}
                </p>

                {/* <div
                  className="
                    grid
                    grid-cols-3
                    gap-4

                    mt-6
                    mb-6
                  "
                >
                  <div>
                    <div className="text-xl font-bold text-white">
                      {project.stat1}
                    </div>

                    <div className="text-xs text-slate-500">
                      {project.label1}
                    </div>
                  </div>

                  <div>
                    <div className="text-xl font-bold text-white">
                      {project.stat2}
                    </div>

                    <div className="text-xs text-slate-500">
                      {project.label2}
                    </div>
                  </div>

                  <div>
                    <div className="text-xl font-bold text-white">
                      {project.stat3}
                    </div>

                    <div className="text-xs text-slate-500">
                      {project.label3}
                    </div>
                  </div>
                </div> */}

                {/* <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full

                        border
                        border-white/10

                        bg-slate-900

                        px-3
                        py-1

                        text-sm
                        text-slate-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}

                <div
                  className="
                    mt-6

                    text-violet-300
                    font-semibold
                  "
                >
                  View Case Study →
                </div>
              </div>
            </motion.div>
          </ProjectModal>
        ))}
      </div>
    </section>
  );
}