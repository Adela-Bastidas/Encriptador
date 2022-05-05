function copiar(texto){

    let areaTexto = document.createElement('textarea');
    areaTexto.value = texto;
    areaTexto.setAttribute('readonly', '');
    areaTexto.style.position = 'absolute';
    areaTexto.style.left = '-9999px';

    document.body.appendChild(areaTexto);

    let seleccionado = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;

    areaTexto.select();

    document.execCommand('copy');

    document.body.removeChild(areaTexto);

    if(seleccionado){
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(seleccionado);
    }

}

window.onload = function(){
    document.getElementById('btn-copiar').addEventListener('click', () => {
        let contenido = document.getElementById('mensaje-encriptado').value;
    
        copiar(contenido);
    });

}