//atribuir valores  dinamicamente

const prod1 = {}
prod1.nome = "Ferrari"   //similar à struct em C
prod1.numero = 10
prod1['preço da ferrari'] = 50.000 // evitar atributos com espaços
console.log(prod1)
prod1.categoria = {}
prod1.categoria.cor = 'vermelha'
prod1.categoria.modelo = 'f50'
console.log(prod1)

//atribuir valores de forma direta

const prod2 = {
    nome:'Buggati',
    numero:20,
    cor:'preto',
    modelo:'spider'
}

console.log(prod2)
