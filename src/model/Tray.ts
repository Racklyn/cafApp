import User from "./User";
import Item from "./Item";

export default class Tray {
    client: User
    items: Item [] = []

    constructor(client: User) {
        this.client = client
    }

    addItem(item: Item){
        this.items.push(item)
    }
    removeItemAt(idx: number){
        this.items.splice(idx, 1)
    }
    
    getTotal(){
        let total = 0
        this.items.forEach(i => total += i.price)
        return total
    }
}