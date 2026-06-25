"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const links = [
  {
    name: "About",
    id: "about",
  },
  {
    name: "Skills",
    id: "skills",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "GitHub",
    id: "github",
  },
  {
    name: "Contact",
    id: "contact",
  },
];

export default function Navbar() {
  const [active, setActive] =
    useState("about");

  const [scrolled, setScrolled] =
    useState(false);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 40
      );

      let current = active;

      links.forEach((link) => {
        const section =
          document.getElementById(
            link.id
          );

        if (!section) return;

        const rect =
          section.getBoundingClientRect();

        if (
          rect.top <= 200 &&
          rect.bottom >= 200
        ) {
          current = link.id;
        }
      });

      setActive(current);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, [active]);

  const scrollToSection = (
    id: string
  ) => {
    const section =
      document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileOpen(false);
  };

  return (
    <>
      {/* DESKTOP NAVBAR */}

      <motion.nav
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        className="
          fixed
          top-5
          left-1/2
          -translate-x-1/2

          z-50

          hidden
          lg:block
        "
      >
        <motion.div
          animate={{
            scale: scrolled
              ? 0.97
              : 1,
          }}
          transition={{
            duration: 0.3,
          }}
          className={`
            flex
            items-center
            gap-8

            px-7
            py-3

            rounded-full

            border

            backdrop-blur-2xl

            transition-all

            ${
              scrolled
                ? `
                bg-slate-950/75
                border-violet-500/20
                shadow-[0_0_40px_rgba(168,85,247,0.15)]
              `
                : `
                bg-white/[0.04]
                border-white/10
              `
            }
          `}
        >
          {/* LOGO */}

          <div
            className="
              text-white
              font-black
              tracking-[0.25em]
            "
          >
            YAHIA
          </div>

          {/* LINKS */}

          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() =>
                  scrollToSection(
                    link.id
                  )
                }
                className="
                  relative

                  px-4
                  py-2

                  rounded-full

                  text-sm
                  font-medium

                  hover:cursor-pointer
                "
              >
                {active ===
                  link.id && (
                  <motion.div
                    layoutId="navbar-pill"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 30,
                    }}
                    className="
                      absolute
                      inset-0

                      rounded-full

                      bg-violet-500/20

                      border
                      border-violet-400/20
                    "
                  />
                )}

                <span
                  className={`
                    relative
                    z-10

                    transition-colors

                    ${
                      active ===
                      link.id
                        ? "text-white"
                        : "text-slate-400"
                    }
                  `}
                >
                  {link.name}
                </span>
              </button>
            ))}
          </div>

          {/* SOCIALS */}

          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <motion.a
              whileHover={{
                y: -2,
                scale: 1.15,
              }}
              href="https://github.com/yahia-abdeldjalil"
              target="_blank"
              rel="noreferrer"
              className="
                text-slate-400
                hover:text-white
                transition-colors
              "
            >
              <FaGithub size={18} />
            </motion.a>

            <motion.a
              whileHover={{
                y: -2,
                scale: 1.15,
              }}
              href="https://linkedin.com/in/yahiaabdeldjalil-benyahia"
              target="_blank"
              rel="noreferrer"
              className="
                text-slate-400
                hover:text-white
                transition-colors
              "
            >
              <FaLinkedin size={18} />
            </motion.a>
          </div>
        </motion.div>
      </motion.nav>

      {/* MOBILE NAVBAR */}

      <div
        className="
          lg:hidden

          fixed
          top-4
          left-4
          right-4

          z-50
        "
      >
        <div
          className="
            flex
            items-center
            justify-between

            rounded-2xl

            border
            border-white/10

            bg-slate-950/75

            backdrop-blur-2xl

            px-5
            py-4
          "
        >
          <div
            className="
              text-white
              font-black
              tracking-widest
            "
          >
            YAHIA
          </div>

          <button
            onClick={() =>
              setMobileOpen(
                !mobileOpen
              )
            }
            className="
              text-white
              text-xl
            "
          >
            {mobileOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              className="
                mt-3

                rounded-2xl

                border
                border-white/10

                bg-slate-950/90

                backdrop-blur-2xl

                overflow-hidden
              "
            >
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() =>
                    scrollToSection(
                      link.id
                    )
                  }
                  className={`
                    w-full

                    px-6
                    py-4

                    text-left

                    transition-colors

                    ${
                      active ===
                      link.id
                        ? "bg-violet-500/15 text-white"
                        : "text-slate-400"
                    }
                  `}
                >
                  {link.name}
                </button>
              ))}

              <div
                className="
                  flex
                  justify-center
                  gap-8

                  py-5

                  border-t
                  border-white/10
                "
              >
                <a
                  href="https://github.com/yahia-abdeldjalil"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://linkedin.com/in/yahiaabdeldjalil-benyahia"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400"
                >
                  <FaLinkedin size={22} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}