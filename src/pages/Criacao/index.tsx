import React, {useState} from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
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
import { drinkOptions, sizes } from '../Opcoes';

import Complement from '../../model/Complement';
import Flavor from '../../model/Flavor';
import { useMain } from '../../contexts/main';
//import { VisualizacaoParams } from '../Visualizacao';

export type CriacaoParams = {
  drinkType: drinkOptions;
  drinkSize: sizes;
}


const Criacao = () => {

  const location = useLocation()
  const {drinkType, drinkSize} = location.state as CriacaoParams

  const navigate = useNavigate()

  const {currentDrink} = useMain()

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

  const [selFlavor, setFlavor] = useState(0)
  const [selComplement, setComplement] = useState(0)
  const [selSugarQtd, setSugarQtd] = useState("0" as "0" | "1" | "2" | "3")

  function navigateToViewPage() {
    //currentDrink.selectedComplements.push(complementos[0]) //TODO: Change this
    currentDrink.selectedComplement = complementos[0]
    currentDrink.selectedFlavor = saboresCafe[1]

    navigate('/visualizacao')
  }

  return (
    <main>
      <div>
        <HeaderOnlyLogo/>
      </div>
      <div className='div-complementos'>
        <p>Escolha o sabor:</p>
        <div className='div-flavor-options'>
          {saboresCafe.map((Flavor, index) => {
            return (
              <FlavorCard
              title={Flavor.title}
              image={Flavor.imageURL}
              isSelected={selFlavor === index}
              onClick={() => setFlavor(index)}
              />
            );
          })}
          
        </div>
      
        <p>Escolha os complementos:</p>
        <p id='p-obs'><i>(cada um custa R$4.00)</i></p>
        <div className='div-complemento-options'>
          {complementos.map((Complement, index) => {
            return (
              <ComplementoCard
              title={Complement.title}
              image={Complement.imageURL}
              isSelected={selComplement === index}
              onClick={() => setComplement(index)}
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
        
        
        <button className='button-next' onClick={navigateToViewPage}>
          <ArrowRight size={35} weight="bold" />
        </button>
      </div>
    </main>
  );
}

export default Criacao;