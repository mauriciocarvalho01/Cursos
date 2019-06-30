
// Estratégia 1 para gerar valor padrão
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}
console.log(soma1())
console.log(soma1(3))
console.log(soma1(1,2,3))
//Passando '0' como parametro gera um bug
console.log(soma1(0,0,0))


console.log('#######')
// Estratégia 2 , 3 , 4 para gerar valor padrão

function soma2(a,b,c){
    a = a !== undefined ? a : 1
    // a é diferente de undefined ? se sim, pega o a : se não, o valor padrão é 1
    b = 1 in arguments ? b : 1
    // O indice '1' no  array arguments é true ?  se sim pega o 'b' : se não, o valor padrao é 1
    c = isNaN(c) ? 1 : c
    //O argumento 'c' não é um numero ? se não, o valor padrao é 1 : sim não for pega o 'c' : 

    return a + b + c
}

console.log(soma2())
console.log(soma2(3))
console.log(soma2(1,2,3))
console.log(soma2(0,0,0))

console.log('#######')
//Valor padrão do ES2015

function soma3(a = 1, b = 1 , c = 1){
    return a + b + c
}

console.log(soma3())
console.log(soma3(3))
console.log(soma3(1,2,3))
console.log(soma3(0,0,0))