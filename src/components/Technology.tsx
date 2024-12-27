import {
  RiJavascriptLine,
  RiReactjsLine,
  RiTailwindCssLine,
} from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { motion } from "motion/react";
import { SiRedux } from "react-icons/si";

export const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1, delay: 0 }}
        className="my-20 text-center text-4xl"
      >
        Technology
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          initial={{ y: -10 }}
          animate={{
            y: [10, -10],
            transition: {
              duration: 1.5,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{
            y: [10, -10],
            transition: {
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiRedux className="text-7xl text-purple-600" />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{
            y: [10, -10],
            transition: {
              duration: 2.5,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiJavascriptLine className="text-7xl text-yellow-600" />
        </motion.div>

        <motion.div
          initial={{ y: -10 }}
          animate={{
            y: [10, -10],
            transition: {
              duration: 1.75,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          initial={{ y: -10 }}
          animate={{
            y: [10, -10],
            transition: {
              duration: 1,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoTypescript className="text-7xl text-cyan-600" />
        </motion.div>
      </div>
    </div>
  );
};
