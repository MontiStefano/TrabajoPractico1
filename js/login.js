

const miFormulario = document.getElementById("login");


miFormulario.addEventListener("submit", function(e){

    e.preventDefault(); //para que el boton no recargue la pagina
    console.log("Boton pulsado");

    if (formularioValido){
        alert("Enviado");
    }else{
        alert("Datos invalidos")
    }
})

    formularioValido(){
        
    }

