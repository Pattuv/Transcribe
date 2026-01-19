import Navbar from "./components/Navbar";
import tools from "./assets/tools.png";
import demo from "./assets/demo.mp4"
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-6 md:mt-10 text-white px-9">
        <div className="md:w-3/8 mx-auto text-left md:text-center max-w-2xl">
          <p className="text-lg md:text-2xl 2xl:text-3xl font-medium">
            Effortlessly copy your file structure from your IDE to your favorite
            AI tools.
          </p>
          <p className="text-xs text-gray-400 font-light mt-2 md:mt-3">
            Works with your favorite tools
          </p>
          <img
            src={tools}
            alt="Tools"
            draggable="false"
            className="w-1/2 md:w-1/2 2xl:w-1/4 max-w-md md:mx-auto mt-2 md:mt-2 pointer-events-none select-none"
          />
          <button
            onClick={() => document.getElementById("downloadmodal").showModal()}
            className="block md:mx-auto bg-linear-to-t from-gray-400 border-none to-white p-3 md:p-4 font-medium px-8 md:px-15 text-black text-xs md:text-sm rounded-full mt-3 md:mt-4 border border-white/20 transition-transform hover:scale-105 hover:rotate-1 cursor-pointer"
          >
            Install the extension
          </button>
        </div>
      </div>

      <div className="my-6 px-9 flex justify-center">
        <video
          src={demo}
          className="rounded-lg w-full max-w-md md:max-w-3xl lg:max-w-4xl"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>



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
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-black text-white">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Home;

