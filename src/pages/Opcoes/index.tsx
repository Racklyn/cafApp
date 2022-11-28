import React, { useState } from 'react';
import './opcoes.css';

import CoffeeCardImg from '../../assets/coffee-card-img.png'
import TeaCardImg from '../../assets/tea-card-img.png'
import ChocoCardImg from '../../assets/choco-card-img.png'

import HeaderOnlyLogo from '../../components/Header-Only-Logo/HeaderOnlyLogo';
import DrinkOptionCard from '../../components/DrinkOptionCard';
import DrinkSizeCard from '../../components/DrinkSizeCard';


const Opcoes = () => {

  const [selDrinkOption, setSelDrinkOption] = useState("COFFEE" as "COFFEE"|"TEA"|"CHOCO")
  const [selDrinkSize, setSelDrinkSize] = useState("P" as "P"|"M"|"G")

  return (
    <main>
      <div>
        <HeaderOnlyLogo/>
      </div>
      <div className='div-opcoes'>
        <p>Escolha qual a bebida:</p>
        <div className='drink-options-container'>
          <DrinkOptionCard
            title="Café"
            image={CoffeeCardImg}
            isSelected={selDrinkOption==="COFFEE"}
            onClick={() => setSelDrinkOption("COFFEE")}
          />
          <DrinkOptionCard
            title="Chá"
            image={TeaCardImg}
            isSelected={selDrinkOption==="TEA"}
            onClick={() => setSelDrinkOption("TEA")}
          />
          <DrinkOptionCard
            title="Chocolate Quente"
            image={ChocoCardImg}
            isSelected={selDrinkOption==="CHOCO"}
            onClick={() => setSelDrinkOption("CHOCO")}
          />
        </div>

        <p>Escolha o tamanho da xícara:</p>
        <p className='p-detail'><i>(Os preços diferem de um para o outro de R$3.00. O menor tamanho custa R$8.00)</i></p>
        <div className='drink-sizes-container'>
          <DrinkSizeCard
            title='P'
            subtitle='100mL'
            price={`R$ 3,00`}
            isSelected={selDrinkSize==="P"}
            onClick={() => setSelDrinkSize("P")}
          />
          <DrinkSizeCard
            title='M'
            subtitle='200mL'
            price={`R$ 3,00`}
            isSelected={selDrinkSize==="M"}
            onClick={() => setSelDrinkSize("M")}
          />
          <DrinkSizeCard
            title='G'
            subtitle='300mL'
            price={`R$ 3,00`}
            isSelected={selDrinkSize==="G"}
            onClick={() => setSelDrinkSize("G")}
          />
        </div>
        <button className='button-comprar'>COMPRAR</button>
      </div>
      <div className='container'>
        <div className='bandeja'>
          <p id='b-title'>BANDEJA</p>
          <div className='bandeja-info'>
            <p>Item</p>
            <p>Preço</p>
          </div>
          <div className='bandeja-info'>
            {/* preencher */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Opcoes;