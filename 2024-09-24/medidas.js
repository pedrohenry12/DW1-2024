function medidas(u, v){
    if(u == "mm"){
        console.log(`Sua medida é de ${v / 10} cm`)
    }
    else if(u == "m"){
        console.log(`Sua medida é de ${v * 100} cm`)
    }
    else if(u == "km"){
        console.log(`Sua medida é de ${v * 100000} cm`)
    }

    else{
        console.log("Unidade de medida invalida")
    }
}

let medida = Number(5)
let unidade = String("km")


medidas(unidade, medida)