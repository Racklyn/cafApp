import React from 'react';
import Header from '../../components/Header/Header';
import './home.css';
import {CaretCircleRight} from 'phosphor-react';

const Home = () => {
  return (
    <body>
      <div>
        <Header/>
      </div>
      <div className='div-principal'>
        <p>Olá! Comece a incrementar<br/>
        sua bandeja.</p>
        <button className='button-home'><CaretCircleRight size={40} weight="fill" color='white'/></button>
      </div>
      <div className='div-conteudo'>

      </div>
      <div className='footer'>
        <p>© CAFAPP 2022</p>
      </div>
    </body>
  );
}

export default Home;