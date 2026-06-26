"use client";

import useAnalyticsSection from "@/hooks/useAnalyticsSection";
import { AnalyticsEvents, track } from "@/lib/analytics";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const terminalLines = [
  "$ whoami",
  "Yahia",

  "Computer Science Engineer",

  "────────────────────",

  "Specializations:",

  "• Artificial Intelligence",
  "• Cybersecurity",
  "• Machine Learning",
  "• Networking",
  "• Distributed Systems",

  "────────────────────",

  "Current Focus:",

  "• AI Assistants",
  "• QUIC Traffic Classification",
  "• 5G Core Networks",
  "• Network Security",
];

export default function About() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;

    terminalLines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
      }, index * 100);
    });
  }, [started]);
  const sectionRef = useAnalyticsSection(AnalyticsEvents.ABOUTME_VIEW, undefined, 0.5);
  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        scroll-mt-32
        py-10
        max-w-7xl
        mx-auto
        px-8
      "

    >
      <motion.h2
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
        className="
          text-5xl
          font-black
          text-white
          light:text-slate-950
          mb-10
        "
      >
        About Me
      </motion.h2>

      <div
        className="
          grid
          lg:grid-cols-2
          gap-10
        "
      >
        {/* TERMINAL */}
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          onViewportEnter={() => {
            if (!started) {
              setStarted(true);
            }
          }}
          className="
            rounded-3xl
            overflow-hidden
            border
            border-blue-500/20
            light:border-blue-500/30
            bg-slate-950/80
            light:bg-slate-50
            backdrop-blur-xl
            shadow-[0_0_60px_rgba(168,85,247,0.12)]
            light:shadow-[0_15px_40px_rgba(168,85,247,0.05)]
          "
        >
          {/* HEADER */}
          <div
            className="
              flex
              items-center
              gap-2
              px-5
              py-4
              border-b
              border-white/10
              light:border-slate-200
            "
          >
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />

            <span
              className="
                ml-4
                text-xs
                text-slate-500
                light:text-slate-400
              "
            >
              yahia@portfolio:~
            </span>
          </div>

          {/* BODY */}
          <div
            className="
              p-6
              min-h-[430px]
              font-mono
              text-sm
              md:text-base
            "
          >
            {visibleLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                className="
                  min-h-[24px]
                  whitespace-pre
                "
              >
                {line.startsWith("$") ? (
                  <span className="text-green-400 light:text-green-600 font-bold">
                    {line}
                  </span>
                ) : line.includes("──") ? (
                  <span className="text-slate-600 light:text-slate-300">
                    {line}
                  </span>
                ) : (
                  <span className="text-slate-300 light:text-slate-700">
                    {line}
                  </span>
                )}
              </motion.div>
            ))}

            {visibleLines.length <
              terminalLines.length && (
              <span
                className="
                  inline-block
                  w-2
                  h-5
                  bg-blue-400
                  light:bg-blue-600
                  animate-pulse
                "
              />
            )}
          </div>
        </motion.div>

        {/* PROFILE CARD */}
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            rounded-3xl
            border
            border-white/10
            light:border-slate-200
            bg-white/[0.03]
            light:bg-white
            backdrop-blur-xl
            p-8
            shadow-[0_0_40px_rgba(59,130,246,0.08)]
            light:shadow-[0_15px_45px_rgba(99,102,241,0.05)]
          "
        >
          <h3
            className="
              text-3xl
              font-bold
              text-white
              light:text-slate-950
              mb-6
            "
          >
            Building Intelligent Systems
          </h3>

          <p
            className="
              text-slate-300
              light:text-slate-650
              leading-8
              mb-6
            "
          >
            I design software systems at the
            intersection of Artificial
            Intelligence, Cybersecurity,
            Networking and Distributed
            Computing.
          </p>

          <p
            className="
              text-slate-400
              light:text-slate-500
              leading-8
              mb-6
            "
          >
            My projects range from encrypted
            traffic analysis and intrusion
            detection to 5G core networks,
            AI assistants and machine
            learning systems.
          </p>

          <p
            className="
              text-slate-400
              light:text-slate-500
              leading-8
            "
          >
            I enjoy solving difficult
            engineering problems and
            transforming research ideas
            into practical solutions.
          </p>

          {/* STATS */}
          <div
            className="
              mt-10
              grid
              grid-cols-2
              gap-4
            "
          >
            {[
              {
                title: "AI",
                desc: "Machine Learning",
              },
              {
                title: "5G",
                desc: "Networking",
              },
              {
                title: "SEC",
                desc: "Cybersecurity",
              },
              {
                title: "DS",
                desc: "Distributed Systems",
              },
            ].map((item) => (
              <motion.div
                whileHover={{
                  y: -4,
                }}
                key={item.title}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  light:border-slate-200
                  bg-white/[0.03]
                  light:bg-slate-50
                  p-4
                  shadow-sm
                "
              >
                <div
                  className="
                    text-2xl
                    font-bold
                    text-white
                    light:text-slate-950
                  "
                >
                  {item.title}
                </div>

                <div
                  className="
                    text-sm
                    text-slate-400
                    light:text-slate-550
                  "
                >
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}