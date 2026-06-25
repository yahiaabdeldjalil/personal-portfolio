// components/skills.tsx
"use client";

import { motion } from "framer-motion";

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
    color: "from-violet-500/20 to-fuchsia-500/20",
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
        icon: <SiTensorflow />,
      },
      {
        name: "PyTorch",
        icon: <SiPytorch />,
      },
    ],
  },

  {
    title: "Networking & Security",
    color: "from-cyan-500/20 to-blue-500/20",
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
    color: "from-emerald-500/20 to-cyan-500/20",
    skills: [
      {
        name: "Python",
        icon: <FaPython />,
      },
      {
        name: "Java",
        icon: <FaJava />,
      },
      {
        name: "React",
        icon: <FaReact />,
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
        icon: <FaDocker />,
      },
      {
        name: "Linux",
        icon: <FaLinux />,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
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
          "
        >
          Skills & Expertise
        </h2>

        <p
          className="
            mt-6
            max-w-3xl
            text-slate-400
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

              bg-white/[0.03]

              backdrop-blur-xl

              p-8

              text-center
            "
          >
            <div
              className="
                text-4xl
                font-black
                text-violet-400
              "
            >
              {value}
            </div>

            <div className="text-slate-400 mt-2">
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

              bg-white/[0.03]

              backdrop-blur-xl

              p-8

              transition-all
              duration-500

              hover:border-violet-500/30

              hover:shadow-[0_0_60px_rgba(139,92,246,0.15)]
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
              `}
            />

            <div className="relative z-10">
              <h3
                className="
                  text-2xl
                  font-bold
                  text-white
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

                      bg-slate-950/40

                      px-4
                      py-3

                      transition-all
                      duration-300

                      hover:border-violet-500/30
                    "
                  >
                    <div
                      className="
                        text-2xl
                        text-violet-400
                        min-w-[32px]
                      "
                    >
                      {skill.icon}
                    </div>

                    <span
                      className="
                        text-slate-200
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