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

  //Circle's Window Offset
  const [circleOffset, setCircleOffset] = useState<{
    top: number;
    right: number;
  }>({
    top: 0,
    right: 0,
  });

  //LifeCycle Management
  useEffect(() => {
    //Setting Windows Size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  //Setting Offset
  useEffect(() => {
    //clg
    console.log(document.getElementById("circle")?.getClientRects());
    console.log(document.getElementById("circle")?.getBoundingClientRect());
    // setCircleOffset({
    //   top = windowSize.height - document.getElementById("circle")?.getClientRects();
    //   right = windowSize.width - ;
    // })
  }, [windowSize])

  //Refs
  //Circle
  const circle = useRef(null);

  //JSX
  return (
    <motion.div
      id="circle"
      ref={circle}
      drag
      initial={{ scale: 0 }}
      whileHover={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      whileDrag={{ scale: 0.9 }}
      dragConstraints={{ right: 0 }}
      className=" rounded-full w-32 h-32 p-4 shadow-2xl
    text-green-200 bg-slate-600 left-0 top-20 bg-opacity-80 relative right "
    ></motion.div>
  );
};

export default CircleComponent;
