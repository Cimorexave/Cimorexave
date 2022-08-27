import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles-engine";

import {motion} from "framer-motion"
import CircleComponent from "./components/CircleComponent";

function App() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    //states
    const [start, setStart] = useState<boolean>(false)
    //handle start
    const handleStart = () => {
        setStart(true)
    }
    //lifecycle management
    useEffect(() => {
        const x = Math.floor(Math.random()*window.innerWidth).toString();
        const y = Math.floor(Math.random()*window.innerHeight).toString();
        //these values are passed down into the component for random positioning
        console.log(`x:${x} , y: ${y}`);
    }, [start])

    return (
        <div>
            <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
            <motion.div initial={{ y: -80, opacity: 0 }} 
            animate={{ y: start? -80: 0, opacity: start? 0: 1 }} transition={{ duration: 1, delay: 2 }} 
            className="App text-center text-green-200 font-extrabold text-2xl m-8 ">
                Tap <motion.div onClick={handleStart} animate={{ scale: start? 0.9: 1 }} transition={{ duration: 0.3 }}
                className="underline relative cursor-pointer link italic inline-block here">
                    Here
                    </motion.div> To Start
            </motion.div>
            <motion.div animate={{ scale: start? 1:0 }}><CircleComponent /></motion.div>
        </div>
    );
}

export default App;
