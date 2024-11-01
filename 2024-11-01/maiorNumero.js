function findMax(vet){
    let elemento = vet[0]
    for(let i=0; i<vet.length; i++){
        if(vet[i]>elemento){
        elemento = vet[i]
        }
    }
    return elemento
}




console.log(findMax([1, 2, 3, 5, 5])); // Deve exibir: 5
console.log(findMax([-10, 0, 10, 5])); // Deve exibir: 10