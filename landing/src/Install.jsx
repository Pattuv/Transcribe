import Navbar from "./components/Navbar";
import asciiBg from "./assets/ascii.png";
import { Link } from "react-router-dom";

function Install() {
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
          <p className="text-sm font-light flex items-center cursor-pointer hover:text-gray-300 transition-colors duration-300">
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
    </>
  );
}

export default Install;
