function mostrarProductos(listaProductos, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = "";
    listaProductos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <p>Cantidad: ${producto.cantidad}</p>
            <button onclick="agregarProducto(${producto.id})">Agregar al carrito</button>
            <button onclick="verDetalle(${producto.id})">Ver detalle</button>
        `;
        contenedor.appendChild(div);
    });
}

function mostrarCarrito(listaCarrito, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = "";
    listaCarrito.forEach((producto) => {
        const div = document.createElement("div");
        div.classList.add("producto-carrito");
        div.innerHTML = `<h4>${producto.nombre}</h4><p>Precio: $${producto.precio}</p>`;
        contenedor.appendChild(div);
    });
}

function mostrarDetalle(producto, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = `
        <h2>${producto.nombre}</h2>
        <p>Precio: $${producto.precio}</p>
        <p>Cantidad: ${producto.cantidad}</p>
        <p>Descripción: ${producto.descripcion}</p>
        <button onclick="agregarProducto(${producto.id})">Agregar al carrito</button>
    `;
}
