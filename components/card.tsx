"use client";

import { imageStyle } from "@/app/styles/styles";
import { motion } from "framer-motion";
import Image from "next/image";

interface CardProps {
  title: string;
  location: string;
  time: string;
  delay: number;
  logo: string;
}

const Card = (data: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: data.delay }}
      whileHover={{ scale: 1.04 }}
      className="items-center justify-between p-4 bg-white bg-opacity-10 border border-gray-200 rounded-lg shadow-sm sm:flex relative"
    >
      <motion.time
        animate={{ y: -20 }}
        className="text-lg font-normal text-gray-400 sm:order-last sm:mb-0"
      >
        {data.time}
      </motion.time>
      <div className="flex">
        <div className="mt-2 mr-4">
          <Image
            src={data.logo}
            alt="Logo"
            width={"60"}
            height={"60"}
            style={imageStyle}
          />
        </div>
        <div className="text-2xl font-bold text-white">
          {data.title}
          <br></br>
          <div className="flex mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-5 h-5 stroke-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
              />
            </svg>
            <motion.h1
              animate={{ x: 8, y: -4 }}
              className="font-normal text-xl text-gray-400"
            >
              {data.location}
            </motion.h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
