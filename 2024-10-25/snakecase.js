function toSnakeCase(str) {
    let palavra = str.replace(/ /g, '_'); // Substitui todos os espaços por _
    return palavra.toLowerCase();
}

console.log(toSnakeCase("Hello World")); // Deve exibir: "hello_world"
console.log(toSnakeCase("JavaScript is fun")); // Deve exibir: "javascript_is_fun"