import React, { useState } from 'react'

const ItemCount = ({ initial = 1, stock = 20, onAdd, }) => {
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
                <button className="btn btn-outline-dark w-100" onClick={handleOnAdd}>Agregar al carrito</button>
            </div>


        </div>
    )
}

export default ItemCount

/*{Toastify({
                text: `Café ${product.name} añadido al carrito`,
                duration: 3000,
                gravity: "bottom",
                stopOnFocus: true,
                style: {
                    background: "white",
                    color: "black"
                },
                onClick: function () { }
            }).showToast()} */