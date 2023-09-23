class TodoManager {
    private todos: string[] = [];

    // Método para agregar una tarea
    add(todo: string) {
        this.todos.push(todo);
        this.save();   // Guarda la lista de tareas en el almacenamiento local
        this.render(); // Renderiza las tareas en la interfaz de usuario
    }

    // Método para eliminar una tarea por índice
    remove(index: number) {
        this.todos.splice(index, 1);
        this.save();   // Guarda la lista de tareas actualizada en el almacenamiento local
        this.render(); // Renderiza las tareas actualizadas en la interfaz de usuario
    }

    // Método privado para guardar la lista de tareas en el almacenamiento local
    private save() {
        console.log("Saving todos to local storage...");
        // Aquí debes escribir el código para guardar this.todos en el almacenamiento local
        // Por ejemplo, puedes utilizar localStorage.setItem(key, JSON.stringify(data))
    }

    // Método privado para renderizar las tareas en la interfaz de usuario
    private render() {
        console.log("Rendering todos in the UI...");
        // Aquí debes escribir el código para renderizar this.todos en la interfaz de usuario
        // Puedes usar un bucle para crear elementos HTML que representen las tareas y agregarlos al DOM
    }
}

// Ejemplo de uso
const todoManager = new TodoManager();

// Agregar tareas
todoManager.add("Comprar leche");
todoManager.add("Hacer ejercicio");
todoManager.add("Estudiar programación");

// Eliminar una tarea por índice
todoManager.remove(1); // Elimina la segunda 
