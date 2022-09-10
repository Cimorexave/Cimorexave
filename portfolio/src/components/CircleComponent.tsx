//imports
//react utils
import React from "react";

//framer motion 
import { motion } from "framer-motion";

//interface
interface CCPropsInterface {
    start: boolean,
    circleConstraints: React.MutableRefObject<null>,

}

const CircleComponent = (props: CCPropsInterface) => {
  return (
    <motion.div
      drag
      initial={{ scale: 0 }}
      whileHover={{ scale: 1.1, cursor: "pointer" }}
      animate={{ scale: props.start ? 1 : 0 }}
      whileDrag={{ scale: 0.9 }}
      dragConstraints={props.circleConstraints}
      className=" rounded-full h-1/5 aspect-square p-4 shadow-2xl
        text-green-200 bg-slate-600 left-8 top-20 bg-opacity-80 
        relative right grid place-items-center text-xl drop-shadow-2xl font-bold"
    >
        Skills
    </motion.div>
  );
};

export default CircleComponent;