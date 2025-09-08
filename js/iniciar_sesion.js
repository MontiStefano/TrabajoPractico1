const btnIniciar = document.querySelector('.btn_iniciar');
const btnRegistro = document.querySelector('.btn_registro');

const contenedor = document.querySelector('.contenedor');

btnRegistro.addEventListener('click', () => {
    contenedor.classList.add('activo');
});

btnIniciar.addEventListener('click', () => {
    contenedor.classList.remove('activo');
});

//validar inicio sesion
const miFormulario = document.getElementById("formularioInicio");

miFormulario.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("enviado");

    const bandera = validarFormulario()

    if (bandera) {
        alert("Usuario logeado correctamente");
    } else {
        alert("Datos incorrectos");
    }

});

function validarFormulario() {
    const usuario = validarUsuario()
    const contrasenia = validarContraseña()

    if (usuario && contrasenia) {
        return true;
    } else {
        return false;
    }
}

function validarUsuario() {
    const usuario = document.getElementById("userInicio").value.trim();

    if (usuario == "") {
        return false
    }

    return true;
}

function validarContraseña() {
    const contrasenia = document.getElementById("passInicio").value.trim();

    if (contrasenia == "") {
        return false
    }

    return true;

}

//registro
const miFormularioRegistro = document.getElementById("formularioRegistro");

miFormularioRegistro.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("enviado");

    const usuario = document.getElementById("userRegistro").value.trim();
    const email = document.getElementById("emailRegistro").value.trim();
    const contra = document.getElementById("passRegistro").value.trim();


    if (validarRegistro(usuario, email, contra)) {
    // si el registro es valido, realiza el fetch
    fetch("http://localhost:3000/usuarios", {
      method: "POST",                                           // metodo POST para enviar el formulario a la db.json
      headers: { "Content-Type": "application/json" },          // indica que es formato JSON
      body: JSON.stringify({ usuario, email, contra })         // contenido del JSON
    })
    .then(res => res.json())
    .then(data => {
      console.log("Usuario registrado:", data);
      alert("Registro exitoso!");
    })
    .catch(err => console.error(err));
  }
});

function validarRegistro(usuario, email, contra){
    if(usuario === "" || email == "" || contra == ""){
        alert("Por favor, complete el formulario");
        return false;
    }else{
        return true;
    }
}


