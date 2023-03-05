import { useParams } from "react-router-dom"

const Purchase = () => {
    const { idOrder } = useParams()


    return (
        <><h1>¡Gracias por tu compra!</h1>
            <h1>Tu número de orden es: {idOrder}</h1>
        </>

    )
}
export default Purchase

