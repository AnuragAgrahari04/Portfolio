"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import HeroSection from "@/components/sections/hero";
import SkillsSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experience";
import EducationSection from "@/components/sections/education";
import ProjectsSection from "@/components/sections/projects";
import AwardsSection from "@/components/sections/awards";
import CertificatesSection from "@/components/sections/certificates";
import ContactSection from "@/components/sections/contact";

function MainPage() {
  return (
    <SmoothScroll>
      <AnimatedBackground />
      <main className={cn("bg-slate-100 dark:bg-transparent canvas-overlay-mode")}>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <AwardsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
    </SmoothScroll>
  );
}

export default MainPage;