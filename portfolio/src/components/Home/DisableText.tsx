import React from "react";
import { motion } from "framer-motion";
//types
import ParticlesInterface from "../../types/particles.interface";

const DisableText = ({ isParticles, setIsParticles }: ParticlesInterface) => {
  return (
    <div className="disable-text absolute bottom-3 left-3 text-gray-400 text-xs">
      {isParticles ? "annoying?" : "boring?"}{" "}
      <motion.span
        whileHover={{ cursor: "pointer" }}
        onClick={() => {
          setIsParticles(!isParticles);
        }}
        className="text-sm font-bold underline"
      >
        {isParticles ? "Disable" : "Enable"}
      </motion.span>{" "}
      background graphics
    </div>
  );
};

export default DisableText;
