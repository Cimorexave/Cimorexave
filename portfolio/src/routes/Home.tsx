import React, { useCallback, useEffect, useRef, useState } from "react";
import Particles from "react-particles";
import { Engine, Opacity } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import "../App.css";
import particlesOptions from "../particles.json";
import { ISourceOptions } from "tsparticles-engine";

import DisabledGraphics from "../components/DisabledGraphics";

import { motion } from "framer-motion";
import CircleComponent from "../components/CircleComponent";

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
      className="div w-screen h-screen overflow-hidden"
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
          animate={{
            opacity: isParticles ? 0 : 1,
            transitionDuration: "10000ms",
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
      <CircleComponent start={start} circleConstraints={circleConstraint} />

      {/* Disable Particles Text  */}
      <div className="disable-text absolute bottom-3 left-3 text-gray-400 text-xs">
        annoying?{" "}
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
    </div>
  );
}

export default Home;
