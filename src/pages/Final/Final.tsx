import React from 'react';
import './final.css';
import LogoImg from '../../assets/logo-name.png';
import {DownloadSimple, HouseSimple} from 'phosphor-react';
import { Link } from 'react-router-dom';

const Final = () => {
  return (
    <body>
      <div className='container'>
        <div className='box'>
          <img src={LogoImg} alt='CafApp' style={{width: 136, height:161}}/>
          <p style={{marginTop: 0, marginBottom: 12}}>O cafApp agradece o seu pedido.</p>
          <div>
            <button><DownloadSimple size={24} weight="bold" color='#D2C1B0'/></button>
            <Link to='/'>
              <button style={{marginLeft: 6}}><HouseSimple size={24} weight="bold" color='#D2C1B0'/></button>
            </Link>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Final;