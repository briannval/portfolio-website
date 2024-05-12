"use client";

import { navLinks } from "@/app/data/navigation";
import { useActivePageContext } from "@/context/activePageContext";

const Navbar = () => {
  const { activePage } = useActivePageContext();

  return (
    <nav className="mb-10 flex relative shadow-lg justify-center text-start">
      <div className="bg-white bg-opacity-10 text-white font-semibold py-2 px-4 border border-white border-opacity-15 rounded-full inline-flex h-15">
        <div className="rounded-full background-transparent border-white flex flex-row items-center justify-between m-auto items-center">
          {navLinks.map((navLink) =>
            activePage !== navLink.page ? (
              <a
                key={navLink.href}
                href={navLink.href}
                className="text-white antialiased tracking-normal hover:tracking-wider hover:underline hover:underline-offset-4 text-xs md:text-sm px-5"
              >
                {navLink.title}
              </a>
            ) : (
              <p
                key={navLink.href}
                className="text-white antialiased tracking-normal text-md md:text-lg px-5 font-black"
              >
                {navLink.title}
              </p>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
