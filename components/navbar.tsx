"use client";

import { motion } from "framer-motion";

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
    <nav className="mb-10 flex relative shadow-lg justify-center text-start">
      <div className="bg-white bg-opacity-10 text-white font-semibold py-2 px-4 border border-white border-opacity-15 rounded-full inline-flex h-15">
        <div className="rounded-full background-transparent border-white flex flex-row items-center justify-between m-auto items-center">
          {navLinks.map((navLink) => (
            <a
              key={navLink.href}
              href={navLink.href}
              className="text-white antialiased hover:font-extrabold tracking-normal hover:tracking-wider hover:underline hover:underline-offset-4 font-medium text-sm px-5"
            >
              {navLink.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
