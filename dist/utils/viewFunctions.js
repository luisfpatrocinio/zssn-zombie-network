"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showCenteredText = void 0;
const terminal_1 = require("./terminal");
function showCenteredText(text) {
    let width = (0, terminal_1.getTerminalWidth)();
    let spaces = Math.floor((width - text.length) / 2);
    process.stdout.write(" ".repeat(spaces) + text + "\n");
    return;
}
exports.showCenteredText = showCenteredText;
