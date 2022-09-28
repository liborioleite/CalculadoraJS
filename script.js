let button = document.querySelectorAll('.button');
let operation = document.querySelectorAll('.operation');
let display = document.getElementById('display');
let historic = document.getElementById('historic');
let clear_button = document.getElementById('clear');

//A
let factor1 = "";
//B
let factor2 = "";
//OPERAÇÃO
let operacao = "";
//SELETOR
let selector = 'first'

function writeDisplay(value) {

    //Se a variavel SELECTOR tenha o valor igual FIRST, nossa váriavel FACTOR1 vai receber ele mesmo
    // + VALUE (este value está vindo como parametro da função onclick).

    //Senão a atribuição de valores vai acontecer na variável FACTOR2
    if (selector == 'first') {
        factor1 += value;
        console.log(`Value - ${value}`)
        console.log(`Factor1 - ${factor1}`)
    } else {
        factor2 += value;
        console.log(`Value - ${value}`)
        console.log(`Factor2 - ${factor2}`)
    }

    //Declaramos uma variavel TMP_DISPLAY  passando uma string vazia
    let tmp_display = ''
    //Atribuimos a variavel TMP_DISPLAY o valor dela mesma + o valor da variavel FACTOR1
    tmp_display += factor1;

    //Se o valor da variavel OPERACAO for IGUAL a 'SUM', a variavel TMP_DISPLAY vai receber o valor já contido nela
    //mais o valor '+'
    if (operacao == 'sum') {
        tmp_display += '+'
    }

    if (operacao == 'sub') {
        tmp_display += '-'
    }

    if (operacao == 'mult') {
        tmp_display += '*'
    }

    if (operacao == 'div') {
        tmp_display += '/'
    }
    //A variavel TMP_DISPLAY vai receber o valor dela mesma mais o valor em FACTOR2
    tmp_display += factor2;

    display.innerHTML = tmp_display;
    historic.innerHTML = tmp_display

}

function handleOperation(operation) {
    //Atribuimos o valor de OPERATION
    if (operacao != "") {
        equals();
    }
    operacao = operation;
    console.log(`Operation - ${operation}`)
    console.log(`Operacao - ${operacao}`)
    selector = 'second'

    let tmp_display = ''
    tmp_display += factor1;

    if (operacao == 'sum') {
        tmp_display += '+'
        return tmp_display;
    }

    if (operacao == 'sub') {
        tmp_display += '-'
        return tmp_display;
    }

    if (operacao == 'mult') {
        tmp_display += '*'
        return tmp_display;
    }

    if (operacao == 'div') {
        tmp_display += '/'
        return tmp_display;
    }

    display.innerHTML += tmp_display;
    historic.innerHTML += tmp_display
}

function equals() {
    let result = 0
    if (operacao == 'sum') {
        result = Number(factor1) + Number(factor2);
    }

    if (operacao == 'sub') {
        result = Number(factor1) - Number(factor2);
    }

    if (operacao == 'mult') {
        result = Number(factor1) * Number(factor2);
    }

    if (operacao == 'div') {
        result = Number(factor1) / Number(factor2);
    }

    display.innerHTML = result
    historic.innerHTML = result;
    console.log(`Result - ${result}`)
    //A
    factor1 = result;
    //B
    factor2 = "";
    //OPERAÇÃO
    operacao = "";
    //SELETOR
    selector = 'first'
    return result;

}


function clearDisplay() {
    display.innerHTML = 0;
    historic.innerHTML = 0;
    //A
    factor1 = "";
    //B
    factor2 = "";
    //OPERAÇÃO
    operacao = "";
    //SELETOR
    selector = 'first'
}