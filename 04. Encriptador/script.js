var textInput = document.getElementById("text-input");
var btnEncriptar = document.getElementById ("encriptar");
var btnDesencriptar = document.getElementById ("desencriptar");
var textoDesencriptado = document.getElementById ("texto2");
var btnCopy = document.getElementById ("copy");

textInput.addEventListener("click", borrarTexto);

function borrarTexto(){
    textInput.value = "";
}

var textoAEncriptar = textInput.value;

btnEncriptar.addEventListener("click", encriptar);

function encriptar(textoAEncriptar){
       
    textoAEncriptar= textoAEncriptar.toLowerCase();

    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    for (var i=0; i<matrizCodigo.length; i++){

        if (textoAEncriptar.includes(matrizCodigo[i][0])){

            textoAEncriptar = textoAEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        } 
    }
    var textoEncriptado = textoAEncriptar;
    textInput.value = "";
    textoDesencriptado.value = textoEncriptado;
   // return textoEncriptado;  
    




}




// const inputTexto = document.querySelector(".text-input");
// const mensaje = document.querySelector(".texto2");
// llamo a mis text areas para ver que me dice el usuario y lo nombro como una constante
//
//en los botones cree las funcion onclick
//creo la function con el mismo nombre
// function btnEncriptar(){
    // // creo una constante
    // const textoEncriptado = encriptar(inputTexto.value)
    //esta constante va a llamar a la funcion y le va a pasar como parametro la constante inputTexto que es lo que ingresa la persona
    //Ahora necesitamos mandar eso ya encriptado a la otra cajita que se llama mensaje
    // mensaje.value = textoEncriptado;
    // document.getElementById("imagenNene").style.display = "none";
    // document.getElementById("texto1").style.display = "none";
    // document.getElementById("copy").style.display = "show";
    // document.getElementById("copy").style.display = "inherit";
    
    
//     inputTexto.value = "";

// }

// function encriptar(stringEncriptado){
    //qué va a recibir esta función?
    //el texto que el usuario me da para que yo encripte
    //en el parametro pongo stringEncriptado
    //vamos a usar una matriz (array dentro de un array)
    // let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    //en el let pogo las reglas
    // stringEncriptado = stringEncriptado.toLowerCase();
    //recibo el texto del usuario y le saco las mayúsculas
   // recorremos la frase con un for para encontrar en este caso las vocales
//     for(let i=0; i< matrizCodigo.length; i++){
//         if (stringEncriptado.includes(matrizCodigo[i][0])){
//             stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
//         }
//     }
//     return stringEncriptado;

// }
// function desencriptar(stringDesenncriptado){   
//     let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    //en el let pogo las reglas
    // stringDesenncriptado = stringDesenncriptado.toLowerCase();
    //recibo el texto del usuario y le saco las mayúsculas
   // recorremos la frase con un for para encontrar en este caso las vocales
//     for(let i=0; i< matrizCodigo.length; i++){
//         if (stringDesenncriptado.includes(matrizCodigo[i][1])){
//             stringDesenncriptado = stringDesenncriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
//         }
//     }
//     return stringDesenncriptado;

// }