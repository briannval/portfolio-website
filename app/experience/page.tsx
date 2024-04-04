"use client";

import { SecondaryWrapper } from "@/wrappers/SecondaryWrapper";
import Card from "@/components/card";
import { motion } from "framer-motion";
import { experiencePageData } from "../data/data";

// Experience Page
export default function Home() {
  return (
    <>
      <main className="h-full w-full">
        <div className="flex flex-col h-[850px]">
          <SecondaryWrapper>
            <div className="h-full w-full flex flex-col gap-10 py-10 px-4 md:px-20 justify-center m-auto text-start">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white text-4xl md:text-5xl font-mono font-bold relative "
              >
                Experience 💻
              </motion.h1>
              {experiencePageData.experience.map((experienceData) => (
                <Card key={experienceData.delay} {...experienceData} />
              ))}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-10 text-white text-4xl md:text-5xl font-mono font-bold relative"
              >
                Achievements 🏆
              </motion.h1>
              {experiencePageData.achievements.map((achievementData) => (
                <Card key={achievementData.delay} {...achievementData} />
              ))}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="mt-10 text-white text-4xl md:text-5xl font-mono font-bold relative"
              >
                Education 📚
              </motion.h1>
              {experiencePageData.education.map((educationData) => (
                <Card key={educationData.delay} {...educationData} />
              ))}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-10 text-white text-4xl md:text-5xl font-mono font-bold relative"
              >
                Volunteering 🤝
              </motion.h1>
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
