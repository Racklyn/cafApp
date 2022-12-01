import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import expressoCafe from '../../assets/expresso-cafe-img.png'
import americanoCafe from '../../assets/americano-cafe-img.jpg'
import macchiatoCafe from '../../assets/macchiato-cafe-img.png'

import baunilhaComp from '../../assets/comp-baunilha.jpg'
import canelaComp from '../../assets/comp-canela.png'
import chocolateComp from '../../assets/comp-chocolate.jpg'
import hortelaComp from '../../assets/comp-hortela.png'
import nozMoscadaComp from '../../assets/comp-nozmoscada.png'

import HeaderOnlyLogo from '../../components/Header-Only-Logo/HeaderOnlyLogo';
import SugarCard from '../../components/SugarCard';
import FlavorCard from '../../components/FlavorCard';
import ComplementoCard from '../../components/ComplementoCard';

import {ArrowRight} from 'phosphor-react';

import Complement from '../../model/Complement';
import Flavor from '../../model/Flavor';

const Criacao = () => {

  const complementos = [
    new Complement('Chocolate', '', chocolateComp), 
    new Complement('Canela', '', canelaComp), 
    new Complement('Noz-moscada', '', nozMoscadaComp), 
    new Complement('Baunilha', '', baunilhaComp), 
    new Complement('Hortelã', '', hortelaComp),
  ]

  const saboresCafe = [
    new Flavor('Expresso', '', expressoCafe),
    new Flavor('Americano', '', americanoCafe),
    new Flavor('Macchiato', '', macchiatoCafe),
  ]

  const [selFlavor, setFlavor] = useState("EXPRESSO" as "EXPRESSO" | "AMERICANO" | "MACCHIATO")

  const [checkedState, setCheckedState] = useState(new Array(complementos.length).fill(false))

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const [selSugarQtd, setSugarQtd] = useState("0" as "0" | "1" | "2" | "3")

  return (
    <main>
      <div>
        <HeaderOnlyLogo/>
      </div>
      <div className='div-complementos'>
        <p>Escolha o sabor:</p>
        <div className='div-flavor-options'>
          <FlavorCard
            title="Expresso"
            image={expressoCafe}
            isSelected={selFlavor === "EXPRESSO"}
            onClick={() => setFlavor("EXPRESSO")}
          />
          <FlavorCard
            title="Americano"
            image={americanoCafe}
            isSelected={selFlavor === "AMERICANO"}
            onClick={() => setFlavor("AMERICANO")}
          />
          <FlavorCard
            title="Macchiato"
            image={macchiatoCafe}
            isSelected={selFlavor === "MACCHIATO"}
            onClick={() => setFlavor("MACCHIATO")}
          />
        </div>
      
        <p>Escolha os complementos:</p>
        <p id='p-obs'><i>(cada um custa R$4.00, escolha no máximo 3)</i></p>
        <div className='div-complemento-options'>
          {complementos.map((Complement, index) => {
            return (
              <ComplementoCard
              title={Complement.title}
              image={Complement.imageURL}
              isSelected={checkedState[index]}
              onClick={() => handleOnChange(index)}
              />
            );
          })}
        </div>
      
        <p>Adoçar:</p>
        <div className='div-sugar-options'>
        <SugarCard
          quantity='0'
          isSelected={selSugarQtd === "0"}
          onClick={() => setSugarQtd("0")}
        />
        <SugarCard
          quantity='1'
          isSelected={selSugarQtd === "1"}
          onClick={() => setSugarQtd("1")}
        />
        <SugarCard
          quantity='2'
          isSelected={selSugarQtd === "2"}
          onClick={() => setSugarQtd("2")}
        />
        <SugarCard
          quantity='3'
          isSelected={selSugarQtd === "3"}
          onClick={() => setSugarQtd("3")}
        />
        </div>
        
        <Link to='/visualizacao'>
          <button className='button-next'><ArrowRight size={35} weight="bold" /></button>
        </Link>
      </div>
    </main>
  );
}

export default Criacao;