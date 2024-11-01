function mergeArrays(vet1, vet2){
    let resultado = []
    for(let i=0; i<vet1.length; i++){
        resultado.push(vet1[i])
    }
    for(let i=0; i<vet2.length; i++){
        resultado.push(vet2[i])
    }
    return resultado

    

}



console.log(mergeArrays([1, 2], [3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(mergeArrays(["apple"], ["banana", "cherry"])); // Deve exibir: ["apple", "banana", "cherry"]