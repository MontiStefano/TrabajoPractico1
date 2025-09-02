const contenedor = document.querySelector('#contenedor-productos'); // creamos la variable contenedor que selecciona el div #contenedor-productos


// recorremos todos los productos de productos.json
productos.forEach(producto => {
    const div = document.createElement('div'); // crea un div
    div.classList.add('producto'); // le agrega la clase producto

    // le agregamos el contenido al div utilizando los datos de cada producto de productos.json 
    div.innerHTML = `
        <div class="imagen">
            <img src="${producto.imagen}" alt="${producto.nombre}" style="width:64px; height:64px;"> 
        </div>
        <div class="texto">
            <h3 class="nombre">${producto.nombre}</h3>
            <h4 class="precio">$${producto.precio}</h4>
            <p class="descripcion">${producto.descripcion}</p>
        </div>
    `;
});