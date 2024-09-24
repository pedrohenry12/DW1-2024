
function tipoTriangulo(lado1, lado2, lado3){
    if ((lado1 + lado2) > lado3 && (lado1 + lado3) > lado2 && (lado3 + lado2) > lado1){
        if((lado1 = lado2) || (lado2 = lado3) || (lado1 = lado3)){
            console.log("triangulo equilatero")
        }
        else if((lado1 = lado2) && (lado1 = lado3) && (lado2 = lado3)){
            console.log("triangulo equilátero")
        }
        else if((lado1 =! lado2) && (lado2 =! lado3) && (lado1 =! lado3)){
            console.log("triangulo escaleno")
        }
    }
    else{
        console.log("Não forma triangulo")
    }
}

let l1 = 20
let l2 = 20
let l3 = 20

tipoTriangulo(l1, l2, l3)

