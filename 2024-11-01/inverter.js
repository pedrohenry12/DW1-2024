function reverseArray(vet){
    let inverso = []
    for(let i= vet.length -1; i >=0; i--){
        inverso.push(vet[i])
    }
    return inverso
}



console.log(reverseArray([1, 2, 3, 4])); // Deve exibir: [4, 3, 2, 1]
console.log(reverseArray(["apple", "banana"])); // Deve exibir: ["banana", "apple"]