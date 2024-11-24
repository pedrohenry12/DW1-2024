function capitalizeWords(nome) {
    let palavras = nome.split(' ');
    let palavrasCapitalizadas = palavras.map(palavra => 
        palavra[0].toUpperCase() + palavra.slice(1).toLowerCase()
    );
    return palavrasCapitalizadas.join(' ')
}

console.log(capitalizeWords("hello world")) // Deve exibir: "Hello World"
console.log(capitalizeWords("javaScript is awesome")) // Deve exibir: "JavaScript Is Awesome"


// map; === != ==?; 
