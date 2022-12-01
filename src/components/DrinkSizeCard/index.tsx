import "./styles.css"

type Props = {
    title: string;
    subtitle: string;
    price: string;
    isSelected: boolean;
    onClick: () => void;
}

function DrinkSizeCard({ title, subtitle, price, isSelected, onClick }: Props) {

    return (
        <div className={`size-card-container ${!isSelected && 'not-selected-size-card'}`}>
            <div className="size-card" onClick={onClick}>
                <span className="title">{title}</span>
                <span className="subtitle">{subtitle}</span>
            </div>
            <p>{price}</p>
        </div>
    )
}

export default DrinkSizeCard