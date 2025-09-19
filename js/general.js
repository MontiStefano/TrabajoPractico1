// toma el usuario dependiendo si esta guardado en local o session storage
function tomarUsuario(){
    if(localStorage.getItem("usuarioLog")){
        return JSON.parse(localStorage.getItem("usuarioLog"));
    }else if (sessionStorage.getItem("usuarioLog")){
        return JSON.parse(sessionStorage.getItem("usuarioLog"));
    }
}

// carga el usuario (solo muestra el nombre de usuario en la pagina)
function cargarUsuario(){
    
    const usuario = tomarUsuario();

    if(usuario){
        document.getElementById("usuario").textContent = usuario.usuario
        console.log("el usuario es: " + JSON.stringify(usuario))
        document.getElementById("boton_cerrar").style.display = "block"
    }
    
}

// llamamos la funcion
cargarUsuario();

const boton_cerrar = document.getElementById("boton_cerrar");

// boton cerrar sesion
boton_cerrar.addEventListener("click", () => {
    localStorage.clear();
    sessionStorage.clear();
    location.reload();
})




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

