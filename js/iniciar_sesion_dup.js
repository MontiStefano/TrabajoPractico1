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


