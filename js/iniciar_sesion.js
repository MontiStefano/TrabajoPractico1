const btnIniciar = document.querySelector('.btn_iniciar');
const btnRegistro = document.querySelector('.btn_registro');
const contenedor = document.querySelector('.contenedor');

btnRegistro.addEventListener('click', () => {
  contenedor.classList.add('activo');
});

btnIniciar.addEventListener('click', () => {
  contenedor.classList.remove('activo');
});

// inicio sesion

const formularioInicio = document.getElementById("formularioInicio");

formularioInicio.addEventListener("submit", async function (e) {
  e.preventDefault();

  const usuario = document.getElementById("userInicio").value.trim();
  const contra = document.getElementById("passInicio").value.trim();

  const response = await fetch(`http://localhost:3000/usuarios?usuario=${usuario}`);
  const usuarios = await response.json();


    if(usuarios.length > 0 && usuarios[0].contra === contra){     // si hay un usuario y la contraseña ingresada coincide
      alert("Usuario logeado con exito")
      window.location.href = `../index.html`;
    }else{
      alert("Usuario o contraseña incorrectos")
    }
  });


function validarLogin(usuario, contra) {
  if(usuario === "" || contra === ""){
    alert("Por favor, complete el formulario");
    return false;
  }else {
    return true;
  }
}


// registro

const formularioRegistro = document.getElementById("formularioRegistro");

formularioRegistro.addEventListener("submit", async function (e) {
  e.preventDefault();

  const usuario = document.getElementById("userRegistro").value.trim();
  const email = document.getElementById("emailRegistro").value.trim();
  const contra = document.getElementById("passRegistro").value.trim();

  if (validarRegistro(usuario, email, contra) && await usuarioExistente(usuario)) {    // si el formulario es valido y si no hay un usuario ya existente  

    fetch("http://localhost:3000/usuarios", {                   // fetch a usuarios
      method: "POST",                                           // metodo POST para enviar el formulario a la db.json
      headers: { "Content-Type": "application/json" },          // indica que es formato JSON
      body: JSON.stringify({ usuario, email, contra })         // contenido del JSON
    })
    .then(res => res.json())
    .then(data => {
      console.log("Usuario registrado:", data);           // muestra en la consola la informacion del usuario registrado
      alert("Registrado con exito!");                     // muestra un mensaje al usuario
      contenedor.classList.remove('activo');              // vuelve a la parte de incio de sesion
    })
    .catch(err => console.error(err));
    
  }
});

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
  const response = await fetch(`http://localhost:3000/usuarios?usuario=${usuario}`);
  const usuarios = await response.json();
  
  if (usuarios.length > 0) {
    // Ya existe un usuario con ese email
    alert("El usuario ya está registrado");
    return false;
  } else {
    return true;
  }
}