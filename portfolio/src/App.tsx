import React, { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles-engine";

import {motion} from "framer-motion"

function App() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div>
            <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
            <motion.div initial={{ y: -60, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2 }} 
            className="App text-center text-green-200 font-extrabold text-2xl m-8 ">
                Tap <div className="underline relative link italic inline-block here">
                    Here
                    </div> To Start
            </motion.div>
        </div>
    );
}

export default App;
