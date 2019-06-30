const pai = {nome: 'Pedro', corCabelo: 'Preto'}

const filha1 = Object.create(pai);
filha1.nome = 'Maria'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai,{
    idade: {value: 25, enumerable:true, writable: false},
    nome:{value: 'Julia', writable: false, enumerable: true}
})

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

for(let key in filha2){
    filha2.hasOwnProperty(key)?
    console.log(key): console.log(`Por herança: ${key}`)
}

var readline = require('readline');
var resp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

