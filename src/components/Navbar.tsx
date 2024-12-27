import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { motion } from "motion/react";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6 px-3">
      <div className="flex items-center text-2xl gap-2">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 10 }}>
          <a href="https://react.dev/" target="blank">
            <RiReactjsLine className="text-4xl hover:text-cyan-400 text-cyan-500" />
          </a>
        </motion.div>
        <Link to="about" smooth={true} duration={1000}>
          <h1 className="text-4xl text-neutral-400 cursor-pointer hover:text-neutral-300">
            VG
          </h1>
        </Link>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-4xl">
        <a href="https://www.linkedin.com/in/venugopalgreact/" target="blank">
          <FaLinkedin className=" text-blue-600 hover:text-blue-500" />
        </a>
        <a href="https://github.com/GopalDev22/react-portfolio" target="blank">
          <FaGithub className="text-neutral-400 hover:text-neutral-300" />
        </a>
      </div>
    </nav>
  );
};
