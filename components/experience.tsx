import { SecondaryWrapper } from "@/wrappers/SecondaryWrapper";
import Card from "./card";

const pageData = {
  education: [
    {
      title: "University of British Columbia",
      location: "Vancouver, Canada",
      time: "2023 - Present",
    },
    {
      title: "Pelangi Kasih School",
      location: "Jakarta, Indonesia",
      time: "2011 - 2023",
    },
  ],
  experience: [
    {
      title: "Student Developer at UBC CSSS",
      location: "Vancouver, Canada",
      time: "2023 - Present",
    },
    {
      title: "Online Tutor at C.O.D.E Initiative",
      location: "Vancouver, Canada",
      time: "2023 - Present",
    },
  ],
  achievements: [
    {
      title: "3rd Place at National CodeOlympiad",
      location: "Jakarta, Indonesia",
      time: "2021",
    },
    {
      title: "1st Place at Actuarial Science Competition",
      location: "Jakarta, Indonesia",
      time: "2022",
    },
    {
      title: "2nd Place at STEM INC Competition",
      location: "Jakarta, Indonesia",
      time: "2023",
    },
  ],
};

const Experience = () => {
  return (
    <SecondaryWrapper>
      <div className="h-full w-full flex flex-col gap-8 py-10 px-10 justify-center m-auto text-start">
        <h1 className="text-white text-5xl font-mono font-bold relative">
          Experience
        </h1>
        {pageData.experience.map((educationData) => (
          <Card {...educationData} />
        ))}
        <h1 className="mt-10 text-white text-5xl font-mono font-bold relative">
          Achievements
        </h1>
        {pageData.achievements.map((educationData) => (
          <Card {...educationData} />
        ))}
        <h1 className="mt-10 text-white text-5xl font-mono font-bold relative">
          Education
        </h1>
        {pageData.education.map((educationData) => (
          <Card {...educationData} />
        ))}
      </div>
    </SecondaryWrapper>
  );
};

export default Experience;
