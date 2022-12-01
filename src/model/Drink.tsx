import Item from "./Item"
import testeCup from '../assets/drinkImages/teste-cup.png'
import testeComp from '../assets/drinkImages/teste-comple.png'
import './styles/drinkImage.css'

export default abstract class Drink extends Item {
    
    cupSize: "P"|"M"|"G" = "P"

    //TODO: To be implemented
    
    // availableFlavors: 
    //availableComplements: []
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

    image = (size: number) => {
        return (
            <div
                className="drink-image"
                style={{
                    backgroundImage: `url(${testeCup})`,
                    height: size,
                    width: size
                }}
            >
                <img className="img-complement" src={testeComp} alt="Imagem bebida" />
            </div>
        )
    }

    getInfo() {
        return this.title + " " + this.cupSize
    }

}