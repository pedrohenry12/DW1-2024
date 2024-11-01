function removeDuplicates(vet){
    for(let i=0; i<vet.length; i++){
        for(let j=i+1; j<vet.length; j++){
            if(vet[i] === vet[j]){
                vet.splice(j, 1)
                j--
        }
    }
    
}
return vet
}




console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(removeDuplicates(["apple", "apple", "banana"])); // Deve exibir: ["apple", "banana"]
