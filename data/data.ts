export const experiencePageData = {
  experience: [
    {
      title: "Software Engineer at UBC VCL",
      location: "Vancouver, Canada",
      time: "2024 - Present",
      delay: 0.7,
      logo: "/vcl.png",
    },
    {
      title: "Web Developer at Enactus UBC",
      location: "Vancouver, Canada",
      time: "2024 - Present",
      delay: 1.0,
      logo: "/enactus.jpeg",
    },
    {
      title: "Software Engineer at SMS Perkasa",
      location: "Surabaya, Indonesia",
      time: "2024 - Present",
      delay: 1.3,
      logo: "/smsperkasa.jpg",
    },
    {
      title: "Web Developer at BBRwanda",
      location: "Vancouver, Canada",
      time: "2024",
      delay: 1.6,
      logo: "/bbrwanda.png",
    },
    {
      title: "Student Developer at UBC CSSS",
      location: "Vancouver, Canada",
      time: "2023",
      delay: 1.9,
      logo: "/csss.png",
    },
    {
      title: "Programming Tutor at C.O.D.E Initiative",
      location: "Vancouver, Canada",
      time: "2023",
      delay: 2.2,
      logo: "/codeinitiative.png",
    },
  ],
  achievements: [
    {
      title: "3rd Place at National CodeOlympiad",
      location: "Jakarta, Indonesia",
      time: "2021",
      delay: 2.5,
      logo: "/codingbee.jpeg",
    },
    {
      title: "1st Place at Actuarial Science Competition",
      location: "Jakarta, Indonesia",
      time: "2022",
      delay: 2.8,
      logo: "/asd.jpeg",
    },
    {
      title: "2nd Place at STEM INC Competition",
      location: "Jakarta, Indonesia",
      time: "2023",
      delay: 3.1,
      logo: "/prasmul.jpeg",
    },
  ],
  education: [
    {
      title: "University of British Columbia",
      location: "Vancouver, Canada",
      time: "2023 - Present",
      delay: 3.4,
      logo: "/ubc.jpeg",
    },
    {
      title: "Pelangi Kasih School",
      location: "Jakarta, Indonesia",
      time: "2011 - 2023",
      delay: 3.7,
      logo: "/pelangikasih.jpeg",
    },
  ],
  volunteering: [
    {
      title: "Check in desk for Q-SITE",
      location: "Vancouver, Canada",
      time: "2023",
      delay: 4.0,
      logo: "/qsite.jpg",
    },
    {
      title: "Cashier for high school bazaar",
      location: "Vancouver, Canada",
      time: "2022",
      delay: 4.3,
      logo: "/pelangikasih.jpeg",
    },
  ],
};

export const descriptionWords = [
  "Full stack developer based in Vancouver.",
  "Experience with various frameworks.",
  "Seeking to broaden experience.",
];

export const skillsTechnologies = [
  {
    title: "Languages / Frameworks",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Typescript",
      "C++",
      "Java",
      "Python",
      "Next JS",
      "React",
    ],
    svg_d:
      "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
  },
  {
    title: "Developer Tools",
    skills: [
      "REST",
      "APIs",
      "Git",
      "Github",
      "Docker",
      "Auth",
      "MongoDB",
      "Visual Studio",
      "Neovim",
    ],
    svg_d:
      "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125",
  },
  {
    title: "Miscellaneous",
    skills: [
      "Remote work",
      "Presentation",
      "Networking",
      "Teamwork",
      "Learning",
      "Adaptability",
      "Collaborative",
      "Review",
      "Optimization",
    ],
    svg_d:
      "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
  },
];

export interface ExperienceHeaderProps {
  title: String;
  delay: number;
}

export const experienceHeaderData = {
  experience: {
    title: "Experience 💻",
    delay: 0.4,
  },
  achievements: {
    title: "Achievements 🏆",
    delay: 2.5,
  },
  education: {
    title: "Education 📚",
    delay: 3.4,
  },
  volunteering: {
    title: "Volunteering 🤝",
    delay: 4.0,
  },
};
