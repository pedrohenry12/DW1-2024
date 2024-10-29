function trimSpaces(str) {
    let frase = "";
    let espacoAnterior = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") { 
            frase += str[i];
            espacoAnterior = false;
        } else if (!espacoAnterior) {
            frase += " ";
            espacoAnterior = true;
        }
    }

    // Remove espaço extra no início e no final
    return frase.trim();
}

console.log(trimSpaces("   JavaScript    é     divertido    ")); // Deve exibir: "JavaScript é divertido"
console.log(trimSpaces("   Programação     é   interessante  ")); // Deve exibir: "Programação é interessante"
