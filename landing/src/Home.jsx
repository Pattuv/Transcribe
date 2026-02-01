import Navbar from "./components/Navbar";
import tools from "./assets/tools.png";
import demo from "./assets/demo.mp4"
import one from "./assets/images/1.png"
import two from "./assets/images/2.png"
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-6 md:mt-7 text-white px-9">
        <div className="w-125 mx-auto text-left md:text-center max-w-2xl">
          <p className="text-lg md:text-2xl  font-medium">
            Effortlessly copy your file structure from your IDE to your favorite
            AI tools.
          </p>

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
          className="rounded-lg w-full max-w-md md:max-w-3xl  lg:max-w-4xl xl:max-w-5xl 2xl:max-w-5xl"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="text-left md:text-center px-9">      
        <p className="text-xs text-gray-400 font-light mt-10">
          Works with your favorite tools
        </p>
        <img src={tools} alt="tools" className="h-auto w-110 md:mx-auto my-5" />
      </div>

      <section className="space-y-20 px-4 md:px-16 mt-20 bg-[#181818] rounded-3xl mx-5 py-20">

          <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between gap-6 h-125">
            {/* Text */}
            <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
              <p className="text-2xl text-white font-medium mb-2">
                Copy your file structure in one click. <br />
                <span className="text-gray-400">
                  Either the entire project or a specific folder.
                </span>
              </p>
              <p className="text-sm text-gray-400">
                Transcribe converts your file structure into a clean, AI-ready output, regardless of what directory you wish to copy.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-7">
              <img src={one} alt="File structure example 1" className="w-full rounded-lg border border-white/70 shadow-lg h-125 object-cover" />
              <img src={two} alt="File structure example 2" className="w-full rounded-lg border border-white/70  h-125 object-cover" />
            </div>
          </div>


          <div className="flex flex-col md:flex-row-reverse items-center md:items-center md:justify-between gap-6 h-125">
            <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
              <p className="text-2xl text-center md:text-right text-white font-medium mb-2">
                Large dependencies destroying your structure? <br />
                  <span className="text-gray-400">
                    Transcribe can ignore them.
                  </span>
              </p>
              <p className="text-sm text-gray-400 text-right ">
                Use the Configure Ignored Paths for Transcribe button in the context menu to set ignored paths. It opens a file where you enter case-sensitive folder names in a list.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={one} alt="File structure example 3" className="w-full rounded-lg shadow-lg h-125 object-cover" />
            </div>
          </div>

      </section>

      <section className="text-left md:text-center px-9 py-5 mt-10">
        <p className="text-3xl font-medium text-white mb-5">Let's get hacking.</p>
        <a
  href="#"
  target="_blank"
  rel="noreferrer"
  className="px-4 py-2 rounded-full text-sm font-medium bg-white text-black transform hover:scale-105 transition-transform duration-200 cursor-pointer"
>
  <i className="bi bi-download mr-1"></i> Install Transcribe
</a>

      </section>

      <footer className=" bottom-0 left-0 w-full overflow-hidden -mt-30">
  <p className="text-[10rem] font-semibold text-center p-0 m-0 translate-y-[35%] text-[#171717]">transcribe</p>
</footer>






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

