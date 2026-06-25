"use client";

import { motion } from "framer-motion";
import {GitHubCalendar} from "react-github-calendar";
import { FaGithub } from "react-icons/fa";

const username = "yahia-abdeldjalil";

export default function GithubSection() {
  return (
    <section
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
            mb-6
          "
        >
          GitHub Activity
        </h2>

        <p
          className="
            text-slate-400
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

              bg-white/[0.03]

              backdrop-blur-xl

              p-6

              text-center
            "
          >
            <div
              className="
                text-3xl
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

          bg-white/[0.03]

          backdrop-blur-xl

          p-6
          md:p-10

          overflow-x-auto

          shadow-[0_0_50px_rgba(139,92,246,0.12)]
        "
      >
        <GitHubCalendar
          username={username}
          colorScheme="dark"
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
            border-violet-500/30

            bg-violet-500/10

            px-6
            py-4

            text-white

            hover:bg-violet-500/20

            transition-all
          "
        >
          <FaGithub size={22} />
          Visit GitHub Profile
        </a>
      </div>
    </section>
  );
}