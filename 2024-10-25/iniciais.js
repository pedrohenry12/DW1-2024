function getInitials(nome){
    let palavras = nome.split(' ')
    let iniciais = palavras.map(palavra => palavra[0])
    return iniciais.join('')
}




console.log(getInitials("João Silva")); // Deve exibir: "JS"
console.log(getInitials("Maria Oliveira")); // Deve exibir: "MO"

