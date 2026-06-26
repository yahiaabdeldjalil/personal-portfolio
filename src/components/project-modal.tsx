"use client";

import { useState } from "react";
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
  FaExclamationTriangle,
} from "react-icons/fa";

import ArchitectureDiagram from "@/components/architecture-diagram";

import {useEffect} from "react";
import {AnalyticsEvents, track} from "@/lib/analytics";
type TabType =
  | "overview"
  | "architecture"
  | "challenges"
  | "results"
  | "lessons";

export default function ProjectModal({
  project,
  children,
}: {
  project: any;
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  const tabs: TabType[] = [
    "overview",
    "architecture",
    "challenges",
    "results",
    "lessons",
  ];

  const icons: Record<TabType, React.ReactNode> = {
    overview: (
      <FaServer
        size={18}
        className="text-violet-400 light:text-violet-650"
      />
    ),

    architecture: (
      <FaProjectDiagram
        size={18}
        className="text-cyan-400 light:text-cyan-600"
      />
    ),

    challenges: (
      <FaExclamationTriangle
        size={18}
        className="text-yellow-400 light:text-yellow-600"
      />
    ),

    results: (
      <FaChartLine
        size={18}
        className="text-emerald-400 light:text-emerald-650"
      />
    ),

    lessons: (
      <FaLightbulb
        size={18}
        className="text-orange-400 light:text-orange-600"
      />
    ),
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>

      <DialogContent
        className="
          w-[95vw]
          max-w-7xl
          h-[92vh]
          overflow-hidden
          bg-slate-950/90
          light:bg-white
          backdrop-blur-3xl
          border
          border-white/10
          light:border-slate-200
          text-white
          light:text-slate-900
          shadow-[0_0_80px_rgba(139,92,246,0.15)]
          light:shadow-[0_20px_50px_rgba(99,102,241,0.08)]
        "
      >
        <DialogHeader>
          <DialogTitle
            className="
              text-2xl
              md:text-4xl
              font-black
              text-white
              light:text-slate-950
            "
          >
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[280px_minmax(0,1fr)]
            gap-6
            h-full
            overflow-hidden
          "
        >
          {/* SIDEBAR */}
          <aside
            className="
              lg:sticky
              lg:top-0
              h-fit
              border-b
              lg:border-b-0
              lg:border-r
              border-white/10
              light:border-slate-200
              pb-4
              lg:pb-0
              lg:pr-4
            "
          >
            <div
              className="
                flex
                lg:flex-col
                gap-2
                overflow-x-auto
                lg:overflow-visible
              "
            >
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {setActiveTab(tab); track(AnalyticsEvents.PROJECT_TAB, { tab: tab })}}
                  className={`
                    shrink-0
                    px-4
                    py-3
                    rounded-xl
                    transition-all
                    text-left
                    hover:cursor-pointer
                    ${
                      activeTab === tab
                        ? `
                          bg-violet-500/15
                          light:bg-violet-500/10
                          border
                          border-violet-500/30
                          light:border-violet-500/20
                          text-violet-300
                          light:text-violet-755
                          font-semibold
                        `
                        : `
                          text-slate-400
                          light:text-slate-550
                          hover:bg-white/5
                          light:hover:bg-slate-100
                        `
                    }
                  `}
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    {icons[tab]}

                    <span className="capitalize">
                      {tab}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8">
              <div
                className="
                  text-xs
                  tracking-widest
                  text-slate-500
                  light:text-slate-400
                  mb-4
                  font-bold
                "
              >
                TECHNOLOGIES
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies?.map(
                  (tech: string) => (
                    <span
                      key={tech}
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-slate-900
                        light:bg-slate-50
                        border
                        border-white/10
                        light:border-slate-200
                        text-xs
                        text-slate-300
                        light:text-slate-650
                      "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-xl
                  bg-white/5
                  light:bg-slate-100
                  border
                  border-white/10
                  light:border-slate-200
                  text-white
                  light:text-slate-700
                  hover:border-violet-500/40
                  light:hover:border-violet-500/30
                  hover:bg-violet-500/10
                  light:hover:bg-slate-200/55
                  transition-all
                  font-semibold
                "
                onClick={() => track(AnalyticsEvents.PROJECT_GITHUB, {title: project.title})} 
              >
                <FaGithub size={20} />

                <span>
                  View Source Code
                </span>
              </a>
            )}
          </aside>

          {/* CONTENT */}
          <main
            className="
              overflow-y-auto
              pr-2
              space-y-8
            "
          >
            {/* IMAGE */}
            <div
              className="
                relative
                h-40
                md:h-56
                rounded-2xl
                overflow-hidden
                border
                border-white/10
                light:border-slate-200
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
                  bg-gradient-to-t
                  from-slate-950/80
                  light:from-slate-100/10
                  via-transparent
                  to-transparent
                "
              />
            </div>

            {/* OVERVIEW */}
            {activeTab === "overview" && (
              <section>
                <h3
                  className="
                    text-2xl
                    font-bold
                    mb-4
                    text-white
                    light:text-slate-950
                  "
                >
                  Overview
                </h3>

                <p
                  className="
                    text-slate-300
                    light:text-slate-650
                    leading-8
                  "
                >
                  {project.sections?.overview}
                </p>
              </section>
            )}

            {/* ARCHITECTURE */}
            {activeTab === "architecture" && (
              <section>
                <h3
                  className="
                    text-2xl
                    font-bold
                    mb-6
                    text-white
                    light:text-slate-950
                  "
                >
                  System Architecture
                </h3>

                <ArchitectureDiagram
                  steps={
                    project.sections?.architecture?.architectureSteps ?? []
                  }
                />

                <p
                  className="
                    mt-6
                    text-slate-300
                    light:text-slate-650
                    leading-8
                  "
                >
                  {project.sections?.architecture?.overview}
                </p>
              </section>
            )}

            {/* CHALLENGES */}
            {activeTab === "challenges" && (
              <section>
                <h3
                  className="
                    text-2xl
                    font-bold
                    mb-4
                    text-white
                    light:text-slate-950
                  "
                >
                  Challenges
                </h3>

                <ul className="space-y-4">
                  {project.sections?.challenges?.map(
                    (challenge: string) => (
                      <li
                        key={challenge}
                        className="
                          p-4
                          rounded-xl
                          bg-white/5
                          light:bg-slate-50
                          border
                          border-white/10
                          light:border-slate-200
                          text-slate-300
                          light:text-slate-650
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
                <h3
                  className="
                    text-2xl
                    font-bold
                    mb-4
                    text-white
                    light:text-slate-950
                  "
                >
                  Results
                </h3>

                <ul className="space-y-4">
                  {project.sections?.results?.map(
                    (result: string) => (
                      <li
                        key={result}
                        className="
                          p-4
                          rounded-xl
                          bg-emerald-500/10
                          border
                          border-emerald-500/20
                          text-emerald-300
                          light:text-emerald-700
                          font-medium
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
                <h3
                  className="
                    text-2xl
                    font-bold
                    mb-4
                    text-white
                    light:text-slate-950
                  "
                >
                  Lessons Learned
                </h3>

                <p
                  className="
                    text-slate-300
                    light:text-slate-650
                    leading-8
                  "
                >
                  {project.sections?.lessons}
                </p>
              </section>
            )}
          </main>
        </div>
      </DialogContent>
    </Dialog>
  );
}