// Componente base
class Room {
    paint: string;
    design: string;

    constructor(paint: string) {
        this.paint = paint;
        this.design = '';
    }

    applyDesign(design: string) {
        this.design += design;
    }

    showRoom() {
        console.log(`This room is painted with ${this.paint} and has a ${this.design} design.`);
    }
}

// Decorator base
abstract class RoomDecorator extends Room {
    abstract showRoom(): void;
}

// ConcreteDecoratorA
class StripedDecorator extends RoomDecorator {
    constructor(room: Room) {
        super(room.paint);
        this.design = `${room.design} stripe`;
    }

    showRoom() {
        console.log(`This room is painted with ${this.paint} and has a ${this.design} design.`);
    }
}

// ConcreteDecoratorB
class FloralDecorator extends RoomDecorator {
    constructor(room: Room) {
        super(room.paint);
        this.design = `${room.design} floral`;
    }

    showRoom() {
        console.log(`This room is painted with ${this.paint} and has a ${this.design} design.`);
    }
}

// Uso
const myRoom = new Room('blue'); // Creamos una habitación base con pintura azul.
myRoom.applyDesign(''); // No hay diseño inicialmente.

const stripedRoom = new StripedDecorator(myRoom); // Envolvemos la habitación base con un diseño a rayas.
stripedRoom.showRoom(); // Mostramos la habitación con diseño a rayas.

const floralStripedRoom = new FloralDecorator(stripedRoom); // Envolvemos la habitación a rayas con un diseño floral adicional.
floralStripedRoom.showRoom(); // Mostramos la habitación con diseño a rayas y floral.
