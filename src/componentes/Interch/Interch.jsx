/*import { useState } from "react";
import { Link } from "react-router-dom";

//Botón agregar al carrito
const ButtonCount = ({ handleInter }) => {
    return <button
        className="btn btn-outline-success"
        onClick={handleInter}
    >
        Agregar Al carrito
    </button>
}

//Componente que contiene dos opciones cuando se hace click en agregar al carrito
const InputCount = () => {
    return (
        <>
            <Link to='/Cart' >
                <button
                    className="btn"
                >Ir al carrito</button>
            </Link>
            <Link to='/' >
                <button
                    className="btn"

                >Seguir comprando</button>
            </Link>
        </>
    )
}

const Interch = () => {
    const [inputType, setInputType] = useState('button')

    const handleInter = () => {
        setInputType('input')
    }

    return (
        <div>
            {
                inputType === 'button' ?
                    <ButtonCount handleInter={handleInter} />
                    :
                    <InputCount />
            }
        </div>
    )
}

export default Interch
*/