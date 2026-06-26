"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
  FaDownload
} from "react-icons/fa";
import { useTheme } from "./theme-provider";

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
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = active;

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          current = link.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
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
            scale: scrolled ? 0.97 : 1,
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
            ${scrolled
              ? `
                bg-slate-950/75
                light:bg-white/75
                border-violet-500/20
                light:border-violet-500/10
                shadow-[0_0_40px_rgba(168,85,247,0.15)]
                light:shadow-[0_10px_30px_rgba(168,85,247,0.06)]
              `
              : `
                bg-white/[0.04]
                light:bg-slate-100/30
                border-white/10
                light:border-slate-200
              `
            }
          `}
        >
          {/* LOGO */}
          <div
            className="
              text-white
              light:text-slate-900
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
                onClick={() => scrollToSection(link.id)}
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
                {active === link.id && (
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
                      bg-blue-500/20
                      light:bg-blue-500/10
                      border
                      border-violet-400/20
                      light:border-blue-500/20
                    "
                  />
                )}

                <span
                  className={`
                    relative
                    z-10
                    transition-colors
                    ${active === link.id
                      ? "text-white light:text-blue-600"
                      : "text-slate-400 light:text-slate-600 hover:text-white light:hover:text-slate-900"
                    }
                  `}
                >
                  {link.name}
                </span>
              </button>
            ))}
          </div>

          {/* SOCIALS & THEME TOGGLE */}
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
                light:text-slate-500
                hover:text-white
                light:hover:text-slate-900
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
                light:text-slate-500
                hover:text-white
                light:hover:text-slate-900
                transition-colors
              "
            >
              <FaLinkedin size={18} />
            </motion.a>
              <motion.a
              whileHover={{
                y: -2,
                scale: 1.15,
              }}
              href="/cv/Yahia_Abdeldjalil_Benyahia_CV.pdf"
              download
              className="
                text-slate-400
                light:text-slate-500
                hover:text-white
                light:hover:text-slate-900
                transition-colors
                inline-flex
                gap-1
              "
            >
              <FaDownload size={18} />
              CV
            </motion.a>
            <div className="h-4 w-px bg-white/10 light:bg-slate-200" />

            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="
                text-slate-400
                light:text-slate-500
                hover:text-white
                light:hover:text-slate-900
                transition-colors
                p-1.5
                rounded-full
                hover:bg-white/10
                light:hover:bg-slate-100
                cursor-pointer
              "
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>
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
            light:border-slate-200
            bg-slate-950/75
            light:bg-white/75
            backdrop-blur-2xl
            px-5
            py-4
          "
        >
          <div
            className="
              text-white
              light:text-slate-900
              font-black
              tracking-widest
            "
          >
            YAHIA
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="
                text-slate-400
                light:text-slate-500
                hover:text-white
                light:hover:text-slate-900
                p-1
              "
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                text-white
                light:text-slate-900
                text-xl
              "
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
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
                light:border-slate-200
                bg-slate-950/90
                light:bg-white/95
                backdrop-blur-2xl
                overflow-hidden
              "
            >
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`
                    w-full
                    px-6
                    py-4
                    text-left
                    transition-colors
                    ${active === link.id
                      ? "bg-blue-500/20 light:bg-violet-500/10 text-white light:text-violet-600 font-semibold"
                      : "text-slate-400 light:text-slate-600"
                    }
                  `}
                >
                  {link.name}s
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
                  light:border-slate-200
                "
              >
                <a
                  href="https://github.com/yahia-abdeldjalil"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 light:text-slate-500"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://linkedin.com/in/yahiaabdeldjalil-benyahia"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 light:text-slate-500"
                >
                  <FaLinkedin size={22} />
                </a>
                <a
              href="/cv/Yahia_Abdeldjalil_Benyahia_CV.pdf"
              download
              className="
                text-slate-400
                light:text-slate-500
                hover:text-white
                light:hover:text-slate-900
                transition-colors
                inline-flex
                gap-1
              "
            >
              <FaDownload size={18} />
              CV
            </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}