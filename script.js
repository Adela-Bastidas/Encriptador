
let botonEncriptar = document.querySelector(".btn-encriptar");

const mensajeIngresado = document.querySelector(".mensaje-ingresado");
const mensaje = document.querySelector("#mensaje-encriptado");


function btnencriptar(){
    const textoEncriptado = encriptar(mensajeIngresado.value);
    mensaje.value = textoEncriptado;
    mensajeIngresado.value=""; 
    document.getElementById("legend").style.display = "none";
    document.getElementById("btn-copiar").style.visibility = "visible";  
}

function encriptar(textoEncriptar){
    var textovalido = validar(mensajeIngresado.value);
    if(textovalido){
        let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
        textoEncriptar = textoEncriptar.toLowerCase();

        for(let i=0; i < matrizCodigo.length; i++){
            if(textoEncriptar.includes(matrizCodigo[i][0])){
                textoEncriptar = textoEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }
        return textoEncriptar;
    }
    return null;
}

function btndsencriptar(){
    const textoDesencriptado = desencriptar(mensajeIngresado.value);
    mensaje.value = textoDesencriptado;
    mensajeIngresado.value="";
    document.getElementById("legend").style.display = "none";
    document.getElementById("btn-copiar").style.visibility = "visible";  
    
}

function desencriptar(textoDesencriptado){ 
    var textovalidodes= validar(mensajeIngresado.value);
    if(textovalidodes){
        let matrizCodigo = [["enter", "e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
        textoDesencriptado = textoDesencriptado.toLowerCase();
    
        for(let i=0; i < matrizCodigo.length; i++){
            if(textoDesencriptado.includes(matrizCodigo[i][0])){
                textoDesencriptado = textoDesencriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }
        return textoDesencriptado;
    } 
        return null;
}





