
function cargarUsuario(){
    if(localStorage.getItem("usuarioLog")){
        const usuario = JSON.parse(localStorage.getItem("usuarioLog"));
        document.getElementById("usuario").textContent = usuario.usuario
        console.log("el usuario es:" + usuario.usuario)
        document.getElementById("boton_cerrar").style.display = "block"
    }
}

cargarUsuario();


boton_cerrar.addEventListener("click", () => {
    localStorage.removeItem("usuarioLog");
    sessionStorage.removeItem("usuarioLog");
    location.reload();
})
//modo oscuro/claro
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

function tomarCarrito(){
    if(localStorage.getItem('carrito')){
        return JSON.parse(localStorage.getItem('carrito'));
    }else if (sessionStorage.getItem('carrito')){
        return JSON.parse(sessionStorageStorage.getItem('carrito'));
    }else{
        alert("Error: no se encontro ningun carrito");
    }
}


let carrito = tomarCarrito();

