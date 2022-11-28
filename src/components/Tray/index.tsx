import Button from "../Button";
import "./styles.css"

type Props = {
    title?: string;
    onClick?: () => void;
}

function Tray({ title, onClick }: Props) {

    return (
        <div className="tray-container">
            <h1>cafApp</h1>

            <div className="tray-info">
                <p>BANDEJA DE ...</p>
                <p>28 DE NOVEMBRO DE 2022</p>
            </div>
            <hr/>

            <div className="items-container">

            </div>

            <span>
                <p>TOTAL</p>
                <p>R$ 0,00</p>
            </span>
            <Button
                title="FINALIZAR"
                onClick={() => {}}
            />

        </div>
    )
}

export default Tray