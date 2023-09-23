class Auction {
    item: string;
    currentBid: number = 0;
    highestBidder: string | null = null;

    constructor(item: string) {
        this.item = item;
    }

    makeBid(bidderName: string, amount: number) {
        if (amount > this.currentBid) {
            // Si la nueva oferta es más alta que la oferta actual
            this.currentBid = amount;
            this.highestBidder = bidderName;
            console.log(`${bidderName} es el máximo postor con una oferta de ${amount}`);
        } else {
            // Si la nueva oferta es igual o más baja que la oferta actual
            console.log(`${bidderName}, tu oferta es demasiado baja.`);
        }
    }
}

const auctionItem = new Auction("Cuadro famoso");

// Carlos hace una oferta de 500
auctionItem.makeBid("Carlos", 500);

// Ana hace una oferta de 450
auctionItem.makeBid("Ana", 450);
