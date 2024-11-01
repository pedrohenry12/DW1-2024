function allEquals(vet){
    for(let i=0; i<vet.length; i++){
        if(vet [i] !== vet[0]){
            return false
        }
    }
    return true
}


console.log(allEquals([1, 1, 1, 1, 1, 1, 1])); // Deve exibir: true
console.log(allEquals([1, 2, 1])); // Deve exibir: false

