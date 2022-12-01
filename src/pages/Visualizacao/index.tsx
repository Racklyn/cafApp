import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './style.css';

import { MdAddShoppingCart } from "react-icons/md";

import HeaderOnlyLogo from '../../components/Header-Only-Logo/HeaderOnlyLogo';
import Button from '../../components/Button';
import { CriacaoParams } from '../Criacao';
import { useMain } from '../../contexts/main';
import Item from '../../model/Item';
import Coffee from '../../model/Coffee';

// export type VisualizacaoParams = CriacaoParams & {
//   flavor: 
// }

const Visualizacao = () => {

  // const location = useLocation()
  // const {drinkType, drinkSize} = location.state as VisualizacaoParams

  const {drinkMachine} = useMain()
  const [testDrink, setTestDrink] = useState(new Coffee("P"))
  //testDrink.image = () => {return <p>OLÀAAAAAAAAAAA</p>}

  useEffect(()=>{
    //testDrink.make()
    drinkMachine.start(testDrink)
    //currentDrink.make()
    // testDrink.addMainIngredientToCupImage()
    
    //console.log("USEEEEE")
  },[])

  return (
    <main>
      <div>
        <HeaderOnlyLogo/>
      </div>
      <div className='div-info-steps'>
        <span>ADICIONANDO A BEBIDA</span>
        <span>{`>`} ADICIONANDO O COMPLEMENTO</span>
        <span>{`>`} ADOÇANDO</span>
        <span>{`>`} MISTURANDO</span>
      </div>
      <div className='div-visualizacao'>
        {/*adicionar aqui o gif do cafe*/}
        <>
          {testDrink.image(200)}
          {testDrink.getInfo()}
        </>
        <Button className='button-mix'
          title='MIX'
          isDark
          onClick={()=> {}}     
        />
        <button className='button-add'><MdAddShoppingCart size={40} color='#3C2F2F'/></button>
      </div>
    </main>
  );
}

export default Visualizacao;