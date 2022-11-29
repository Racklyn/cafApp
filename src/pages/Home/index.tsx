import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import './home.css';
import {CaretCircleRight} from 'phosphor-react';
import { Link } from 'react-router-dom';
import { useMain } from '../../contexts/main';
import User from '../../model/User';

const Home = () => {

  const {setUser} = useMain()

  useEffect(() => {
    //TODO: Criar login com usuário
    //Iniciando com um usuário "logado"

    setUser(
      new User(
        "Racklyn",
        "9999-1234",
        "R. Abc - 10 - Bairro Abc - Cidade X", "racklyn@exemplo.com"
      )
    )
  }, [])

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