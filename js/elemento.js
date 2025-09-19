
async function cargarProductoEspecifico() {
    try {
        console.log("iniciando funcion");

        const infoUrl = new URLSearchParams(window.location.search); // toma TODOS los parametros de la URL generada
        const idUrl = infoUrl.get("id"); // toma el ID de la URL

        const response = await fetch(`http://localhost:3000/productos/${idUrl}`);       // fetch GET a productos solamente con el producto de ID = idUrl
        const productoEsp = await response.json();                                        // guarda el objeto en productoEsp     

        console.log(productoEsp);

        const div = document.createElement("div");
        const divViejo = document.getElementById("contenedorProducto");
        div.innerHTML =
            `<div class="completo">
            <div class="contenedor_imagen">
                <img src="../assets/images/zapatillas/${productoEsp.imagen}" alt="Auriculares" class="imagenPrincipal" id="imagen">
            </div>

            <div class="contenedor_texto">
                <div>
                    <h2 class="titulo_producto">${productoEsp.nombre}</h2>
                </div>
                <div class="contenedor_precio">
                    <p class="precio">$${productoEsp.precio}</p>
                </div>
                <div class="contenedor_envio">
                    <p class="envio">Envio Gratis. <br> Llega en 8 dias.</p>
                </div>
                <div class="contenedor_botones">
                    <button class="botonElemento" id="boton_comprar">Comprar Ahora</button>
                    <button class="botonElemento" id="boton_carrito">Agregar al Carrito</button>
                    <input type="number" value="1" class="cantidad" step="1" max="25" min="1">
                </div>
                <div class="contenedor_medios">
                    <h3>Medios de Pago:</h3>
                    <img src="../assets/images/mercado pago.svg" alt="Mercado Pago">
                    <p>Crédito/Débito:</p>
                    <img src="../assets/images/mastercard.svg" alt="MasterCard"> 
                    <img src="../assets/images/visa .svg" alt="Visa">
                    <p>Efectivo:</p>
                    <img src="../assets/images/pago facil.svg" alt="Pago Fácil">
                    <img src="../assets/images/rapipago.svg" alt="Rapipago">

                </div>
                <div class="contenedor_estrellas">
                    <h3 class="calificacion">${productoEsp.calificacion}</h3>
                </div>
                <div>

                    <h3 class="descripcion">Descripción del producto:</h3> 
                    <p class="descripcion_parrafo">${productoEsp.descripcionDetallada}</p> <br>
                    <h3 class="descripcion">Características:</h3>
                    <p class="descripcion_parrafo">
                        •Talle: ${productoEsp.talle} <br> 
                        •Color: ${productoEsp.color} <br>
                        •Peso: ${productoEsp.peso} <br>
                        •Marca: ${productoEsp.marca} <br>
                        •Tipo: ${productoEsp.tipo} 

                    </p>
                </div>
            </div>
        </div>`;

        divViejo.appendChild(div);


        const btnComprar = document.getElementById('boton_comprar');
        const btnCarrito = document.getElementById('boton_carrito');


        btnCarrito.addEventListener('click', async function () {
            const cantidad = parseInt(document.querySelector('.cantidad').value);

            const carrito = tomarCarrito();
            console.log("Carrito antiguo:" + JSON.stringify(carrito))


            const productoExistente = carrito.productosCarrito.find(item => item.id_producto === idUrl)

            if (productoExistente) {
                productoExistente.cantidad += cantidad
            } else {
                carrito.productosCarrito.push({ 'id_producto': idUrl, 'cantidad': cantidad });
            }

            localStorage.setItem("carrito", JSON.stringify(carrito));

            await fetch(`http://localhost:3000/carritos/${carrito.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(carrito)
            })
            console.log("Carrito actualizado en el servidor: " + JSON.stringify(carrito))
            window.location.href = `../index.html`;
        });

        btnComprar.addEventListener('click', async function () {
            const cantidad = parseInt(document.querySelector('.cantidad').value);

            const carrito = tomarCarrito();
            console.log("Carrito antiguo:" + JSON.stringify(carrito))


            const productoExistente = carrito.productosCarrito.find(item => item.id_producto === idUrl)

            if (productoExistente) {
                productoExistente.cantidad += cantidad
            } else {
                carrito.productosCarrito.push({ 'id_producto': idUrl, 'cantidad': cantidad });
            }

            localStorage.setItem("carrito", JSON.stringify(carrito));

            await fetch(`http://localhost:3000/carritos/${carrito.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(carrito)
            })
            console.log("Carrito actualizado en el servidor: " + JSON.stringify(carrito))
            window.location.href = `carrito.html`;
        });


    } catch (err) {
        console.error("Error al cargar los productos: ", err);
    }
}

cargarProductoEspecifico();


function tomarCarrito() {
    if (localStorage.getItem('carrito')) {
        return JSON.parse(localStorage.getItem('carrito'));
    } else if (sessionStorage.getItem('carrito')) {
        return JSON.parse(sessionStorageStorage.getItem('carrito'));
    } else {
        alert("Error: no se encontro ningun carrito");
    }
}


