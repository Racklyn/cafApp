export default abstract class Drink {
    cupSize: "P"|"M"|"G" = "P"

    //TODO: To be implemented
    
    // availableFlavors: 
    // availableComplements:
    // selectedFlavor:
    // selectedComplements:

    constructor(cupSize: "P"|"M"|"G") {
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

}