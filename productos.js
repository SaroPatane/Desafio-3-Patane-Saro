class Productos{
    constructor(){}
    
    nuevosProductos(title, price, thumbnail, id){
        const products = [
            {
                title: 'Lapicera',
                price: 100,
                thumbnail: 'http://www.google.com.ar',
                id: 1
            }, {
                title: 'Cartuchera',
                price: 150,
                thumbnail: 'http://www.google.com.ar',
                id: 2
            }, {
                title: 'Lapiz',
                price: 50,
                thumbnail: 'http://www.google.com.ar',
                id: 3
            }
            ];
        return products;         
    }
} 


module.exports = Productos;