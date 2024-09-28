function alcool(va, vg){
    if((va/vg) > 0.7){
       return false
    }
    else{
        return true
    }
}

let valorAlcool = 2.30
let valorGasolina = 5.50

if (alcool(valorAlcool, valorGasolina)) {
    console.log("Compensa abastecer com alcool")
}

else{
    console.log("Não compensa abastecer com alcool")
}