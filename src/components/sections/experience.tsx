import { EXPERIENCE, SkillNames, SKILLS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin } from "lucide-react";

const ExperienceSection = () => {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center min-h-[120vh] py-20 z-10">
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="experience"
          title="Experience"
          desc="My professional journey."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="relative">
          {/* Center vertical line - teal and visible */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-teal-600/50 -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-12">
            {EXPERIENCE.map((exp, index) => (
              <div key={exp.id} className="relative flex items-start justify-center">

                {/* Timeline dot - teal to match education */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10 w-9 h-9 rounded-full bg-teal-700/60 border border-teal-500/50 items-center justify-center hidden md:flex top-5">
                  <Briefcase className="w-4 h-4 text-teal-300" />
                </div>

                {/* Card - alternates left/right */}
                <div className={cn(
                  "w-full md:w-[46%]",
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                )}>
                  <ExperienceCard experience={exp} index={index} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: (typeof EXPERIENCE)[0];
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
                {experience.title}
              </CardTitle>
              <Badge
                variant="secondary"
                className="w-fit font-mono text-xs font-normal shrink-0"
              >
                {experience.startDate} – {experience.endDate}
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="text-base font-medium text-muted-foreground">
                {experience.company}
              </span>
              {experience.location && (
                <>
                  <span className="text-border hidden sm:block">·</span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground/70">
                    <MapPin className="w-3 h-3" />
                    {experience.location}
                  </span>
                </>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <ul className="list-disc list-outside ml-4 space-y-2 text-base text-muted-foreground leading-relaxed">
            {experience.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skillName) => {
              const skill = SKILLS[skillName as SkillNames];
              return (
                <Badge
                  key={skillName}
                  variant="outline"
                  className="gap-2 text-xs font-normal bg-secondary/30 hover:bg-secondary/50 transition-colors border-transparent"
                >
                  <img
                    src={skill.icon}
                    alt={skill.label}
                    className="w-3.5 h-3.5 object-contain opacity-80"
                  />
                  {skill.label}
                </Badge>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceSection;