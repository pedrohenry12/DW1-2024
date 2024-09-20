// document.getElementById 
//usamos para selecionar qual tipo de coisa vamos usar para lincar html e js

//captura de elementos do html
let inputpeso = document.getElementById("peso")
let inputaltura = document.getElementById("altura")
let divsaida = document.getElementById("saida")
let botaoCalcular = document.getElementById("Calcular")
    botaoCalcular.onclick = calculaImc
function calculaImc() {
    //entrada
    let peso = Number(inputpeso.value)
    let altura = Number(inputaltura.value)

    //procesamento
    let imc = peso / (altura * altura)

    //saida
    divsaida.innerText = imc
}



