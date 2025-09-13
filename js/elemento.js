
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
                <img src="../assets/images/zapatillas/${productos.imagen}" alt="Auriculares" class="imagenPrincipal" id="imagen">
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
                    <button class="botonElemento" id="boton_comprar">Comprar Ahora</button>
                    <button class="botonElemento" id="boton_carrito">Agregar al Carrito</button>
                    <input type="number" name="" class="cantidad" step="1">
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
                    <p class="descripcion_parrafo">${productos.descripcionDetallada}</p> <br>
                    <h3 class="descripcion">Características:</h3>
                    <p class="descripcion_parrafo">
                        •Talle: ${productos.talle} <br> 
                        •Color: ${productos.color} <br>
                        •Peso: ${productos.peso} <br>
                        •Marca: ${productos.marca} <br>
                        •Tipo: ${productos.tipo} 

                    </p>
                </div>
            </div>
        </div>`;

        divViejo.appendChild(div);


    } catch (err) {
        console.error("Error al cargar los productos: ", err);
    }
}

document.addEventListener("DOMContentLoaded", cargarProductoEspecifico);


const btnComprar = document.getElementById('boton_comprar');
const btnCarrito = document.getElementById('boton_carrito');
const cantidad = document.querySelector('.cantidad');



/*
btnCarrito.addEventListener('click', () => {
    
    const carrito_guardado = localStorage.getItem("carrito");

    const infoUrl = new URLSearchParams(window.location.search); // toma TODOS los parametros de la URL generada
    const id_producto = infoUrl.get("id");
    const cantidad = document.querySelector('cantidad').value;

    

    if(carrito_guardado === ""){
        fetch("http://localhost:3000/usuarios", {                   // fetch a usuarios
      method: "POST",                                           // metodo POST para enviar el formulario a la db.json
      headers: { "Content-Type": "application/json" },          // indica que es formato JSON
      body: JSON.stringify({ id_producto, cantidad })         // contenido del JSON
    })
    .then(res => res.json())
    .then(data => {
      console.log("Carrito cargado", data);           // muestra en la consola la informacion del usuario registrado
      alert("Registrado con exito!");                     // muestra un mensaje al usuario
      contenedor.classList.remove('activo');              // vuelve a la parte de incio de sesion
    })
    }else{
        localStorage.setItem("carrito", "ocupado");




        fetch("http://localhost:3000/usuarios/1")
        .then(res => res.json())
        .then(usuario => {
            const nuevosHobbies = [];

            return fetch("http://localhost:3000/usuarios/1", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ hobbies: nuevosHobbies })
            });
        })
        .then(res => res.json())
        .then(data => console.log("Actualizado:", data));
    }


});

*/

// boton modo claro/oscuro

const boton_modo = document.getElementById("boton_modo");
const body = document.body;

const modo_guardado = localStorage.getItem("modo"); //revisa que modo hay guardado

if (modo_guardado === "oscuro") {
  body.classList.add("oscuro");
  boton_modo.textContent = "☀️";
} else {
  boton_modo.textContent = "🌙";
}

boton_modo.addEventListener("click", () => {
    body.classList.toggle("oscuro");

    if (body.classList.contains("oscuro")) {
        boton_modo.textContent = "☀️";
        localStorage.setItem("modo", "oscuro");
    } else {
        boton_modo.textContent = "🌙"
        localStorage.setItem("modo", "claro");
    }
});
