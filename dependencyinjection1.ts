class EmailNotifier {
    // Método para enviar un correo electrónico
    sendEmail(receiver: string, subject: string, content: string) {
        console.log(`Email sent to ${receiver} with subject "${subject}": ${content}`);
        // Aquí podrías agregar lógica para enviar el correo electrónico real utilizando algún servicio de correo.
    }
}

class MusicStore {
    notifier: EmailNotifier;

    // Constructor que inicializa la notificación por correo electrónico
    constructor() {
        this.notifier = new EmailNotifier();
    }

    // Método para notificar sobre el lanzamiento de un nuevo álbum
    newAlbumRelease(email: string, artist: string, album: string) {
        // Utiliza el notificador para enviar un correo electrónico de notificación
        this.notifier.sendEmail(email, "New Album Release", `The new album ${album} by ${artist} is now available!`);
    }
}

// Ejemplo de uso
const musicStore = new MusicStore();

// Notificar el lanzamiento de un nuevo álbum a un cliente por correo electrónico
musicStore.newAlbumRelease("customer@example.com", "Artist Name", "Awesome Album");

