// components/hero.tsx

"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaPython,
  FaDocker,
  FaLinux,
} from "react-icons/fa";

import {
  SiPytorch,
  SiTensorflow,
} from "react-icons/si";

const skills = [
  "Cybersecurity",
  "Machine Learning",
  "5G Networks",
  "AI Agents",
  "Distributed Systems",
];

export default function Hero() {
  return (
    <section
      className="
        relative

        min-h-screen

        flex
        items-center

        overflow-hidden

        pt-28
        lg:pt-20

        pb-20
      "
    >
      {/* BACKGROUND */}

      <div
        className="
          absolute
          inset-0
          -z-10
          pointer-events-none
        "
      >
        <div
          className="
            absolute
            -top-40
            -left-40

            w-[350px]
            h-[350px]

            sm:w-[500px]
            sm:h-[500px]

            lg:w-[700px]
            lg:h-[700px]

            rounded-full

            bg-cyan-500/10

            blur-[120px]
            lg:blur-[180px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0

            w-[350px]
            h-[350px]

            sm:w-[500px]
            sm:h-[500px]

            lg:w-[700px]
            lg:h-[700px]

            rounded-full

            bg-violet-500/10

            blur-[120px]
            lg:blur-[180px]
          "
        />
      </div>

      <div
        className="
          max-w-7xl
          mx-auto

          px-6
          lg:px-8

          w-full
        "
      >
        <div
          className="
            grid
            lg:grid-cols-2

            gap-12
            lg:gap-16

            items-center
          "
        >
          {/* LEFT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            {/* STATUS */}

            <div
              className="
                inline-flex
                items-center
                gap-3

                rounded-full

                border
                border-cyan-500/20

                bg-cyan-500/10

                px-5
                py-2
              "
            >
              <div
                className="
                  h-2
                  w-2

                  rounded-full

                  bg-green-400

                  animate-pulse
                "
              />

              <span
                className="
                  text-cyan-300
                  text-xs
                  sm:text-sm
                "
              >
                Available for Projects & Research
              </span>
            </div>

            {/* NAME */}

            <h1
              className="
                mt-8

                text-5xl
                sm:text-6xl
                md:text-7xl
                xl:text-8xl

                font-black

                tracking-tight

                text-white
              "
            >
              Yahia
            </h1>

            {/* TITLE */}

            <h2
              className="
                mt-6

                text-xl
                sm:text-2xl
                md:text-3xl
                lg:text-4xl

                font-semibold

                text-slate-300
              "
            >
              AI Engineer · Cybersecurity · Networks
            </h2>

            {/* TAGS */}

            <div
              className="
                mt-8

                flex
                flex-wrap

                gap-3
              "
            >
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="
                    rounded-full

                    border
                    border-violet-500/20

                    bg-violet-500/10

                    px-4
                    py-2

                    text-violet-300
                    text-sm
                  "
                >
                  {skill}
                </div>
              ))}
            </div>

            {/* DESCRIPTION */}

            <p
              className="
                mt-8

                max-w-2xl

                text-base
                sm:text-lg

                leading-relaxed

                text-slate-400
              "
            >
              Building intelligent systems, network
              infrastructure, cybersecurity solutions,
              machine learning pipelines and AI-powered
              applications.
            </p>

            {/* TERMINAL */}

            <div
              className="
                mt-8

                rounded-2xl

                border
                border-white/10

                bg-slate-950/60

                backdrop-blur-xl

                p-5

                font-mono
                text-sm
              "
            >
              <div className="text-green-400">
                yahia@portfolio:~$
              </div>

              <div className="text-slate-300 mt-2">
                Initializing AI agents...
              </div>

              <div className="text-slate-300">
                Loading QUIC classifier...
              </div>

              <div className="text-slate-300">
                Deploying network infrastructure...
              </div>

              <div className="text-cyan-400 mt-2">
                Status: Online █
              </div>
            </div>

            {/* MOBILE CARD */}

            <div
              className="
                mt-8

                lg:hidden

                rounded-3xl

                border
                border-white/10

                bg-white/[0.04]

                backdrop-blur-xl

                p-6
              "
            >
              <div className="text-3xl font-black text-white">
                YA
              </div>

              <div className="text-slate-400">
                Yahia Abdeldjalil
              </div>

              <div className="mt-4 text-cyan-300 text-sm">
                AI Research • Cybersecurity • Networks
              </div>
            </div>

            {/* MOBILE STATS */}

            <div
              className="
                mt-8

                grid
                grid-cols-3

                gap-4

                lg:hidden
              "
            >
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                <div className="text-2xl font-black text-white">
                  20+
                </div>

                <div className="text-slate-500 text-xs">
                  Projects
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                <div className="text-2xl font-black text-white">
                  AI
                </div>

                <div className="text-slate-500 text-xs">
                  Research
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                <div className="text-2xl font-black text-white">
                  5G
                </div>

                <div className="text-slate-500 text-xs">
                  Networks
                </div>
              </div>
            </div>

            {/* BUTTONS */}

            <div
              className="
                mt-12

                flex
                flex-col
                sm:flex-row

                gap-4
              "
            >
              <a
                href="#projects"
                className="
                  text-center

                  rounded-xl

                  bg-cyan-600

                  px-8
                  py-4

                  font-semibold

                  text-white

                  transition-all

                  hover:bg-cyan-500
                "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="
                  text-center

                  rounded-xl

                  border
                  border-white/10

                  bg-white/5

                  backdrop-blur

                  px-8
                  py-4

                  text-white

                  transition-all

                  hover:border-violet-500/40
                "
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
              hidden
              lg:block

              max-w-[520px]
              mx-auto
            "
          >
            <div
              className="
                relative

                rounded-[32px]

                border
                border-white/10

                bg-white/[0.04]

                backdrop-blur-xl

                overflow-hidden

                shadow-[0_0_80px_rgba(139,92,246,0.15)]
              "
            >
              <motion.div
                animate={{
                  y: ["-100%", "500%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "linear",
                }}
                className="
                  absolute
                  left-0
                  right-0

                  h-20

                  bg-gradient-to-b
                  from-transparent
                  via-cyan-400/10
                  to-transparent
                "
              />

              <div className="p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-black text-white">
                      YA
                    </div>

                    <div className="text-slate-400">
                      Yahia Abdeldjalil
                    </div>
                  </div>

                  <FaGithub
                    size={30}
                    className="text-slate-400"
                  />
                </div>

                <div className="mt-8 rounded-2xl border border-green-500/20 bg-green-500/5 p-4">
                  <div className="text-green-400">
                    ● SYSTEM ONLINE
                  </div>

                  <div className="text-slate-400 text-sm mt-2">
                    AI Research • Cybersecurity •
                    Network Engineering
                  </div>
                </div>

                {/* TECHNOLOGY STACK */}

<div className="mt-8">
  <div className="text-slate-500 mb-4">
    TECHNOLOGY STACK
  </div>

  <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
    <div
      className="
        flex
        items-center
        justify-center

        rounded-xl

        bg-slate-900/50

        border
        border-white/10

        p-4

        hover:scale-110
        transition
      "
    >
      <FaPython
        size={30}
        color="#3776AB"
      />
    </div>

    <div
      className="
        flex
        items-center
        justify-center

        rounded-xl

        bg-slate-900/50

        border
        border-white/10

        p-4

        hover:scale-110
        transition
      "
    >
      <FaDocker
        size={30}
        color="#2496ED"
      />
    </div>

    <div
      className="
        flex
        items-center
        justify-center

        rounded-xl

        bg-slate-900/50

        border
        border-white/10

        p-4

        hover:scale-110
        transition
      "
    >
      <FaLinux
        size={30}
        color="#FCC624"
      />
    </div>

    <div
      className="
        flex
        items-center
        justify-center

        rounded-xl

        bg-slate-900/50

        border
        border-white/10

        p-4

        hover:scale-110
        transition
      "
    >
      <SiTensorflow
        size={30}
        color="#FF6F00"
      />
    </div>

    <div
      className="
        flex
        items-center
        justify-center

        rounded-xl

        bg-slate-900/50

        border
        border-white/10

        p-4

        hover:scale-110
        transition
      "
    >
      <SiPytorch
        size={30}
        color="#EE4C2C"
      />
    </div>

    <div
      className="
        flex
        items-center
        justify-center

        rounded-xl

        bg-slate-900/50

        border
        border-white/10

        p-4

        hover:scale-110
        transition
      "
    >
      <FaGithub
        size={30}
        color="#ffffff"
      />
    </div>
  </div>
</div>

                <div className="mt-8">
                  <div className="text-slate-500 mb-4">
                    CURRENT FOCUS
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-xl bg-cyan-500/10 border border-cyan-500/20 p-4">
                      QUIC Traffic Classification
                    </div>

                    <div className="rounded-xl bg-violet-500/10 border border-violet-500/20 p-4">
                      AI Agents
                    </div>

                    <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-4">
                      5G Core Networks
                    </div>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-3xl font-black text-white">
                      20+
                    </div>
                    <div className="text-slate-500 text-sm">
                      Projects
                    </div>
                  </div>

                  <div>
                    <div className="text-3xl font-black text-white">
                      AI
                    </div>
                    <div className="text-slate-500 text-sm">
                      Research
                    </div>
                  </div>

                  <div>
                    <div className="text-3xl font-black text-white">
                      5G
                    </div>
                    <div className="text-slate-500 text-sm">
                      Networks
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}