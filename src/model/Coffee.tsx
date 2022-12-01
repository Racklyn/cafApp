import React, { ReactNode } from "react";
import timeout from "../utils/timeout";
import Drink from "./Drink";

export default class Coffee extends Drink{
    title = "Café"

    async addMainIngredientToCupImage(){
        //this.image = this.image(40, <p style={{color: "black"}}>COMP</p>)

        this.image = (size: number, children?: ReactNode) => {
            return(
                <p style={{color: "#000"}}>IMAGEM</p>
                // this.image(
                //     size,
                //     // <img style={{width: "100%"}} src={this.selectedFlavor?.imageURL} alt="Comple"/>
                //     <p style={{color: "black"}}>COMP</p>
                // )
            )
        }
        await timeout(1000)
        
    }
    async addComplementsToCupImage(){

        this.image = (size: number, children?: ReactNode) => {
            return(
                <p style={{color: "#000"}}>2° passo</p>
                // this.image(
                //     size,
                //     // <img style={{width: "100%"}} src={this.selectedFlavor?.imageURL} alt="Comple"/>
                //     <p style={{color: "black"}}>COMP</p>
                // )
            )
        }
        await timeout(1000)
    }
    
}