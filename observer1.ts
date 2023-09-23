class Journalist {
    name: string;
    articles: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    publishArticle(article: string) {
        this.articles.push(article);
        console.log(`El periodista ${this.name} ha publicado: ${article}`);
    }
}

class Reader {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    checkForNewArticles(journalist: Journalist) {
        // Verifica si el periodista tiene artículos
        if (journalist.articles.length === 0) {
            console.log(`${this.name} no ha encontrado nuevos artículos de ${journalist.name}.`);
        } else {
            // Obtiene el artículo más reciente del periodista
            const latestArticle = journalist.articles[journalist.articles.length - 1];
            console.log(`${this.name} ha leído el artículo: ${latestArticle}`);
        }
    }
}

const journalistA = new Journalist('Juan');
const readerB = new Reader('Ana');

journalistA.publishArticle("Los beneficios de la programación"); // Juan publica un artículo
readerB.checkForNewArticles(journalistA); // Ana verifica si hay nuevos artículos de Juan
