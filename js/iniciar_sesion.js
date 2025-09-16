const btnIniciar = document.querySelector('.btn_iniciar');
const btnRegistro = document.querySelector('.btn_registro');
const contenedor = document.querySelector('.contenedor');

const formularioInicio = document.getElementById("formularioInicio");

const formularioRegistro = document.getElementById("formularioRegistro");

btnRegistro.addEventListener('click', () => {
  contenedor.classList.add('activo');
});

btnIniciar.addEventListener('click', () => {
  contenedor.classList.remove('activo');
});



// ******************** FUNCIONES INICIO DE SESION ********************

// funcion para validar el login (solo verifica que el formulario no este incompleto)
function validarLogin(usuario, contra, usuarios) {
  if(usuario === "" || contra === ""){
    alert("Por favor, complete el formulario");
    return false;
  }else if (!(usuarios.length > 0 && usuarios[0].contra === contra)){
    alert("Usuario o contraseña incorrectos")
    return false;
  }else{
    return true;
  }
}




// ******************** EVENT LISTENER INICIO DE SESION ********************

formularioInicio.addEventListener("submit", async function (e) {
  e.preventDefault();     // evita que recargue la pagina

  const usuario = document.getElementById("userInicio").value.trim();
  const contra = document.getElementById("passInicio").value.trim();
  const recordar = document.getElementById("guardarSesion");

  const response = await fetch(`http://localhost:3000/usuarios?usuario=${usuario}`);     // fetch a usuarios donde el usuario es el mismo que se ingreso
  const usuarios = await response.json();                                               // lo almacena en usuarios

  

  if(validarLogin(usuario, contra, usuarios)){     // si hay un usuario y la contraseña ingresada coincide
    const usuarioValido = usuarios[0];
    console.log(usuarioValido);

    if(recordar.checked){                                                                            // si "recuerdame" esta marcado:
      localStorage.setItem("usuarioLog", JSON.stringify(usuarioValido));                                                  // guarda el usuario logeado en el LOCAL storage
      console.log(localStorage.getItem("usuarioLog") + "Guardado en local storage")                // muestra en consola
    }
    else{                                                                                               // sino:
      sessionStorage.setItem("usuarioLog", JSON.stringify(usuarioValido));                                                   // guarda el usuario logeado en SESION storage
      console.log(sessionStorage.getItem("usuarioLog") + " guardado en sesion storage")               // muestra en consola
    }

    alert("Usuario logeado con exito")                                         // muestra un mensaje
    window.location.href = `../index.html?user=${usuario}`;                   // vuelve al inicio
  }
  
});






// ******************** FUNCIONES REGISTRO ********************


// funcion para validar si el registro es valido (en este caso solo verifica que no este incompleto)
function validarRegistro(usuario, email, contra) {
  const terminos = document.getElementById("terminos");       // toma el valor de terminos

  if (usuario === "" || email == "" || contra == "") {      // si usuario o email o contra esta vacio
    alert("Por favor, complete el formulario");
    return false;                                           //muestra una alerta y devuelve falso
  } 
  else if (!terminos.checked){                            // sino si terminos no esta marcado
    alert("Debes aceptar los terminos y condiciones para continuar");
    return false;                                         // muestra una alerta y devuelve falso 
  }
  else{                                                // si esta todo ok devuelve true
    return true;
  }
}

// devuelve false si ya hay un usuario y true si esta disponible
async function usuarioExistente(usuario){
  const response = await fetch(`http://localhost:3000/usuarios?usuario=${usuario}`);    // fetch a usuarios con el usuario igual al usuario ingresado
  const usuarios = await response.json();                                              // los almacena en usuarios
  
  if (usuarios.length > 0) {                               // si hay alguno:
    alert("El usuario ya está registrado");               // muestra el mensaje
    return false;                                        // y devuelve falso
  } 
  else {                                               // sino:
    return true;                                      //  devuelve true
  }
}

// devuelve false si el email ya esta en uso y true si esta disponible 
async function emailExistente(email){
  const response = await fetch(`http://localhost:3000/usuarios?email=${email}`);      // fetch a usuarios con el usuario igual al usuario ingresado
  const emails = await response.json();                                              // los almacena en usuarios
  
  if (emails.length > 0) {                                 // si hay alguno:
    alert("Ya hay un usuario con el mismo email");        // muestra el mensaje
    return false;                                        // y devuelve falso
  } 
  else {                                              // sino:
    return true;                                     //  devuelve true
  }
}





// ******************** EVENT LISTENER REGISTRO ********************

formularioRegistro.addEventListener("submit", async function (e) {
  e.preventDefault();     // evita que recargue la pagina

  const usuario = document.getElementById("userRegistro").value.trim();
  const email = document.getElementById("emailRegistro").value.trim();
  const contra = document.getElementById("passRegistro").value.trim();

  if (validarRegistro(usuario, email, contra) && await usuarioExistente(usuario) && await emailExistente(email)) {    // si el formulario es valido y si no hay un usuario ya existente  

    const resUsuario = await fetch("http://localhost:3000/usuarios", {       // fetch a usuarios
      method: "POST",                                                       // metodo POST para enviar el formulario a la db.json
      headers: { "Content-Type": "application/json" },                     // indica que es formato JSON
      body: JSON.stringify({ usuario, email, contra })                    // contenido del JSON 
    })
    
    const usuarioCreado = await resUsuario.json();
    console.log("Usuario registrado:", usuarioCreado);  // muestra en la consola la informacion del usuario registrado



    const resCarrito = await fetch("http://localhost:3000/carritos", {     // fetch a carritos
      method: "POST",                                                     // metodo POST para crear el carrito en la db.json
      headers: { "Content-Type": "application/json" },                   // indica que es formato JSON
      body: JSON.stringify({                              // contenido del JSON ()
        productosCarrito: [],                            // crea el arreglo de productosCarrito (con id_producto y cantidad vacio)
        id_usuario: usuarioCreado.id })                 // crea el id_usuario con la id del usuario registrado
    })
    
    const carritoCreado = await resCarrito.json();        //guarda el carrito creado
    console.log("Carrito generado:", carritoCreado);     //lo muestra en la consola
    
    alert("Registrado con exito!");                       // muestra un mensaje al usuario
    contenedor.classList.remove("activo");               // vuelve a la parte de incio de sesion
    
  }
});






































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


