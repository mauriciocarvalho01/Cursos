//função sem retorno
function imprimirSoma(a,b){

    console.log(a+b)
}

imprimirSoma(5,6)
/*imprimirSoma(2)
imprimirSoma(5,20,2,5,8,7)
imprimirSoma(5,6)*/


//função com retorno
function soma(a, b = 0){//atribuir valor por padrão se não for passado o parâmetro
    return a + b
}

console.log(soma(2,8))
console.log(soma(2))

