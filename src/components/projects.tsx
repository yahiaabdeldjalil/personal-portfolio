"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import ProjectModal from "@/components/project-modal";

import { projects } from "@/lib/projects";
import {
  AnalyticsEvents,
  track,
} from "@/lib/analytics";

import useAnalyticsSection from "@/hooks/useAnalyticsSection";

export default function Projects() {
  const sectionRef = useAnalyticsSection(AnalyticsEvents.PROJECTS_VIEW, undefined, 0.5);
  return (
    <section
      ref={sectionRef}
      id="projects"
      className="
        scroll-mt-32
        py-8
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
          mb-14

          text-4xl
          md:text-5xl

          font-black

          text-white
          light:text-slate-900
        "
      >
        Featured Projects
      </motion.h2>

      <div
        className="
          grid

          gap-8

          md:grid-cols-2
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
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              onClick={() =>
                track(
                  AnalyticsEvents.PROJECT_CARD_CLICK,
                  {
                    project: project.title,
                  }
                )
              }
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
              {/* IMAGE */}

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
                    via-transparent
                    to-transparent
                  "
                />
              </div>

              {/* CONTENT */}

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
                    font-medium

                    text-violet-300
                  "
                >
                  {project.badge}
                </div>

                <h3
                  className="
                    mt-4

                    text-2xl
                    md:text-3xl

                    font-bold

                    text-white
                  "
                >
                  {project.title}
                </h3>

                <div
                  className="
                    mt-6

                    font-semibold

                    text-violet-300

                    transition-all

                    group-hover:translate-x-1
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