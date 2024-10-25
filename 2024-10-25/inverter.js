function inverter (palavra) {
    //split: divide a palavra em letras, reverse: inverte a ordem, join: junta
    return palavra.split('').reverse('').join('')
}

console.log(inverter("javascript")); // Deve exibir: "tpircsavaj"
console.log(inverter("hello")); // Deve exibir: "olleh"