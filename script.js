let mensagemResultado = [];

function exibirResultado(){
    document.getElementById('textoSaida').value = mensagemResultado.join('');
}

function criptografar(){
    let mensagemEntrada = document.getElementById('textoEntrada').value;
    let mensagemEntradaArray = Array.from(mensagemEntrada);

    mensagemResultado = [];

    for(let i = 0; i < mensagemEntradaArray.length; i++){
            let elemento = mensagemEntradaArray[i];
            
        if (elemento === 'e'){
            mensagemResultado.push("enter");
        }
        else if (elemento === 'i'){
            mensagemResultado.push("imes");
        }
        else if (elemento === 'a'){
            mensagemResultado.push("ai");
        }
        else if (elemento === 'o'){
            mensagemResultado.push("ober");
        }
        else if (elemento === 'u'){
            mensagemResultado.push("ufat");
        }
        else {
            mensagemResultado.push(elemento);
        }
    }
    exibirResultado();
}

function descriptografar(){
    let mensagemEntrada = document.getElementById('textoEntrada').value;
    let mensagemEntradaArray = Array.from(mensagemEntrada);

    mensagemResultado = [];

    let i = 0
    while (i < mensagemEntradaArray.length){
        let elemento = mensagemEntradaArray[i];

        if (elemento === 'e'){
            mensagemResultado.push('e')
            i += 5
        }
        else if (elemento === 'i'){
            mensagemResultado.push('i')
            i += 4
        }
        else if (elemento === 'a'){
            mensagemResultado.push('a')
            i += 2
        }
        else if (elemento === 'o'){
            mensagemResultado.push('o')
            i += 4
        }
        else if (elemento === 'u'){
            mensagemResultado.push('u')
            i += 4
        }
        else {
            mensagemResultado.push(elemento);
            i++;
        }
    }
    exibirResultado();
}

function colar(event){
    if (event.clipboardData && event.clipboardData.getData) {
        let textoColado = event.clipboardData.getData('text/plain');
        document.getElementById('textareaColar').value = textoColado;
    }
}

function copiar(){
    let textoCopiar = document.getElementById('textoSaida').value;

    navigator.clipboard.writeText(textoCopiar).then(() => {
        alert('Texto copiado para a área de transferência!');
    }).catch((err) => {
        console.error('Erro ao copiar para a área de transferência: ', err);
    });

    colar();
}
