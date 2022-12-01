import React, { useEffect, useState, MouseEvent } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
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
import Item from '../../model/Item';
import { CriacaoParams } from '../Criacao';

export type sizes = 'P'|'M'|'G'
export type drinkOptions = "COFFEE" | "TEA" | "CHOCO"

const Opcoes = () => {

  const drinkSizes = [["P", "100ml"],["M", "100ml"],["G", "100ml"]]

  const drinkPrices = {
    "COFFEE": {"P":3, "M":5, "G":7},
    "TEA": {"P":2.5, "M":4, "G":5.5},
    "CHOCO": {"P":3.5, "M":5.5, "G":8}
  }

  const navigate = useNavigate()

  const { user } = useMain()

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [tray, setTray] = useState({} as Tray)

  const [selDrinkOption, setSelDrinkOption] = useState("COFFEE" as "COFFEE" | "TEA" | "CHOCO")
  const [selDrinkSize, setSelDrinkSize] = useState("P" as sizes)

  useEffect(() => {
    if (user?.name) {
      setIsUserLoggedIn(true)
      setTray(new Tray(user))
    }
  }, [])

  //e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  function goToDrinkCreation(){
    let item: Item

    if (selDrinkOption=="COFFEE") item = new Coffee(selDrinkSize)
    else if (selDrinkOption=="TEA") item = new Tea(selDrinkSize)
    else item = new HotChocolate(selDrinkSize)

    navigate('/criacao', {state: {
      drinkType: selDrinkOption,
      drinkSize: selDrinkSize
    } as CriacaoParams})
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
            {
              drinkSizes.map(s =>{
                let [l, size] = s
                return(
                  <DrinkSizeCard
                    title={l}
                    subtitle={size}
                    price={`R$ ${drinkPrices[selDrinkOption][l as sizes]}`}
                    isSelected={selDrinkSize === l}
                    onClick={() => setSelDrinkSize(l as sizes)}
                  />
                )
              })
            }
          </div>
          <Button
            title='CRIAR'
            isDark
            onClick={goToDrinkCreation}
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