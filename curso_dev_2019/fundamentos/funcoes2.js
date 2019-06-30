//armazenar uma funcção em uma variavel
const imprimirSoma = function (a,b) {
    console.log( a + b )
}

imprimirSoma(2,3)

//armazenando uma função arrow em uma ariavel
const soma = (a,b) => {ar
        console.log(a + b);
}

soma(5,8)

// retornar um valor implicito

const subtracao = (a , b) => a - b
console.log(subtracao(5,6))

const imprimir2 = a => console.log(a)
imprimir2('Legal funciona')