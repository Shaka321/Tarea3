class Product {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Cart {
    products: Product[] = [];

    addProduct(product: Product) {
        this.products.push(product);
    }

    calculateTotal(): number {
        // Calcular el total sumando los precios de todos los productos en el carrito
        let total = this.products.reduce((acc, product) => acc + product.price, 0);

        // Aplicar un descuento del 10% si hay más de 5 productos en el carrito
        if (this.products.length > 5) {
            total *= 0.9;
        }

        // Aplicar un cargo de envío de $10 si el total es menor a $50
        if (total < 50) {
            total += 10;
        }

        return total;
    }
}

// Uso
const product1 = new Product(1, "Laptop", 800);
const product2 = new Product(2, "Headphones", 50);
const product3 = new Product(3, "Mouse", 20);
const product4 = new Product(4, "Keyboard", 30);
const product5 = new Product(5, "Monitor", 200);

const cart = new Cart();

cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);
cart.addProduct(product4);
cart.addProduct(product5);

const total = cart.calculateTotal();
console.log(`Total Price: $${total}`);
