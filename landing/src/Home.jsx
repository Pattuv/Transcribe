import Navbar from "./components/Navbar";
import { useRef, useState, useEffect } from "react";
import tools from "./assets/tools.png";
import demo from "./assets/demo.mov";
import copyImg from "./assets/images/copy.png";
import settings from "./assets/settings.mp4";
import { Link } from "react-router-dom";

function Home() {
  const videoRef = useRef(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Ensure the first frame is shown
    const showFirstFrame = () => {
      try {
        v.pause();
        v.currentTime = 0;
      } catch (e) {
        /* ignore */
      }
    };

    showFirstFrame();

    const onEnded = () => {
      v.pause();
      v.currentTime = 0;
      setIsOverlayVisible(true);
    };

    v.addEventListener("ended", onEnded);
    return () => v.removeEventListener("ended", onEnded);
  }, []);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    setIsOverlayVisible(false);
    v.currentTime = 0;
    v.play();
  };

  return (
    <>
      <Navbar />
      <div className="mt-6 md:mt-7 text-white px-9">
        <div className="w-125 mx-auto text-left md:text-center max-w-2xl">
          <p className="text-lg md:text-2xl  font-medium">
            Effortlessly copy your file structure from your IDE to your favorite
            AI tools.
          </p>


          <Link
            to="/install"
            className="block md:mx-auto bg-gradient-to-t from-gray-400 to-white p-3 font-medium px-7 text-black text-xs md:text-sm rounded-full mt-3 md:mt-4 transition-transform hover:scale-105 hover:rotate-1 cursor-pointer inline-flex items-center justify-center"
          >
            Install the extension <i className="bi bi-download ml-1"></i>
          </Link>

        </div>
      </div>

      <div className="my-6 px-9 flex justify-center">
        <div className="cursor-pointer relative rounded-md w-full max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w6xl overflow-hidden">
          <video
            ref={videoRef}
            src={demo}
            className="w-full h-auto block"
            playsInline
          />

          {/* Overlay play button that shows the first frame and triggers playback once */}
          <div
            onClick={handlePlay}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 cursor-pointer ${
              isOverlayVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <button
              type="button"
              className=" bg-white rounded-full w-10 h-10 flex items-center justify-center transform transition-transform duration-200 hover:scale-110 focus:outline-none"
            >
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5v14l11-7z" fill="black" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="text-left md:text-center px-9">
        <p className="text-sm text-gray-400 font-light mt-10">
          Works with your favorite tools
        </p>
        <img src={tools} alt="tools" className="h-auto w-110 md:mx-auto my-5" />
      </div>

      <section className="space-y-10 px-5  mt-20  mx-5">
        <div className=" flex flex-col md:flex-row items-center md:items-center md:justify-between gap-6 h-125 bg-[#202020] rounded-3xl px-7 py-70 w-300 mx-auto">
          <div className=" md:w-3/8 text-center md:text-left flex flex-col justify-center mx-auto">
            <p className="text-xl text-white font-medium mb-2">
              Copy your file structure in one click. <br />
              <span className="text-gray-400">
                Either the entire project or a specific folder.
              </span>
            </p>
            <p className="text-sm text-gray-400">
              Transcribe converts your file structure into a clean, AI-ready
              output, regardless of what directory you wish to copy.
            </p>
          </div>
          <div className=" flex items-center justify-center">
            <img
              src={copyImg}
              alt="File structure example"
              className="w-full rounded-xl shadow-lg h-125 object-cover"
            />
          </div>
        </div>

        <div className=" flex flex-col md:flex-row items-center md:items-center md:justify-between gap-6 h-125 bg-[#202020] rounded-3xl px-7 py-70 w-300 mx-auto">
          <div className="">
            <video
              src={settings}
              className="w-full rounded-lg shadow-lg h-125 object-cover"
              playsInline
              muted
              loop
              autoPlay
            />
          </div>
          <div className="md:w-4/8 text-center md:text-left flex flex-col justify-center">
            <p className="text-xl text-center md:text-right text-white font-medium mb-2">
              Large dependencies destroying your structure? <br />
              <span className="text-gray-400">Transcribe can ignore them.</span>
            </p>
            <p className="text-sm text-gray-400 text-right ">
              Use the Configure Ignored Paths for Transcribe button in the
              context menu to set ignored paths. It opens a file where you enter
              case-sensitive folder names in a list.
            </p>
          </div>
        </div>
      </section>

      <section className="text-left md:text-center px-9 py-5 mt-10">
        <p className="text-3xl font-medium text-white mb-5">
          Let's get hacking.
        </p>
        <Link
          to="/install"
          className="px-4 py-2 rounded-full text-sm font-medium bg-white text-black transform hover:scale-105 transition-transform duration-200 cursor-pointer inline-flex items-center justify-center"
        >
          <i className="bi bi-download mr-1"></i> Install Transcribe
        </Link>
      </section>

      <footer className="select-none bottom-0 left-0 w-full overflow-hidden -mt-30">
        <p className="text-[10rem] font-semibold text-center p-0 m-0 translate-y-[35%] text-[#171717]">
          transcribe
        </p>
      </footer>

{/*
<dialog id="downloadmodal" className="modal">
  <div className="modal-box bg-[#0f0f0f] text-white border border-gray-800">
    <h3 className="font-semibold text-lg">Pick an Installation Method</h3>
    <p className="text-xs text-gray-400 font-light mt-2">
      You can either install Transcribe directly from the VSCode
      Marketplace, or you can download the VSIX file for Visual Studio
      based IDEs that have sandboxed marketplaces.
    </p>

    <a
      href="https://marketplace.visualstudio.com/items?itemName=Pattuv.transcribe"
      target="_blank"
      rel="noreferrer"
      className="w-full block text-center py-3 px-4 mt-4 rounded-lg border border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
    >
      VSCode Extension Marketplace
    </a>

    <p className="text-xs text-gray-400 font-light mt-2">
      You can also visit the Extensions tab in VSCode and search
      "Transcribe".
    </p>

    <a
      href="https://github.com/Pattuv/Transcribe/releases/download/v.1.0.3/transcribe-1.0.3.vsix"
      target="_blank"
      rel="noreferrer"
      className="w-full block text-center py-3 px-4 mt-4 rounded-lg border border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
    >
      Install Manually via VSIX
    </a>

    <p className="text-sm font-light mt-2">
      To learn how to install manually, visit{" "}
      <Link to="/tut" className="link">
        this page.
      </Link>
    </p>

    <div className="modal-action">
      <form method="dialog">
        <button className="btn bg-black text-white">Close</button>
      </form>
    </div>
  </div>
</dialog>
*/}

    </>
  );
}

export default Home;
