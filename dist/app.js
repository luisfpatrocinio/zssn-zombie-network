"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const stack_1 = require("./utils/stack");
const readline_sync_1 = require("readline-sync");
const terminal_1 = require("./utils/terminal");
const viewFunctions_1 = require("./utils/viewFunctions");
class App {
    constructor() {
        this.viewStack = new stack_1.Stack;
        this.actualOption = -1;
    }
    previousMenu() {
        this.viewStack.pop();
    }
    view() {
        // Executar o topo da pilha
        const view = this.viewStack.peek();
        view.call(this);
    }
    mainMenu() {
        (0, viewFunctions_1.showCenteredText)("ZSSN - Zombie Survival Social Network");
        console.log("1. Create Profile");
        console.log("2. Quit");
        const choice = (0, readline_sync_1.question)("Enter choice: ");
        if (choice === "1") {
            this.viewStack.push(this.createProfile);
        }
        else if (choice === "2") {
            this.viewStack.clear();
        }
        else {
            console.log("Invalid choice");
        }
    }
    createProfile() {
        (0, viewFunctions_1.showCenteredText)("Create Profile");
        let name = (0, readline_sync_1.question)("Enter name: ");
        console.log(`Profile created with name ${name}.`);
        this.previousMenu();
    }
    run() {
        this.viewStack.push(this.mainMenu);
        do {
            this.actualOption = -1;
            try {
                (0, terminal_1.clearTerminal)();
                let actualView = this.viewStack.peek();
                actualView.call(this);
            }
            catch (error) {
                console.log(error);
            }
            (0, terminal_1.enterToContinue)();
        } while (!this.viewStack.isEmpty());
        console.log("Goodbye");
    }
}
exports.App = App;
