import React from "react"
import Item from "./Item"

export default class SideDish extends Item {
    title: string;
    imageUrl: string;

    constructor(price: number, title: string, imageUrl: string){
        super(price)
        this.title = title
        this.imageUrl = imageUrl
    }

    image = () => {
        return(
            <img src={this.imageUrl} alt={`imagem ${this.title}`}/>
        )
    }

}