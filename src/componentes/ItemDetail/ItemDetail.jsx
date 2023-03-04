import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ product }) => {

    const { cartAdd } = useCartContext()

    const onAdd = (quant,) => {
        //console.log(quant)
        cartAdd({ ...product, quantity: quant })
    }

    //console.log(cartList)

    return (
        <center>
            <div className='card w-40 mt-2' >
                <div className='card-header'>
                    {product.name}
                </div>
                <div className='card-body'>
                    <img src={product.photo} alt='foto' className="w-100" /><br />
                    {product.description}
                </div>
                <div className='card-footer'>
                    Precio: ${product.price}
                </div>
                <ItemCount onAdd={onAdd} />
            </div>
        </center>

    )
}

export default ItemDetail

/*const onAdd = (quant, pric) => {
        //console.log(quant)
        cartAdd({ ...product, quantity: quant, newPrice: pric })
    }*/