import React from "react";

function SolarSystem() {
  return (
    <div className="flex justify-center -mt-36 bg-transparent max-w-6xl h-full mx-auto">
      <div className="w-[1000px] h-[1000px] border border-slate-600 border-t-0 rounded-full bg-transparent flex flex-col justify-center items-center">
        <div className="w-[850px] h-[850px] border border-slate-600 border-t-0 rounded-full bg-transparent flex flex-col justify-center items-center">
          <div className="w-[700px] h-[700px] border border-slate-600 border-t-0 rounded-full bg-transparent flex flex-col justify-center items-center">
            <div className="w-[550px] h-[550px] border border-slate-600 border-t-0 rounded-full bg-transparent flex flex-col justify-center items-center">
              <div className="w-[400px] h-[400px] border border-slate-600 border-t-0 rounded-full bg-transparent flex flex-col justify-center items-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolarSystem;
