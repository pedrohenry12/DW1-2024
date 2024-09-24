function categorias(){
    let idade = 2
    if (idade <= 5){
        console.log("Sem categoria")
    }
    if (idade >= 5 && idade <= 7){
    console.log("Infantil A")
    }

    if (idade >= 8 && idade <= 10){
        console.log("Infantil B")
    }

    if (idade >= 11 && idade <= 13){
        console.log("Juvenil A")
    }

    if (idade >= 14 && idade <= 17){
        console.log("Juvenil B")
    }

    if (idade >= 18){
        console.log("Adulto")
    }
}

categorias()