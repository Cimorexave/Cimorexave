import React, { useContext } from "react";
import { motion } from "framer-motion";
import { expandContext } from "../../utils/context";
import "../../assets/styles/expandingmenu.module.css";

const ExpandingMenu = () => {
  //states
  //context
  const { isExpanding } = useContext(expandContext);
  return (
    <motion.div
      animate={{
        width: isExpanding ? 5000 : 0,
        height: isExpanding ? 2000 : 0,
        transitionDuration: "2000ms",
      }}
      className="w-0 h-0 expanding-animation-element absolute bottom-0 bg-slate-800"
    ></motion.div>
  );
};

export default ExpandingMenu;
