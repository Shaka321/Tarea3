// Definición del tipo de producto
type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
};

// Definición del tipo de orden
type Order = {
    date: Date;
    products: Product[];
};

// Función para calcular el total de una orden
function calculateOrderTotal(order: Order): number {
    // Inicializar el total en 0
    let total = 0;

    // Recorrer los productos en la orden y sumar sus precios al total
    for (let product of order.products) {
        total += product.price;
    }

    return total;
}

// Función para imprimir detalles de una orden
function printOrderDetails(order: Order): void {
    console.log(`Order Date: ${order.date.toDateString()}`);
    console.log("Products:");

    for (let product of order.products) {
        console.log(`- ${product.name} (${product.category}): $${product.price}`);
    }

    // Calcular y mostrar el total de la orden
    const total = calculateOrderTotal(order);
    console.log(`Total: $${total}`);
}

// Lista de órdenes
let orders: Order[] = [
    {
        date: new Date('2023-05-01'),
        products: [
            { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
            { id: 2, name: 'Smartphone', category: 'Electronics', price: 500 }
        ]
    },
    {
        date: new Date('2023-05-10'),
        products: [
            { id: 3, name: 'Book: TypeScript Basics', category: 'Books', price: 20 },
            { id: 4, name: 'Book: Design Patterns', category: 'Books', price: 35 }
        ]
    },
    // ... más órdenes ...
];

// Procesar e imprimir detalles de cada orden
for (let order of orders) {
    printOrderDetails(order);
}
