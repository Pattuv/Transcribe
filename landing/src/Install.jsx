import Navbar from "./components/Navbar";
import asciiBg from "./assets/ascii.png";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import cursor from "./assets/ide/cursor.png";
import ggl from "./assets/ide/ggl.png";
import vs from "./assets/ide/vs.png";
import vsi from "./assets/ide/vsi.png";
import windsurf from "./assets/ide/windsurf.png";
import logo from "./assets/logo.svg";




function Install() {
  const tabs = [
    "VS Code",
    "VS Code Insiders",
    "Cursor",
    "Windsurf",
    "Antigravity",
    "Manual",
  ];

  const tabIcons = {
    Cursor: cursor,
    "VS Code": vs,
    "VS Code Insiders": vsi,
    "Antigravity": ggl,
    Windsurf: windsurf,
    Manual: logo,
  };

  const tabContent = {
    Cursor: (
      <div>
        <Link to="/tut" className="btn bg-white text-black text-sm p-4 font-medium rounded-full hover:scale-105 transition-transform duration-200 cursor-pointer inline-flex items-center justify-center">Install VSIX <i class="bi bi-arrow-up-right"></i></Link>


      </div>
    ),
    "VS Code": (
      <div>
          <a href="vscode:extension/Pattuv.transcribe"  className="btn bg-white text-black text-sm p-4 font-medium rounded-full hover:scale-105 transition-transform duration-200 cursor-pointer inline-flex items-center justify-center">Install for VSCode <i class="bi bi-arrow-up-right"></i></a>

      </div>
    ),
    "VS Code Insiders": (
    
      <div>
          <a href="vscode-insiders:extension/Pattuv.transcribe"  className="btn bg-white text-black text-sm p-4 font-medium rounded-full hover:scale-105 transition-transform duration-200 cursor-pointer inline-flex items-center justify-center">Install for VSCode Insiders <i class="bi bi-arrow-up-right"></i></a>

      </div>

    ),
    Windsurf: (
      <div>
        <p>Install Transcribe in Windsurf.</p>
        <p className="text-gray-400 mt-2">Use the VSIX installer or Extensions panel.</p>
      </div>
    ),
    Antigravity: (
      <div>
        <p>Install Transcribe in Antigravity.</p>
        <p className="text-gray-400 mt-2">Use the VSIX installer or Extensions panel.</p>
      </div>
    ),
    Manual: (
      <div>

          <Link to="/tut" className="btn bg-white text-black text-sm p-4 font-medium rounded-full hover:scale-105 transition-transform duration-200 cursor-pointer inline-flex items-center justify-center">Install VSIX <i class="bi bi-arrow-up-right"></i></Link>
          <p className="text-sm text-gray-400 my-4">
                Works for every IDE
          </p>
      </div>
    ),
  };
  

  const customDescriptions = {
    Manual: "Manual installation instructions",
  };
  
  

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const dialogRef = useRef(null);
  return (
    <>
      <Navbar />
      <div className="relative flex flex-col items-center justify-center min-h-[calc(90vh-64px)] px-6 md:px-10 overflow-hidden ">
        
        {/* ASCII image as the "heading" */}
        <img
          src={asciiBg}
          alt="ASCII Heading"
          className="w-[30%] md:w-[30%] h-auto opacity-100 select-none pointer-events-none"
        />

        {/* Two buttons with hover fade */}
        <span className="flex items-center gap-4 mt-6 text-gray-500 z-10">
          {/* Install placeholder */}
          <p onClick={()=>document.getElementById('install-modal').showModal()} className="text-sm font-light flex items-center cursor-pointer hover:text-gray-300 transition-colors duration-300">
            Install <i className="bi bi-download ml-1"></i>
          </p>

          {/* Divider */}
          <span className="h-4 border-l border-gray-400/50" aria-hidden="true" />

          {/* Guide button */}
          <Link
            to="/tut"
            className="text-sm font-light flex items-center hover:text-gray-300 transition-colors duration-300"
          >
            Guide <i className="bi bi-book ml-1"></i>
          </Link>
        </span>

        <div>
          <p className="text-xs mt-3 font-light flex items-center text-gray-600 justify-center transition-colors duration-300">
            Copyright © 2026 Pratyush Verma. All rights reserved.
          </p>
        </div>
      </div>

      <dialog
      id="install-modal"
      ref={dialogRef}
      className="modal"
      onClick={(e) => {
        // Close if clicking the backdrop (outside modal-box)
        if (e.target === e.currentTarget) {
          dialogRef.current?.close();
        }
      }}
    >
      <div className="modal-box bg-[#0f0f0f] text-white border border-gray-800 p-0 max-w-4xl relative ">

        {/* Close (X) button */}
        <button
          onClick={() => dialogRef.current?.close()}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-800">
          <h3 className="font-semibold text-lg">Install Transcribe</h3>
          <p className="text-xs text-gray-400 font-light mt-1">
            Select your IDE below.
          </p>
        </div>

        {/* Body */}
        <div className="flex py-7">
          {/* Sidebar */}
          <div className="w-2/6 ml-4  flex flex-col gap-2  ">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 text-sm transition pl-4 text-left rounded-xl  flex items-center gap-3
                  ${
                    activeTab === tab
                      ? "bg-[#1a1a1a] text-white border border-gray-600"
                      : "text-gray-400 hover:bg-[#151515]"
                  }`}
              >
                <div className="p-2 bg-gray-800 border border-gray-700 rounded-lg">
                <img
                  src={tabIcons[tab]}
                  alt={`${tab} logo`}
                  className="w-6 h-6 object-contain"
                /> </div>

                <span>{tab}</span>
              </button>
            ))}
          </div>

          {/* Main content (square) */}
          <div className="w-4/6 flex items-center justify-center">
            <div className="aspect-square w-[85%] bg-[#181818] border border-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <h4 className="text-lg font-medium">{activeTab}</h4>
                <p className="text-sm text-gray-400 mt-2">
                {customDescriptions[activeTab] ??
                  `Install Transcribe for ${activeTab}`}
              </p>
              <div className="mt-3">
                {tabContent[activeTab]}
              </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
    </>
  );
}

export default Install;
