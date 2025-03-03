'use client';

import Hero from "./_components/Header";
import Experiences from "./_components/Experiences"
import Education from "./_components/Education"
import Projects from "./_components/Projects"
import AboutMe from "./_components/AboutMe"
import ProfessionalProspect from "./_components/ProfessionalProspect";
import SkillSection from "./_components/SkillSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experiences />
      <Education />
      <Projects />
      <SkillSection />
      <AboutMe />
      <ProfessionalProspect />
    </main>
  );
}
