"use client";

import { SecondaryWrapper } from "@/wrappers/SecondaryWrapper";
import Card from "@/components/card";
import { motion } from "framer-motion";

const pageData = {
  education: [
    {
      title: "University of British Columbia",
      location: "Vancouver, Canada",
      time: "2023 - Present",
      delay: 0.6,
    },
    {
      title: "Pelangi Kasih School",
      location: "Jakarta, Indonesia",
      time: "2011 - 2023",
      delay: 0.7,
    },
  ],
  experience: [
    {
      title: "Student Developer at UBC CSSS",
      location: "Vancouver, Canada",
      time: "2023 - Present",
      delay: 0.9,
    },
    {
      title: "Online Tutor at C.O.D.E Initiative",
      location: "Vancouver, Canada",
      time: "2023 - Present",
      delay: 1,
    },
  ],
  achievements: [
    {
      title: "3rd Place at National CodeOlympiad",
      location: "Jakarta, Indonesia",
      time: "2021",
      delay: 1.2,
    },
    {
      title: "1st Place at Actuarial Science Competition",
      location: "Jakarta, Indonesia",
      time: "2022",
      delay: 1.3,
    },
    {
      title: "2nd Place at STEM INC Competition",
      location: "Jakarta, Indonesia",
      time: "2023",
      delay: 1.4,
    },
  ],
  volunteering: [
    {
      title: "Check in desk for Q-SITE",
      location: "Vancouver, Canada",
      time: "2023",
      delay: 1.6,
    },
    {
      title: "Cashier for high school bazaar",
      location: "Vancouver, Canada",
      time: "2022",
      delay: 1.7,
    },
  ],
};

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
              {pageData.experience.map((educationData) => (
                <Card key={educationData.delay} {...educationData} />
              ))}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-10 text-white text-4xl md:text-5xl font-mono font-bold relative"
              >
                Achievements 🏆
              </motion.h1>
              {pageData.achievements.map((educationData) => (
                <Card key={educationData.delay} {...educationData} />
              ))}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="mt-10 text-white text-4xl md:text-5xl font-mono font-bold relative"
              >
                Education 📚
              </motion.h1>
              {pageData.education.map((educationData) => (
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
              {pageData.volunteering.map((educationData) => (
                <Card key={educationData.delay} {...educationData} />
              ))}
            </div>
          </SecondaryWrapper>
        </div>
      </main>
    </>
  );
}
