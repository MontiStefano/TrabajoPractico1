
async function cargarProductoEspecifico() {
    try {
        console.log("iniciando funcion");

        const infoUrl = new URLSearchParams(window.location.search); // toma TODOS los parametros de la URL generada
        const idUrl = infoUrl.get("id"); // toma el ID de la URL

        const response = await fetch(`http://localhost:3000/productos/${idUrl}`);

        const productos = await response.json();
        console.log(productos);

        const div =  document.createElement("div");
        const divViejo = document.getElementById("contenedorProducto");
        div.innerHTML = 
        `<div class="completo">
            <div class="contenedor_imagen">
                <img src="../assets/images/${productos.imagen1}" alt="Auriculares" class="imagenPrincipal" id="imagen">
            </div>

            <div class="contenedor_texto">
                <div>
                    <h2 class="titulo_producto">${productos.nombre}</h2>
                </div>
                <div class="contenedor_precio">
                    <p class="precio">$${productos.precio}</p>
                </div>
                <div class="contenedor_envio">
                    <p class="envio">Envio Gratis. <br> Llega en 8 dias.</p>
                </div>
                <div class="contenedor_botones">
                    <button class="boton_comprar">Comprar Ahora</button>
                    <button class="boton_carrito">Agregar al Carrito</button>
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
                    <h3 class="calificacion">${productos.calificacion}</h3>
                </div>
                <div>

                    <h3 class="descripcion">Descripción del producto:</h3> 
                    <p class="descripcion_parrafo">${productos.descripcionDetallada}</p>
                </div>
            </div>
        </div>`;

        divViejo.appendChild(div);


    } catch (err) {
        console.error("Error al cargar los productos: ", err);
    }
}

document.addEventListener("DOMContentLoaded", cargarProductoEspecifico);