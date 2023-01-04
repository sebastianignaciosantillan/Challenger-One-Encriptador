const inputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#resultado");
const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");
function encriptar (){
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = 
                            mensaje.replace(/e/g,"enter").replace(/i/g,"imes").replace(/o/g,"ober").replace(/a/g,"ai").replace(/u/g,"ufat");
    inputResultado.value = mensajeEncriptado;
}
function desencriptar (){
    var  mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ai/g,"a").replace(/ufat/g,"u");
    inputResultado.value = mensaje;
}
function copiar(){
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado); 
    inputMensaje.value = "";
    inputMensaje.focus();

}
btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;
