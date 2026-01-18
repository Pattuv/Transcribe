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
  const config = vscode.workspace.getConfiguration("transcribe");
  const ignoreDirs = new Set(config.ignoreDirs || []);

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  let output = "";

  for (const entry of entries) {
    if (entry.isDirectory() && ignoreDirs.has(entry.name)) continue;

    const displayName = entry.isDirectory() ? `${entry.name}/` : entry.name;
    output += `${indent}${displayName}\n`;

    if (entry.isDirectory()) {
      output += buildTree(path.join(dirPath, entry.name), indent + "  ");
    }
  }

  return output;
}

async function copyWholeStructure() {
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

async function copySpecificStructure(uri) {
  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (!workspaceFolders) {
    vscode.window.showErrorMessage("No project folder is open.");
    return;
  }

  const folderPath = uri.fsPath;
  const folderName = path.basename(folderPath);

  const treeText = `${folderName}/\n${buildTree(folderPath, "  ")}`;
  const finalText = treeText + "\nStructure grabbed from Transcribe Extension.";

  await vscode.env.clipboard.writeText(finalText);
  vscode.window.showInformationMessage(
    "Current folder structure copied to clipboard!",
  );
}

async function openIgnoreSettings() {
  // Opens the settings UI for the ignoreDirs array
  await vscode.commands.executeCommand(
    "workbench.action.openSettings",
    "transcribe.ignoreDirs",
  );
}

function activate(context) {
  // First command: copy entire project
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "transcribe.copyWholeStructure",
      copyWholeStructure,
    ),
  );
  // Second command: copy current folder (from context menu)
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "transcribe.copySpecificStructure",
      copySpecificStructure,
    ),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "transcribe.editIgnoreSettings",
      openIgnoreSettings,
    ),
  );
}

function deactivate() {
  vscode.window.showInformationMessage("Transcribe has been deactivated.");
}

module.exports = { activate, deactivate };
