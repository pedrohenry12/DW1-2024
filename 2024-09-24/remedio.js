function remedio(peso, idade){
    if (idade >=12){
        if(peso >= 60){
            console.log(`Dose de 1000mg (${(1000/500) * 20} gotas)`)
        }
        else{
            console.log(`Dose de 875mg (${(875/500) * 20} gotas)`)
        }
    }
    else{
        if(idade < 5){
            console.log("Não tomar o remedio")
        }
        else if((peso >= 5) && (peso <=9)){
            console.log(`Dose de 125mg (${(125/500) * 20} gotas)`)
        }
        else if((peso > 9) && (peso <=16)){
            console.log(`Dose de 250mg (${(250/500) * 20} gotas)`)
        }
        else if((peso > 16) && (peso <=24)){
            console.log(`Dose de 500mg (${(500/500) * 20} gotas)`)
        }
        else{
            console.log(`Dose de 750mg (${(750/500) * 20} gotas)`)
        }
    }

}


let p = 12
let i = 10

remedio(p, i)