function getPreco(imposto = 0, moeda = 'R$', nome = '' ){
    return `${nome} ${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 3999,
    desc: 0.15,
    getPreco

}
//O this aponta para o global na linha 2
global.preco = 1000; 
global.desc = 0.1;
console.log(getPreco())

console.log(produto.getPreco())

const carro = {
    nome:'Ferrari',
    preco: 100000,
    desc: 0.1
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro,1, '$', 'Masserati'))
console.log(getPreco.apply(carro, [2, 'R$' , 'Porshe']))

