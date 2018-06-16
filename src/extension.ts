'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { spawn } from './spawnCommandAsync';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "git-duet" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json

    let disposable_gitSolo = vscode.commands.registerCommand('extension.gitSolo', async () => {
        const value = await vscode.window.showInputBox({ prompt: 'Who is solo?' });

        let allLines = await spawn('git solo ' + value);
        let firstLine = allLines.split('\n')[0];
        let name = firstLine.split('=')[1].replace(`'`, '').replace(`'`, '');

        vscode.window.showInformationMessage("git solo: " + name);
    });

    let disposable_gitDuet = vscode.commands.registerCommand('extension.gitDuet', async () => {
        const value = await vscode.window.showInputBox({ prompt: 'Who is duet?' });

        let allLines = await spawn('git duet ' + value);

        let firstLine = allLines.split('\n')[0];
        let thirdLine = allLines.split('\n')[2];
        let firstName = firstLine.split('=')[1].replace(`'`, '').replace(`'`, '');
        let secondName = thirdLine.split('=')[1].replace(`'`, '').replace(`'`, '');

        vscode.window.showInformationMessage(`git duet: ${firstName} + ${secondName}`);
    });

    context.subscriptions.push(disposable_gitSolo);
    context.subscriptions.push(disposable_gitDuet);
}

// this method is called when your extension is deactivated
export function deactivate() {
}