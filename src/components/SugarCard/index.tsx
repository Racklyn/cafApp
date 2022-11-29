import "./style.css"

type Props = {
    quantity: string;
    isSelected: boolean;
    onClick: () => void;
}

function SugarCard({ quantity, isSelected, onClick }: Props) {

    return (
        <div className={`size-card-container ${!isSelected && 'not-selected-size-card'}`}>
          <div className='size-card' onClick={onClick}>
            <p>Adicionar {quantity} colher(es)</p>
          </div>
        </div>
    )
}

export default SugarCard;