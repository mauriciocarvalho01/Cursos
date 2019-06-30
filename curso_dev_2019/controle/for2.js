const notas = [5,8,4.7,8,9,6,4]

for (let i in notas){
    console.log(i,notas[i])
}

const pessoa = {
    nome: 'Paulo',
    sobrenome:'Silva',
    idade:27,
    peso:56
}

for ( let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}