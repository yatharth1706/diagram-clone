import React from "react";
import P1 from "./../assets/P1.png";
import P2 from "./../assets/P2.png";
import P3 from "./../assets/P3.png";
import P4 from "./../assets/P4.png";
import P5 from "./../assets/P5.png";
import Center from "./../assets/Center1.png";
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
          <motion.img
            src={P2}
            className="w-12 h-12 absolute  -top-6 bg-transparent"
            animate={{ rotateZ: [0, 360] }}
            transition={{
              repeat: Infinity,
              duration: 180,
            }}
          />
        </motion.div>
        <div className="w-[850px] h-[850px] border border-slate-600 border-t-0 rounded-full bg-transparent flex flex-col justify-center items-center relative">
          <motion.div
            className="bg-transparent w-full h-full rounded-full flex justify-center absolute"
            style={{ zIndex: 0 }}
            initial={{ z: -10 }}
            animate={{ rotateZ: [-60, 90, 180, 270, 360] }}
            transition={{
              repeat: Infinity,
              duration: 90,
            }}
          >
            <motion.img
              src={P1}
              className="w-24 h-24 absolute -top-10 bg-transparent -z-50"
              animate={{ rotateZ: [0, 360] }}
              transition={{
                repeat: Infinity,
                duration: 180,
              }}
            />
          </motion.div>
          <div className="w-[700px] h-[700px] border border-slate-600 border-t-0 rounded-full bg-transparent flex flex-col justify-center items-center relative">
            <motion.div
              className="bg-transparent w-full h-full rounded-full flex justify-center absolute"
              initial={{ z: -120 }}
              animate={{ rotateZ: [-120, 90, 180, 270, 360] }}
              transition={{
                repeat: Infinity,
                duration: 90,
              }}
            >
              <motion.img
                src={P3}
                className="w-12 object-cover absolute -top-5 bg-transparent -z-50"
                animate={{ rotateZ: [0, 360] }}
                transition={{
                  repeat: Infinity,
                  duration: 180,
                }}
              />
            </motion.div>
            <div className="w-[550px] h-[550px] border border-slate-600 border-t-0 rounded-full bg-transparent flex flex-col justify-center items-center relative">
              <motion.div
                className="bg-transparent w-full h-full rounded-full flex justify-center absolute"
                initial={{ z: -160 }}
                animate={{ rotateZ: [-160, 90, 180, 270, 360] }}
                transition={{
                  repeat: Infinity,
                  duration: 200,
                }}
              >
                <motion.img
                  src={P4}
                  className="w-12 object-cover absolute -top-5 bg-transparent -z-50"
                  animate={{ rotateZ: [0, 360] }}
                  transition={{
                    repeat: Infinity,
                    duration: 180,
                  }}
                />
              </motion.div>
              <div className="w-[400px] h-[400px] border border-slate-600 border-t-0 rounded-full bg-transparent flex flex-col justify-center items-center relative">
                <motion.div
                  className="bg-transparent w-full h-full rounded-full flex justify-center absolute"
                  initial={{ z: -280 }}
                  animate={{ rotateZ: [-280, 90, 180, 270, 360] }}
                  transition={{
                    repeat: Infinity,
                    duration: 180,
                  }}
                >
                  <motion.img
                    src={P5}
                    className="w-12 object-cover absolute -top-5 bg-transparent -z-50"
                    animate={{ rotateZ: [0, 360] }}
                    transition={{
                      repeat: Infinity,
                      duration: 180,
                    }}
                  />
                </motion.div>
                <img src={Center} className="w-3/5 h-3/5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolarSystem;
