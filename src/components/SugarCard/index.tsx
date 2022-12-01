import { useEffect, useState } from "react";
import "./style.css"
import { GiSpoon } from "react-icons/gi";
 

type Props = {
    quantity: string;
    isSelected: boolean;
    onClick: () => void;
}

function SugarCard({ quantity, isSelected, onClick }: Props) {

    const [text, setText] = useState('')

    useEffect(() => {
      if(quantity === '0'){
        setText('Não adicionar')
      }else if(quantity === '1'){
        setText('Adicionar 1x')
      }else{
        setText('Adicionar ' + quantity + 'x')
      }
    }, [quantity])

    return (
        <div className={`size-card-container ${!isSelected && 'not-selected-size-card'}`}>
          <div className='size-card' onClick={onClick}>
            <p>{text}<GiSpoon/></p>
          </div>
        </div>
    )
}

export default SugarCard;