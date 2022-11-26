import Item from "./Item"

export default class SideDish extends Item {
    title: String

    //TODO: To be implemented
    //image: 

    constructor(price: number, title: String){
        super(price)
        this.title = title
    }

}