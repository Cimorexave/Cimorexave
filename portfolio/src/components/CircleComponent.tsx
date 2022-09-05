//Imports

//React Utils
import { useEffect, useRef, useState } from "react";

//Framer Motion
import { motion } from "framer-motion";

//Component
const CircleComponent = () => {
  //States
  //Window Size
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  //LifeCycle Management
  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  //Refs
  //Circle
  const circle = useRef(null)

  //JSX
  return (
    <motion.div
      ref={ circle }
      drag
      initial={{ scale: 0 }}
      whileHover={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      whileDrag={{ scale: 0.9 }}
      dragConstraints={{ right: 0 }}
      className=" rounded-full w-32 h-32 p-4 shadow-2xl
    text-green-200 bg-slate-600 right-5 top-20 bg-opacity-80 relative right "
    ></motion.div>
  );
};

export default CircleComponent;
