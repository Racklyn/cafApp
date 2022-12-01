import Item from "./Item"
import testeCup from '../assets/drinkImages/teste-cup.png'
import testeComp from '../assets/drinkImages/teste-comple.png'
import './styles/drinkImage.css'
import Flavor from "./Flavor"
import Complement from "./Complement"
import { ReactNode } from "react"
import timeout from "../utils/timeout"

export default abstract class Drink extends Item {
    
    cupSize: "P"|"M"|"G" = "P"
    currentImg: ReactNode

    //TODO: To be implemented
    
    // availableFlavors: 
    //availableComplements: []
    selectedFlavor: Flavor | undefined = undefined
    //selectedComplements: Complement[] = []
    selectedComplement: Complement| undefined = undefined

    constructor(cupSize: "P"|"M"|"G") {
        let price = cupSize=="P" ? 3 : cupSize=="M" ? 5 : 7
        super(price)
        this.cupSize = cupSize
    }

    async make(){
        this.addMainIngredientToCupImage()
        //await timeout(1000)
        this.addComplementsToCupImage()
        this.addSugar()
        this.mix()
    }

    abstract addMainIngredientToCupImage(): void
    abstract addComplementsToCupImage(): void
    addSugar(){
        //TODO: To be implemented
    }
    mix(){
        //TODO: TO be implemented
    }

    // addSelectedComplement = (c: Complement) => {
    //     this.selectedComplements.push(c)
    // }

    image = (size: number, children?: ReactNode) => {
        return (
            <div
                className="drink-image"
                style={{
                    backgroundImage: `url(${testeCup})`,
                    height: size,
                    width: size
                }}
            >
                {children}
                {/* <img className="img-complement" src={testeComp} alt="Imagem bebida" /> */}
            </div>
        )
    }

    getInfo() {
        return this.title + " - tam: " + this.cupSize
    }

}