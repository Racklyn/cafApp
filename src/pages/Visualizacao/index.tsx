import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import { MdAddShoppingCart } from "react-icons/md";

import HeaderOnlyLogo from '../../components/Header-Only-Logo/HeaderOnlyLogo';
import Button from '../../components/Button';

const Visualizacao = () => {
 
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