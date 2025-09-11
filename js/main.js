
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
            console.log(`esta es la url ${a.href}`);

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

document.addEventListener("DOMContentLoaded", cargarProductos);  // Ejecutar la función pero cuando la página cargue (por las dudas)}


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


