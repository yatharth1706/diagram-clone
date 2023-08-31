import React from "react";
import P1 from "./../assets/P1.png";
import P2 from "./../assets/P2.png";
import { motion } from "framer-motion";

function SolarSystem() {
  return (
    <div className="flex justify-center -mt-36 bg-transparent max-w-6xl h-full mx-auto">
      <div className="w-[1000px] h-[1000px] border border-slate-600 border-t-0 rounded-full bg-transparent flex flex-col justify-center items-center relative">
        <motion.div
          className="bg-transparent w-full h-full rounded-full flex justify-center absolute"
          initial={{ z: 45 }}
          animate={{ rotateZ: [45, 90, 180, 270, 360] }}
          transition={{
            repeat: Infinity,
            duration: 200,
          }}
        >
          <img src={P2} className="w-12 h-12 absolute  -top-6 bg-transparent" />
        </motion.div>
        <div className="w-[850px] h-[850px] border border-slate-600 border-t-0 rounded-full bg-transparent flex flex-col justify-center items-center relative">
          <motion.div
            className="bg-transparent w-full h-full rounded-full flex justify-center absolute"
            initial={{ z: -60 }}
            animate={{ rotateZ: [-60, 90, 180, 270, 360] }}
            transition={{
              repeat: Infinity,
              duration: 90,
            }}
          >
            <img
              src={P1}
              className="w-24 h-24 absolute -top-10 bg-transparent"
            />
          </motion.div>
          <div className="w-[700px] h-[700px] border border-slate-600 border-t-0 rounded-full bg-transparent flex flex-col justify-center items-center relative">
            <div className="w-[550px] h-[550px] border border-slate-600 border-t-0 rounded-full bg-transparent flex flex-col justify-center items-center relative">
              <div className="w-[400px] h-[400px] border border-slate-600 border-t-0 rounded-full bg-transparent flex flex-col justify-center items-center relative"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolarSystem;
