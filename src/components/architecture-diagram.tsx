// components/architecture-diagram.tsx
"use client";

import { motion } from "framer-motion";

type Props = {
    steps: string[];
};

const COLORS = [
    {
        border: "border-cyan-500/40",
        glow: "shadow-[0_0_30px_rgba(34,211,238,0.25)]",
        dot: "bg-cyan-400",
    },

    {
        border: "border-violet-500/40",
        glow: "shadow-[0_0_30px_rgba(168,85,247,0.25)]",
        dot: "bg-violet-400",
    },

    {
        border: "border-fuchsia-500/40",
        glow: "shadow-[0_0_30px_rgba(217,70,239,0.25)]",
        dot: "bg-fuchsia-400",
    },

    {
        border: "border-blue-500/40",
        glow: "shadow-[0_0_30px_rgba(59,130,246,0.25)]",
        dot: "bg-blue-400",
    },

    {
        border: "border-emerald-500/40",
        glow: "shadow-[0_0_30px_rgba(16,185,129,0.25)]",
        dot: "bg-emerald-400",
    },
];

export default function ArchitectureDiagram({
    steps,
}: Props) {
    return (
        <div className="w-full overflow-x-auto py-8">
            <div
                className="
          flex
          flex-col
          lg:flex-row
          items-center
          justify-center
          gap-0
          min-w-max
        "
            >
                {steps.map((step, index) => {
                    const color =
                        COLORS[index % COLORS.length];

                    return (
                        <div
                            key={step}
                            className="
                flex
                flex-col
                lg:flex-row
                items-center
              "
                        >
                            {/* NODE */}

                            <motion.div
                                whileHover={{
                                    scale: 1.08,
                                    rotateX: 8,
                                    rotateY: -8,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 250,
                                }}
                                className={`
                  relative

                  w-52
                  h-28

                  rounded-3xl

                  border

                  ${color.border}
                  ${color.glow}

                  bg-slate-900/70

                  backdrop-blur-xl

                  overflow-hidden

                  cursor-pointer
                `}
                            >
                                {/* animated neon layer */}

                                <motion.div
                                    animate={{
                                        opacity: [0.1, 0.4, 0.1],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 3,
                                        delay: index * 0.3,
                                    }}
                                    className="
                    absolute
                    inset-0
                    
                    bg-linear-to-r
                    from-white/5
                    to-transparent
                  "
                                />
                                <motion.div
                                    animate={{
                                        x: ["-100%", "150%"],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 4,
                                        ease: "linear",
                                    }}
                                    className="
    absolute
    inset-y-0

    w-24

    bg-linear-to-r
    from-transparent
    via-white/10
    to-transparent

    rotate-0
  "
                                />
                                                              

                                {/* content */}

                                <div
                                    className="
                    h-full

                    flex
                    items-center
                    justify-center

                    text-center

                    px-6

                    text-white
                    font-semibold
                    text-base
                  "
                                >
                                    {step}
                                </div>
                            </motion.div>

                            {/* CONNECTION */}

                            {index < steps.length - 1 && (
                                <div
                                    className="
      relative

      w-32
      h-16
                                
      lg:w-28
      lg:h-1
    "
                                >
                                    {/* connection beam */}

                                    <div
                                        className="
        absolute
        inset-0

        rounded-full

        bg-linear-to-r
        from-cyan-500/20
        via-violet-500/40
        to-fuchsia-500/20
      "
                                    />

                                    {/* packet */}

                                    <motion.div
                                        animate={{
                                            x: [0, 110],
                                        }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 1.6,
                                            ease: "linear",
                                            delay: index * 0.3,
                                        }}
                                        className="
        hidden
        lg:block

        absolute

        -top-1

        h-3
        w-3

        rounded-full

        bg-white

        shadow-[0_0_18px_white]
      "
                                    />

                                    {/* mobile vertical packet */}

                                    <motion.div
                                        animate={{
                                            y: [0, 60],
                                        }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 1.6,
                                            ease: "linear",
                                        }}
                                        className="
        lg:hidden

        absolute

        h-3
        w-3

        rounded-full

        bg-white

        shadow-[0_0_18px_white]
      "
                                    />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}