import React, { useState } from 'react'
import { Link } from 'react-router-dom'


//Componente que contiene botón agregar al carrito
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

//Componente que contiene el contador y trae a los otros dos componentes
const ItemCount = ({ initial = 1, stock = 20, onAdd }) => {
    const [count, setCount] = useState(initial)

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const handleLess = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }
    const handleOnAdd = () => {
        onAdd(count)
    }

    const [inputType, setInputType] = useState('button')

    const handleInter = () => {
        setInputType('input')
        handleOnAdd(count)
    }

    return (
        <div className="card mt-2 w-100" >
            <div className="card-body row">
                <div className="col">
                    <button className="btn btn-outline-dark w-100" onClick={handleLess}> - </button>
                </div>

                <div className="col">
                    <center>
                        <label>{count}</label>
                    </center>

                </div>
                <div className="col">
                    <button className="btn btn-outline-dark w-100" onClick={handleAdd}> + </button>
                </div>

            </div>
            <div className="card-footer">

                {
                    inputType === 'button' ?
                        <ButtonCount handleInter={handleInter} />
                        :
                        <InputCount />
                }
            </div>


        </div>
    )
}

export default ItemCount

