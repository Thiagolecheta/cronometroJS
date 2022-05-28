
    let seconds = 0;
    let minutos = 0;
    let horas = 0;
    let intervalo



function doisDigitos(digitos){
    if(digitos < 10){
        return ('0'+ digitos)
    } else {
        return(digitos)
    }
}

function iniciar() {
    relogio()
    intervalo = setInterval(relogio, 1000)
}

function parar() {
    clearInterval(intervalo)
}

function zerar() {
    clearInterval(intervalo)
    seconds = 00
    minutos = 00
    horas = 00
    document.getElementById('relogio').innerHTML = '00:00:00'
}

function relogio(){
    seconds++
    if(seconds == 60){
        minutos++
        seconds = 0   
    }
    if(minutos == 60){
        horas++
        minutos = 0
    }
    document.getElementById('relogio').innerHTML = doisDigitos(horas)+":"+doisDigitos(minutos)+":"+doisDigitos(seconds)
}