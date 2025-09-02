const miFormulario = document.getElementById("formulario");

miFormulario.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("enviado");

    const bandera = validarFormulario()

    if (bandera) {
        alert("Enviado con éxito");
    } else {
        alert("Datos erróneos");
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
    const usuario = document.getElementById("user").value.trim();

    if (usuario == "") {
        return false
    }

    return true;
}

function validarContraseña() {
    const contrasenia = document.getElementById("pass").value.trim();

    if (contrasenia == "") {
        return false
    }

    return true;

}