const productos = [
    { id: 1, nombre: "Playera Americana", precio: 350, cantidad: 10, descripcion: "Playera cómoda y casual" },
    { id: 2, nombre: "Jeans", precio: 500, cantidad: 5, descripcion: "Jeans resistentes y modernos" },
    { id: 3, nombre: "Sudadera", precio: 450, cantidad: 8, descripcion: "Sudadera cálida y elegante" }
];

const carrito = [];

function obtenerProductos() { return productos; }
function obtenerProductoPorId(id) { return productos.find(p => p.id === id); }
function agregarAlCarrito(id) { 
    const producto = productos.find(p => p.id === id); 
    if (producto && producto.cantidad > 0) { carrito.push({...producto}); producto.cantidad--; return true; } else { return false; } 
}
function obtenerCarrito() { return carrito; }

function agregarProductoAdmin(nombre, precio, cantidad, descripcion) {
    const id = productos.length + 1;
    productos.push({id, nombre, precio, cantidad, descripcion});
}
function eliminarProductoAdmin(id) {
    const index = productos.findIndex(p => p.id === id);
    if (index !== -1) productos.splice(index, 1);
}
