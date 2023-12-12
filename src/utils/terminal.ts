import { question } from "readline-sync";

export function clearTerminal() {
    console.clear();
}

export function enterToContinue() {
    console.log("[ENTER] to Continue...");
    question();
}

export function getTerminalWidth() {
    return process.stdout.columns;
}

export function getTerminalHeight() {
    return process.stdout.rows;
}