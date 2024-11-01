function average(vet){
    let sum =0
    for(let i=0; i<vet.length; i++){
        sum += vet[i]
    }
    return sum/vet.length
}




console.log(average([1, 2, 3, 4])); // Deve exibir: 2.5
console.log(average([10, 20, 30])); // Deve exibir: 20