var btnInicio= document.querySelector(".btn-inicio");
var titulo= document.querySelector(".title");
var contenedorTitulo= document.querySelector(".container-titulo");
var footer= document.querySelector(".footer");
var juego= document.querySelector(".juego"); 
var inicio= document.getElementById("inicio");

btnInicio.addEventListener("click", iniciarJuego);

function iniciarJuego() {
    titulo.classList.add("pag2");
    contenedorTitulo.classList.add("pag2");
    footer.classList.add("pag2footer");
    juego.classList.remove("desaparecer");
    inicio.classList.add("desaparecer");

    elegirPalabraSecreta();
}

let palabras = ["ALURA","ORACLE","ONE", "HTML","JAVASCRIPT"];
let palabraSecreta= "";

function elegirPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random()* palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}


var pantalla = document.querySelector('canvas');
var pincel= pantalla.getContext('2d');
// color transparent
pincel.fillStyle= "transparent";
pincel.fillRect(0,0,1000,700);


// var btnIniciar = document.querySelector(".btn-iniciar");
// btnIniciar.addEventListener("click", ocultarBtn);

// function ocultarBtn() {
//     btnIniciar.style.display = "none";
// }
