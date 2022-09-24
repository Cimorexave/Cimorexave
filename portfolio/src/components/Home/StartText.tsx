import React from "react";
import { motion } from "framer-motion";
//types
import StartInterface from "../../types/start.interface";

const StartText = ({ start, setStart }: StartInterface) => {
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: start ? -80 : 0, opacity: start ? 0 : 1 }}
      transition={{ duration: 1, delay: 2 }}
      className="App text-center text-green-200 font-extrabold text-2xl m-8 "
    >
      Tap{" "}
      <motion.div
        onClick={() => {
          setStart(true);
        }}
        animate={{ scale: start ? 0.9 : 1 }}
        transition={{ duration: 0.3 }}
        className="underline relative cursor-pointer link italic inline-block here"
      >
        Here
      </motion.div>{" "}
      To Start
    </motion.div>
  );
};

export default StartText;
