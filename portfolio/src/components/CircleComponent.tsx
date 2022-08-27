import React from 'react';
import {motion} from "framer-motion";

const CircleComponent = () => {

    //drag constraint calculator based on window size

    //random number generator for positioning of balls


  return (
    <motion.div drag initial={{ scale: 0 }} whileHover={{ scale: 1.1 }}
    animate={{ scale: 1 }} whileDrag={{ scale: 0.9 }}
    className=" rounded-full w-32 h-32 p-4 shadow-2xl
    text-green-200 bg-slate-600 right-5 top-20 bg-opacity-80 relative right "  >

    </motion.div>
  )
}

export default CircleComponent