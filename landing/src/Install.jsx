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
          <a
            href="cursor:extension/pattuv.transcribe"
            className="btn bg-white text-black text-sm p-4 font-medium rounded-full transition-transform duration-200 cursor-pointer inline-flex items-center justify-center"
          >
            Install for Cursor <i className="bi bi-arrow-up-right"></i>
          </a>

          <p className="text-sm text-gray-400 my-4">or</p>

          {/* Entire code div as a button */}
          <div
            onClick={() => {
              navigator.clipboard.writeText("cursor install Pattuv.transcribe");
              const icon = document.getElementById("cursor-copy-icon");
              if (icon) {
                icon.className = "bi bi-check text-green-400 text-lg";
                setTimeout(() => {
                  icon.className = "bi bi-clipboard text-gray-400 text-lg";
                }, 2000);
              }
            }}
            className="w-full bg-black rounded-lg p-2 border border-gray-600  text-xs flex items-center justify-between cursor-pointer hover:bg-gray-900 transition-colors"
          >
            <span className="mockcode mr-3">
              <span className="text-gray-400 mr-1">$</span> cursor install Pattuv.transcribe
            </span>
            <i id="cursor-copy-icon" className="bi bi-clipboard text-gray-400 text-lg"></i>
          </div>

          <p className="text-xs text-gray-400 mt-3">
            Paste the following command in your terminal.  You <br /> must have Cursor CLI installed.
          </p>
        </div>

    ),
    "VS Code": (
        <div>
          <a
            href="vscode:extension/Pattuv.transcribe"
            className="btn bg-white text-black text-sm p-4 font-medium rounded-full transition-transform duration-200 cursor-pointer inline-flex items-center justify-center"
          >
            Install for VSCode <i id="vscode-icon" className="bi bi-arrow-up-right"></i>
          </a>

          <p className="text-sm text-gray-400 my-4">or</p>

          <div
            onClick={() => {
              navigator.clipboard.writeText("code --install-extension Pattuv.transcribe");
              const icon = document.getElementById("vscode-copy-icon");
              if (icon) {
                icon.className = "bi bi-check text-green-400 text-lg";
                setTimeout(() => {
                  icon.className = "bi bi-clipboard text-gray-400 text-lg";
                }, 2000);
              }
            }}
            className="w-full bg-black rounded-lg p-2 border border-gray-600 mockcode text-xs flex items-center justify-between cursor-pointer hover:bg-gray-900 transition-colors"
          >
            <span className="mockcode mr-3">
              <span className="text-gray-400">$</span> code --install-extension Pattuv.transcribe
            </span>
            <i id="vscode-copy-icon" className="bi bi-clipboard text-gray-400 text-lg"></i>
          </div>

          <p className="text-xs text-gray-400 mt-3">
            Paste the command in your terminal. You must have VS Code CLI installed.
          </p>
        </div>

    ),
    "VS Code Insiders": (
    
        <div>
          <a
            href="vscode-insiders:extension/Pattuv.transcribe"
            className="btn bg-white text-black text-sm p-4 font-medium rounded-full transition-transform duration-200 cursor-pointer inline-flex items-center justify-center"
          >
            Install for VSCode Insiders <i id="vscode-insiders-icon" className="bi bi-arrow-up-right"></i>
          </a>

          <p className="text-sm text-gray-400 my-4">or</p>

          <div
            onClick={() => {
              navigator.clipboard.writeText("code-insiders --install-extension Pattuv.transcribe");
              const icon = document.getElementById("vscode-insiders-copy-icon");
              if (icon) {
                icon.className = "bi bi-check text-green-400 text-lg";
                setTimeout(() => {
                  icon.className = "bi bi-clipboard text-gray-400 text-lg";
                }, 2000);
              }
            }}
            className="w-full bg-black rounded-lg p-2 border border-gray-600 mockcode text-xs flex items-center justify-between cursor-pointer hover:bg-gray-900 transition-colors"
          >
            <span className="mockcode mr-3">
              <span className="text-gray-400">$</span> code-insiders --install-extension Pattuv.transcribe
            </span>
            <i id="vscode-insiders-copy-icon" className="bi bi-clipboard text-gray-400 text-lg"></i>
          </div>

          <p className="text-xs text-gray-400 mt-3">
            Paste the command in your terminal. You must have VS Code Insiders CLI installed.
          </p>
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

          <Link to="/tut" className="btn bg-white text-black text-sm p-4 font-medium rounded-full  transition-transform duration-200 cursor-pointer inline-flex items-center justify-center">Install VSIX <i class="bi bi-arrow-up-right"></i></Link>
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
            Select your IDE below. If none of the options work, try the manual installation guide.
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
