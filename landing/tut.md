# Manual Installation Guide (VSIX)

This page walks you through installing and using **Transcribe** manually, a VS Code extension that copies your project’s file structure in your IDEs.
This is necessary for IDEs which do not fully sync with VSCode Marketplace.

---

## Step 1: Download the VSIX File

1. Go to the the Transcribe landing page  
2. **Click Install Manually via VSIX**
3. Save it somewhere easy to find (Desktop or Downloads)

---

## Step 2: Install the Extension from VSIX

1. Open your editor (VS Code, Cursor, Windsurf, etc.)
2. Press **Ctrl + Shift + P**  
   (or **Cmd + Shift + P** on macOS)
3. Type: **Extensions: Install from VSIX**
4. Select that option from the dropdown
5. Select the `.vsix` file you downloaded
6. Reload the editor if prompted

Transcribe is now installed.

---

# Usage Guide

## Copy the Entire Project Structure

1. Open a project folder
2. Go to the **Explorer** sidebar
3. Right-click anywhere inside the Explorer
4. Click **“Copy File Structure of Whole Project”**

The file structure is now copied to your clipboard.

Example output:

    my-project/
      src/
        index.js
        App.jsx
      package.json
      README.md

    Structure grabbed from Transcribe Extension.

You can now paste this directly into an AI chat.
You can also do this to copy the file structure of a specific folder.

---

## Configure Ignored Directories (Optional)

Transcribe ignores common noisy folders by default, such as:

- node_modules
- .git
- .vscode
- dist
- build

You can customize this.

### Edit via Settings UI

1. Open **Settings**
2. Search for **Transcribe**
3. Edit **Ignore Dirs**

### Edit via settings.json

Add or modify this array:

    "transcribe.ignoreDirs": [
      "node_modules",
      ".git",
      ".vscode",
      "dist",
      "build"
    ]

Folder names are **case-sensitive**.

---

**Happy Hacking!  -Pratyush Verma**
