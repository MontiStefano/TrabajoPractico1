
//FUNCION PARA CARGAR LOS PRODUCTOS
async function cargarProductos() {
    try {
        console.log("función iniciada");

        const response = await fetch("http://localhost:3000/productos"); // Pedimos los productos al JSON Server

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`); // Corrobora que no haya error

        const productos = await response.json();
        console.log(productos); // Muestra el json de productos


        const contenedor = document.getElementById("contenedor-productos");  // Seleccionamos el contenedor donde van a ir los productos

        // Recorremos cada producto y creamos el HTML dinámico
        productos.forEach(prod => {
            const a = document.createElement("a"); // Crea la etiqueta <a> donde va a estar el producto
            a.classList.add("producto"); // Le pone la clase "producto"
            a.href = `pages/elemento.html?id=${prod.id}`; // le asigna el href

            //modifica el contenido de <a>
            a.innerHTML = `
                <div class="imagen">
                    <img src="assets/images/zapatillas/${prod.imagen}" alt="${prod.nombre}" class="miniatura">
                </div>
                <div class="texto">
                    <h3 class="nombre">${prod.nombre}</h3>
                    <h4 class="precio">$${prod.precio}</h4>
                    <p class="descripcion">${prod.descripcion}</p>
                    <p class="calificacion">${prod.calificacion}</p>
                </div>
            `;

            contenedor.appendChild(a);
        });

    } catch (err) {
        console.error("Error cargando productos:", err);
    }
}

cargarProductos();  // Ejecutar la función 





