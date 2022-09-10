import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Particles from "react-particles";
import { Engine, Opacity } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import "../App.css";
import particlesOptions from "../particles.json";
import { ISourceOptions } from "tsparticles-engine";

import DisabledGraphics from "../routes/DisabledGraphics";

import { motion } from "framer-motion";
import CircleComponent from "../components/CircleComponent";
import { dragContext, expandContext } from "../utils/context";

function Home() {
  //Particles Load
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  //Refs
  const circleConstraint = useRef(null);

  //states
  //start
  const [start, setStart] = useState<boolean>(false);
  //context state
  const { isDragging } = useContext(dragContext);
  const {isExpanding} = useContext(expandContext);

  //particles
  const [isParticles, setIsParticles] = useState<boolean>(true);

  //handle start
  const handleStart = () => {
    setStart(true);
  };

  //lifecycle management
  useEffect(() => {}, [start]);

  return (
    //Parent
    <div
      ref={circleConstraint}
      className="div w-screen h-[130vh] overflow-hidden "
    >
      {/* Active Particles  */}
      {isParticles && (
        <Particles
          options={particlesOptions as ISourceOptions}
          init={particlesInit}
        />
      )}

      {/* Disabled Particles  */}
      {!isParticles && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transitionDuration: "500ms",
          }}
          className="bg-disabled-particles -z-10 bg-slate-800 w-screen h-screen"
        >
          <DisabledGraphics />
        </motion.div>
      )}

      {/* Start Text  */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: start ? -80 : 0, opacity: start ? 0 : 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="App text-center text-green-200 font-extrabold text-2xl m-8 "
      >
        Tap{" "}
        <motion.div
          onClick={handleStart}
          animate={{ scale: start ? 0.9 : 1 }}
          transition={{ duration: 0.3 }}
          className="underline relative cursor-pointer link italic inline-block here"
        >
          Here
        </motion.div>{" "}
        To Start
      </motion.div>

      {/* Circles  */}
      {/* Circle Component  */}
      <CircleComponent 
      start={start} 
      circleConstraints={circleConstraint} />

      {/* Disable Particles Text  */}
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

      {/* Glowing light  */}
      <motion.div
        animate={{ opacity: isDragging ? 1 : 0, transitionDuration: "200ms" }}
        className="glowing-line absolute bottom-0 w-screen 
      h-2 bg-green-400 shadow-2xl shadow-green-200"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ yoyo: Infinity, duration: 0.5 }}
          className="glowing-shadow bg-green-800 w-screen h-5 "
        ></motion.div>
      </motion.div>

      {/* expanding transition animation element  */}
      <motion.div animate={{ width: isExpanding? 5000: 0, height: isExpanding? 2000 : 0, transitionDuration: "2000ms" }}
      className="w-0 h-0 expanding-animation-element absolute bottom-0 bg-red-500"></motion.div>
    </div>
  );
}

export default Home;
