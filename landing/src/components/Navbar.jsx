import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="bg-[#0f0f0f] navbar bg-base-100 shadow-sm p-5 px-4 md:px-10 text-white">
        <div className="flex-1">
          <a className="brand-btn btn btn-ghost text-base md:text-lg font-semibold" href="/">
            <img src={logo} className="logo-img w-6 md:w-7 -mr-1" alt="" />
            <span className="brand-text">transcribe</span>
          </a>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-none items-center gap-2">
          <a
            className="github-btn text-2xl"
            href="https://github.com/Pattuv/Transcribe"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <Link to="/tut" className="custom-btn text-sm font-medium -mr-0.5">
            Guide
          </Link>
          <a
            href="https://pratyushv.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="work-btn px-4 py-2 rounded-full text-sm font-medium bg-white text-black hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            More by me
          </a>
        </div>
        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex-none relative">
          <button
            className="hamburger-btn text-2xl p-2"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
            aria-label="Menu"
          >
            <i className="bi bi-list"></i>
          </button>
          {isMenuOpen && (
            <div
              className="mobile-menu absolute right-0 top-full mt-2 bg-[#0f0f0f] border border-white/20 rounded-lg shadow-lg p-4 min-w-[200px] z-50"
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              <div className="flex flex-col gap-3">
                <a
                  className="github-btn text-xl flex items-center gap-2 hover:text-gray-300 transition-colors"
                  href="https://github.com/Pattuv/Transcribe"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-github"></i>
                  <span className="text-sm">GitHub</span>
                </a>
                <Link to="/tut" className="custom-btn text-center">
                  Guide
                </Link>
                <a
                  href="https://pratyushv.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="work-btn px-4 py-2 rounded-full text-sm font-medium bg-white text-black hover:scale-105 transition-transform duration-200 cursor-pointer text-center"
                >
                  View my other work
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
