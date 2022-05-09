
var letras_minusculas=['a','b','c','d','e','f','g','h','y','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z', ' '];

function validar(texto){

    var arrTexto = texto.split('');
    var con = 0;
    for(let i=0; i<arrTexto.length; i++){
        for(let e=0; e<letras_minusculas.length;e++){
            if(arrTexto[i] == letras_minusculas[e]){
                con++;
                break;
            }

        }

        if(con == 0){
            alert("El texto ingresado debe contiener letras minúsculas y sin acentos.");
            location.reload();
            return false;   
        }

        con = 0;

    }

    return true;

}