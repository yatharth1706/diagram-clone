import React from "react";
import DiagramLogo from "./assets/DiagramLogo.png";
import DiagramLogoPic from "./assets/DiagramLogoPic.png";
import Stars from "./assets/Stars.png";
import SolarSystem from "./components/SolarSystem";

function DiagramHomePage() {
  return (
    <div className="flex flex-col w-full py-4 px-10 relative bg-transparent">
      <div className="flex items-center justify-between">
        <img src={DiagramLogo} alt="Logo" />
        <div className="flex text-gray-300 space-x-12">
          <li className="list-none">Magician</li>
          <li className="list-none">Genius</li>
          <li className="list-none">Automator</li>
          <li className="list-none">UI-AI</li>
        </div>
        <button className="rounded-full w-20 h-10 bg-[#ffffff14] text-gray-200 border border-[#ffffff14]">
          Login
        </button>
      </div>
      <div className="w-full flex flex-col items-center justify-center p-10 mt-20 text-gray-200 space-y-8">
        <h1 className="font-medium text-[5em] leading-none max-w-[600px] text-center ">
          Design tools from the future.
        </h1>
        <p className="max-w-xs text-center text-xl text-gray-400">
          Unleash your creativity with Diagram's AI-powered design tools.
        </p>
        <button className="rounded-full px-8 py-6 flex space-x-3 items-center h-10 bg-[#ffffff14] text-gray-200 border border-[#ffffff14]">
          <img src={DiagramLogoPic} alt="Diagram Logo Pic" />
          <span className="bg-transparent">Explore the future</span>
        </button>
      </div>
      <SolarSystem />
    </div>
  );
}

export default DiagramHomePage;
