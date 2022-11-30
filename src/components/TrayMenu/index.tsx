import { Link } from "react-router-dom";
import Tray from "../../model/Tray"
import Button from "../Button"
import "./styles.css"

type Props = {
    tray: Tray;
}

function TrayMenu({ tray }: Props) {

    return (
        <div className="tray-container">
            <h1>cafApp</h1>

            <div className="tray-info">
                <p>BANDEJA DE ...</p>
                <p>28 DE NOVEMBRO DE 2022</p>
            </div>
            <hr/>

            <div className="items-container">
                
                {tray.items.map(item => {
                    return(
                        <>
                            <p>Item: {item.title}</p>
                            {item.image()}
                        </>
                    )
                })}
            </div>

            <span>
                <p>TOTAL</p>
                <p>R$ {tray.getTotal()}</p>
            </span>
            <Link to='/final'>
                <Button
                    title="FINALIZAR"
                    onClick={() => {}}
                />
            </Link>
        </div>
    )
}

export default TrayMenu