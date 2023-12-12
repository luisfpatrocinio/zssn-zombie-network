import { getTerminalWidth } from "./terminal";

export function showCenteredText(text: string): void {
    let width: number = getTerminalWidth();
    let spaces: number = Math.floor((width - text.length) / 2);
    process.stdout.write(" ".repeat(spaces) + text + "\n");
    return;
}