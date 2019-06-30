//pessoa -> 123 -> {...}

const pessoa = {
    nome:'João'
}
pessoa.nome = 'Pedro'
console.log(pessoa);


//pessoa -> 456 -> {...}
//pessoa = {nome:'Ana'}
//console.log(pessoa);

Object.freeze(pessoa)//congela o objeto, ou seja transformando o objeto constante

delete pessoa.nome
pessoa.nome = 'Maria'
pessoa.end = "Rua ABC"
console.log(pessoa.nome)
console.log(pessoa)

const objConstante = Object.freeze({nome:'Maria'})
objConstante.nome = "João"
console.log(objConstante)