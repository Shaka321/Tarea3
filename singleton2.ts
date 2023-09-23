// dbService.ts

export class DatabaseService {
    private connectionString: string;
    private static instance: DatabaseService | null = null; // Propiedad estática para almacenar la única instancia

    private constructor(connectionString: string) {
        this.connectionString = connectionString;
    }

    // Método estático para obtener la única instancia de la clase o crear una si no existe
    public static getInstance(connectionString: string): DatabaseService {
        if (!DatabaseService.instance) {
            DatabaseService.instance = new DatabaseService(connectionString);
        }
        return DatabaseService.instance;
    }

    connect(): void {
        // Lógica para conectar a la base de datos
        console.log(`Connecting to database with ${this.connectionString}`);
    }
}



// app.ts

import { DatabaseService } from './dbService';

// Usamos getInstance en lugar de new para obtener una única instancia
let dbService1 = DatabaseService.getInstance("mongodb://localhost/db1");
let dbService2 = DatabaseService.getInstance("mongodb://localhost/db1"); // Nota que es la misma dirección que dbService1

dbService1.connect();
dbService2.connect();

// Comprobamos si ambas instancias son la misma
console.log(dbService1 === dbService2); // Esto debería imprimir "true"
