const vscode = require("vscode");
const fs = require("fs");
const path = require("path");

const IGNORE_DIRS = new Set([
  "node_modules",
  ".git",
  ".vscode",
  "dist",
  "build",
  "out",
  "__pycache__",
  ".venv",
]);

function buildTree(dirPath, indent = "") {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  let output = "";

  for (const entry of entries) {
    if (entry.isDirectory() && IGNORE_DIRS.has(entry.name)) continue;

    const displayName = entry.isDirectory() ? `${entry.name}/` : entry.name;
    output += `${indent}${displayName}\n`;

    if (entry.isDirectory()) {
      output += buildTree(path.join(dirPath, entry.name), indent + "  ");
    }
  }

  return output;
}

async function copyStructure() {
  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (!workspaceFolders) {
    vscode.window.showErrorMessage("No project folder is open.");
    return;
  }

  const rootFolder = workspaceFolders[0];
  const rootPath = rootFolder.uri.fsPath;
  const rootName = rootFolder.name;

  const treeText = `${rootName}/\n${buildTree(rootPath, "  ")}`;
  const finalText =
    treeText + "\n Structure grabbed from Transcribe Extension.";

  await vscode.env.clipboard.writeText(finalText);
  vscode.window.showInformationMessage("File structure copied to clipboard!");
}

// Tree item for the view
class TranscribeItem extends vscode.TreeItem {
  constructor() {
    super("Copy File Structure", vscode.TreeItemCollapsibleState.None);
    this.command = {
      command: "transcribe.copyStructure",
      title: "Copy File Structure",
    };
    this.contextValue = "transcribeItem";
  }
}

// Tree data provider
class TranscribeProvider {
  getTreeItem(element) {
    return element;
  }

  getChildren() {
    return [new TranscribeItem()];
  }
}

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand("transcribe.copyStructure", copyStructure),
  );
}

function deactivate() {}

module.exports = { activate, deactivate };
