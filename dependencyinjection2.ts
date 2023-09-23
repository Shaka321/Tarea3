class BikeDelivery {
    // Método para entregar un paquete utilizando una bicicleta
    deliverPackage(packageId: string, address: string) {
        console.log(`Delivering package ${packageId} to ${address} using a bike.`);
        // Aquí podrías agregar lógica adicional para la entrega real del paquete con una bicicleta.
    }
}

class PackageService {
    deliveryMethod: BikeDelivery;

    // Constructor que inicializa el método de entrega con BikeDelivery
    constructor() {
        this.deliveryMethod = new BikeDelivery();
    }

    // Método para enviar un paquete a una dirección específica
    sendPackage(packageId: string, address: string) {
        // Utiliza el método de entrega para enviar el paquete
        this.deliveryMethod.deliverPackage(packageId, address);
    }
}

// Ejemplo de uso
const packageService = new PackageService();

// Envía un paquete a una dirección específica utilizando BikeDelivery
packageService.sendPackage("PKG123", "123 Main St.");
