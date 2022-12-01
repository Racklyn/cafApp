import Drink from "./Drink";

export default class DrinkMachine{

    private static instance:DrinkMachine | null = null

    private constructor(){}

    static getInstance(){
        if (this.instance == null) this.instance = new DrinkMachine()

        return this.instance
    }

    start(drink: Drink){
        drink.make()
    }
}