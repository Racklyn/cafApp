import {createContext, ReactNode, useContext, useState} from 'react'
import Tray from '../model/Tray';
import User from '../model/User';

type MainContextData = {
    user?: User;
    currentTray: Tray;
    setUser: (_:User) => void;
    setCurrentTray: (_:Tray) => void;
}


export const MainContext = createContext({} as MainContextData);


type MainContextProviderProps = {
    children: ReactNode; //Qualquer elemento tsx/html...
}

export function MainContextProvider({children}: MainContextProviderProps){
      // Serão usadas para alterar os valores de PlayerContext
  const [user, setUser] = useState({} as User)
  const [currentTray, setCurrentTray] = useState({} as Tray)


  return(
    <MainContext.Provider 
        value={
            {
                user,
                currentTray,
                setUser,
                setCurrentTray
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