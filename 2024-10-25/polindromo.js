function polindromo(palavra){
    if (palavra == palavra.split('').reverse('').join(''))
    return true
    else {
        return false
    }
}

console.log(polindromo("arara")); // Deve exibir: true
console.log(polindromo("hello")); // Deve exibir: false