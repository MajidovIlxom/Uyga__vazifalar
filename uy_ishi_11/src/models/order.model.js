class Order {
    constructor(userId, producId, address ,count, price, hammasi)
    {
        this.userId = userId;
        this.producId = producId;
        this.address = address;
        this.count = count;
        this.price = price;
        this.hammasi = hammasi;
    }
}

module.exports = Order;