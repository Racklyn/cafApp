import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import expressoCafe from '../../assets/expresso-cafe-img.png'
import americanoCafe from '../../assets/americano-cafe-img.jpg'
import macchiatoCafe from '../../assets/macchiato-cafe-img.png'

import HeaderOnlyLogo from '../../components/Header-Only-Logo/HeaderOnlyLogo';
import SugarCard from '../../components/SugarCard';
import FlavorCard from '../../components/FlavorCard';
import {ArrowRight} from 'phosphor-react';

const Criacao = () => {
  const [selFlavor, setFlavor] = useState("EXPRESSO" as "EXPRESSO" | "AMERICANO" | "MACCHIATO")
  //adicionar parte dos complementos
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
        {/* adicionar os complementos */}
      
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
        
        {/* adicionar o link aqui */}
        <button className='button-next'><ArrowRight size={35} weight="bold" /></button>
      </div>
    </main>
  );
}

export default Criacao;