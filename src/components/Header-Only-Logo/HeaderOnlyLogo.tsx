import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import './headerOnlyLogo.css';

const HeaderOnlyLogo = () => {
  return(
    <nav>
      <div className='div-header-only'>
        <Link to='/'>
          <Logo/>
        </Link>
      </div>
    </nav>
  )
}

export default HeaderOnlyLogo;