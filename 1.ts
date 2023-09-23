class Cinema {
    movies: any[] = [];
    snacks: any[] = [];
    tickets: any[] = [];
    employees: any[] = [];

    // Métodos relacionados con películas
    addMovie(movie: any) {
        this.movies.push(movie);
    }

    // Métodos relacionados con snacks
    buySnack(snack: any) {
        this.snacks.push(snack);
    }

    // Métodos relacionados con entradas
    buyTicket(ticket: any) {
        this.tickets.push(ticket);
    }

    // Métodos relacionados con empleados
    hireEmployee(employee: any) {
        this.employees.push(employee);
    }
}

// Crear una instancia de la clase Cinema
const cinema = new Cinema();

// Ejemplo de uso de los métodos
cinema.addMovie({ title: "Avengers: Endgame", genre: "Action", duration: 180 });
cinema.buySnack({ name: "Popcorn", price: 5 });
cinema.buyTicket({ movie: "Avengers: Endgame", seat: "A1", price: 10 });
cinema.hireEmployee({ name: "John", position: "Ticket Seller", salary: 3000 });
