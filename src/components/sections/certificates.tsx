"use client";

import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

type Certificate = {
  id: number;
  title: string;
  description: string;
  issuer: string;
  category: string;
  date: string;
  validateUrl?: string;
};

const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    title: "Amazon ML Summer School 2024",
    description:
      "Attended Amazon's intensive ML program covering Supervised Learning, Deep Neural Networks, Generative AI & LLMs, Reinforcement Learning, Causal Inference, and more.",
    issuer: "Amazon",
    category: "Machine Learning",
    date: "Aug 2024",
    validateUrl: "https://drive.google.com/file/d/1TW9qMNhK_ilFw3-_-ni_sT2XRFrZPcf_/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Supervised ML: Regression and Classification",
    description:
      "Completed Andrew Ng's foundational ML course covering supervised learning algorithms, regression, classification, and best practices — authorized by DeepLearning.AI and Stanford University.",
    issuer: "DeepLearning.AI × Stanford",
    category: "Machine Learning",
    date: "Jun 2025",
    validateUrl: "https://drive.google.com/file/d/1hQxSblpl3WhOVTcHbcRokiQvpBuAN2aP/view?usp=drive_link",
  },
  {
    id: 3,
    title: "ML Pipelines with Azure ML Studio",
    description:
      "Hands-on project building end-to-end machine learning pipelines on Microsoft Azure ML Studio — covering model training, evaluation, and deployment workflows.",
    issuer: "Microsoft × Coursera",
    category: "MLOps",
    date: "Jun 2025",
    validateUrl: "https://drive.google.com/file/d/1zGLKY5Lb3hlNRKabu17XrGm6aAA7pAnz/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Fundamentals of Agents",
    description:
      "Completed Unit 1 of the Hugging Face Agents Course — covering foundations of autonomous AI agents, tool use, and agent orchestration frameworks.",
    issuer: "Hugging Face",
    category: "Generative AI",
    date: "Mar 2026",
    validateUrl: "https://drive.google.com/file/d/1wu-6YgWFuMvSLwel064GQvZuSYx6zfz5/view?usp=drive_link",
  },
  {
    id: 5,
    title: "Java (Basic)",
    description:
      "Passed the HackerRank skill certification test for Java, demonstrating proficiency in core Java programming concepts and problem-solving.",
    issuer: "HackerRank",
    category: "Programming",
    date: "Jun 2025",
    validateUrl: "https://drive.google.com/file/d/1vS5EZ6lQtUvgWOpjVjErLaLkcEG5Tmp5/view?usp=drive_link",
  },
  {
    id: 6,
    title: "Nestlé E-learning: Resilience",
    description:
      "Completed the Nestlé Nesternship e-learning module on professional resilience — part of the Nestlé needs YOUth initiative for emerging talent.",
    issuer: "Nestlé",
    category: "Professional Development",
    date: "2025",
    validateUrl: "https://drive.google.com/file/d/1ls8e6nrjrtIQbe8iLHbms_KGzKz8gBYe/view?usp=drive_link",
  },
];

const CertificatesSection = () => {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center py-20 z-10">
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="certificates"
          title="Certificates"
          desc="Courses and certifications I've completed."
          className="mb-12 md:mb-16 mt-0"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="h-full"
            >
              <Card
                className={cn(
                  "h-full flex flex-col bg-card text-card-foreground border-border",
                  "hover:border-teal-500/30 transition-colors duration-300",
                  "shadow-sm hover:shadow-md"
                )}
              >
                <CardContent className="flex flex-col gap-3 pt-6 pb-5 px-5 h-full">
                  {/* Title */}
                  <h3 className="text-base font-bold text-foreground leading-snug">
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {cert.description}
                  </p>

                  {/* Footer: issuer + date + validate */}
                  <div className="flex items-end justify-between gap-2 pt-3 border-t border-border mt-auto">
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge
                          variant="secondary"
                          className="text-xs font-normal"
                        >
                          {cert.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground/60 font-mono">
                          {cert.date}
                        </span>
                      </div>
                    </div>

                    {cert.validateUrl && (
                      <Link
                        href={cert.validateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.97 }}
                          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-teal-700/20 hover:bg-teal-700/40 text-teal-400 border border-teal-700/30 transition-colors"
                        >
                          Validate <ExternalLink className="w-3 h-3" />
                        </motion.button>
                      </Link>
                    )}
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

export default CertificatesSection;



