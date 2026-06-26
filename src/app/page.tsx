import Navbar from "@/components/navbar";

import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import NetworkBackground from "@/components/network-background";
import GithubSection from "@/components/github-activity";


export default function Home() {
  return (
    <>
      <NetworkBackground />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GithubSection />
        
        <Contact />
      </main>
    </>
  );
}