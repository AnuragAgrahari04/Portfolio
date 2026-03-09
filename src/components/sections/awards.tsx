"use client";

import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Trophy, Star, Brain } from "lucide-react";

type Award = {
  id: number;
  title: string;
  description: string;
  issuer: string;
  category: string;
  icon: React.ReactNode;
};

const AWARDS: Award[] = [
  {
    id: 1,
    title: "ML Summer School by Amazon",
    description:
      "Selected and recognized by Amazon for outstanding performance in their highly competitive Machine Learning Summer School program — covering advanced ML theory and applied deep learning.",
    issuer: "Amazon",
    category: "Machine Learning",
    icon: <Brain className="w-8 h-8 text-teal-400" />,
  },
  {
    id: 2,
    title: "3-Star Rating on CodeChef",
    description:
      "Achieved a 3-star rating on CodeChef, demonstrating strong problem-solving abilities and consistent performance in competitive programming contests.",
    issuer: "CodeChef",
    category: "Competitive Programming",
    icon: <Star className="w-8 h-8 text-teal-400" />,
  },
  {
    id: 3,
    title: "2nd Rank — Inovanza Hackathon",
    description:
      "Secured 2nd place at the Inovanza Hackathon organized by BIET Jhansi, competing against teams across multiple colleges with an AI-powered project.",
    issuer: "BIET Jhansi",
    category: "Hackathon",
    icon: <Trophy className="w-8 h-8 text-teal-400" />,
  },
];

const AwardsSection = () => {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center py-20 z-10">
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="awards"
          title="Honors & Awards"
          desc="Recognition along the way."
          className="mb-12 md:mb-16 mt-0"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AWARDS.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 24 }}
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
                  "h-full bg-card text-card-foreground border-border text-center",
                  "hover:border-teal-500/30 transition-colors duration-300",
                  "shadow-sm hover:shadow-md"
                )}
              >
                <CardContent className="pt-8 pb-6 px-6 flex flex-col items-center gap-4">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-teal-900/20 border border-teal-700/30">
                    {award.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground leading-snug">
                    {award.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>

                  {/* Issuer + Category */}
                  <div className="mt-auto pt-4 border-t border-border w-full">
                    <p className="text-sm font-semibold text-foreground">
                      {award.issuer}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {award.category}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AwardsSection;

