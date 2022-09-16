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
    console.log(palabraSecreta);
}


var pantalla = document.querySelector('canvas');
var pincel= pantalla.getContext('2d');
// color transparent
// pincel.fillStyle= "white";


function dibujarCanvas(){
    pincel.lineWidth = 8;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "#F3F5F6";
    pincel.strokeStyle = "#8A3871";

    pincel.fillRect(0,0,1200,700);
    pincel.beginPath();
    pincel.moveTo(100,500);
    pincel.lineTo(350,500);
    // termina la base
    pincel.moveTo(150,500);
    pincel.lineTo(150,150);
    // termina la linea mayor
    pincel.moveTo(150,150);
    pincel.lineTo(300,150);
    // termina la linea superior horizontal
    pincel.moveTo(300,150);
    pincel.lineTo(300,200);
    //termina la linea más chiquita    
    pincel.moveTo(300,235);   
    pincel.arc( 300, 235, 35,0 , 6.26573);
    //termina la cabeza
    pincel.moveTo(300,270);
    pincel.lineTo(300,370);
    //termina el cuerpo    
    pincel.moveTo(300,370);
    pincel.lineTo(350,420);
    //termina pierna derecha
    pincel.moveTo(300,370)
    pincel.lineTo(250,420);
    //termina puerna izquierda
    pincel.moveTo(300,280);
    pincel.lineTo(350,330);
    //termino el brazo derecho
    pincel.moveTo(300,280);
    pincel.lineTo(250,330);
    //termino el brazo izquierdogit stat   
    //pincel.fill();
    //pincel.stroke();

    pincel.closePath();	

}

function dibujarLineas(){

    pincel.lineWidth = 6;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "#F3F5F6";
    pincel.strokeStyle = "#8A3871";

    let anchura = 600/palabraSecreta.length;
    for (let i=0;i< palabraSecreta.length;i++){
        pincel.moveTo(500 + (anchura*i), 500);
        pincel.lineTo(550 + (anchura*i), 500);
    }
    pincel.stroke();
    pincel.closePath();
}



