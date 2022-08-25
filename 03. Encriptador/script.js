const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const TextoEncriptado = encriptar(inputTexto.value)//toma lo que escriben por input
    mensaje.value = TextoEncriptado;
    mensaje.style.backgroundImage = "none";//para que se saque la imagen


}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada=stringEncriptada.toLowerCase();

  for(let i=0; i<matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada= stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
    }
  }
  return stringEncriptada;
}
