var btnInicio= document.querySelector(".btn-inicio");
var titulo= document.querySelector(".title");
var contenedorTitulo= document.querySelector(".container-titulo");
var footer= document.querySelector(".footer");
var juego= document.querySelector(".juego"); 
var inicio= document.getElementById("inicio");
var btnNuevoJuego= document.querySelector(".nuevo_juego");

btnNuevoJuego.addEventListener("click", iniciarJuego);

btnInicio.addEventListener("click", iniciarJuego);

function iniciarJuego() {
    titulo.classList.add("pag2");
    contenedorTitulo.classList.add("pag2");
    footer.classList.add("pag2footer");
    juego.classList.remove("desaparecer");
    inicio.classList.add("desaparecer");

    elegirPalabraSecreta();
    dibujarCanvas();
    dibujarLineas();
}

let palabras = ["ALURA","ORACLE","ONE", "HTML","JAVASCRIPT"];
let palabraSecreta= "";

function elegirPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random()* palabras.length)];
    palabraSecreta = palabra;
    //console.log(palabraSecreta);
}









$(document).ready(function(){
    $(document).on('keydown', function(event){ 
        if (event.key == "Escape"){
              Swal.fire(
                {
                    title: "Querés salir del juego?",
                    icon: "question",
                    showConfirmButton: true,
                    confirmButtonText: "Usa el botón Desistir", 
                    confirmButtonColor: "grey"
                    }                
            )}            
    })
})






