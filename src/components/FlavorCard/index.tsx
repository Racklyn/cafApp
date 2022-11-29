import "./style.css"
import noImage from '../../assets/no-image.png'

type Props = {
    image?: string;
    title: string;
    isSelected: boolean;
    onClick: () => void;
}

function FlavorCard({ image, title, isSelected, onClick }: Props) {

    return (
        <div className={`size-card-container ${!isSelected && 'not-selected-size-card'}`}>
          <div className='size-card-FC' onClick={onClick}>
          <img src={image ?? noImage}  alt="" style={{width: 150, height: 150, borderRadius: 80}}/>
          </div>
          <p>{title}</p>
        </div>
    )
}

export default FlavorCard;