
let productos = [
    { id: '1', categoria: 'Cafe', nombre: 'Café Colombiano', precio: 1200, foto: 'https://img.freepik.com/psd-premium/bolsa-papel-maqueta-cafe_23-2148884499.jpg?w=740' },
    { id: '2', categoria: 'Cafe', nombre: 'Café Brasilero', precio: 1000, foto: 'https://img.freepik.com/psd-premium/bolsa-papel-maqueta-cafe_23-2148884499.jpg?w=740' },
    { id: '3', categoria: 'Cafe', nombre: 'Café Italiano', precio: 1500, foto: 'https://img.freepik.com/psd-premium/bolsa-papel-maqueta-cafe_23-2148884499.jpg?w=740' },
    { id: '4', categoria: 'Cafeteras', nombre: 'Cafetera Italiana', precio: 10000, foto: 'https://img.freepik.com/fotos-premium/cafetera-moka-italiana-tradicional_739547-48.jpg?w=740' },
    { id: '5', categoria: 'Cafeteras', nombre: 'Cafetera Francesa', precio: 6000, foto: 'https://img.freepik.com/fotos-premium/cafetera-prensa-francesa-sobre-mesa-madera_52253-3241.jpg?w=740' },
    { id: '6', categoria: 'Vajilla', nombre: 'Taza', precio: 2000, foto: 'https://img.freepik.com/foto-gratis/taza-cafe-patron-corazon-taza-blanca-sobre-fondo-madera-vintage-tono_1258-250.jpg?w=740&t=st=1675384318~exp=1675384918~hmac=61fa93b2fedbdf2e3e22406215c2d19ee3c306684ae21b4cd38aeea587c622a6' },
    { id: '7', categoria: 'Vajilla', nombre: 'Pozillo', precio: 1200, foto: 'https://img.freepik.com/foto-gratis/taza-cafe_74190-2687.jpg?w=740&t=st=1675384164~exp=1675384764~hmac=54dbc88654ec2d5decca99058a299c7c4bf84ea698ca37be7c92ba2e0b5aeec0' },
    { id: '8', categoria: 'Accesorios', nombre: 'Filtro', precio: 1000, foto: 'https://img.freepik.com/foto-gratis/alto-angulo-cafe-filtro_23-2148523007.jpg?w=740&t=st=1675384369~exp=1675384969~hmac=5fc8a13b41463f42b8bf1bd0f231e475a5f4bcbad337274fc00aa46b7af11b3b' },
    { id: '9', categoria: 'Accesorios', nombre: 'Molinillo', precio: 8000, foto: 'https://img.freepik.com/foto-gratis/granos-cafe-tazon-molinillo-cafe_23-2147711002.jpg?w=740&t=st=1675384446~exp=1675385046~hmac=dc160716b950665f92fd6202850f38d6bd2edcd85dfabb099a936b06f13342b3' },
    { id: '10', categoria: 'Accesorios', nombre: 'Espumador', precio: 8000, foto: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/180/130/products/whatsapp-image-2022-06-22-at-4-27-38-pm-11-d5790e6dc54be58ea316559355459674-640-0.jpeg' }
]

export const gFetch = (id) => {
    return new Promise((res, rej) => {

        setTimeout(() => {
            res(id ? productos.find(producto => producto.id === id) : productos)
        }, 1000)
    })
}
