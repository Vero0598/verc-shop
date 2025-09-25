function iniciar(contenedorProductos) {
    mostrarProductos(obtenerProductos(), contenedorProductos);
}
function agregarProducto(id) {
    const exito = agregarAlCarrito(id);
    if (exito) { alert("Producto agregado al carrito"); iniciar("productos"); } 
    else { alert("Producto agotado"); }
}
function mostrarCarritoVista(contenedorCarrito) { mostrarCarrito(obtenerCarrito(), contenedorCarrito); }
function verDetalle(id) { const producto = obtenerProductoPorId(id); if (producto) mostrarDetalle(producto, "detalleProducto"); }
