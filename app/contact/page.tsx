"use client";

import { motion } from "framer-motion";
import { SecondaryWrapper } from "@/wrappers/SecondaryWrapper";
import { useEffect } from "react";
import Link from "next/link";
import { useActivePageContext } from "@/context/activePageContext";
import { Page } from "@/context/activePage";
import ContactForm from "@/components/contactForm";

// Contact Page
export default function Contact() {
  const { activePage, setActivePage } = useActivePageContext();

  useEffect(() => {
    setActivePage(Page.CONTACT);
  }, [activePage]);

  return (
    <>
      <main className="h-full w-full">
        <div className="flex flex-col h-[850px]">
          <SecondaryWrapper>
            <div className="flex flex-inline w-full">
              <div className="h-full w-full flex flex-col gap-10 px-4 md:px-20 justify-center m-auto text-start">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-white text-4xl md:text-6xl font-bold relative"
                >
                  Contact Me
                </motion.h1>
                <ContactForm />
              </div>
              <div className="h-full w-0 md:w-full flex flex-col gap-10 py-10 px-4 md:px-20 justify-center m-auto text-start">
                <div className="w-0 md:w-full flex-col">
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-white text-4xl md:text-6xl font-bold relative"
                  >
                    Or..
                  </motion.h1>

                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    type="submit"
                    className="relative bg-transparent border-2 hover:bg-white text-xl text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-lg inline-flex mt-6"
                  >
                    <Link href="mailto:brianvalentinoadhitya@gmail.com">
                      Send me an email
                    </Link>
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
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </SecondaryWrapper>
        </div>
      </main>
    </>
  );
}
