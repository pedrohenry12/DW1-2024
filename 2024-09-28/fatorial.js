
function fatorial(n) {
    let fat = 1
    if(n >= 0) {
        for(let i = n; i > 0; i--) {
            fat *= i
        }
        console.log(`o resultado é ${fat}`)
    } else {
        console.log("Valor inválido")
    }
}

let numero = 5
fatorial(numero)