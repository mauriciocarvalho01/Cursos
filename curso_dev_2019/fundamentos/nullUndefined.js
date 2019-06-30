let valor // não inicializada
console.log(valor)

valor = null // ausência de valor...não aponta para nenhum endereço de memoria

console.log(valor) // serve para zerar uma variavel que aponta para algum endereço de memoria

//console.log(valor.toString()) // Erro, impossivel acessar um valor nulo.

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50

console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)


produto.preco =  null // zerando o preço do produto
console.log(!!produto.preco)



/*if(!!produto.preco == true){
    console.log(produto.preco)
} else console.log("nada")*/
