// Definición del tipo de producto
type Product = {
    id: number;
    description: string;
    price: number;
};

// Arreglo de productos
let products: Product[] = [
    { id: 1, description: 'Smartphone', price: 200 },
    { id: 2, description: 'Laptop', price: 1000 },
    { id: 3, description: 'Mouse', price: 30 },
    { id: 4, description: 'Keyboard', price: 50 },
    { id: 5, description: 'Headphones', price: 45 },
];

// Arreglo para almacenar productos caros
let expensiveProducts = [];

// Filtrar productos caros (precio > 50)
for (let product of products) {
    if (product.price > 50) {
        expensiveProducts.push(product);
    }
}

// Arreglo para almacenar etiquetas de oferta especial
let offerLabels = [];

// Crear etiquetas de oferta especial
for (let product of expensiveProducts) {
    offerLabels.push(`¡Oferta especial! ${product.description} por solo $${product.price}`);
}

// Ordenar las etiquetas alfabéticamente
offerLabels.sort();

// Imprimir las etiquetas de oferta especial
console.log(offerLabels);
