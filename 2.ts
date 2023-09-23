class AirportSystem {
    flights: any[] = [];
    passengers: any[] = [];
    crews: any[] = [];
    planesMaintenance: any[] = [];
    financialRecords: any[] = [];

    // Métodos relacionados con vuelos
    scheduleFlight(flight: any) {
        this.flights.push(flight);
    }

    // Métodos relacionados con pasajeros
    checkInPassenger(passenger: any) {
        this.passengers.push(passenger);
    }

    // Métodos relacionados con tripulaciones
    assignCrewToFlight(crew: any, flightID: string) {
        // Asigna una tripulación a un vuelo, almacenando la información de la tripulación y el ID del vuelo.
        this.crews.push({ ...crew, flightID });
    }

    // Métodos relacionados con el mantenimiento de aviones
    logMaintenance(planeID: string, maintenance: any) {
        // Registra información de mantenimiento para un avión, incluyendo su ID y detalles de mantenimiento.
        this.planesMaintenance.push({ planeID, ...maintenance });
    }

    // Métodos relacionados con facturación y contabilidad
    recordFinancialTransaction(transaction: any) {
        // Registra una transacción financiera, como ingresos o gastos, en los registros financieros.
        this.financialRecords.push(transaction);
    }
}

// Crear una instancia de la clase AirportSystem
const airport = new AirportSystem();

// Ejemplo de uso de los métodos
airport.scheduleFlight({ flightID: "FL123", destination: "New York", departureTime: "2023-09-30 10:00 AM" });
airport.checkInPassenger({ passengerID: "P123", name: "Alice", seatNumber: "A1" });
airport.assignCrewToFlight({ crewID: "C456", name: "John", role: "Pilot" }, "FL123");
airport.logMaintenance("PL567", { description: "Engine check", cost: 500 });
airport.recordFinancialTransaction({ type: "Income", amount: 10000, description: "Ticket sales" });
