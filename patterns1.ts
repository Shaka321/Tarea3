// Definición de la clase Pizza
class Pizza {
    size: string;
    cheese: boolean;
    pepperoni: boolean;
    mushrooms: boolean;
    bacon: boolean;

    constructor(builder: PizzaBuilder) {
        this.size = builder.size;
        this.cheese = builder.cheese;
        this.pepperoni = builder.pepperoni;
        this.mushrooms = builder.mushrooms;
        this.bacon = builder.bacon;
    }
}

// Definición de la clase PizzaBuilder
class PizzaBuilder {
    size: string;
    cheese: boolean = false;
    pepperoni: boolean = false;
    mushrooms: boolean = false;
    bacon: boolean = false;

    constructor(size: string) {
        this.size = size;
    }

    addCheese(): PizzaBuilder {
        this.cheese = true;
        return this;
    }

    addPepperoni(): PizzaBuilder {
        this.pepperoni = true;
        return this;
    }

    addMushrooms(): PizzaBuilder {
        this.mushrooms = true;
        return this;
    }

    addBacon(): PizzaBuilder {
        this.bacon = true;
        return this;
    }

    build(): Pizza {
        return new Pizza(this);
    }
}

// Uso del patrón Builder para crear una pizza
const myPizza = new PizzaBuilder('large')
    .addCheese()
    .addPepperoni()
    .addBacon()
    .build();

console.log(myPizza);
