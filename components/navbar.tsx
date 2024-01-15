"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const navLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Experience",
      href: "/experience",
    },
  ];
  return (
    <nav className="mb-10 h-full w-full flex relative shadow-lg z-50 justify-center text-start">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ ease: "anticipate", duration: 1, delay: 0.25 }}
        className="bg-white bg-opacity-10 text-white font-semibold py-2 px-4 border border-white border-opacity-15 rounded-full inline-flex h-15"
      >
        <div className="rounded-full background-transparent border-white flex flex-row items-center justify-between m-auto items-center">
          {navLinks.map((navLink) => (
            <a
              href={navLink.href}
              className="text-white antialiased hover:font-extrabold tracking-normal hover:tracking-wider hover:underline hover:underline-offset-4 font-medium text-sm px-5"
            >
              {navLink.title}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
