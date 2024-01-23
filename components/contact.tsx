"use client";

import { motion } from "framer-motion";
import { SecondaryWrapper } from "@/wrappers/SecondaryWrapper";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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

const Contact = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Form>({ resolver: zodResolver(contactSchema) });

  const useSubmit = ({ name, email, umessage }: Form) => {
    console.log(name, email, umessage);
  };

  return (
    <SecondaryWrapper>
      <div className="h-full w-full flex flex-col gap-10 py-10 px-10 justify-center m-auto text-start">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white text-4xl md:text-5xl font-mono font-bold relative"
        >
          Contact Me
        </motion.h1>
        <form onSubmit={handleSubmit(useSubmit)}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="relative mb-5 w-full lg:w-1/2"
          >
            <input
              type="text"
              id="name"
              placeholder="Your Name"
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
            className="relative mb-5 w-full lg:w-1/2"
          >
            <input
              type="text"
              id="email"
              placeholder="Your Email"
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
            className="relative mb-5 w-full lg:w-1/2"
          >
            <textarea
              id="name"
              placeholder="Message"
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
    </SecondaryWrapper>
  );
};

export default Contact;
