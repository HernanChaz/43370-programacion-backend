class ProductManager {
    
    static #contadorProductos = 0;

    constructor( productos = [] ) {
        this.productos = productos;
    }

    addProducto( title, description, price, thumbnail, code, stock ) {

        let encontrado = this.productos.findIndex( prod => prod.code == code );
        
        if( encontrado == -1){
            const producto = {
                id : this.#getMaxId(),
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }
            if( title && description && price && thumbnail && code && stock ){
                console.log("añadiendo producto");
                this.productos.push( producto );
            } else {
                console.log("no se añadió");
            }
        } else {
            console.log(`Error: Ya se añadió un producto con el code = ${code}`);
        }

    }

    getProductos() {
        return this.productos;
    }

    getProductById( id ) {
        let encontrado;
        if( id ) {
            encontrado = this.productos.find( prod => prod.id == id );
        }
        return encontrado || "Not found";
    }

    #getMaxId() {
        return ++ProductManager.#contadorProductos;
    }
}


// TESTING
console.log("<--- Inciando Testing --->\n");

// Creamos instancia de ProductManager
const productManager = new ProductManager();

console.log("<--- Llamando a getProductos() -> se espera []")
console.log( productManager.getProductos() );
console.log("--->\n");

productManager.addProducto( "producto prueba", "Este es un producto prueba", 200, "Sin imagen", "1", 25 );
productManager.addProducto( "producto prueba", "Este es un producto prueba", undefined, "Sin imagen", "2", 25 );
productManager.addProducto( "producto prueba", 200, "Sin imagen", "3", 25 );

// console.log("<--- Llamando a addProducto( 'producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25 )");
// productManager.addProducto( "producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25 );
// console.log("--->\n");

// console.log("<--- Llamando a getProductos() -> se espera el producto anterior con id autogenerado");
// console.log( productManager.getProductos() );
// console.log("--->\n");

// console.log("<--- Agregarndo producto repetido: addProducto( 'producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25 )");
// productManager.addProducto( "producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25 );
// console.log("--->\n");

// console.log("<--- Llamando a addProducto( 'producto prueba2', 'Este es un producto prueba2', 100, 'Sin imagen', 'abc456', 50 )");
// productManager.addProducto( "producto prueba2", "Este es un producto prueba2", 100, "Sin imagen", "abc456", 50 );
// console.log("--->\n");

// console.log("<--- Llamando a getProductById(2)) -> se espera el segundo producto");
// console.log(productManager.getProductById(2));
// console.log("--->\n");

// console.log("<--- Llamando a getProductById(354)) -> se espera error no encontrado");
// console.log(productManager.getProductById(354));
// console.log("--->\n");