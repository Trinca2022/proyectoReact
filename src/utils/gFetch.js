
let products = [
    { id: '1', category: 'Cafe', name: 'Café Colombiano', price: 1200, description: 'Intensidad suave', photo: 'https://img.freepik.com/psd-premium/bolsa-papel-maqueta-cafe_23-2148884499.jpg?w=740' },
    { id: '2', category: 'Cafe', name: 'Café Brasilero', price: 1000, description: 'Intensidad media', photo: 'https://img.freepik.com/psd-premium/bolsa-papel-maqueta-cafe_23-2148884499.jpg?w=740' },
    { id: '3', category: 'Cafe', name: 'Café Italiano', price: 1500, description: 'Intensidad fuerte', photo: 'https://img.freepik.com/psd-premium/bolsa-papel-maqueta-cafe_23-2148884499.jpg?w=740' },
    { id: '4', category: 'Cafeteras', name: 'Cafetera Italiana', price: 10000, description: 'Hecha en aluminio. Pocillos: 9', photo: 'https://img.freepik.com/photos-premium/cafetera-moka-italiana-tradicional_739547-48.jpg?w=740' },
    { id: '5', category: 'Cafeteras', name: 'Cafetera Francesa', price: 6000, description: 'Hecha en vidrio. Pocillos: 9', photo: 'https://img.freepik.com/photos-premium/cafetera-prensa-francesa-sobre-mesa-madera_52253-3241.jpg?w=740' },
    { id: '6', category: 'Vajilla', name: 'Taza', price: 2000, description: 'Hecha en cerámica', photo: 'https://img.freepik.com/photo-gratis/taza-cafe-patron-corazon-taza-blanca-sobre-fondo-madera-vintage-tono_1258-250.jpg?w=740&t=st=1675384318~exp=1675384918~hmac=61fa93b2fedbdf2e3e22406215c2d19ee3c306684ae21b4cd38aeea587c622a6' },
    { id: '7', category: 'Vajilla', name: 'Pozillo', price: 1200, description: 'Hecho en cerámica', photo: 'https://img.freepik.com/photo-gratis/taza-cafe_74190-2687.jpg?w=740&t=st=1675384164~exp=1675384764~hmac=54dbc88654ec2d5decca99058a299c7c4bf84ea698ca37be7c92ba2e0b5aeec0' },
    { id: '8', category: 'Accesorios', name: 'Filtro', price: 1000, description: '', photo: 'https://img.freepik.com/photo-gratis/alto-angulo-cafe-filtro_23-2148523007.jpg?w=740&t=st=1675384369~exp=1675384969~hmac=5fc8a13b41463f42b8bf1bd0f231e475a5f4bcbad337274fc00aa46b7af11b3b' },
    { id: '9', category: 'Accesorios', name: 'Molinillo', price: 8000, description: '', photo: 'https://img.freepik.com/photo-gratis/granos-cafe-tazon-molinillo-cafe_23-2147711002.jpg?w=740&t=st=1675384446~exp=1675385046~hmac=dc160716b950665f92fd6202850f38d6bd2edcd85dfabb099a936b06f13342b3' },
    { id: '10', category: 'Accesorios', name: 'Espumador', price: 8000, description: '', photo: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/180/130/products/whatsapp-image-2022-06-22-at-4-27-38-pm-11-d5790e6dc54be58ea316559355459674-640-0.jpeg' }
]

export const gFetch = (id) => {
    return new Promise((res, rej) => {

        setTimeout(() => {
            res(id ? products.find(product => product.id === id) : products)
        }, 1000)
    })
}
