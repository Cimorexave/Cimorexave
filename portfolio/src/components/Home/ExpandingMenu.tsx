import React, { useContext } from "react";
import { motion } from "framer-motion";
import { expandContext } from "../../utils/context";
import "../../assets/styles/expandingmenu.css";

const ExpandingMenu = () => {
  //states
  //context
  const { isExpanding } = useContext(expandContext);
  return (
    <div className="w-sreen h-screen top-0 left-0">
      {isExpanding && (
        <motion.div
          animate={{
            width: isExpanding ? 4000 : 0,
            height: isExpanding ? 2000 : 0,
            transitionDuration: "1000ms",
          }}
          className="expanding-menu overflow-hidden w-0 h-0 absolute bottom-0 bg-slate-800"
        ></motion.div>
      )}
    </div>
  );
};

export default ExpandingMenu;
