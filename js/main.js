const productos = [

    {
        id: 1, nombre: "bolso negro de mujer", precio: 149.99, img: "imagen-cartera-1.png"
    },
    {
        id: 2, nombre: "cartera roja de mujer", precio: 199.99, img: "imagen-cartera-2.png"
    },
    {
        id: 3, nombre: "bolso beige de mujer", precio: 129.90, img: "imagen-cartera-3.png"
    },
    {
        id: 4, nombre: "cartera elegante azul", precio: 199.89, img: "imagen-cartera-4.png"
    },
    {
        id: 5, nombre: "bolso rosa", precio: 219.99, img: "imagen-cartera-5.png"
    },
];

function Producto(id, nombre, precio, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
}

console.log(productos);

const nuevoProducto = new Producto(6, "cartera verde", 109.99, "imagen-cartera-6");

console.log(nuevoProducto);

function cargarProducto(arr, valor) {
    arr.push(valor);
}
cargarProducto(productos, nuevoProducto);
console.log(productos);

function filtrarProducto(arr, filtro) {
    const filtrado = arr.filter((el) => {
        return el.nombre.includes(filtro);
    })

    return filtrado;
}

let dato = prompt("Ingresa el producto a buscar")

console.log(filtrarProducto(productos, dato));