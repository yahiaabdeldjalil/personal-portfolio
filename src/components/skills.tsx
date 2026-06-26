// components/skills.tsx
"use client";

import useAnalyticsSection from "@/hooks/useAnalyticsSection";
import { AnalyticsEvents, track } from "@/lib/analytics";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaPython,
  FaLinux,
  FaDocker,
  FaJava,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTensorflow,
  SiPytorch,
  SiNextdotjs,
  SiWireshark,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Artificial Intelligence",
    color: "from-violet-500/20 to-fuchsia-500/20 light:from-violet-500/10 light:to-fuchsia-500/10",
    skills: [
      {
        name: "Machine Learning",
        icon: "🧠",
      },
      {
        name: "Deep Learning",
        icon: "⚡",
      },
      {
        name: "TensorFlow",
        icon: <SiTensorflow color="#FF6F00"/>,
      },
      {
        name: "PyTorch",
        icon: <SiPytorch color="#EE4C2C"/>,
      },
    ],
  },

  {
    title: "Networking & Security",
    color: "from-cyan-500/20 to-blue-500/20 light:from-cyan-500/10 light:to-blue-500/10",
    skills: [
      {
        name: "Cybersecurity",
        icon: "🛡️",
      },
      {
        name: "Network Engineering",
        icon: "🌐",
      },
      {
        name: "5G",
        icon: "📡",
      },
      {
        name: "Wireshark",
        icon: <SiWireshark />,
      },
      {
        name: "Free5GC",
        icon: "⚙️",
      },
    ],
  },

  {
    title: "Software Engineering",
    color: "from-emerald-500/20 to-cyan-500/20 light:from-emerald-500/10 light:to-cyan-500/10",
    skills: [
      {
        name: "Python",
        icon: <FaPython color="#3776AB"/>,
      },
      {
        name: "Java",
        icon: <FaJava />,
      },
      {
        name: "React",
        icon: <FaReact color="#2496ED"/>,
      },
      {
        name: "NextJS",
        icon: <SiNextdotjs />,
      },
      {
        name: "Git",
        icon: <FaGitAlt />,
      },
      {
        name: "Docker",
        icon: <FaDocker color="#2496ED"/>,
      },
      {
        name: "Linux",
        icon: <FaLinux color="#FCC624"/>,
      },
    ],
  },
];

export default function Skills() {
  const sectionRef = useAnalyticsSection(AnalyticsEvents.SKILLS_VIEW, undefined, 0.5);
  return (
    <section
      ref={sectionRef}
      id="skills"
      className="
        scroll-mt-32
        py-6
        max-w-7xl
        mx-auto
        px-6
        lg:px-8
      "
    >
      {/* HEADER */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="mb-4"
      >
        <h2
          className="
            text-5xl
            md:text-6xl
            font-black
            text-white
            light:text-slate-900
          "
        >
          Skills & Expertise
        </h2>

        <p
          className="
            mt-6
            max-w-3xl
            text-slate-400
            light:text-slate-650
            text-lg
          "
        >
          Building intelligent systems across AI,
          cybersecurity, networking and software engineering.
        </p>
      </motion.div>

      {/* STATS */}
      <div
        className="
          grid
          md:grid-cols-4
          gap-6
          mb-20
        "
      >
        {[
          ["5+", "Years Learning"],
          ["15+", "Technologies"],
          ["10+", "Projects"],
          ["4", "Domains"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="
              rounded-3xl
              border
              border-white/10
              light:border-slate-200
              bg-white/[0.03]
              light:bg-white
              backdrop-blur-xl
              p-8
              text-center
              shadow-sm
              light:shadow-[0_10px_30px_rgba(99,102,241,0.03)]
            "
          >
            <div
              className="
                text-4xl
                font-black
                text-blue-400
                light:text-blue-650
                // text shadow position left
                text-shadow-blue-500
                text-shadow-lg
                light:text-shadow-black
              "
            >
              {value}
            </div>

            <div className="text-slate-400 light:text-slate-500 mt-2 font-medium">
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* SKILL GROUPS */}
      <div
        className="
          grid
          lg:grid-cols-3
          gap-8
        "
      >
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
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
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
            }}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              light:border-slate-200
              bg-white/[0.03]
              light:bg-white
              backdrop-blur-xl
              p-8
              transition-all
              duration-500
              hover:border-violet-500/30
              light:hover:border-violet-500/20
              hover:shadow-[0_0_60px_rgba(139,92,246,0.15)]
              light:hover:shadow-[0_15px_40px_rgba(139,92,246,0.05)]
            "
          >
            {/* Glow */}
            <div
              className={`
                absolute
                inset-0
                bg-gradient-to-br
                ${group.color}
                opacity-50
                light:opacity-30
              `}
            />

            <div className="relative z-10">
              <h3
                className="
                  text-2xl
                  font-bold
                  text-white
                  light:text-slate-900
                  mb-8
                "
              >
                {group.title}
              </h3>

              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-xl
                      border
                      border-white/5
                      light:border-slate-200/60
                      bg-slate-950/40
                      light:bg-slate-50
                      px-4
                      py-3
                      transition-all
                      duration-300
                      hover:border-violet-500/30
                      light:hover:border-violet-500/20
                    "
                  >
                    <div
                      className="
                        text-2xl
                        text-violet-400
                        light:text-violet-600
                        min-w-[32px]
                      "
                    >
                      {skill.icon}
                    </div>

                    <span
                      className="
                        text-slate-200
                        light:text-slate-700
                        font-medium
                      "
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}