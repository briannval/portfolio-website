"use client";

import { SecondaryWrapper } from "@/wrappers/SecondaryWrapper";
import Card from "@/components/card";
import { motion } from "framer-motion";
import { experiencePageData } from "../data/data";

interface ExperienceHeaderProps {
  title: String;
  delay: number;
}

const ExperienceHeader = (props: ExperienceHeaderProps) => {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: props.delay }}
      className="text-white text-4xl md:text-5xl font-bold relative "
    >
      {props.title}
    </motion.h1>
  );
};

const ExperienceHeaderData = {
  experience: {
    title: "Experience 💻",
    delay: 0.5,
  },
  achievements: {
    title: "Achievements 🏆",
    delay: 0.8,
  },
  education: {
    title: "Education 📚",
    delay: 1.1,
  },
  volunteering: {
    title: "Volunteering 🤝",
    delay: 1.5,
  },
};

// Experience Page
export default function Home() {
  return (
    <>
      <main className="h-full w-full">
        <div className="flex flex-col h-[850px]">
          <SecondaryWrapper>
            <div className="h-full w-full flex flex-col gap-10 py-10 px-4 md:px-20 justify-center m-auto text-start">
              <ExperienceHeader {...ExperienceHeaderData.experience} />
              {experiencePageData.experience.map((experienceData) => (
                <Card key={experienceData.delay} {...experienceData} />
              ))}
              <ExperienceHeader {...ExperienceHeaderData.achievements} />
              {experiencePageData.achievements.map((achievementData) => (
                <Card key={achievementData.delay} {...achievementData} />
              ))}
              <ExperienceHeader {...ExperienceHeaderData.education} />
              {experiencePageData.education.map((educationData) => (
                <Card key={educationData.delay} {...educationData} />
              ))}
              <ExperienceHeader {...ExperienceHeaderData.volunteering} />
              {experiencePageData.volunteering.map((volunteeringData) => (
                <Card key={volunteeringData.delay} {...volunteeringData} />
              ))}
            </div>
          </SecondaryWrapper>
        </div>
      </main>
    </>
  );
}
