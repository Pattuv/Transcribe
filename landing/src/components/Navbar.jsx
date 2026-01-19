import { useState } from "react";
import Button from "./Button";
import logo from "../assets/logo.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="bg-[#0f0f0f] navbar bg-base-100 shadow-sm p-5 px-4 md:px-10 text-white">
        <div className="flex-1">
          <a className="brand-btn btn btn-ghost text-base md:text-lg font-semibold">
            <img src={logo} className="logo-img w-6 md:w-7 -mr-1" alt="" />
            <span className="brand-text">transcribe</span>
          </a>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-none items-center gap-3">
          <a
            className="github-btn text-2xl"
            href="https://github.com/Pattuv/Transcribe"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <Button />
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
                <Button />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
