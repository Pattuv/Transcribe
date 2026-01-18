import Button from "./Button";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm p-5 px-10">
        <div className="flex-1">
          <a className="brand-btn btn btn-ghost text-lg font-semibold">
            <img src={logo} className="logo-img w-7 -mr-1" alt="" />
            <span className="brand-text">transcribe</span>
          </a>
        </div>
        <div className="flex-none flex items-center gap-3">
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
      </div>
    </div>
  );
}

export default Navbar;
