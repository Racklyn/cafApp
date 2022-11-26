import React from 'react';
import HeaderOnlyLogo from '../../components/Header-Only-Logo/HeaderOnlyLogo';
import './opcoes.css';

const Opcoes = () => {
  return (
    <body>
      <div>
        <HeaderOnlyLogo/>
      </div>
      <div className='div-principal'>
        <p>Escolha o tipo de bebida:</p>
        <div>

        </div>
        <p>Escolha o tamanho da xícara:</p>
        <p className='p-detail'><i>(Os preços diferem de um para o outro de R$3.00. O menor tamanho custa R$8.00)</i></p>
        <div>

        </div>
        <button className='button-comprar'>COMPRAR</button>
      </div>
      <div className='container'>
        <div className='bandeja'>
          <p id='b-title'>BANDEJA</p>
          <div className='bandeja-info'>
            <p>Item</p>
            <p>Preço</p>
          </div>
          <div className='bandeja-info'>
            {/* preencher */}
          </div>
        </div>
      </div>
    </body>
  );
}

export default Opcoes;