"use client";

import { useEffect, useState } from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";

const SkillsSection = () => {
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const skills = document.getElementById("skills");
      const experience = document.getElementById("experience");

      if (!hero || !skills || !experience) return;

      const heroBottom = hero.getBoundingClientRect().bottom;
      const experienceTop = experience.getBoundingClientRect().top;

      // Only blur when: hero is gone AND experience hasn't started yet
      const pastHero = heroBottom <= 0;
      const beforeExperience = experienceTop > 0;

      setBlur(pastHero && beforeExperience);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none transition-all duration-700"
        style={{
          zIndex: 1,
          backdropFilter: blur ? "blur(6px)" : "blur(0px)",
          WebkitBackdropFilter: blur ? "blur(6px)" : "blur(0px)",
          opacity: blur ? 1 : 0,
          background: blur ? "rgba(0,0,0,0.25)" : "transparent",
        }}
      />

      <SectionWrapper
        id="skills"
        className="w-full h-screen md:h-[150dvh] pointer-events-none relative"
        style={{ zIndex: 2 }}
      >
        <SectionHeader id="skills" title="Tech Stack" desc="(hint: press a key)" />
      </SectionWrapper>
    </>
  );
};

export default SkillsSection;