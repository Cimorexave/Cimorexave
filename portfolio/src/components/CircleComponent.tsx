//imports
//react utils
import React, { useContext, useState } from "react";

//framer motion 
import { motion } from "framer-motion";
import { dragContext } from "../utils/context";

//interface
interface CCPropsInterface {
    start: boolean,
    circleConstraints: React.MutableRefObject<null>,

}

const CircleComponent = (props: CCPropsInterface) => {

  //States
  //Context
  const { isDragging, setIsDragging } = useContext(dragContext);

  //Expanded 
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  return (
    <motion.div
      onViewportLeave={() => { setIsExpanded(true); console.log('Exited Viewport') }}
      drag
      initial={{ scale: 0 }}
      whileHover={{ scale: 1.1, cursor: "pointer" }}
      animate={{ scale: props.start ? 1 : 0 }}
      whileDrag={{ scale: 0.9 }}
      dragConstraints={props.circleConstraints}
      onDrag={() =>{ setIsDragging(true); console.log(isDragging)}}
      onDragEnd={() => {setIsDragging(false)}}
      className=" rounded-full h-1/5 aspect-square p-4 shadow-2xl z-10
        text-green-200 bg-slate-600 left-8 top-20 bg-opacity-80 
        relative right grid place-items-center text-xl drop-shadow-2xl font-bold"
    >
      Skills
    </motion.div>
  );
};


export default CircleComponent;
