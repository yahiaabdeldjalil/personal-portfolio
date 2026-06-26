"use client";

import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "./theme-provider";
import { AnalyticsEvents, track } from "@/lib/analytics";
import { useState } from "react";
import useAnalyticsSection from "@/hooks/useAnalyticsSection";

const username = "yahia-abdeldjalil";

export default function GithubSection() {
  const { resolvedTheme } = useTheme();
  const sectionRef = useAnalyticsSection(AnalyticsEvents.GITHUB_ACTVITY_VIEW, undefined, 0.5);
  return (
    <section
      ref={sectionRef}
      id="github"
      className="
        scroll-mt-32
        py-6
        max-w-7xl
        mx-auto
        px-6
        lg:px-8
      "
    >
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
        className="mb-16"
      >
        <h2
          className="
            text-5xl
            md:text-6xl
            font-black
            text-white
            light:text-slate-900
            mb-6
          "
        >
          GitHub Activity
        </h2>

        <p
          className="
            text-slate-400
            light:text-slate-650
            text-lg
            max-w-3xl
          "
        >
          Open source projects, networking research,
          AI experiments and software engineering work.
        </p>
      </motion.div>

      {/* STATS */}
      <div
        className="
          grid
          md:grid-cols-4
          gap-6
          mb-10
        "
      >
        {[
          ["AI", "Machine Learning"],
          ["5G", "Networking"],
          ["QUIC", "Research"],
          ["OSS", "Projects"],
        ].map(([value, label]) => (
          <div
            key={value}
            className="
              rounded-3xl
              border
              border-white/10
              light:border-slate-200
              bg-white/[0.03]
              light:bg-white
              backdrop-blur-xl
              p-6
              text-center
              shadow-sm
            "
          >
            <div
              className="
                text-3xl
                font-black
                text-blue-400
                text-shadow-md
                text-shadow-blue-400
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

      {/* CALENDAR */}
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
        className="
          rounded-3xl
          border
          border-white/10
          light:border-slate-200
          bg-white/[0.03]
          light:bg-white
          backdrop-blur-xl
          p-6
          md:p-10
          overflow-x-auto
          shadow-[0_0_50px_rgba(139,92,246,0.12)]
          light:shadow-[0_15px_40px_rgba(99,102,241,0.04)]
        "
      >
        <GitHubCalendar
          username={username}
          colorScheme={resolvedTheme}
          fontSize={14}
        />
      </motion.div>

      {/* BUTTON */}
      <div className="mt-10">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-3
            rounded-2xl
            border
            border-blue-500/30
            light:border-blue-500/40
            bg-blue-500/10
            light:bg-blue-50
            px-6
            py-4
            text-white
            light:text-blue-750
            font-semibold
            hover:bg-blue-500/20
            light:hover:bg-blue-500/10
            transition-all
            cursor-pointer
          "
          onClick={()=>track(AnalyticsEvents.GITHUB_CLICK)}
        >
          <FaGithub size={22} />
          Visit GitHub Profile
        </a>
      </div>
    </section>
  );
}