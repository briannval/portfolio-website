"use client";

import { motion } from "framer-motion";

interface CardProps {
  title: string;
  location: string;
  time: string;
}

const Card = (data: CardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="items-center justify-between p-4 bg-white bg-opacity-10 border border-gray-200 rounded-lg shadow-sm sm:flex relative"
    >
      <motion.time
        animate={{ y: -20 }}
        className="text-lg font-normal text-gray-400 sm:order-last sm:mb-0"
      >
        {data.time}
      </motion.time>
      <div className="text-2xl font-bold text-white">
        {data.title}
        <br></br>
        <div className="flex mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            className="w-5 h-5 stroke-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
            />
          </svg>
          <motion.h1
            animate={{ x: 8, y: -4 }}
            className="font-normal text-lg text-gray-400"
          >
            {data.location}
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
