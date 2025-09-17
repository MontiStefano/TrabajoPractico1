
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

