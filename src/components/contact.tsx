"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";

import { AnalyticsEvents, track } from "@/lib/analytics";
import { useState } from "react";
import useAnalyticsSection from "@/hooks/useAnalyticsSection";
export default function Contact() {
  const sectionRef = useAnalyticsSection(AnalyticsEvents.CONTACT_VIEW, undefined, 0.5);
  return (
    <section
      ref={sectionRef}
      id="contact"
      className="
        relative
        scroll-mt-32
        py-6
        max-w-7xl
        mx-auto
        px-6
        lg:px-8
      "
    >
      {/* GLOW */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[500px]
          bg-blue-500/10
          light:bg-blue-400/5
          blur-[180px]
          rounded-full
        "
      />

      <motion.div
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
        className="
          relative
          z-10
          text-center
          mb-16
        "
      >
        <h2
          className="
            text-5xl
            md:text-6xl
            font-black
            text-white
            light:text-slate-900
          "
        >
          Let's Work Together
        </h2>

        <p
          className="
            mt-6
            text-lg
            text-slate-400
            light:text-slate-650
            max-w-3xl
            mx-auto
          "
        >
          Interested in AI systems,
          cybersecurity research,
          networking projects,
          machine learning solutions,
          or software engineering collaborations?
        </p>
      </motion.div>

      {/* CONTACT GRID */}
      <div
        className="
          grid
          sm:grid-cols-2
          lg:grid-cols-5
          gap-8
        "
      >
        {/* EMAIL */}
        <motion.a
          whileHover={{
            y: -8,
          }}
          href="mailto:yahia.infodz@gmail.com"
          className="
            rounded-3xl
            border
            border-white/10
            light:border-slate-200
            bg-white/[0.03]
            light:bg-white
            backdrop-blur-xl
            p-8
            text-center
            hover:border-blue-500/30
            light:hover:border-blue-500/20
            transition-all
            shadow-sm
          "
          onClick={() => track(AnalyticsEvents.CONTACT_EMAIL)}
        >
          <FaEnvelope
            size={40}
            className="mx-auto text-blue-400 light:text-blue-600"
          />

          <h3
            className="
              mt-5
              text-xl
              font-bold
              text-white
              light:text-slate-900
            "
          >
            Email
          </h3>

          <p className="mt-2 text-slate-400 light:text-slate-500 text-sm">
            Direct collaboration inquiries
          </p>
        </motion.a>

        {/* GITHUB */}
        <motion.a
          whileHover={{
            y: -8,
          }}
          href="https://github.com/yahia-abdeldjalil"
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-3xl
            border
            border-white/10
            light:border-slate-200
            bg-white/[0.03]
            light:bg-white
            backdrop-blur-xl
            p-8
            text-center
            hover:border-blue-500/30
            light:hover:border-blue-500/20
            transition-all
            shadow-sm
          "
          onClick={()=>track(AnalyticsEvents.CONTACT_GITHUB)}
        >
          <FaGithub
            size={40}
            className="mx-auto text-white/32 light:text-slate-800"
          />

          <h3
            className="
              mt-5
              text-xl
              font-bold
              text-white
              light:text-slate-900
            "
          >
            GitHub
          </h3>

          <p className="mt-2 text-slate-400 light:text-slate-500 text-sm">
            Open-source projects
          </p>
        </motion.a>

        {/* WHATSAPP */}
        <motion.a
          whileHover={{ y: -8 }}
          href="https://wa.me/213658309707"
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-3xl
            border
            border-white/10
            light:border-slate-200
            bg-white/[0.03]
            light:bg-white
            backdrop-blur-xl
            p-8
            text-center
            hover:border-green-500/30
            light:hover:border-green-500/20
            transition-all
            shadow-sm
          "
          onClick={() => track(AnalyticsEvents.CONTACT_WHATSAPP)}
        >
          <FaWhatsapp
            size={40}
            className="mx-auto text-green-400 light:text-green-600"
          />

          <h3
            className="
              mt-5
              text-xl
              font-bold
              text-white
              light:text-slate-900
            "
          >
            WhatsApp
          </h3>

          <p className="mt-2 text-slate-400 light:text-slate-500 text-sm">
            Quick communication
          </p>
        </motion.a>

        {/* FACEBOOK */}
        <motion.a
          whileHover={{ y: -8 }}
          href="https://facebook.com/profile.php?id=61568118515881"
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-3xl
            border
            border-white/10
            light:border-slate-200
            bg-white/[0.03]
            light:bg-white
            backdrop-blur-xl
            p-8
            text-center
            hover:border-blue-500/30
            light:hover:border-blue-500/20
            transition-all
            shadow-sm
          "
          onClick={() => track(AnalyticsEvents.CONTACT_FACEBOOK)}
        >
          <FaFacebook
            size={40}
            className="mx-auto text-blue-400 light:text-blue-600"
          />

          <h3
            className="
              mt-5
              text-xl
              font-bold
              text-white
              light:text-slate-900
            "
          >
            Facebook
          </h3>

          <p className="mt-2 text-slate-400 light:text-slate-500 text-sm">
            Social profile
          </p>
        </motion.a>

        {/* LINKEDIN */}
        <motion.a
          whileHover={{
            y: -8,
          }}
          href="https://www.linkedin.com/in/yahiaabdeldjalil-benyahia/"
          target="_blank"
          className="
            rounded-3xl
            border
            border-white/10
            light:border-slate-200
            bg-white/[0.03]
            light:bg-white
            backdrop-blur-xl
            p-8
            text-center
            hover:border-blue-500/30
            light:hover:border-blue-500/20
            transition-all
            shadow-sm
          "
          onClick={() => track(AnalyticsEvents.CONTACT_LINKEDIN)}
        >
          <FaLinkedin
            size={40}
            className="mx-auto text-blue-400 light:text-blue-650"
          />

          <h3
            className="
              mt-5
              text-xl
              font-bold
              text-white
              light:text-slate-900
            "
          >
            LinkedIn
          </h3>

          <p className="mt-2 text-slate-400 light:text-slate-500 text-sm">
            Professional network
          </p>
        </motion.a>
      </div>

      {/* CTA BUTTON */}
      <div className="text-center mt-16">
        <a
          href="mailto:yahia.infodz@gmail.com"
          className="
            inline-flex
            items-center
            rounded-2xl
            bg-blue-600
            px-10
            py-5
            text-white
            font-semibold
            hover:bg-blue-500
            transition-all
            shadow-[0_0_40px_rgba(59,130,246,0.4)]
            light:shadow-[0_10px_30px_rgba(59,130,246,0.15)]
            cursor-pointer
          "
          onClick={() => track(AnalyticsEvents.START_CONVERSATION)}
        >
          Start a Conversation
        </a>
      </div>
    </section>
  );
}