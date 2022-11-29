import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './opcoes.css';

import CoffeeCardImg from '../../assets/coffee-card-img.png'
import TeaCardImg from '../../assets/tea-card-img.png'
import ChocoCardImg from '../../assets/choco-card-img.png'

import HeaderOnlyLogo from '../../components/Header-Only-Logo/HeaderOnlyLogo';
import DrinkOptionCard from '../../components/DrinkOptionCard';
import DrinkSizeCard from '../../components/DrinkSizeCard';
import Tray from '../../components/Tray';
import Button from '../../components/Button';


const Opcoes = () => {

  const [selDrinkOption, setSelDrinkOption] = useState("COFFEE" as "COFFEE" | "TEA" | "CHOCO")
  const [selDrinkSize, setSelDrinkSize] = useState("P" as "P" | "M" | "G")

  return (
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
          <Link to='/criacao'>
            <Button
              title='CRIAR'
              isDark
              onClick={()=> {}}
            />
          </Link>
          
        </div>
    
      </main>

      <Tray />
      
    </div>
  );
}

export default Opcoes;