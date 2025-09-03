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

    const bandera = validarFormulario()

    if (bandera) {
        alert("Enviado con éxito");
    } else {
        alert("Datos erróneos");
    }

});

function validarFormulario() {
    const usuario = validarUsuario()
    const mail = validarEmail()
    const contrasenia = validarContraseña()


    if (usuario && contrasenia && mail) {
        return true;
    } else {
        return false;
    }
}

function validarUsuario() {
    const usuario = document.getElementById("userRegistro").value.trim();

    if (usuario == "") {
        return false
    }

    return true;
}

function validarEmail() {
    const usuario = document.getElementById("emailRegistro").value.trim();

    if (usuario == "") {
        return false
    }

    return true;
}

function validarContraseña() {
    const contrasenia = document.getElementById("passRegistro").value.trim();

    if (contrasenia == "") {
        return false
    }

    return true;

}
