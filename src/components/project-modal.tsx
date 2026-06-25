"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  FaGithub,
  FaProjectDiagram,
  FaServer,
  FaChartLine,
  FaLightbulb,
  FaExclamationTriangle
} from "react-icons/fa";
import ArchitectureDiagram from "@/components/architecture-diagram";
import { useState } from "react";

export default function ProjectModal({
  project,
  children,
}: {
  project: any;
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState("overview");
  const tabs = [
    "overview",
    "architecture",
    "challenges",
    "results",
    "lessons"];
  const icons = {
    "overview": <FaServer size={20} color="violet-500"/>,
    "architecture": <FaProjectDiagram size={20} color="green-500" />,
    "challenges": <FaExclamationTriangle size={20} color="yellow-500" />,
    "results": <FaChartLine size={20} color="blue-500" />,
    "lessons": <FaLightbulb size={20} color="orange-500" />
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>

      <DialogContent
        className="
    w-[95vw]
    max-w-7xl

    h-[88vh]

    overflow-y-auto

    bg-slate-950/80
    backdrop-blur-3xl

    border
    border-white/10

    shadow-[0_0_80px_rgba(139,92,246,0.15)]

    text-white
    scroll-smooth
  "
      >
        <DialogHeader>
          <DialogTitle
            className="
              text-4xl
              font-black
              text-white
            "
          >
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div
          className="
    grid
    lg:grid-cols-[260px_1fr]
    gap-8
  "
        >
          {/* SIDEBAR */}

          <div className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
        w-full
        text-left
        px-4
        py-3
        rounded-xl
        transition-all
        hover:cursor-pointer         
        ${activeTab === tab
                    ? `
              bg-violet-500/15
              border border-violet-500/30
              text-violet-300
            `
                    : `
              text-slate-400
              hover:bg-white/5
            `
                  }
      `}
              >
                <div className="flex items-center space-x-2">
                  <>{icons[tab]}</>
                  <h1>
                    {tab.charAt(0).toUpperCase() +
                      tab.slice(1)}
                  </h1>
                </div>
              </button>
            ))}
            <div className="mt-10">
              <div className="text-xs tracking-widest text-slate-500 mb-4">
                TECHNOLOGIES
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map(
                  (tech: string) => (
                    <span
                      key={tech}
                      className="
                        px-3
                        py-1

                        rounded-full

                        bg-slate-900
                        border
                        border-white/10

                        text-xs
                        text-slate-300
                      "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
    flex
    items-center
    gap-3

    px-4
    py-3

    rounded-xl

    bg-white/5

    border
    border-white/10

    hover:border-violet-500/40

    transition-all
  "
            >
              <FaGithub size={20} />

              <span>
                View Source Code
              </span>
            </a>
          </div>


          {/* MAIN CONTENT */}

          <main
            className="
              min-w-0
              space-y-12
            "
          >
            {/* HERO IMAGE */}

            <div
              className="
    relative

    h-40
    md:h-56

    rounded-2xl
    overflow-hidden

    border
    border-white/10
  "
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />

              <div
                className="
                  absolute
                  inset-0

                  bg-linear-to-t
                  from-slate-950
                  via-transparent
                  to-transparent
                "
              />
            </div>
            {/* OVERVIEW */}
            {activeTab === "overview" && (
              <section>
                <h3 className="text-2xl font-bold mb-4">
                  Overview
                </h3>

                <p className="text-slate-300 leading-8">
                  {project.sections.overview}
                </p>
              </section>
            )}
            {/* ARCHITECTURE */}

            {activeTab === "architecture" && (
              <section>
                <h3 className="text-2xl font-bold mb-6">
                  System Architecture
                </h3>

                <ArchitectureDiagram
                  steps={project.sections.architecture.architectureSteps || null}
                />

                <p className="mt-6 text-slate-300">
                  {project.sections.architecture.overview}
                </p>
              </section>
            )}

            {/* CHALLENGES */}

            {activeTab === "challenges" && (
              <section className="">
                <h3 className="text-2xl font-bold mb-4">
                  Challenges
                </h3>

                <ul className="space-y-4">
                  {project.sections.challenges.map(
                    (challenge: string) => (
                      <li
                        key={challenge}
                        className="
              p-4
              rounded-xl
              bg-white/4
            "
                      >
                        {challenge}
                      </li>
                    )
                  )}
                </ul>
              </section>
            )}

            {/* RESULTS */}

            {activeTab === "results" && (
              <section>
                <h3 className="text-2xl font-bold mb-4">
                  Results
                </h3>

                <ul className="space-y-4">
                  {project.sections.results.map(
                    (result: string) => (
                      <li
                        key={result}
                        className="
              p-4
              rounded-xl

              bg-emerald-500/10

              border
              border-emerald-500/20
            "
                      >
                        ✓ {result}
                      </li>
                    )
                  )}
                </ul>
              </section>
            )}

            {/* LESSONS */}

            {activeTab === "lessons" && (
              <section>
                <h3 className="text-2xl font-bold mb-4">
                  Lessons Learned
                </h3>

                <p className="text-slate-300 leading-8">
                  {project.sections.lessons}
                </p>
              </section>
            )}
          </main>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function MetricCard({
  value,
  label,
  color,
}: {
  value: string;
  label: string;
  color: string;
}) {
  return (
    <div
      className="
        rounded-2xl

        border
        border-white/10

        bg-slate-900/60

        p-6
      "
    >
      <div
        className={`
          text-3xl
          font-black
          ${color}
        `}
      >
        {value}
      </div>

      <div className="text-slate-400 mt-2">
        {label}
      </div>
    </div>
  );
}