import { createContext, ReactNode, useContext, useState } from 'react'
import Drink from '../model/Drink';
import DrinkMachine from '../model/DrinkMachine';
import Tray from '../model/Tray';
import User from '../model/User';

type MainContextData = {
    user?: User;
    currentDrink: Drink;
    currentTray: Tray;
    drinkMachine: DrinkMachine;
    setUser: (_: User) => void;
    setCurrentTray: (_: Tray) => void;
    setCurrentDrink: (_: Drink) => void;
}


export const MainContext = createContext({} as MainContextData);


type MainContextProviderProps = {
    children: ReactNode; //Qualquer elemento tsx/html...
}

export function MainContextProvider({ children }: MainContextProviderProps) {
    // Serão usadas para alterar os valores de PlayerContext
    const [user, setUser] = useState({} as User)
    const [currentTray, setCurrentTray] = useState({} as Tray)
    const [currentDrink, setCurrentDrink] = useState({} as Drink)
    const [drinkMachine] = useState(DrinkMachine.getInstance())


    return (
        <MainContext.Provider
            value={
                {
                    user,
                    currentTray,
                    currentDrink,
                    drinkMachine,
                    setUser,
                    setCurrentTray,
                    setCurrentDrink
                }
            }
        >
            {children}
        </MainContext.Provider>
    )
}


export const useMain = () => {
    return useContext(MainContext)
}