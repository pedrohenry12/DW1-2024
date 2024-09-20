let condicao1 = true
let condicao2 = true
let condicao3 = false
let condicao4 = false
let condicao5 = true
let condicao6 = false
let condicao7 = true

if (condicao1 == true) {
    if (condicao3 == true) {
        if (condicao7 == true) {
            console.log('D')
        }
        else {
            console.log('C')
        }
    }
    else if (condicao6 == true) {
        console.log('B')
    }
    else {
        console.log('A')
    }
}
else {
    if (condicao2 == true) {
        if (condicao4 == true) {
            console.log('H')
        }
        else {
            console.log('G')
        }
    }
    else if (condicao5 == true) {
        console.log('F')
    }
    else {
        console.log('E')
    }
}

