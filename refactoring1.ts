class Task {
    title: string;
    isCompleted: boolean;

    constructor(title: string) {
        this.title = title;
        this.isCompleted = false;
    }

    completeTask() {
        this.isCompleted = true;
        console.log(`Task "${this.title}" has been completed.`);
    }

    printTaskDetails() {
        console.log(`Task: ${this.title}, Status: ${this.isCompleted ? 'Completed' : 'Active'}`);
    }
}

// Uso
const task1 = new Task("Learn TypeScript");
task1.completeTask();
task1.printTaskDetails();

const task2 = new Task("Write Code");
task2.printTaskDetails();  // Imprime que la tarea está "Active" porque no se ha completado aún.
