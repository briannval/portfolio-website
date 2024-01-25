"use client";

import VideoBackground from "@/components/videoBackground";
import { motion } from "framer-motion";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { SecondaryWrapper } from "@/wrappers/SecondaryWrapper";
import HomeCard from "@/components/homeCard";

export default function Home() {
  const descriptionWords = [
    "Full stack developer based in Vancouver.",
    "Experience with various frameworks.",
    "Seeking to broaden experience.",
  ];

  const skillsTechnologies = [
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

  const imageStyle = {
    borderRadius: "50%",
    border: "4px solid white",
  };

  const moveExperience = () => {
    window.location.href = "/experience";
  };

  const moveContact = () => {
    window.location.href = "/contact";
  };

  return (
    <>
      <VideoBackground />
      <main className="h-full w-full">
        <div className="flex flex-col h-[850px]">
          <SecondaryWrapper>
            <div className="w-full p-0 m-0 flex flex-inline">
              <div className="h-full w-full flex flex-col gap-4 md:ml-20 md:gap-10 lg:py-10 ml-5 md:px-20 mt-8 justify-center m-auto text-start">
                <motion.h1
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ ease: "anticipate", duration: 1.5 }}
                  className="text-white relative font-semibold text-white text-7xl md:text-9xl gap-6 font-bold"
                >
                  Hi 👋
                </motion.h1>
                <motion.h1
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ ease: "anticipate", duration: 1.5 }}
                  className="relative text-bold text-7xl md:text-9xl gap-6 font-semibold name bg-clip-text text-white"
                >
                  I'm
                  <strong className="bg-clip-text text-transparent font-extrabold bg-gradient-to-r from-cyan-600 to-violet-500">
                    {" "}
                    Brian
                  </strong>
                </motion.h1>
                <motion.h2
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ ease: "anticipate", duration: 1.4 }}
                  className="relative text-white font-mono mt-4 text-xs md:text-lg"
                >
                  {"> "}
                  <Typewriter
                    words={descriptionWords}
                    loop={false}
                    typeSpeed={50}
                    delaySpeed={1000}
                    deleteSpeed={50}
                    cursor
                  />
                </motion.h2>
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ ease: "anticipate", duration: 1.3 }}
                  className="relative inline-flex space-x-4 mt-4"
                >
                  <button
                    onClick={moveExperience}
                    className="bg-transparent text-md hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded inline-flex"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="ml-3 w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={moveContact}
                    className="bg-transparent hover:bg-white text-md text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded inline-flex"
                  >
                    Contact
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 ml-3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                      />
                    </svg>
                  </button>
                </motion.div>
              </div>
              <motion.div
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "anticipate", duration: 1.2 }}
                className="w-0 h-0 lg:w-full lg:h-full items-center justify-center flex py-10 mt-14"
              >
                <Image
                  src="/static/profile.jpeg"
                  alt="My Profile"
                  width={500}
                  height={500}
                  style={imageStyle}
                />
              </motion.div>
            </div>
            <hr className="my-12 h-0.5 border-t-0 bg-white opacity-100" />
            <motion.h1
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "anticipate", duration: 1.5 }}
              className="text-white relative text-bold mt-20 pt-20 md:mt-5 text-white text-4xl
            md:text-6xl gap-6 font-extrabold"
            >
              About Me
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "anticipate", duration: 1.7 }}
              className="w-1/2 items-center mb-20"
            >
              <p className="text-white text-center relative mt-10 text-white text-xs md:text-lg gap-10 mt-10 font-mono">
                I first learnt how to code at the age of 15, where I began with{" "}
                <strong className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-violet-500">
                  Python
                </strong>
                . Over the years, I decided to try various other languages, such
                as C++, Java, and started getting into
                <strong className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-violet-500">
                  {" "}
                  web development
                </strong>
                .<br></br>
                <br></br>
                Then I realized, tech has been meant for me. Whether developing
                websites, building short-term projects, or teaching young kids
                how to code, all those things mean so much to me.
              </p>
              <div className="flex justify-center items-center">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ ease: "anticipate", duration: 1.2 }}
                  className="relative inline-flex items-center mt-6"
                >
                  <motion.a
                    href="https://www.instagram.com/_brianval/"
                    whileHover={{ scale: 1.3 }}
                    target="blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/brian-valentino-b43b74262/"
                    whileHover={{ scale: 1.3 }}
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 ml-5"
                      fill="white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://github.com/briannval"
                    whileHover={{ scale: 1.3 }}
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 ml-5"
                      fill="white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
            <motion.h1
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "anticipate", duration: 2 }}
              className="text-white relative text-center text-bold mt-20 pt-20 md:mt-5 text-white text-4xl
            md:text-6xl gap-6 font-extrabold"
            >
              Skills and Technologies
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "anticipate", duration: 2.2 }}
              className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-16 mb-20"
            >
              {skillsTechnologies.map((props) => {
                return <HomeCard key={props.title} {...props} />;
              })}
            </motion.div>
            <motion.h1 className="text-white text-center relative mt-20 font-extrabold">
              Website created by Brian Adhitya 2024
              <br></br>
              brianvalentinoadhitya@gmail.com
            </motion.h1>
          </SecondaryWrapper>
        </div>
      </main>
    </>
  );
}
