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
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, delay: 0 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://react.dev/" target="blank">
            <RiReactjsLine className="text-7xl hover:text-cyan-300 text-cyan-400" />
          </a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5, delay: 0 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://redux-toolkit.js.org/" target="blank">
            <SiRedux className="text-7xl hover:text-purple-500 text-purple-600" />
          </a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 2, delay: 0 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://javascript.info/" target="blank">
            <RiJavascriptLine className="text-7xl hover:text-yellow-500 text-yellow-600" />
          </a>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 2.5, delay: 0 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://tailwindcss.com/" target="blank">
            <RiTailwindCssLine className="text-7xl hover:text-cyan-300 text-cyan-400" />
          </a>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 3, delay: 0 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://www.typescriptlang.org/" target="blank">
            <BiLogoTypescript className="text-7xl hover:text-cyan-500 text-cyan-600" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};
