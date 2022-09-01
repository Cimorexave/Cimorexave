import React, { useEffect, useRef, useState } from 'react';
import {motion} from "framer-motion";

const CircleComponent = () => {

  //Ref
  const ball = useRef(null)
  console.log(ball);
  //state
  const [drag, setDrag] = useState<boolean>(false)
  const [offsetLeft, setOffsetLeft] = useState<number>()
  const [offsetTop, setOffsetTop] = useState<number>()
  const [offsetRight, setOffsetRight] = useState<number>()
  const [offsetBottom, setOffsetBottom] = useState<number>()
  //lifecycle management
  useEffect(() => {
    var bodyRect = document.body.getBoundingClientRect(),
    elemRect = document.getElementById("ball")?.getBoundingClientRect()

    if (elemRect !== undefined ) {
      var _offsetTop  = elemRect.top - bodyRect.top;
      setOffsetTop((_offsetTop - 64)*-1)
      var _offsetLeft = elemRect.left - bodyRect.left;
      setOffsetLeft((_offsetLeft - 64)*-1)
      console.log('top , left:', _offsetTop, _offsetLeft );
      setOffsetRight(window.innerWidth-_offsetLeft)
      setOffsetBottom(window.innerWidth-_offsetTop)
    }
    
  }, [])

    //drag constraint calculator based on window size

    //random number generator for positioning of balls


  return (
    <motion.div drag initial={{ scale: 0 }} whileHover={{ scale: 1.1 }} id="ball" ref={ball}
    animate={{ scale: 1 }} whileDrag={{ scale: 0.9 }} dragConstraints={{ left: offsetLeft, top: offsetTop, right: offsetRight, bottom: offsetBottom }}
    onViewportLeave={(e) => {console.log('left', e)}}
    className=" rounded-full w-32 h-32 p-4 shadow-2xl
    text-green-200 bg-slate-700 -right-24 top-24 bg-opacity-90 relative "  >

    </motion.div>
  )
}

export default CircleComponent