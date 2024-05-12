"use client";

import { motion } from "framer-motion";
import { SecondaryWrapper } from "@/wrappers/SecondaryWrapper";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useActivePageContext } from "@/context/activePageContext";
import { Page } from "@/context/activePage";

const contactSchema = z.object({
  name: z.string().min(1, { message: "Your name is required" }),
  email: z.string().email().min(1, {
    message: "Your email is required",
  }),
  umessage: z
    .string()
    .min(1, {
      message: "Your message is required",
    })
    .max(700, {
      message: "Your message is too long",
    }),
});

type Form = z.infer<typeof contactSchema>;

// Contact Page
export default function Contact() {
  const { activePage, setActivePage } = useActivePageContext();

  useEffect(() => {
    setActivePage(Page.CONTACT);
  }, [activePage]);

  const [submitted, setSubmitted] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Form>({ resolver: zodResolver(contactSchema) });

  const useSubmit = async ({ name, email, umessage }: Form) => {
    console.log(name, email, umessage);
    setSubmitted(true);
  };
  return (
    <>
      <main className="h-full w-full">
        <div className="flex flex-col h-[850px]">
          <SecondaryWrapper>
            <div className="flex flex-inline w-full">
              <div className="h-full w-full flex flex-col gap-10 py-10 px-4 md:px-20 justify-center m-auto text-start">
                {submitted && (
                  <div className="gap-4 inline-flex items-center justify-center flex-shrink-0 w-44 h-8 text-white border border-white w-14 h-14 rounded-lg bg-white bg-opacity-10">
                    <svg
                      className="w-8 h-8"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-white text-md font-mono">
                      Thank you!{" "}
                    </span>
                  </div>
                )}
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-white text-4xl md:text-6xl font-bold relative"
                >
                  Contact Me
                </motion.h1>
                <form onSubmit={handleSubmit(useSubmit)}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="relative mb-5 w-full mr-4"
                  >
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      disabled={submitted}
                      className="block w-full h-50 p-4 text-white text-xl border border-white border-2 placeholder:text-xl focus:border-4 rounded-lg bg-white bg-opacity-10 outline-none"
                      {...register("name")}
                    ></input>
                    {errors.name && (
                      <p className="text-red-500 text-md mt-2">
                        {errors.name?.message}
                      </p>
                    )}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="relative mb-5 w-full"
                  >
                    <input
                      type="text"
                      id="email"
                      placeholder="Your Email"
                      disabled={submitted}
                      className="block w-full h-50 p-4 text-white text-xl border border-white border-2 placeholder:text-xl focus:border-4 rounded-lg bg-white bg-opacity-10 outline-none"
                      {...register("email")}
                    ></input>
                    {errors.email && (
                      <p className="text-red-500 text-md mt-2">
                        {errors.email?.message}
                      </p>
                    )}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="relative mb-5 w-full"
                  >
                    <textarea
                      id="name"
                      placeholder="Message"
                      disabled={submitted}
                      className="block w-full h-56 p-4 text-white text-xl border border-white border-2 placeholder:text-xl focus:border-4 rounded-lg bg-white bg-opacity-10 outline-none"
                      {...register("umessage")}
                    ></textarea>
                    {errors.umessage && (
                      <p className="text-red-500 text-md mt-2">
                        {errors.umessage?.message}
                      </p>
                    )}
                  </motion.div>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    type="submit"
                    disabled={submitted}
                    className="relative bg-transparent border-2 hover:bg-white text-xl text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-lg inline-flex"
                  >
                    Submit
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
                  </motion.button>
                </form>
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
                    disabled={submitted}
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
