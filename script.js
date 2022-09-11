let display = document.getElementById('display')
let historico = document.getAnimations('display-historico')
//let numero = document.querySelectorAll('.btn-numero').value


function exibirNumero(value) {
    let numero = Number(value)
    display.textContent += numero
    console.log(`Numero = ${numero}`)
    console.log(`typeof de numero = ${typeof(numero)}`)
    return numero
}

function operacao(value) {
    let operador = value
    display.textContent = operador
    console.log(`Operador = ${operador}`)
    console.log(`typeof de Operador = ${typeof(operador)}`)
    return operador

}

function calcular() {
    

}

function limpar() {
    display.textContent = ""
    historico.textContent = ""
}


