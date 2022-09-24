import React from "react";
import { motion } from "framer-motion";

const GlowingLight = ({ isDragging }: { isDragging: boolean }) => {
  return (
    <motion.div
      animate={{ opacity: isDragging ? 1 : 0, transitionDuration: "200ms" }}
      className="glowing-line absolute bottom-0 w-screen 
      h-2 bg-green-400 shadow-2xl shadow-green-200"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ yoyo: Infinity, duration: 0.5 }}
        className="glowing-shadow bg-green-800 w-screen h-5 "
      ></motion.div>
    </motion.div>
  );
};

export default GlowingLight;
