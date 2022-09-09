var botonEncriptar= document.getElementById("encriptar");
var botonDesencriptar= document.getElementById("desencriptar");

var munieco= document.getElementById("imagenNene");
var h2= document.getElementById("texto1");
var h3= document.getElementById("texto2");

var resultado= document.querySelector(".texto-resultado");






botonEncriptar.addEventListener("click", encriptar);




function encriptar() {
    ocultarElementos();
    recuperarTexto();
}


function recuperarTexto(){
    var textarea= document.getElementById("text-input");
    return text_input.value;
}

function ocultarElementos(){
    munieco.style.visibility= "hidden";
    h2.style.visibility= "hidden";
    h3.style.visibility= "hidden";
}



