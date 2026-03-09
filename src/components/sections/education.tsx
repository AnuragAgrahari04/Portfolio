"use client";

import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { GraduationCap } from "lucide-react";

type Education = {
  id: number;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  grade: string;
  gradeLabel: string;
  highlights?: string[];
};

const EDUCATION: Education[] = [
  {
    id: 1,
    degree: "B.Tech in Computer Science & Engineering (AI)",
    institution: "Institute of Engineering and Technology, Lucknow",
    location: "Lucknow, Uttar Pradesh",
    startDate: "Oct 2023",
    endDate: "Oct 2027",
    grade: "8.6 / 10",
    gradeLabel: "CGPA",
    highlights: [
      "Specialization in Artificial Intelligence & Machine Learning",
      "Recognized by Amazon for outstanding performance in ML Summer School",
      "Active member of college tech club — demonstrated AI/CV projects live",
    ],
  },
  {
    id: 2,
    degree: "Intermediate — 12th Grade (PCM)",
    institution: "Sant Atulanand Convent School",
    location: "Varanasi",
    startDate: "",
    endDate: "May 2022",
    grade: "95%",
    gradeLabel: "Grade",
    highlights: [],
  },
  {
    id: 3,
    degree: "High School — 10th Grade",
    institution: "Sant Atulanand Convent School",
    location: "Varanasi",
    startDate: "",
    endDate: "May 2020",
    grade: "93%",
    gradeLabel: "Grade",
    highlights: [],
  },
];

const EducationSection = () => {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center min-h-screen py-20 z-10">
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="education"
          title="Education"
          desc="My academic journey."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="relative">
          {/* Center vertical timeline line - teal and visible */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-teal-600/50 -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-12">
            {EDUCATION.map((edu, index) => (
              <div
                key={edu.id}
                className="relative flex items-start justify-center"
              >
                {/* Graduation cap dot */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10 w-9 h-9 rounded-full bg-teal-700/60 border border-teal-500/50 items-center justify-center hidden md:flex top-5">
                  <GraduationCap className="w-4 h-4 text-teal-300" />
                </div>

                {/* Card alternates left/right */}
                <div
                  className={cn(
                    "w-full md:w-[46%]",
                    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  )}
                >
                  <EducationCard education={edu} index={index} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const EducationCard = ({
  education,
  index,
}: {
  education: Education;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        className={cn(
          "bg-card text-card-foreground border-border",
          "hover:border-teal-500/30 transition-colors duration-300",
          "shadow-sm hover:shadow-md"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
              <CardTitle className="text-xl font-bold tracking-tight">
                {education.degree}
              </CardTitle>
              <Badge
                variant="secondary"
                className="w-fit font-mono text-xs font-normal shrink-0"
              >
                {education.startDate
                  ? `${education.startDate} – ${education.endDate}`
                  : `Completed ${education.endDate}`}
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="text-base font-medium text-muted-foreground">
                {education.institution}
              </span>
              {education.location && (
                <>
                  <span className="text-border hidden sm:block">·</span>
                  <span className="text-sm text-muted-foreground/60">
                    {education.location}
                  </span>
                </>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {education.gradeLabel}:
            </span>
            <Badge
              variant="outline"
              className="font-mono text-sm bg-teal-900/20 border-teal-700/40 text-teal-400"
            >
              {education.grade}
            </Badge>
          </div>

          {education.highlights && education.highlights.length > 0 && (
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-muted-foreground leading-relaxed">
              {education.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EducationSection;