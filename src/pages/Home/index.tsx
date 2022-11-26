import React from 'react';
import Header from '../../components/Header/Header';
import './home.css';
import {CaretCircleRight} from 'phosphor-react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <main>
      <div>
        <Header/>
      </div>
      <div className='div-principal'>
        <p>Olá! Comece a incrementar<br/>
        sua bandeja.</p>
        <Link className='button-home' to={'/opcoes'}>
          <CaretCircleRight size={40} weight="fill" color='white'/>
        </Link>
      </div>
      <div className='div-conteudo'>

      </div>
      <div className='footer'>
        <p>© CAFAPP 2022</p>
      </div>
    </main>
  );
}

export default Home;