// Definición de la clase Vehicle
class Vehicle {
    type: string;
    engine: string;
    wheels: number;
    color: string;
    brand: string;
    fuel: string;

    constructor(builder: VehicleBuilder) {
        this.type = builder.type;
        this.engine = builder.engine;
        this.wheels = builder.wheels;
        this.color = builder.color;
        this.brand = builder.brand;
        this.fuel = builder.fuel;
    }
}

// Definición de la clase VehicleBuilder
class VehicleBuilder {
    type: string;
    engine: string;
    wheels: number;
    color: string;
    brand: string;
    fuel: string;

    constructor(type: string) {
        this.type = type;
    }

    setEngine(engine: string): VehicleBuilder {
        this.engine = engine;
        return this;
    }

    setWheels(wheels: number): VehicleBuilder {
        this.wheels = wheels;
        return this;
    }

    setColor(color: string): VehicleBuilder {
        this.color = color;
        return this;
    }

    setBrand(brand: string): VehicleBuilder {
        this.brand = brand;
        return this;
    }

    setFuel(fuel: string): VehicleBuilder {
        this.fuel = fuel;
        return this;
    }

    build(): Vehicle {
        return new Vehicle(this);
    }
}

// Uso del patrón Builder para crear un vehículo
const myCar = new VehicleBuilder('car')
    .setEngine('V8')
    .setWheels(4)
    .setColor('red')
    .setBrand('Ford')
    .setFuel('gasoline')
    .build();

console.log(myCar);
