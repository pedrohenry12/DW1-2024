function countVowels(palavra){
    let palavraMinuscula = palavra.toLowerCase()
    let contador = 0
    
    for(let i = 0; i < palavraMinuscula.length; i++){
        let letra = palavraMinuscula[i]
        if (letra == "a") contador++
        else if (letra == "e") contador++
        else if (letra == "i") contador++
        else if (letra == "o") contador++
        else if (letra == "u") contador++
    }
    return contador
}




console.log(countVowels("OpenAI")); // Deve exibir: 4
console.log(countVowels("JavaScript")); // Deve exibir: 3