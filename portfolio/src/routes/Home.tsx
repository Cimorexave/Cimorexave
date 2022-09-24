//modules
//react utils
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
//particles
import Particles from "react-particles";
import { Engine, Opacity } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";
import { ISourceOptions } from "tsparticles-engine";
//styles
import "../assets/styles/App.css";
//routes
import DisabledGraphics from "../routes/DisabledGraphics";
//framer motion
import { motion } from "framer-motion";
//context
import { dragContext, expandContext } from "../utils/context";
//components
import CircleComponent from "../components/Home/CircleComponent";
import ExpandingMenu from "../components/Home/ExpandingMenu";
import GlowingLight from "../components/Home/GlowingLight";
import StartText from "../components/Home/StartText";
import DisableText from "../components/Home/DisableText";
//component
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
  //context 
  const { isDragging } = useContext(dragContext);
  const { isExpanding } = useContext(expandContext);

  //particles
  const [isParticles, setIsParticles] = useState<boolean>(true);

  return (
    //Parent
    <div
      ref={circleConstraint}
      className="div w-screen h-[130vh] overflow-hidden "
    >
      {isParticles ? (
        <Particles
          options={particlesOptions as ISourceOptions}
          init={particlesInit}
        />
      ) : (
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
      <StartText start={start} setStart={setStart} />

      {/* Circles  */}
      {/* Circle Component  */}
      <CircleComponent start={start} circleConstraints={circleConstraint} />

      {/* Disable Particles Text  */}
      <DisableText isParticles={isParticles} setIsParticles={setIsParticles} />

      {/* Glowing light  */}
      <GlowingLight isDragging={isDragging} />

      {/* expanding transition animation element  */}
      <ExpandingMenu />
    </div>
  );
}

export default Home;
