function bissexto(a){
    if(a%400 == 0 || a%4 == 0 && a%100 != 0){
        console.log("Esse ano é bissexto")
    }
    else{
        console.log("Esse ano não é bissexto")
    }
}

let ano = 1000

bissexto(ano)