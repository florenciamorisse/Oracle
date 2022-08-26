const inputTexto = document.querySelector(".text-input");
const mensaje = document.querySelector(".texto2");
// llamo a mis text areas para ver que me dice el usuario y lo nombro como una constante
//
//en los botones cree las funcion onclick
//creo la function con el mismo nombre
function btnEncriptar(){
    // creo una constante
    const textoEncriptado = encriptar(inputTexto.value)
    //esta constante va a llamar a la funcion y le va a pasar como parametro la constante inputTexto que es lo que ingresa la persona
    //Ahora necesitamos mandar eso ya encriptado a la otra cajita que se llama mensaje
    mensaje.value = textoEncriptado;
    img.getElementsByID.imagenNene ="none";
    inputTexto.value = "";

}

function encriptar(stringEncriptado){
    //qué va a recibir esta función?
    //el texto que el usuario me da para que yo encripte
    //en el parametro pongo stringEncriptado
    //vamos a usar una matriz (array dentro de un array)
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    //en el let pogo las reglas
    stringEncriptado = stringEncriptado.toLowerCase();
    //recibo el texto del usuario y le saco las mayúsculas
   // recorremos la frase con un for para encontrar en este caso las vocales
    for(let i=0; i< matrizCodigo.length; i++){
        if (stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado;

}