'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { printNames } from './duetFunctions';
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
        const value = await vscode.window.showInputBox({ prompt: 'Who is the solo (intial)?' });

        await spawn('git solo ' + value);
        await printNames(vscode.window.showInformationMessage);
    });

    let disposable_gitDuet = vscode.commands.registerCommand('extension.gitDuet', async () => {
        const value = await vscode.window.showInputBox({ prompt: 'Who is the duet (intials)?' });

        await spawn('git duet ' + value);
        printNames(vscode.window.showInformationMessage);
    });

    let disposable_gitAs = vscode.commands.registerCommand('extension.gitAs', async () => {
        const value = await vscode.window.showInputBox({ prompt: 'Enter the 2+ initals to commit as:' });

        if (!value) {
            return vscode.window.showErrorMessage('😹 Something went wrong... Check your input.. 😹');
        }

        let names = value.split(' ');

        if (names.length === 1) {
            await spawn('git solo ' + value);
        } else {
            await spawn('git duet ' + value);
        }

        printNames(vscode.window.showInformationMessage);
    });

    context.subscriptions.push(disposable_gitSolo);
    context.subscriptions.push(disposable_gitDuet);
    context.subscriptions.push(disposable_gitAs);
}

// this method is called when your extension is deactivated
export function deactivate() {
}