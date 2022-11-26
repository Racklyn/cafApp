import React from 'react';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import './headerOnlyLogo.css';

const HeaderOnlyLogo = () => {
  return(
    <nav>
      <div className='div-header-only'>
        <Logo/>
      </div>
    </nav>
  )
}

export default HeaderOnlyLogo;