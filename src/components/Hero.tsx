import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profilePic.jpg";
import { motion } from "motion/react";
const container = (delay: number, direction: number) => ({
  hidden: {
    x: direction,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: delay,
    },
  },
});
export const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0, -100)}
              initial="hidden"
              animate="visible"
              className="text-4xl pb-16 font-thin tracking-tight lg:mt-16 lg:text-6xl "
            >
              Gaja Venu Gopal
            </motion.h1>
            <motion.span
              variants={container(0.2, -100)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Front End Developer
            </motion.span>
            <motion.p
              variants={container(0.3, -100)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              variants={container(1, 100)}
              initial="hidden"
              animate="visible"
              className="rounded"
              src={profilePic}
              alt="venu"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
