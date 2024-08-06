import { motion } from "framer-motion";
import React from 'react';
export const ShinnyButton = () => {
  return (
    <>
    <motion.button
      // initial={{ scale: 1 }}
      // // animate={{ x: "-100%" }}      
      whileHover={{ translateY: 5 }}
      whileTap={{ translateY: -1 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.5,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="px-5 py-3 tracking-2 relative radial-gradient  
      text-white font-bold shadow-lg rounded-md transform transition-transform"
    >
      <p className="text-neutral-100  tracking-wide font-light h-full w-full 
      block relative linear-mask lg:text-xl ">
        Available Services ↓
      </p>
      <span className="block absolute inset-0 border-none p-px linear-overlay" />
    </motion.button>
    </>
  );
};
