function countOccurrences(vet, elemento){
    contador = 0
    for(let i=0; i<vet.length; i++){
        if(elemento == vet[i]){
            contador +=1
        }
        
    }
    return contador
}



console.log(countOccurrences([1, 2, 3, 3, 2], 2)); // Deve exibir: 3
console.log(countOccurrences(["apple", "banana", "apple"], "apple")); // Deve exibir: 2