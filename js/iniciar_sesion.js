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

const formularioInicio = document.getElementById("formularioInicio");

formularioInicio.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validarLogin()) {
    alert("Sesión iniciada con éxito");
  } else {
    alert("Datos erróneos");
  }
});

function validarLogin() {
  const usuario = document.getElementById("userInicio").value.trim();
  const contrasenia = document.getElementById("passInicio").value.trim();

  return usuario !== "" && contrasenia !== "";
}

//validar registro

const formularioRegistro = document.getElementById("formularioRegistro");

formularioRegistro.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validarRegistro()) {
    alert("Registrado con éxito");
  } else {
    alert("Datos erróneos");
  }
});

function validarRegistro() {
  const usuario = document.getElementById("userRegistro").value.trim();
  const email = document.getElementById("emailRegistro").value.trim();
  const contrasenia = document.getElementById("passRegistro").value.trim();
  const terminos = document.getElementById("terminos").checked;

  return usuario !== "" && email !== "" && contrasenia !== "" && terminos ;
}