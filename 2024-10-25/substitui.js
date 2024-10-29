function replaceChar(str, oldChar, newChar) {
    let resultado = ""

    for (let i = 0; i < str.length; i++) {
        if (str[i] === oldChar) { 
            resultado += newChar
        } else {
            resultado += str[i]
        }
    }

    return resultado
}

console.log(replaceChar("hello world", "l", "z"))// Deve exibir: "hezzo worzd"
console.log(replaceChar("banana", "a", "o")) // Deve exibir: "bonono"
