import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { sendMail } from "@/actions/sendMail";

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

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Form>({ resolver: zodResolver(contactSchema) });

  async function useSubmit({ name, email, umessage }: Form) {
    const response = await sendMail(name, email, umessage);
    setSubmitted(true);
  }

  return (
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
          <p className="text-red-500 text-md mt-2">{errors.name?.message}</p>
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
          <p className="text-red-500 text-md mt-2">{errors.email?.message}</p>
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
        {submitted ? <>Submitted !</> : <>Submit</>}
      </motion.button>
    </form>
  );
};

export default ContactForm;
