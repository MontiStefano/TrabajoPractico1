
function tomarCarrito() {
    if (localStorage.getItem('carrito')) {
        return JSON.parse(localStorage.getItem('carrito'));
    } else if (sessionStorage.getItem('carrito')) {
        return JSON.parse(sessionStorageStorage.getItem('carrito'));
    } else {
        alert("Error: no se encontro ningun carrito");
    }
}





//FUNCION PARA CARGAR LOS PRODUCTOS DEL CARRITO
async function cargarCarrito() {
    try {
        console.log("Cargando Carrito");

        let carrito = tomarCarrito();

        console.log("El carrito es: " + JSON.stringify(carrito));

        const response = await fetch("http://localhost:3000/productos"); // Pedimos los productos al JSON Server
        const productos = await response.json();


        const contenedor = document.getElementById("contenedor-carrito");  // Seleccionamos el contenedor donde van a ir los productos

        // Recorremos cada producto y creamos el HTML dinámico
        carrito.productosCarrito.forEach(item => {
            const producto = productos.find(prod => prod.id === item.id_producto);

            const divProducto = document.createElement("div"); // Crea la etiqueta <a> donde va a estar el producto
            divProducto.classList.add("producto"); // Le pone la clase "producto"

            //modifica el contenido de <a>
            divProducto.innerHTML = `
                <div class="imagen">
                <img src="../assets/images/zapatillas/${producto.imagen}" alt="" style="width: 64px; height: 64px;">
                </div>
                
                <div class="texto">
                <h3 class="nombre">${producto.nombre}</h3>
                <h4 class="precio">${producto.precio}</h4>
                <p class="descripcion">${producto.descripcion}</p>
                <p class="calificacion">${producto.calificacion}</p>
                </div>  
                
                <div class="opciones">
                <h3>x${item.cantidad}</h3>
                <input type="number" value="1" class="cantidad" step="1"  max="${item.cantidad}" min="1">
                <button type="submit" class="btnEliminar" id="${producto.id}">Eliminar</button>
                </div>
            `;

            contenedor.appendChild(divProducto);
        });
        const opciones = document.querySelectorAll('.opciones');


        opciones.forEach(opcion => {
            const inputCantidad = opcion.querySelector('.cantidad');
            const btnEliminar = opcion.querySelector('.btnEliminar');

            btnEliminar.addEventListener('click', async () => {
                const cantidad = parseInt(inputCantidad.value); // tomamos la cantidad del input
                const idProducto = btnEliminar.id; // la id del producto a eliminar es la misma que el boton

                console.log(`Producto a eliminar: ${idProducto}, Cantidad: ${cantidad}`);

                
                const productoEliminar = carrito.productosCarrito.find(p => p.id_producto === idProducto);          // buscamos el producto a eliminar en el carrito
                const divProducto = btnEliminar.closest('.producto');
                

                
                if (productoEliminar.cantidad <= cantidad) {                                                                    // eliminamos o descontamos la cantidad
                    carrito.productosCarrito = carrito.productosCarrito.filter(p => p.id_producto !== String(idProducto));
                    divProducto.remove()
                } else {
                    productoEliminar.cantidad -= cantidad;
                    const etiquetaCantidad = btnEliminar.closest('.opciones').querySelector('h3');
                    etiquetaCantidad.textContent = `x${productoEliminar.cantidad}`;
                    inputCantidad.setAttribute('max', productoEliminar.cantidad);
                }

                
                
                sessionStorage.setItem("carrito", JSON.stringify(carrito));             // actualizamos el carrito en sessionStorage

                
                try {
                    const response = await fetch(`http://localhost:3000/carritos/${carrito.id}`, {              // actualizamos el carrito en el servidor
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(carrito)
                    });
                    const data = await response.json();
                    console.log("Carrito actualizado en el servidor:", data);
                } catch (error) {
                    console.error("Error al actualizar el carrito:", error);
                }

            });
        });

    } catch (err) {
        console.error("Error cargando productos:", err);
    }
}

cargarCarrito();  // Ejecutar la función 