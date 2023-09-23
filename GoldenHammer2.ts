class SimpleGraph {
    // Método para dibujar un gráfico de barras
    drawBarChart(data: number[]) {
        console.log("Drawing bar chart:", data);
        // Aquí debes escribir la lógica para dibujar gráficos de barras
        // Puedes utilizar librerías de gráficos como Chart.js o D3.js para esta tarea
    }

    // Método para dibujar un gráfico de pastel (pie chart)
    drawPieChart(data: number[]) {
        console.log("Drawing pie chart:", data);
        // Aquí debes escribir la lógica para dibujar gráficos de pastel
        // Puedes utilizar librerías de gráficos como Chart.js o D3.js para esta tarea
    }

    // Método para dibujar un gráfico radial (radial chart)
    drawRadialChart(data: number[]) {
        console.log("Drawing radial chart:", data);
        // Aquí debes escribir la lógica para dibujar gráficos radiales
        // Puedes utilizar librerías de gráficos como Chart.js o D3.js para esta tarea
    }

    // ... otros métodos para diferentes visualizaciones, adaptados según sea necesario.
}

// Ejemplo de uso
const graph = new SimpleGraph();

// Dibujar un gráfico de barras
graph.drawBarChart([10, 20, 30, 40, 50]);

// Dibujar un gráfico de pastel
graph.drawPieChart([25, 15, 30, 10]);

// Dibujar un gráfico radial
graph.drawRadialChart([0.2, 0.3, 0.4, 0.1]);

// Nota: La lógica real para dibujar los gráficos de barras, pastel y radiales
// no está implementada en este ejemplo y debe ser proporcionada por ti utilizando
// las herramientas y librerías adecuadas para la visualización de datos.
