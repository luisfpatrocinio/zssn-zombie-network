"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTerminalHeight = exports.getTerminalWidth = exports.enterToContinue = exports.clearTerminal = void 0;
const readline_sync_1 = require("readline-sync");
function clearTerminal() {
    console.clear();
}
exports.clearTerminal = clearTerminal;
function enterToContinue() {
    console.log("[ENTER] to Continue...");
    (0, readline_sync_1.question)();
}
exports.enterToContinue = enterToContinue;
function getTerminalWidth() {
    return process.stdout.columns;
}
exports.getTerminalWidth = getTerminalWidth;
function getTerminalHeight() {
    return process.stdout.rows;
}
exports.getTerminalHeight = getTerminalHeight;
