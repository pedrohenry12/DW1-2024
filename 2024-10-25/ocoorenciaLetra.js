function countOccurrences(str, char){
    contador = 0
    string = str.toLowerCase()
    letra = char.toLowerCase()

    for(let i = 0; i < string.length; i++){
        if (letra == string[i]) contador++    
    }
    return contador

}






console.log(countOccurrences("gabriel", "e")); // Deve exibir: 1
console.log(countOccurrences("hello world", "l")); // Deve exibir: 3