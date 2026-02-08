import Navbar from "./components/Navbar";

function Tut() {
  return (
    <>
      <Navbar />
      <div className="text-white px-6 md:px-10 py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold">
            Manual Installation Guide (VSIX)
          </h1>
          <p className="text-sm md:text-base text-gray-300 mt-3 leading-relaxed">
            This page walks you through installing and using{" "}
            <span className="font-semibold">Transcribe</span> manually, a VS
            Code extension that copies your project’s file structure in your
            IDEs. This is necessary for IDEs which do not fully sync with VSCode
            Marketplace.
          </p>

          <hr className="border-white/10 my-8" />

          <h2 className="text-xl md:text-2xl font-semibold">
            Step 1: Download the VSIX File
          </h2>
            <a
            href="https://github.com/Pattuv/Transcribe/releases/download/v.1.0.3/transcribe-1.0.3.vsix"
            target="_blank"
            rel="noreferrer"
            className="w-full block text-center py-3 px-4 mt-4 rounded-lg border border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
          >
            Install Manually via VSIX
          </a>

          <hr className="border-white/10 my-8" />

          <h2 className="text-xl md:text-2xl font-semibold">
            Step 2: Install the Extension from VSIX
          </h2>
          <ol className="list-decimal pl-5 mt-3 text-sm md:text-base text-gray-300 space-y-2">
            <li>Open your editor (VS Code, Cursor, Windsurf, etc.)</li>
            <li>
              Press <span className="font-semibold">Ctrl + Shift + P</span> (or{" "}
              <span className="font-semibold">Cmd + Shift + P</span> on macOS)
            </li>
            <li>
              Type:{" "}
              <span className="font-semibold">
                Extensions: Install from VSIX
              </span>
            </li>
            <li>Select that option from the dropdown</li>
            <li>
              Select the <code className="text-gray-200">.vsix</code> file you
              downloaded
            </li>
            <li>Reload the editor if prompted</li>
          </ol>
          <p className="text-sm md:text-base text-gray-300 mt-4">
            Transcribe is now installed.
          </p>

          <hr className="border-white/10 my-10" />

          <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold">
            Usage Guide
          </h1>
          <p className="text-sm md:text-base text-gray-300 mt-3 leading-relaxed">
            These are the official instructions for using Transcribe.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mt-6">
            Copy the Entire Project Structure
          </h2>
          <ol className="list-decimal pl-5 mt-3 text-sm md:text-base text-gray-300 space-y-2">
            <li>Open a project folder</li>
            <li>
              Go to the <span className="font-semibold">Explorer</span> sidebar
            </li>
            <li>Right-click anywhere inside the Explorer</li>
            <li>
              Click{" "}
              <span className="font-semibold">
                “Copy File Structure of Whole Project”
              </span>
            </li>
          </ol>
          <p className="text-sm md:text-base text-gray-300 mt-4">
            The file structure is now copied to your clipboard.
          </p>

          <p className="text-sm md:text-base text-gray-300 mt-4">
            Example output:
          </p>
          <pre className="mt-3 p-4 rounded-lg border border-white/10 bg-black/30 overflow-x-auto text-xs md:text-sm text-gray-200">
            {`my-project/
  src/
    index.js
    App.jsx
  package.json
  README.md

Structure grabbed from Transcribe Extension.`}
          </pre>

          <p className="text-sm md:text-base text-gray-300 mt-4">
            You can now paste this directly into an AI chat. You can also do
            this to copy the file structure of a specific folder.
          </p>

          <hr className="border-white/10 my-8" />

          <h2 className="text-xl md:text-2xl font-semibold">
            Configure Ignored Directories (Optional)
          </h2>
          <p className="text-sm md:text-base text-gray-300 mt-3">
            Transcribe ignores common noisy folders by default, such as:
          </p>
          <ul className="list-disc pl-5 mt-3 text-sm md:text-base text-gray-300 space-y-1">
            <li>node_modules</li>
            <li>.git</li>
            <li>.vscode</li>
            <li>dist</li>
            <li>build</li>
          </ul>

          <p className="text-sm md:text-base text-gray-300 mt-4">
            You can customize this.
          </p>

          <h3 className="text-lg md:text-xl font-semibold mt-6">
            Edit via Settings UI
          </h3>
          <ol className="list-decimal pl-5 mt-3 text-sm md:text-base text-gray-300 space-y-2">
            <li>
              Open <span className="font-semibold">Settings</span>
            </li>
            <li>
              Search for <span className="font-semibold">Transcribe</span>
            </li>
            <li>
              Edit <span className="font-semibold">Ignore Dirs</span>
            </li>
          </ol>

          <h3 className="text-lg md:text-xl font-semibold mt-6">
            Edit via settings.json
          </h3>
          <p className="text-sm md:text-base text-gray-300 mt-3">
            Add or modify this array:
          </p>
          <pre className="mt-3 p-4 rounded-lg border border-white/10 bg-black/30 overflow-x-auto text-xs md:text-sm text-gray-200">
            {`"transcribe.ignoreDirs": [
  "node_modules",
  ".git",
  ".vscode",
  "dist",
  "build"
]`}
          </pre>
          <p className="text-sm md:text-base text-gray-300 mt-4">
            Folder names are{" "}
            <span className="font-semibold">case-sensitive</span>.
          </p>

          <hr className="border-white/10 my-10" />

          <p className="text-sm md:text-base text-gray-300 font-semibold">
            Happy Hacking! <span className="font-light">-Pratyush Verma</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Tut;
