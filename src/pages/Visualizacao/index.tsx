import React from 'react';
import { useLocation } from 'react-router-dom';
import './style.css';

import { MdAddShoppingCart } from "react-icons/md";

import HeaderOnlyLogo from '../../components/Header-Only-Logo/HeaderOnlyLogo';
import Button from '../../components/Button';
import { CriacaoParams } from '../Criacao';

type VisualizacaoParams = CriacaoParams & {
  
}

const Visualizacao = () => {
 
  const location = useLocation()
  const {drinkType, drinkSize} = location.state as VisualizacaoParams

  return (
    <main>
      <div>
        <HeaderOnlyLogo/>
      </div>
      <div className='div-visualizacao'>
        {/*adicionar aqui o gif do cafe*/}
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