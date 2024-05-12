"use client";

import { SecondaryWrapper } from "@/wrappers/SecondaryWrapper";
import Card from "@/components/card";
import { motion } from "framer-motion";
import {
  experienceHeaderData,
  ExperienceHeaderProps,
  experiencePageData,
} from "@/app/data/data";
import { useEffect } from "react";
import { Page } from "@/context/activePage";
import { useActivePageContext } from "@/context/activePageContext";

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

// Experience Page
export default function Home() {
  const { activePage, setActivePage } = useActivePageContext();

  useEffect(() => {
    setActivePage(Page.EXPERIENCE);
  }, [activePage]);

  return (
    <>
      <main className="h-full w-full">
        <div className="flex flex-col h-[850px]">
          <SecondaryWrapper>
            <div className="h-full w-full flex flex-col gap-10 py-10 px-4 md:px-20 justify-center m-auto text-start">
              <ExperienceHeader {...experienceHeaderData.experience} />
              {experiencePageData.experience.map((experienceData) => (
                <Card key={experienceData.delay} {...experienceData} />
              ))}
              <ExperienceHeader {...experienceHeaderData.achievements} />
              {experiencePageData.achievements.map((achievementData) => (
                <Card key={achievementData.delay} {...achievementData} />
              ))}
              <ExperienceHeader {...experienceHeaderData.education} />
              {experiencePageData.education.map((educationData) => (
                <Card key={educationData.delay} {...educationData} />
              ))}
              <ExperienceHeader {...experienceHeaderData.volunteering} />
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
