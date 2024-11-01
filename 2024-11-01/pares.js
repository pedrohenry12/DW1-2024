function getEvenNumbers(vet){
    let resultado = []
    for(let i=0; i<vet.length; i++){
        if(vet[i]%2 === 0){
            resultado.push(vet[i])
        }
    }
    return resultado
}



console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Deve exibir: [2, 4, 6]
console.log(getEvenNumbers([10, 15, 20, 25])); // Deve exibir: [10, 20]