// loggerService.ts

export class LoggerService {
    private filePath: string;
    private static instance: LoggerService | null = null; // Propiedad estática para almacenar la única instancia

    private constructor(filePath: string) {
        this.filePath = filePath;
    }

    // Método estático para obtener la única instancia de la clase o crear una si no existe
    public static getInstance(filePath: string): LoggerService {
        if (!LoggerService.instance) {
            LoggerService.instance = new LoggerService(filePath);
        }
        return LoggerService.instance;
    }

    logMessage(message: string): void {
        // Lógica ficticia para escribir en el archivo
        console.log(`Writing to ${this.filePath}: ${message}`);
    }
}
