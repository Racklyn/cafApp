import React, { useEffect, useState } from 'react';
import './opcoes.css';

import CoffeeCardImg from '../../assets/coffee-card-img.png'
import TeaCardImg from '../../assets/tea-card-img.png'
import ChocoCardImg from '../../assets/choco-card-img.png'

import HeaderOnlyLogo from '../../components/Header-Only-Logo/HeaderOnlyLogo';
import DrinkOptionCard from '../../components/DrinkOptionCard';
import DrinkSizeCard from '../../components/DrinkSizeCard';
import TrayMenu from '../../components/TrayMenu';
import Button from '../../components/Button';
import { useMain } from '../../contexts/main';
import Tray from '../../model/Tray';
import Coffee from '../../model/Coffee';
import Tea from '../../model/Tea';
import HotChocolate from '../../model/HotChocolate';


const Opcoes = () => {

  const { user } = useMain()

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [tray, setTray] = useState({} as Tray)

  const [selDrinkOption, setSelDrinkOption] = useState("COFFEE" as "COFFEE" | "TEA" | "CHOCO")
  const [selDrinkSize, setSelDrinkSize] = useState("P" as "P" | "M" | "G")

  useEffect(() => {
    if (user?.name) {
      setIsUserLoggedIn(true)
      setTray(new Tray(user))
    }
  }, [])

  function addDrink(){
    if (selDrinkOption=="COFFEE") tray.addItem(new Coffee(selDrinkSize))
    else if (selDrinkOption=="TEA") tray.addItem(new Tea(selDrinkSize))
    else if (selDrinkOption=="CHOCO") tray.addItem(new HotChocolate(selDrinkSize))
  }

  return (
    <>
      {
        isUserLoggedIn ?
          <div className='pedido-container'>
            <main>
              <div>
                <HeaderOnlyLogo />
              </div>
              <div className='div-opcoes'>
                <p>Escolha qual a bebida:</p>
                <div className='drink-options-container'>
                  <DrinkOptionCard
                    title="Café"
                    image={CoffeeCardImg}
                    isSelected={selDrinkOption === "COFFEE"}
                    onClick={() => setSelDrinkOption("COFFEE")}
                  />
                  <DrinkOptionCard
                    title="Chá"
                    image={TeaCardImg}
                    isSelected={selDrinkOption === "TEA"}
                    onClick={() => setSelDrinkOption("TEA")}
                  />
                  <DrinkOptionCard
                    title="Chocolate Quente"
                    image={ChocoCardImg}
                    isSelected={selDrinkOption === "CHOCO"}
                    onClick={() => setSelDrinkOption("CHOCO")}
                  />
                </div>

                <p>Escolha o tamanho da xícara:</p>
                <div className='drink-sizes-container'>
                  <DrinkSizeCard
                    title='P'
                    subtitle='100mL'
                    price={`R$ 3,00`}
                    isSelected={selDrinkSize === "P"}
                    onClick={() => setSelDrinkSize("P")}
                  />
                  <DrinkSizeCard
                    title='M'
                    subtitle='200mL'
                    price={`R$ 3,00`}
                    isSelected={selDrinkSize === "M"}
                    onClick={() => setSelDrinkSize("M")}
                  />
                  <DrinkSizeCard
                    title='G'
                    subtitle='300mL'
                    price={`R$ 3,00`}
                    isSelected={selDrinkSize === "G"}
                    onClick={() => setSelDrinkSize("G")}
                  />
                </div>
                <Button
                  title='COMPRAR'
                  isDark
                  onClick={addDrink}
                />
              </div>

            </main>

            <TrayMenu tray={tray} />

          </div>

          : <h3>Usuário não logado.<br/> Por favor, faça login para poder comprar!</h3>}
    </>
  );
}

export default Opcoes;