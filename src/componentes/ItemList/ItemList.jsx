import React, { memo } from 'react'
import Item from '../Item/Item'

//Aplico memo para controlar los renderizados
const ItemList = memo(({ products }) => {
    return (
        products.map(product => <Item key={product.id} product={product} />)
    )
}
)
export default ItemList