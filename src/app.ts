import { Stack } from "./utils/stack";
import { question } from "readline-sync";
import { clearTerminal, enterToContinue } from "./utils/terminal";
import { showCenteredText } from "./utils/viewFunctions";

export class App {
    private viewStack: Stack<() => void> = new Stack<() => void>;
    private actualOption: number = -1;

    previousMenu() {
        this.viewStack.pop()
    }

    view() {
        // Executar o topo da pilha
        const view = this.viewStack.peek()
        view.call(this);
    }

    mainMenu() : void{
        showCenteredText("ZSSN - Zombie Survival Social Network")
        console.log("1. Create Profile")
        console.log("2. Quit")
        const choice = question("Enter choice: ")
        if (choice === "1") {
            this.viewStack.push(this.createProfile)
        } else if (choice === "2") {
            this.viewStack.clear()
        } else {
            console.log("Invalid choice")
        }
    }

    createProfile() : void{
        showCenteredText("Create Profile");
        let name = question("Enter name: ");

        console.log(`Profile created with name ${name}.`);
        this.previousMenu()
    }

    run() {
        this.viewStack.push(this.mainMenu); 
        do {
            this.actualOption = -1;
            try {
                clearTerminal();
                let actualView = this.viewStack.peek();
                actualView.call(this);
            } catch (error) {
                console.log(error);
            }
            
            enterToContinue();
        } while (!this.viewStack.isEmpty());
        
        console.log("Goodbye");
    }
}
