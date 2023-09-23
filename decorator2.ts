// Componente base
class Computer {
    components: string[] = [];

    addComponent(component: string) {
        this.components.push(component);
    }

    showConfiguration() {
        console.log(`This computer has: ${this.components.join(', ')}`);
    }
}

// Decorator base
abstract class ComputerDecorator extends Computer {
    abstract showConfiguration(): void;
}

// ConcreteDecoratorA
class MemoryUpgradeDecorator extends ComputerDecorator {
    constructor(computer: Computer) {
        super();
        this.components = [...computer.components, '32GB RAM'];
    }

    showConfiguration() {
        console.log(`This computer has: ${this.components.join(', ')}`);
    }
}

// ConcreteDecoratorB
class GraphicsCardDecorator extends ComputerDecorator {
    constructor(computer: Computer) {
        super();
        this.components = [...computer.components, 'NVIDIA RTX 3080 Graphics Card'];
    }

    showConfiguration() {
        console.log(`This computer has: ${this.components.join(', ')}`);
    }
}

// Uso
const myComputer = new Computer(); // Creamos una computadora base sin componentes.
myComputer.showConfiguration(); // Mostramos la configuración inicial (vacía).

const upgradedComputer = new MemoryUpgradeDecorator(myComputer); // Envolvemos la computadora base con una actualización de memoria.
upgradedComputer.showConfiguration(); // Mostramos la configuración con la actualización de memoria.

const highEndComputer = new GraphicsCardDecorator(upgradedComputer); // Envolvemos la computadora actualizada con una tarjeta gráfica de gama alta.
highEndComputer.showConfiguration(); // Mostramos la configuración con la actualización de memoria y la tarjeta gráfica de gama alta.
