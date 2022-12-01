import { Link } from "react-router-dom";
import { useMain } from "../../contexts/main";
import Tray from "../../model/Tray"
import Button from "../Button"
import "./styles.css"

type Props = {
    tray: Tray;
}

function TrayMenu({ tray }: Props) {

    const {user} = useMain()

    return (
        <div className="tray-container">
            <h1>cafApp</h1>

            <div className="tray-info">
                <p>BANDEJA DE {user?.name.toUpperCase()}</p>
                <p>28 DE NOVEMBRO DE 2022</p>
            </div>
            <hr/>

            <div className="items-container">
                
                {tray.items.map(item => {
                    return(
                        <>
                            <p>Item: {item.getInfo()}</p>
                            {item.image(60)}
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