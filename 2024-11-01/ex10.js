function findIndex(vet, elemento){
    for(let i=0; i<vet.length; i++){
        if(vet[i] === elemento){
            return i
        }
    }
    return -1
}




console.log(findIndex([1, 2, 3, 4], 3)); // Deve exibir: 2
console.log(findIndex(["apple", "banana"], "cherry")); // Deve exibir: -1