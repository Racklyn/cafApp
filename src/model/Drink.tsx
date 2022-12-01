import Item from "./Item"
import testeCup from '../assets/drinkImages/teste-cup.png'

export default abstract class Drink extends Item {
    
    cupSize: "P"|"M"|"G" = "P"

    //TODO: To be implemented
    
    // availableFlavors: 
    // availableComplements:
    // selectedFlavor:
    // selectedComplements:

    constructor(cupSize: "P"|"M"|"G") {
        let price = cupSize=="P" ? 3 : cupSize=="M" ? 5 : 7
        super(price)
        this.cupSize = cupSize
    }

    make(){
        this.addMainIngredient()
        this.addComplements()
        this.addSugar()
        this.mix()
    }

    abstract addMainIngredient(): void
    abstract addComplements(): void
    addSugar(){
        //TODO: To be implemented
    }
    mix(){
        //TODO: TO be implemented
    }

    image() {
        return (
            <div>
                <img style={{height: "40px"}} src={testeCup} alt="Imagem bebida" />
            </div>
        )
    }

}