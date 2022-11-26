import React from 'react';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import './header.css';

const Header = () => {
  return(
    <nav>
      <div className='div-header'>
        <div>
          <Logo/>
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
          <button className='button-header'>SOBRE</button>
          <button className='button-header'>CONTATO</button>
        </div>
      </div>
    </nav>
  )
}

export default Header;