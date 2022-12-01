export default abstract class Item {
    title = "item"
    price = 0

    constructor(price: number) {
        this.price = price
    }

    abstract image(): {}
}