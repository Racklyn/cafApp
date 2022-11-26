import React, {useState} from 'react';
import './acompanhamento.css';
import DefaultImg from '../../assets/no-image.png';
import {MinusCircle, PlusCircle, ShoppingCart} from 'phosphor-react';

const Acompanhamento = () => {

  const [count, setCount] = useState(0);

  return(
    <div className='div-geral'>
      <div>
        <img src={DefaultImg} alt='Acompanhamento' style={{width: 175, height: 138, borderRadius: 20}}/>
      </div>
      <div className='div-info'>
        {/* isso será alterado */}
        <p className='p-info'>Brownie</p>
        <p className='p-info'>R$5.00</p>
      </div>
      <div className='div-comprar'>
        <div className='div-add'>
          <button onClick={() => setCount(count - 1)}><MinusCircle size={20} weight="light" /></button>
          <p className='p-add'>{count}</p>
          <button onClick={() => setCount(count + 1)}><PlusCircle size={20} weight="light" /></button>
        </div>
          <button><ShoppingCart size={20} weight="light" /></button>
      </div>
    </div>
  )
}

export default Acompanhamento;